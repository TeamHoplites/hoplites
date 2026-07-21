import React from 'react';
import Footer from '../components/Footer';

export default function PastGallery({ onBack }) {
  const pastPhotos = [
    {
      src: 'gallery/img1.jpg',
      year: '2023',
      title: 'National Electric Kart Championship',
      desc: 'Hoplites racing team competing at the FMSCI sanctioned track, pushing the boundaries of electric speed.'
    },
    {
      src: 'gallery/img2.jpg',
      year: '2024',
      title: 'Powertrain Calibration & Assembly',
      desc: 'Team members tweaking the dual-motor setups and checking live telemetry logs in the SKCET innovation hangar.'
    },
    {
      src: 'gallery/img3.jpg',
      year: '2025',
      title: 'International Paddock Trophy',
      desc: 'Team Hoplites taking the podium for best design and engineering innovations at the electric vehicle trials.'
    },
    {
      src: 'assets/competition_1.jpg',
      year: '2025',
      title: 'Steering & Chassis Telemetry',
      desc: 'Aligning sensors and calibrating vehicle dynamics during pre-qualifying track trials.'
    }
  ];

  return (
    <div className="page active" id="past-gallery">
      {/* Back button */}
      <div onClick={onBack} className="back-btn" style={{ cursor: 'pointer' }}>
        &larr; Back to Home
      </div>

      <div className="page-hero" id="gallery-header">
        <div className="section-label" id="gallery-label">ARCHIVES</div>
        <h2 className="section-title" id="gallery-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#fff' }}>
          Competition Gallery
        </h2>
        <div className="section-divider"></div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '1rem auto 0', fontSize: '0.9rem', lineHeight: '1.7' }} id="gallery-desc">
          Reflecting on years of engineering, track performance, and mechanical excellence from 2023 to 2025.
        </p>
      </div>

      <div className="section">
        <div className="gallery-grid">
          {pastPhotos.map((photo, idx) => (
            <div key={idx} className="gallery-card">
              <div className="gallery-card-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${photo.src})` }}>
                <div className="gallery-card-year">{photo.year}</div>
              </div>
              <div className="gallery-card-content">
                <h3 className="gallery-card-title">{photo.title}</h3>
                <p className="gallery-card-desc">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
