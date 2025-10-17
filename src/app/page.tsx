'use client'

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="landing-page">
      <div className="landing-container">
        {/* Header with Logo and Title */}
        <div className="landing-header">
          
          {/* Dynamics Explorer Title Image */}
          <div style={{
            marginBottom: '1rem'
          }}>
            <Image 
              src="/landing/images/Dynamics explorer.png" 
              alt="DYNAMICS EXPLORER"
              className="landing-title"
              width={500}
              height={120}
            />
          </div>
          
          {/* Welcome Message */}
          <p className="landing-text">
            Welcome to the ultimate gaming experience!<br />
            Register now to play our exciting challenge and compete for the fastest completion time.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem', 
          marginBottom: '2rem',
          alignItems: 'center'
        }}>
          {/* Start Your Adventure Button */}
          <Link 
            href="/register"
            style={{
              textDecoration: 'none',
              position: 'relative',
              display: 'block'
            }}
          >
            <Image 
              src="/landing/images/BTN-orange.png" 
              alt="Start Your Adventure"
              className="landing-button"
              width={450}
              height={60}
            />
            <div className="landing-button-text">
              Start Your Adventure
            </div>
          </Link>
          
          {/* View Leaderboard Button */}
          <Link 
            href="/leaderboard"
            style={{
              textDecoration: 'none',
              position: 'relative',
              display: 'block'
            }}
          >
            <Image 
              src="/landing/images/BTN-gray.png" 
              alt="View Leaderboard"
              className="landing-button"
              width={450}
              height={60}
            />
            <div className="landing-button-text">
              View Leaderboard
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
