-- Conference Booth Game Database Schema
-- Run this script in your Supabase SQL editor

-- Players table (one record per unique email)
CREATE TABLE players (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  company VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Game sessions table (one record per game play)
CREATE TABLE game_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id VARCHAR(255) UNIQUE NOT NULL,
  player_id UUID REFERENCES players(id) ON DELETE CASCADE,
  time_elapsed DECIMAL(10,3), -- more precise than seconds for tight timing
  game_data JSONB, -- additional game metrics if needed
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_players_email ON players(email);
CREATE INDEX idx_game_sessions_session_id ON game_sessions(session_id);
CREATE INDEX idx_game_sessions_player_id ON game_sessions(player_id);
CREATE INDEX idx_game_sessions_time_elapsed ON game_sessions(time_elapsed ASC); -- for leaderboard

-- Enable Row Level Security (RLS)
ALTER TABLE players ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Allow all operations for now (you can restrict this later based on your needs)
CREATE POLICY "Allow all operations on players" ON players FOR ALL TO anon, authenticated USING (true);
CREATE POLICY "Allow all operations on game_sessions" ON game_sessions FOR ALL TO anon, authenticated USING (true);

-- Optional: Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for players table
CREATE TRIGGER update_players_updated_at 
    BEFORE UPDATE ON players 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 