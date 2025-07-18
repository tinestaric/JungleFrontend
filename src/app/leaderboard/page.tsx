'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LeaderboardEntry } from '@/types'

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchLeaderboard()
  }, [])

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

  const formatTime = (seconds: number) => {
    return `${seconds.toFixed(3)}s`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '3rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #3b82f6',
            borderRadius: '50%',
            margin: '0 auto 1.5rem',
            animation: 'spin 1s linear infinite'
          }}></div>
          <p style={{
            color: '#6b7280',
            fontSize: '1rem',
            margin: 0
          }}>
            Loading leaderboard...
          </p>
        </div>
        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            backgroundColor: '#ef4444',
            borderRadius: '16px',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 1rem 0'
          }}>
            Error Loading Data
          </h1>
          <p style={{
            color: '#ef4444',
            fontSize: '1rem',
            margin: '0 0 2rem 0'
          }}>
            {error}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
            <button
              onClick={fetchLeaderboard}
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#3b82f6'}
            >
              Try Again
            </button>
            <Link 
              href="/"
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#4b5563'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#6b7280'}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Header Tile */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '1rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#f59e0b',
            borderRadius: '20px',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 0.5rem 0'
          }}>
            🏆 Leaderboard
          </h1>
          <p style={{
            color: '#6b7280',
            fontSize: '1rem',
            margin: 0,
            lineHeight: '1.5'
          }}>
            Top players with their best completion times
          </p>
        </div>

        {/* Main Content Tile */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '1rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          {leaderboard.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#f3f4f6',
                borderRadius: '16px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                  <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                  <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                  <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
                </svg>
              </div>
              <p style={{
                color: '#6b7280',
                fontSize: '1.125rem',
                margin: '0 0 2rem 0'
              }}>
                No completed games yet!
              </p>
              <Link 
                href="/register"
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#3b82f6'}
              >
                Be the First to Play
              </Link>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #f3f4f6' }}>
                    <th style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Rank
                    </th>
                    <th style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Player
                    </th>
                    <th style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Company
                    </th>
                    <th style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Best Time
                    </th>
                    <th style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry) => (
                    <tr 
                      key={`${entry.name}-${entry.company}`}
                      style={{
                        borderBottom: '1px solid #f3f4f6',
                        backgroundColor: entry.rank <= 3 ? '#fef7ed' : 'transparent'
                      }}
                    >
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          {entry.rank <= 3 && (
                            <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>
                              {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
                            </span>
                          )}
                          <span style={{
                            fontWeight: '600',
                            color: '#1f2937',
                            fontSize: '1rem'
                          }}>
                            #{entry.rank}
                          </span>
                        </div>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          fontWeight: '500',
                          color: '#1f2937',
                          fontSize: '1rem'
                        }}>
                          {entry.name}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          color: '#6b7280',
                          fontSize: '0.875rem'
                        }}>
                          {entry.company || 'N/A'}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          fontFamily: 'monospace',
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          color: '#3b82f6'
                        }}>
                          {formatTime(entry.bestTime)}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          color: '#9ca3af',
                          fontSize: '0.875rem'
                        }}>
                          {formatDate(entry.completedAt)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Actions Tile */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/register"
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                transition: 'background-color 0.2s',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#3b82f6'}
            >
              <svg style={{ marginRight: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Play Game
            </Link>
            <button
              onClick={fetchLeaderboard}
              style={{
                backgroundColor: '#6b7280',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#4b5563'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#6b7280'}
            >
              <svg style={{ marginRight: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 4v6h6"/>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
              </svg>
              Refresh
            </button>
            <Link 
              href="/"
              style={{
                backgroundColor: '#f8fafc',
                color: '#374151',
                padding: '1rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                border: '1px solid #e5e7eb',
                transition: 'background-color 0.2s',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#f1f5f9'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#f8fafc'}
            >
              <svg style={{ marginRight: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 