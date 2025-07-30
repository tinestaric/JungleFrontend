export interface Player {
  id: string
  name: string
  email: string
  company: string | null
  created_at: string
  updated_at: string
}

export interface GameSession {
  id: string
  session_id: string
  player_id: string
  time_elapsed: number | null
  game_data: Record<string, unknown> | null
  completed_at: string
}

export interface RegistrationFormData {
  name: string
  email: string
  company: string
}

export interface RegistrationResponse {
  success: boolean
  sessionId: string
  isNewPlayer: boolean
  redirectUrl: string
}

export interface GameCompleteRequest {
  sessionId: string
  timeElapsed: number
}

export interface LeaderboardEntry {
  rank: number
  name: string
  company: string | null
  bestTime: number
  completedAt: string
} 