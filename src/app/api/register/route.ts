import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { registrationSchema } from '@/lib/validation'
import { RegistrationResponse } from '@/types'

// Generate a unique session ID
function generateSessionId(): string {
  return `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate request data
    const validationResult = registrationSchema.safeParse(body)
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

    const { name, email, company } = validationResult.data

    // Check if player already exists
    const { data: existingPlayer, error: findError } = await supabase
      .from('players')
      .select('id, name')
      .eq('email', email)
      .single()

    if (findError && findError.code !== 'PGRST116') {
      // PGRST116 is "not found" error, which is expected for new players
      console.error('Database error when finding player:', findError)
      return NextResponse.json(
        { success: false, error: 'Database error' },
        { status: 500 }
      )
    }

    let playerId: string
    let isNewPlayer = false

    if (existingPlayer) {
      // Update existing player info
      const { data: updatedPlayer, error: updateError } = await supabase
        .from('players')
        .update({ 
          name, 
          company, 
          updated_at: new Date().toISOString() 
        })
        .eq('id', existingPlayer.id)
        .select('id')
        .single()

      if (updateError) {
        console.error('Database error when updating player:', updateError)
        return NextResponse.json(
          { success: false, error: 'Failed to update player' },
          { status: 500 }
        )
      }

      playerId = updatedPlayer.id
      isNewPlayer = false
    } else {
      // Create new player
      const { data: newPlayer, error: createError } = await supabase
        .from('players')
        .insert({ name, email, company })
        .select('id')
        .single()

      if (createError) {
        console.error('Database error when creating player:', createError)
        return NextResponse.json(
          { success: false, error: 'Failed to create player' },
          { status: 500 }
        )
      }

      playerId = newPlayer.id
      isNewPlayer = true
    }

    // Generate session ID and create game session record
    const sessionId = generateSessionId()
    
    const { error: sessionError } = await supabase
      .from('game_sessions')
      .insert({
        session_id: sessionId,
        player_id: playerId,
      })

    if (sessionError) {
      console.error('Database error when creating session:', sessionError)
      return NextResponse.json(
        { success: false, error: 'Failed to create game session' },
        { status: 500 }
      )
    }

    // Create redirect URL
    const redirectUrl = `/Game/index.html?playerName=${encodeURIComponent(name)}&sessionId=${encodeURIComponent(sessionId)}`

    const response: RegistrationResponse = {
      success: true,
      sessionId,
      isNewPlayer,
      redirectUrl,
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Unexpected error in registration:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
} 