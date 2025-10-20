'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [startPressed, setStartPressed] = useState(false)
  const [leaderboardPressed, setLeaderboardPressed] = useState(false)
  return (
    <div className="landing-page">
      <div className="landing-container">
        {/* Header with Logo and Title */}
        <div className="landing-header">
          
          {/* Dynamics Explorer Title Image */}
          <h1 className="sr-only">DYNAMICS EXPLORER</h1>
          <Image 
            src="/landing/images/Dynamics explorer.png" 
            alt="DYNAMICS EXPLORER"
            className="landing-title"
            width={500}
            height={120}
            priority
          />
          
          {/* Welcome Message */}
          <p className="landing-text">
            Welcome to the ultimate gaming experience!<br />
            Register now to play our exciting challenge and compete for the fastest completion time.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="landing-stack">
          {/* Start Your Adventure Button */}
          <Link 
            href="/register"
            className="landing-link"
            onMouseDown={() => setStartPressed(true)}
            onMouseUp={() => setStartPressed(false)}
            onMouseLeave={() => setStartPressed(false)}
            onTouchStart={() => setStartPressed(true)}
            onTouchEnd={() => setStartPressed(false)}
            onTouchCancel={() => setStartPressed(false)}
            aria-label="Start your adventure"
          >
            <Image 
              src={startPressed ? "/landing/images/BTN-orange DARK.png" : "/landing/images/BTN-orange.png"}
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
            className="landing-link"
            onMouseDown={() => setLeaderboardPressed(true)}
            onMouseUp={() => setLeaderboardPressed(false)}
            onMouseLeave={() => setLeaderboardPressed(false)}
            onTouchStart={() => setLeaderboardPressed(true)}
            onTouchEnd={() => setLeaderboardPressed(false)}
            onTouchCancel={() => setLeaderboardPressed(false)}
            aria-label="View leaderboard"
          >
            <Image 
              src={leaderboardPressed ? "/landing/images/BTN-gray DARK.png" : "/landing/images/BTN-gray.png"}
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
