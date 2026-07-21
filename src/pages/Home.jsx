import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

export default function Home({ onViewPastGallery }) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    { src: 'gallery/img1.jpg'},
    { src: 'gallery/img2.jpg'},
    { src: 'gallery/img3.jpg'},
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <div className="page active" id="home">
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle">Sri Krishna College of Engineering & Technology</div>
          <div className="rotating-logo-viewport">
            <img
              className="rotating-logo-img"
              src={`${import.meta.env.BASE_URL}team-logo.png`}
              alt="Hoplites Hero Logo"
            />
          </div>
          <h1 className="hero-title"><span>HOPLITES</span></h1>
          <p className="hero-tagline">E-VEHICLE TEAM</p>
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
              src={`${import.meta.env.BASE_URL}team_reels_video.mp4`}
              autoPlay
              controls
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>
      </div>

      {/* Photo Gallery Slideshow */}
      <div className="section">
        <div className="section-header">
          <div className="section-label">Our Journey</div>
          <h2 className="section-title">Gallery</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="slideshow-container">
          <div className="slideshow-wrapper">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`slide ${idx === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${img.src})` }}
              >
                {/* <div className="slide-caption">{img.caption}</div> */}
              </div>
            ))}
          </div>

          <button className="slideshow-arrow prev" onClick={handlePrevSlide}>
            &#10094;
          </button>
          <button className="slideshow-arrow next" onClick={handleNextSlide}>
            &#10095;
          </button>

          <div className="slideshow-dots">
            {galleryImages.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
              ></span>
            ))}
          </div>
        </div>

        <div className="gallery-action-container">
          <button className="gallery-link-btn" onClick={onViewPastGallery}>
            View past years competition photos &rarr;
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
