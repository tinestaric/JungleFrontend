import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { LeaderboardEntry } from '@/types'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')
    
    if (!sessionId) {
      return NextResponse.json(
        { success: false, error: 'Session ID is required' },
        { status: 400 }
      )
    }

    // First, get the player info from the session
    const { data: sessionData, error: sessionError } = await supabase
      .from('game_sessions')
      .select(`
        player_id,
        time_elapsed,
        completed_at,
        players!inner (
          name,
          company
        )
      `)
      .eq('session_id', sessionId)
      .single()

    if (sessionError || !sessionData) {
      return NextResponse.json(
        { success: false, error: 'Session not found' },
        { status: 404 }
      )
    }

    // If the current session hasn't completed yet, return early
    if (!sessionData.time_elapsed) {
      return NextResponse.json({
        success: true,
        playerEntry: null,
        hasCompleted: false
      })
    }

    // Get all completed games to calculate rankings
    const { data, error } = await supabase
      .from('game_sessions')
      .select(`
        time_elapsed,
        completed_at,
        player_id,
        players!inner (
          name,
          company
        )
      `)
      .not('time_elapsed', 'is', null)
      .order('time_elapsed', { ascending: true })

    if (error) {
      console.error('Database error when fetching player rank:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to fetch player ranking' },
        { status: 500 }
      )
    }

    // Process the data to get unique players with their best times
    const playerBestTimes = new Map<string, {
      playerId: string
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
          playerId: session.player_id,
          name: player.name,
          company: player.company,
          bestTime: session.time_elapsed!,
          completedAt: session.completed_at,
        })
      }
    })

    // Convert to array and sort by best time to get rankings
    const allPlayers = Array.from(playerBestTimes.values())
      .sort((a, b) => a.bestTime - b.bestTime)

    // Find the current player's position
    const currentPlayer = allPlayers.find(p => p.playerId === sessionData.player_id)
    
    if (!currentPlayer) {
      return NextResponse.json(
        { success: false, error: 'Player not found in rankings' },
        { status: 404 }
      )
    }

    const playerRank = allPlayers.indexOf(currentPlayer) + 1

    const playerEntry: LeaderboardEntry = {
      rank: playerRank,
      name: currentPlayer.name,
      company: currentPlayer.company,
      bestTime: currentPlayer.bestTime,
      completedAt: currentPlayer.completedAt,
    }

    return NextResponse.json({ 
      success: true,
      playerEntry,
      hasCompleted: true,
      totalPlayers: allPlayers.length
    })

  } catch (error) {
    console.error('Unexpected error in player rank:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
