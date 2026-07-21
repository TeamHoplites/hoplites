import React from 'react';
import Footer from '../components/Footer';

export default function Sponsors({ setCurrentPage }) {
  const goldSponsors = [
    { name: 'Torus Robotics', logo: '#', gratitude: 'Proudly Supporting Hoplites' },
  ];

  // const associateSponsors = [
  //   { name: 'Sponsor Name', logo: '🤝', gratitude: 'Partners in Speed' },
  //   { name: 'Sponsor Name', logo: '🤝', gratitude: 'Partners in Speed' },
  //   { name: 'Sponsor Name', logo: '🤝', gratitude: 'Partners in Speed' }
  // ];

  return (
    <div className="page active" id="sponsors">
      <div className="sponsors-hero">
        <div className="section-label">Powering Our Race</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#fff' }}>
          Our Sponsors
        </h2>
        <div className="section-divider"></div>
        <p className="honor-text">
          "Behind every champion is a team of believers. To our sponsors — your faith fuels our fire. 
          Every lap we race, every podium we reach, carries your name with honour."
        </p>
      </div>

      <div className="sponsors-tier">
        {/* <div className="tier-title gold-tier">⭐ Title Sponsors</div> */}
        <div className="sponsors-grid">
          {goldSponsors.map((sponsor, idx) => (
            <div key={idx} className="sponsor-card">
              <div className="sponsor-logo-area">{sponsor.logo}</div>
              <div className="sponsor-name">{sponsor.name}</div>
              <div className="sponsor-gratitude">{sponsor.gratitude}</div>
            </div>
          ))}
        </div>

        {/* <div className="tier-title silver-tier">✦ Associate Sponsors</div>
        <div className="sponsors-grid">
          {associateSponsors.map((sponsor, idx) => (
            <div key={idx} className="sponsor-card">
              <div className="sponsor-logo-area">{sponsor.logo}</div>
              <div className="sponsor-name">{sponsor.name}</div>
              <div className="sponsor-gratitude">{sponsor.gratitude}</div>
            </div>
          ))}
        </div> */}

        <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: '1px solid var(--primary-border)' }}>
          <p style={{ fontSize: '0.95rem', letterSpacing: '2px', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '600' }}>
            BECOME A SPONSOR
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Interested in sponsoring Team Hoplites? We'd love to have you on board.
          </p>
          <a
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo(0, 0);
            }}
            style={{
              display: 'inline-block',
              padding: '0.8rem 2rem',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              color: '#fff',
              fontSize: '0.85rem',
              letterSpacing: '2px',
              borderRadius: '6px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            CONTACT US
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
