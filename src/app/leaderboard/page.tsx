'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { LeaderboardEntry } from '@/types'

function LeaderboardContent() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [currentPlayer, setCurrentPlayer] = useState<LeaderboardEntry | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hasCompleted, setHasCompleted] = useState(false)
  const [totalPlayers, setTotalPlayers] = useState(0)
  const [isCreatingNewSession, setIsCreatingNewSession] = useState(false)
  const [playPressed, setPlayPressed] = useState(false)
  const [refreshPressed, setRefreshPressed] = useState(false)
  const [homePressed, setHomePressed] = useState(false)
  
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('sessionId')

  useEffect(() => {
    fetchLeaderboard()
    if (sessionId) {
      fetchPlayerRank()
    }
  }, [sessionId])

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('/api/leaderboard?limit=10')
      const data = await response.json()

      if (data.success) {
        setLeaderboard(data.leaderboard)
      } else {
        setError('Failed to load leaderboard')
      }
    } catch {
      setError('An error occurred while loading the leaderboard')
    } finally {
      setLoading(false)
    }
  }

  const fetchPlayerRank = async () => {
    if (!sessionId) return
    
    try {
      const response = await fetch(`/api/player-rank?sessionId=${encodeURIComponent(sessionId)}`)
      const data = await response.json()

      if (data.success) {
        setCurrentPlayer(data.playerEntry)
        setHasCompleted(data.hasCompleted)
        setTotalPlayers(data.totalPlayers || 0)
      }
    } catch (error) {
      console.error('Error fetching player rank:', error)
    }
  }

  const formatTime = (seconds: number, rank: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    
    if (rank <= 3) {
      // Top 3: show 2 decimal places
      return `${minutes}:${remainingSeconds.toFixed(2).padStart(5, '0')}`
    } else {
      // Others: no decimal places
      return `${minutes}:${Math.floor(remainingSeconds).toString().padStart(2, '0')}`
    }
  }

  const handlePlayButton = async () => {
    // If no sessionId, redirect to registration page
    if (!sessionId) {
      window.location.href = '/register'
      return
    }

    // If sessionId exists, create a new session and redirect to game
    setIsCreatingNewSession(true)
    setError(null)
    
    try {
      const response = await fetch('/api/new-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ existingSessionId: sessionId }),
      })

      if (!response.ok) {
        throw new Error('Failed to create new session')
      }

      const result = await response.json()

      if (result.success && result.redirectUrl) {
        // Redirect to the game with the new session
        window.location.href = result.redirectUrl
      } else {
        throw new Error('Failed to create new session')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while creating new session')
    } finally {
      setIsCreatingNewSession(false)
    }
  }

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">Leaderboard</h1>

        {error && (
          <div className="leaderboard-error">
            {error}
          </div>
        )}

        {loading ? (
          <div className="leaderboard-loading">
            Loading leaderboard...
          </div>
        ) : (
          <>
            {/* Leaderboard Table */}
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Player</th>
                  <th>Company</th>
                  <th>Best Time</th>
                  <th className="hide-on-tablet-and-down">Date</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry) => (
                  <tr key={entry.rank} className={entry.name === currentPlayer?.name ? 'leaderboard-row-me' : undefined}>
                    <td className="leaderboard-rank">
                      {entry.rank <= 3 ? (
                        <span>
                          {entry.rank === 1 && '🥇'}
                          {entry.rank === 2 && '🥈'}
                          {entry.rank === 3 && '🥉'}
                        </span>
                      ) : (
                        `#${entry.rank}`
                      )}
                    </td>
                    <td>
                      {entry.name}
                    {entry.name === currentPlayer?.name && (
                      <span className="leaderboard-tag-me">
                        (You)
                      </span>
                    )}
                    </td>
                    <td>{entry.company || 'N/A'}</td>
                    <td className="leaderboard-time">{formatTime(entry.bestTime, entry.rank)}</td>
                    <td className="hide-on-tablet-and-down">{new Date(entry.completedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Your Position (outside top 10) */}
            {currentPlayer && hasCompleted && currentPlayer.rank > 10 && (
              <div className="leaderboard-your-section">
                <div className="leaderboard-your-heading">Your Position</div>
                <div className="leaderboard-your-row">
                  <div className="leaderboard-your-cell leaderboard-your-rank">
                    #{currentPlayer.rank}
                  </div>
                  <div className="leaderboard-your-cell leaderboard-your-name">
                    {currentPlayer.name}
                  </div>
                  <div className="leaderboard-your-cell leaderboard-your-company">
                    {currentPlayer.company || 'N/A'}
                  </div>
                  <div className="leaderboard-your-cell leaderboard-your-time">
                    {formatTime(currentPlayer.bestTime, currentPlayer.rank)}
                  </div>
                  <div className="leaderboard-your-cell leaderboard-your-date hide-on-tablet-and-down">
                    {new Date(currentPlayer.completedAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="leaderboard-your-meta">Out of {totalPlayers} players</div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="leaderboard-buttons">
              <button
                onClick={handlePlayButton}
                disabled={isCreatingNewSession}
                className="leaderboard-button leaderboard-button-reset"
                style={{ cursor: isCreatingNewSession ? 'not-allowed' : 'pointer' }}
                onMouseDown={() => setPlayPressed(true)}
                onMouseUp={() => setPlayPressed(false)}
                onMouseLeave={() => setPlayPressed(false)}
                onTouchStart={() => setPlayPressed(true)}
                onTouchEnd={() => setPlayPressed(false)}
                onTouchCancel={() => setPlayPressed(false)}
                aria-label={sessionId ? "Play again" : "Play game"}
              >
                <Image 
                  src={playPressed ? "/landing/images/BTN-orange-SM DARK.png" : "/landing/images/BTN-orange-SM.png"}
                  alt={sessionId ? "Play Again" : "Play Game"}
                  width={220}
                  height={60}
                />
                <div className="leaderboard-button-text">
                  {isCreatingNewSession ? 'Creating...' : (sessionId ? 'Play Again' : 'Play Game')}
                </div>
              </button>

              <button
                onClick={fetchLeaderboard}
                disabled={loading}
                className="leaderboard-button leaderboard-button-reset"
                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                onMouseDown={() => setRefreshPressed(true)}
                onMouseUp={() => setRefreshPressed(false)}
                onMouseLeave={() => setRefreshPressed(false)}
                onTouchStart={() => setRefreshPressed(true)}
                onTouchEnd={() => setRefreshPressed(false)}
                onTouchCancel={() => setRefreshPressed(false)}
                aria-label="Refresh leaderboard"
              >
                <Image 
                  src={refreshPressed ? "/landing/images/BTN-orange-SM DARK.png" : "/landing/images/BTN-orange-SM.png"}
                  alt="Refresh"
                  width={220}
                  height={60}
                />
                <div className="leaderboard-button-text">
                  Refresh
                </div>
              </button>

              <Link href="/" className="leaderboard-button" aria-label="Home"
                onMouseDown={() => setHomePressed(true)}
                onMouseUp={() => setHomePressed(false)}
                onMouseLeave={() => setHomePressed(false)}
                onTouchStart={() => setHomePressed(true)}
                onTouchEnd={() => setHomePressed(false)}
                onTouchCancel={() => setHomePressed(false)}
              >
                <Image 
                  src={homePressed ? "/landing/images/BTN-gray-SM DARK.png" : "/landing/images/BTN-gray-SM.png"}
                  alt="Home"
                  width={220}
                  height={60}
                />
                <div className="leaderboard-button-text">
                  Home
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function LeaderboardPage() {
  return (
    <Suspense fallback={
      <div className="leaderboard-page">
        <div className="leaderboard-container">
          <h1 className="leaderboard-title">Leaderboard</h1>
          <div className="leaderboard-loading">
            Loading leaderboard...
          </div>
        </div>
      </div>
    }>
      <LeaderboardContent />
    </Suspense>
  )
}