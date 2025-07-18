# Conference Booth Game System

A web-based lead capture system for conference booths where visitors register their details and play a game. After registration, users are redirected to the existing game with query parameters for personalization and session tracking.

## Features

- 📝 **Player Registration**: Capture name, email, and company information
- 🎮 **Game Integration**: Simple redirect to existing game at `/Game/index.html`
- 🔄 **Repeat Players**: Handles returning players with updated info and new sessions
- ⏱️ **Time Tracking**: Precise timing for competitive leaderboards
- 🏆 **Leaderboard**: Shows only the best time per player
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: Supabase (PostgreSQL)
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Ready for Vercel

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### 2. Clone and Install

```bash
git clone <your-repo-url>
cd JungleFrontend
npm install
```

### 3. Database Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the SQL script from `database.sql` to create tables and indexes
4. Copy your project URL and anon key from Settings > API

### 4. Environment Configuration

1. Copy `env.example` to `.env.local`:
```bash
cp env.example .env.local
```

2. Update `.env.local` with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## User Flow

1. **QR Code Scan** → User scans QR code at booth
2. **Registration** → User fills out form at `/register`
3. **Game Redirect** → Redirect to `/Game/index.html?playerName=John&sessionId=sess_123`
4. **Game Play** → Existing game runs with player info and session tracking
5. **Completion** → Game optionally calls `/api/game-complete` to record time
6. **Leaderboard** → Best times displayed at `/leaderboard`

## API Endpoints

### POST `/api/register`
Register a new player or update existing player info.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp"
}
```

**Response:**
```json
{
  "success": true,
  "sessionId": "sess_abc123",
  "isNewPlayer": false,
  "redirectUrl": "/Game/index.html?playerName=John%20Doe&sessionId=sess_abc123"
}
```

### POST `/api/game-complete`
Record game completion time (optional).

**Request:**
```json
{
  "sessionId": "sess_abc123",
  "timeElapsed": 45.123,
  "gameData": {
    "level": 3,
    "completed": true
  }
}
```

### GET `/api/leaderboard?limit=10`
Get top player times (best time per player only).

**Response:**
```json
{
  "success": true,
  "leaderboard": [
    {
      "rank": 1,
      "name": "Jane Smith",
      "company": "Tech Corp",
      "bestTime": 32.456,
      "completedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

## Game Integration

The system redirects to your existing game at `/Game/index.html` with query parameters:

- `playerName`: URL-encoded player name
- `sessionId`: Unique session identifier

Your game can read these parameters and optionally call the completion API when finished.

## Database Schema

### Players Table
- Stores unique player information by email
- Updates info on subsequent visits
- Tracks creation and update timestamps

### Game Sessions Table  
- One record per game play session
- Links to player via `player_id`
- Stores completion time and optional game data
- Each session gets unique `session_id`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The app is a standard Next.js application and can be deployed to any platform that supports Node.js.

## Customization

- **Styling**: Modify Tailwind classes in components
- **Validation**: Update Zod schemas in `src/lib/validation.ts`
- **Game Data**: Extend `game_data` JSONB field for custom metrics
- **Branding**: Update colors, logos, and text in components

## Troubleshooting

### Common Issues

1. **Supabase Connection Errors**: Verify environment variables and database tables
2. **TypeScript Errors**: Ensure all dependencies are installed
3. **CORS Issues**: Check Supabase RLS policies
4. **Build Errors**: Clear `.next` folder and reinstall dependencies

### Debug Mode

Set `NODE_ENV=development` for detailed error logging in API routes.

## License

MIT License - see LICENSE file for details.
