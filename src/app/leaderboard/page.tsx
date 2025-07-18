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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading leaderboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error</h1>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={fetchLeaderboard}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mr-4"
          >
            Try Again
          </button>
          <Link 
            href="/"
            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors inline-block"
          >
            Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              🏆 Leaderboard
            </h1>
            <p className="text-gray-600">
              Top players with their best completion times
            </p>
          </div>

          {leaderboard.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">
                No completed games yet!
              </p>
              <Link 
                href="/register"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Be the First to Play
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Rank
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Player
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Company
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Best Time
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((entry) => (
                    <tr 
                      key={`${entry.name}-${entry.company}`}
                      className={`border-b border-gray-100 ${
                        entry.rank <= 3 ? 'bg-yellow-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          {entry.rank <= 3 && (
                            <span className="text-2xl mr-2">
                              {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
                            </span>
                          )}
                          <span className="font-semibold text-gray-900">
                            #{entry.rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-medium text-gray-900">
                          {entry.name}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-gray-600">
                          {entry.company || 'N/A'}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="font-mono text-lg font-semibold text-blue-600">
                          {formatTime(entry.bestTime)}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="text-gray-500 text-sm">
                          {formatDate(entry.completedAt)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-8 text-center space-x-4">
            <Link 
              href="/register"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Play Game
            </Link>
            <button
              onClick={fetchLeaderboard}
              className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 