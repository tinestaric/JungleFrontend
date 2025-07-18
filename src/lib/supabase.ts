import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      players: {
        Row: {
          id: string
          name: string
          email: string
          company: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          company?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      game_sessions: {
        Row: {
          id: string
          session_id: string
          player_id: string
          time_elapsed: number | null
          game_data: Record<string, unknown> | null
          completed_at: string
        }
        Insert: {
          id?: string
          session_id: string
          player_id: string
          time_elapsed?: number | null
          game_data?: Record<string, unknown> | null
          completed_at?: string
        }
        Update: {
          id?: string
          session_id?: string
          player_id?: string
          time_elapsed?: number | null
          game_data?: Record<string, unknown> | null
          completed_at?: string
        }
      }
    }
  }
} 