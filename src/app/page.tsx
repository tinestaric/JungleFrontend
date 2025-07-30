'use client'

import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px'
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
            backgroundColor: '#3b82f6',
            borderRadius: '20px',
            margin: '0 auto 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 1rem 0'
          }}>
            Conference Booth Challenge
          </h1>
          <p style={{
            color: '#6b7280',
            fontSize: '1rem',
            margin: 0,
            lineHeight: '1.6'
          }}>
            Welcome to the ultimate gaming experience! Register now to play our exciting challenge and compete for the fastest completion time.
          </p>
        </div>

        {/* Actions Tile */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '2rem',
          marginBottom: '1rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link 
              href="/register"
              style={{
                width: '100%',
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#3b82f6'}
            >
              <svg style={{ marginRight: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Start Your Adventure
            </Link>
            
            <Link 
              href="/leaderboard"
              style={{
                width: '100%',
                backgroundColor: '#f8fafc',
                color: '#374151',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '600',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #e5e7eb',
                transition: 'background-color 0.2s',
                boxSizing: 'border-box'
              }}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#f1f5f9'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#f8fafc'}
            >
              <svg style={{ marginRight: '0.5rem' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z"/>
              </svg>
              View Leaderboard
            </Link>
          </div>
        </div>

        {/* Footer Tile */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '1rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '0.875rem',
            margin: 0
          }}>
            🏆 Compete with fellow conference attendees
          </p>
        </div>
      </div>
    </div>
  );
}
