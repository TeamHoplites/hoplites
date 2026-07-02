import React from 'react';
import Footer from '../components/Footer';

export default function Mentors() {
  const mentors = Array.from({ length: 4 }).map((_, idx) => ({
    name: 'Dr. / Prof. Name',
    dept: 'Department of Electrical and Electronics Engineering, SKCET',
    photo: ''
  }));

  return (
    <div className="page active" id="mentors">
      <div className="page-hero">
        <div className="section-label">Guidance & Wisdom</div>
        <h2 className="section-title" style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#fff' }}>
          College Mentors
        </h2>
        <div className="section-divider"></div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '550px', margin: '1rem auto 0', fontSize: '0.9rem', lineHeight: '1.7' }}>
          Our faculty mentors from the Department of Electrical and Electronics Engineering, SKCET — the pillars of knowledge guiding the Hoplites.
        </p>
      </div>

      <div className="mentors-grid">
        {mentors.map((mentor, idx) => (
          <div key={idx} className="mentor-card">
            <div className="mentor-photo">
              {mentor.photo ? (
                <img src={mentor.photo} alt={mentor.name} />
              ) : (
                <span>👤</span>
              )}
            </div>
            <div className="mentor-info">
              <div className="mentor-name">{mentor.name}</div>
              <div className="mentor-dept">{mentor.dept}</div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
