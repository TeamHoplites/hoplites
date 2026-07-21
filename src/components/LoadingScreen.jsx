import React, { useState, useEffect, useRef } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Increments progress at a natural, slightly variable rate
      const increment = Math.floor(Math.random() * 8) + 4;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Start fade out after a brief moment at 100%
        setTimeout(() => {
          setIsFadingOut(true);
          // Callback to parent once transition completes (800ms)
          setTimeout(() => {
            if (onCompleteRef.current) onCompleteRef.current();
          }, 800);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loader-container ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="logo-wrapper">
          <img src={`${import.meta.env.BASE_URL}team-logo.png`} alt="Hoplites Logo" className="loader-logo" />
          {/* Animated Glowing Rings */}
          <div className="loader-ring outer"></div>
          <div className="loader-ring inner"></div>
        </div>
        
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="progress-details">
          <span className="percentage-text">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
