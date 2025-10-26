'use client'

import { useState, useEffect, useRef } from 'react'
import { LeaderboardEntry } from '@/types'

export default function TVLeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [totalPlayers, setTotalPlayers] = useState(0)
  const tableRef = useRef<HTMLDivElement>(null)

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('/api/leaderboard?limit=100')
      const data = await response.json()

      if (data.success) {
        setLeaderboard(data.leaderboard)
        setTotalPlayers(data.leaderboard.length)
        setLastUpdated(new Date())
        setError(null)
      } else {
        setError('Failed to load leaderboard')
      }
    } catch {
      setError('An error occurred while loading the leaderboard')
    } finally {
      setLoading(false)
    }
  }

  // Initial data fetch
  useEffect(() => {
    fetchLeaderboard()
  }, [])

  // Auto-scroll functionality with refresh on cycle complete
  useEffect(() => {
    if (!tableRef.current || loading || leaderboard.length === 0) return

    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame
    const pauseAtTop = 3000 // ms to pause at top
    const pauseAtBottom = 3000 // ms to pause at bottom
    let isPaused = true
    let pauseTimeout: NodeJS.Timeout

    const scroll = () => {
      if (!tableRef.current || isPaused) return

      const container = tableRef.current
      const maxScroll = container.scrollHeight - container.clientHeight

      // If we can't scroll (content fits), no need to auto-scroll
      if (maxScroll <= 0) return

      scrollPosition += scrollSpeed
      
      // Reached bottom
      if (scrollPosition >= maxScroll) {
        scrollPosition = maxScroll
        container.scrollTop = scrollPosition
        isPaused = true
        
        pauseTimeout = setTimeout(() => {
          scrollPosition = 0
          container.scrollTop = 0
          isPaused = true
          
          // Refresh data when cycle completes (before starting next cycle)
          console.log('Scroll cycle complete - refreshing leaderboard data')
          fetchLeaderboard()
          
          pauseTimeout = setTimeout(() => {
            isPaused = false
          }, pauseAtTop)
        }, pauseAtBottom)
      } else {
        container.scrollTop = scrollPosition
      }
    }

    // Initial pause at top
    pauseTimeout = setTimeout(() => {
      isPaused = false
    }, pauseAtTop)

    const scrollInterval = setInterval(scroll, 16) // ~60fps

    return () => {
      clearInterval(scrollInterval)
      clearTimeout(pauseTimeout)
    }
  }, [loading, leaderboard])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${Math.floor(remainingSeconds).toString().padStart(2, '0')}`
  }

  const formatLastUpdated = () => {
    return lastUpdated.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: false 
    })
  }

  if (loading) {
    return (
      <div className="tv-leaderboard-page">
        <div className="tv-leaderboard-header">
          <h1 className="tv-leaderboard-title">🏆 DYNAMICS EXPLORER LEADERBOARD 🏆</h1>
        </div>
        <div className="tv-loading">Loading leaderboard...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="tv-leaderboard-page">
        <div className="tv-leaderboard-header">
          <h1 className="tv-leaderboard-title">🏆 DYNAMICS EXPLORER LEADERBOARD 🏆</h1>
        </div>
        <div className="tv-error">{error}</div>
      </div>
    )
  }

  return (
    <div className="tv-leaderboard-page">
      {/* Header */}
      <div className="tv-leaderboard-header">
        <h1 className="tv-leaderboard-title">🏆 DYNAMICS EXPLORER LEADERBOARD 🏆</h1>
        <div className="tv-stats">
          <div className="tv-stat">
            <span className="tv-stat-label">Total Players:</span>
            <span className="tv-stat-value">{totalPlayers}</span>
          </div>
          <div className="tv-stat">
            <span className="tv-stat-label">Last Updated:</span>
            <span className="tv-stat-value">{formatLastUpdated()}</span>
          </div>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="tv-table-wrapper">
        {/* Fixed Header */}
        <table className="tv-leaderboard-table tv-header-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Company</th>
              <th>Best Time</th>
            </tr>
          </thead>
        </table>

        {/* Scrollable Table Container */}
        <div className="tv-table-container" ref={tableRef}>
          <table className="tv-leaderboard-table">
            <tbody>
              {leaderboard.map((entry) => (
                <tr 
                  key={entry.rank}
                  className={entry.rank <= 3 ? 'tv-row-podium' : undefined}
                >
                  <td className="tv-rank">
                    {entry.rank <= 3 ? (
                      <span className="tv-medal">
                        {entry.rank === 1 && '🥇'}
                        {entry.rank === 2 && '🥈'}
                        {entry.rank === 3 && '🥉'}
                      </span>
                    ) : (
                      `#${entry.rank}`
                    )}
                  </td>
                  <td className="tv-player">{entry.name}</td>
                  <td className="tv-company">{entry.company || 'N/A'}</td>
                  <td className="tv-time">{formatTime(entry.bestTime)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="tv-footer">
        <div className="tv-footer-text">
          🎮 Play the Dynamics Explorer game at the Companial booth! 🎮
        </div>
      </div>
    </div>
  )
}

