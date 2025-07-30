import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface GameCompleteRequest {
  sessionId: string
  timeElapsed: number
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Validate request method
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ success: false, error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Parse request body
    const body: GameCompleteRequest = await req.json()
    
    // Validate request data
    if (!body.sessionId || typeof body.sessionId !== 'string' || body.sessionId.trim() === '') {
      return new Response(
        JSON.stringify({ success: false, error: 'Session ID is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (!body.timeElapsed || typeof body.timeElapsed !== 'number' || body.timeElapsed <= 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'Time elapsed must be a positive number' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Find the game session
    const { data: gameSession, error: findError } = await supabase
      .from('game_sessions')
      .select('id, player_id')
      .eq('session_id', body.sessionId)
      .single()

    if (findError || !gameSession) {
      console.error('Database error when finding game session:', findError)
      return new Response(
        JSON.stringify({ success: false, error: 'Game session not found' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Update the game session with completion data
    const { error: updateError } = await supabase
      .from('game_sessions')
      .update({
        time_elapsed: body.timeElapsed,
        completed_at: new Date().toISOString(),
      })
      .eq('id', gameSession.id)

    if (updateError) {
      console.error('Database error when updating game session:', updateError)
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to save game completion' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Unexpected error in game completion:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
