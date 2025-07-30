import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { RegistrationResponse } from '@/types'

// Generate a unique session ID
function generateSessionId(): string {
  return `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { existingSessionId } = body

    if (!existingSessionId) {
      return NextResponse.json(
        { success: false, error: 'Existing session ID is required' },
        { status: 400 }
      )
    }

    // Find the existing session to get the player info
    const { data: existingSession, error: sessionError } = await supabase
      .from('game_sessions')
      .select(`
        player_id,
        players!inner (
          id,
          name,
          email,
          company
        )
      `)
      .eq('session_id', existingSessionId)
      .single()

    if (sessionError || !existingSession) {
      console.error('Error finding existing session:', sessionError)
      return NextResponse.json(
        { success: false, error: 'Session not found' },
        { status: 404 }
      )
    }

    const player = Array.isArray(existingSession.players) 
      ? existingSession.players[0] 
      : existingSession.players
      
    if (!player) {
      return NextResponse.json(
        { success: false, error: 'Player not found' },
        { status: 404 }
      )
    }

    // Generate new session ID and create new game session record
    const newSessionId = generateSessionId()
    
    const { error: newSessionError } = await supabase
      .from('game_sessions')
      .insert({
        session_id: newSessionId,
        player_id: player.id,
      })

    if (newSessionError) {
      console.error('Database error when creating new session:', newSessionError)
      return NextResponse.json(
        { success: false, error: 'Failed to create new game session' },
        { status: 500 }
      )
    }

    // Create redirect URL with the new session ID
    const redirectUrl = `/Game/index.html?playerName=${encodeURIComponent(player.name)}&sessionId=${encodeURIComponent(newSessionId)}`

    const response: RegistrationResponse = {
      success: true,
      sessionId: newSessionId,
      isNewPlayer: false, // This is always false for existing players
      redirectUrl,
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Unexpected error in new session creation:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
