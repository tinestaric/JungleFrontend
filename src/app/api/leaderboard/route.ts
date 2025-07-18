import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { LeaderboardEntry } from '@/types'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10', 10)
    
    // Validate limit
    if (limit < 1 || limit > 100) {
      return NextResponse.json(
        { success: false, error: 'Limit must be between 1 and 100' },
        { status: 400 }
      )
    }

    // Query to get best time per player
    // This query:
    // 1. Joins game_sessions with players
    // 2. Filters for completed games (time_elapsed IS NOT NULL)
    // 3. Groups by player to get their best (minimum) time
    // 4. Orders by best time ascending
    // 5. Limits results
    const { data, error } = await supabase
      .from('game_sessions')
      .select(`
        time_elapsed,
        completed_at,
        players!inner (
          name,
          company
        )
      `)
      .not('time_elapsed', 'is', null)
      .order('time_elapsed', { ascending: true })

    if (error) {
      console.error('Database error when fetching leaderboard:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to fetch leaderboard' },
        { status: 500 }
      )
    }

    // Process the data to get unique players with their best times
    const playerBestTimes = new Map<string, {
      name: string
      company: string | null
      bestTime: number
      completedAt: string
    }>()

    data.forEach((session) => {
      const player = Array.isArray(session.players) ? session.players[0] : session.players
      const playerKey = `${player.name}-${player.company}`
      const currentBest = playerBestTimes.get(playerKey)
      
      if (!currentBest || session.time_elapsed! < currentBest.bestTime) {
        playerBestTimes.set(playerKey, {
          name: player.name,
          company: player.company,
          bestTime: session.time_elapsed!,
          completedAt: session.completed_at,
        })
      }
    })

    // Convert to array and sort by best time, then apply limit
    const leaderboard: LeaderboardEntry[] = Array.from(playerBestTimes.values())
      .sort((a, b) => a.bestTime - b.bestTime)
      .slice(0, limit)
      .map((entry, index) => ({
        rank: index + 1,
        name: entry.name,
        company: entry.company,
        bestTime: entry.bestTime,
        completedAt: entry.completedAt,
      }))

    return NextResponse.json({ 
      success: true,
      leaderboard 
    })

  } catch (error) {
    console.error('Unexpected error in leaderboard:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
} 