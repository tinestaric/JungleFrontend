import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { gameCompleteSchema } from '@/lib/validation'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request data
    const validationResult = gameCompleteSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid data', 
          details: validationResult.error.issues 
        },
        { status: 400 }
      )
    }

    const { sessionId, timeElapsed, gameData } = validationResult.data

    // Find the game session
    const { data: gameSession, error: findError } = await supabase
      .from('game_sessions')
      .select('id, player_id')
      .eq('session_id', sessionId)
      .single()

    if (findError) {
      console.error('Database error when finding game session:', findError)
      return NextResponse.json(
        { success: false, error: 'Game session not found' },
        { status: 404 }
      )
    }

    // Update the game session with completion data
    const { error: updateError } = await supabase
      .from('game_sessions')
      .update({
        time_elapsed: timeElapsed,
        game_data: gameData || null,
        completed_at: new Date().toISOString(),
      })
      .eq('id', gameSession.id)

    if (updateError) {
      console.error('Database error when updating game session:', updateError)
      return NextResponse.json(
        { success: false, error: 'Failed to save game completion' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Unexpected error in game completion:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
} 