import React from 'react';
import { subteamsData } from '../data/subteamsData';
import Footer from '../components/Footer';

export default function SubTeams({ onSelectSubteam }) {
  return (
    <div className="page active" id="subteams">
      <div className="page-hero">
        <div className="section-label">Our Divisions</div>
        <h2 className="section-title" style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#fff' }}>
          Sub Teams
        </h2>
        <div className="section-divider"></div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '550px', margin: '1rem auto 0', fontSize: '0.9rem', lineHeight: '1.7' }}>
          The Hoplites are powered by ten specialized divisions, each driving the team toward victory.
        </p>
      </div>

      <div className="subteams-grid">
        {Object.entries(subteamsData).map(([key, team]) => (
          <div key={key} className="subteam-card" onClick={() => onSelectSubteam(key)}>
            <div className="subteam-icon">{team.icon}</div>
            <div className="subteam-name">{team.name}</div>
            <div className="subteam-desc">{team.desc}</div>
            <div className="arrow-icon">→</div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
