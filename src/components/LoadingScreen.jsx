import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState('Initializing Systems...');
  const [isFadingOut, setIsFadingOut] = useState(false);

  const phases = [
    { threshold: 15},
    { threshold: 35},
    { threshold: 55},
    { threshold: 75},
    { threshold: 90},
    { threshold: 100}
  ];

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Increments progress at a natural, slightly variable rate
      const increment = Math.floor(Math.random() * 8) + 4;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      // Find the appropriate phase text based on current progress
      const currentPhase = phases.find(p => currentProgress <= p.threshold) || phases[phases.length - 1];
      setPhaseText(currentPhase.text);

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Start fade out after a brief moment at 100%
        setTimeout(() => {
          setIsFadingOut(true);
          // Callback to parent once transition completes (800ms)
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="logo-wrapper">
          <img src={`${import.meta.env.BASE_URL}team-logo.png`} alt="Hoplites Logo" className="loader-logo" />
          {/* Animated Glowing Rings */}
          <div className="loader-ring outer"></div>
          <div className="loader-ring inner"></div>
        </div>
        
        <h2 className="loader-title">TEAM HOPLITES</h2>
        <p className="loader-subtitle">E-VEHICLE TEAM</p>
        
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="progress-details">
          {/* <span className="phase-text">{phaseText}</span> */}
          <span className="percentage-text">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
