import React, { useState } from 'react';
import Footer from '../components/Footer';

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="page active" id="home">
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Sri Krishna College of Engineering & Technology</div>
          <img className="hero-logo-display" src="/team-logo.png" alt="Hoplites Hero Logo" />
          <h1 className="hero-title"><span>HOPLITES</span></h1>
          <p className="hero-tagline">E-VEHICLE TEAM</p>
          <p className="hero-college">Kuniyamuthur, Coimbatore</p>
        </div>
      </div>

      {/* Team Reel Video */}
      <div className="video-section">
        <div className="section-header">
          <div className="section-label">Experience the Thrill</div>
          <h2 className="section-title">Team Reel</h2>
          <div className="section-divider"></div>
        </div>
        <div className="video-wrapper" id="videoWrapper">
          {!isVideoLoaded ? (
            <div className="video-placeholder" id="videoPlaceholder">
              <div className="play-btn" onClick={() => setIsVideoLoaded(true)}>
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span className="video-label">WATCH OUR TEAM REEL</span>
            </div>
          ) : (
            <video
              className="video-embed"
              src="/team_reels_video.mp4"
              autoPlay
              controls
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="section">
        <div className="section-header">
          <div className="section-label">Our Journey</div>
          <h2 className="section-title">Gallery</h2>
          <div className="section-divider"></div>
        </div>
        <div className="photos-grid">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="photo-card" style={{ background: 'linear-gradient(135deg,#1a1a1a,#222)' }}>
              <div className="photo-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '40px', height: '40px', opacity: 0.3 }}>
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
