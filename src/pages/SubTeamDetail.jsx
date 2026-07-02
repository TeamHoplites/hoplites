import React from 'react';
import { subteamsData } from '../data/subteamsData';
import Footer from '../components/Footer';

const instagramSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const linkedinSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function SubTeamDetail({ subteamId, onBack }) {
  const data = subteamsData[subteamId];

  if (!data) {
    return (
      <div className="page active" id="subteam-detail">
        <div onClick={onBack} className="back-btn">← Back to Sub Teams</div>
        <div className="page-hero">
          <h2 className="section-title">Subteam Not Found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page active" id="subteam-detail">
      <div onClick={onBack} className="back-btn">← Back to Sub Teams</div>
      <div className="page-hero" id="subteam-detail-header">
        <div className="section-label" id="subteam-detail-label">DIVISION</div>
        <h2 className="section-title" id="subteam-detail-title" style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#fff' }}>
          {data.icon} {data.name}
        </h2>
        <div className="section-divider"></div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '1rem auto 0', fontSize: '0.9rem', lineHeight: '1.7' }} id="subteam-detail-desc">
          {data.desc}
        </p>
      </div>

      <div className="members-grid" id="members-grid">
        {data.members.map((member, idx) => {
          const isLeader = member.role.toLowerCase() === 'leader' || member.role.toLowerCase() === 'captain';
          return (
            <div key={idx} className={`member-card ${isLeader ? 'leader' : ''}`}>
              <div className="member-photo">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} />
                ) : (
                  <span>{isLeader ? '👑' : '👤'}</span>
                )}
                {isLeader && <div className="leader-badge">{member.role}</div>}
              </div>
              <div className="member-info">
                <div className="member-name">{member.name}</div>
                <div className={`member-role ${isLeader ? 'leader-role' : 'member-role-text'}`}>
                  {member.role.toUpperCase()}
                </div>
                <div className="social-links">
                  {member.instagram && member.instagram !== '#' && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                      {instagramSVG}
                    </a>
                  )}
                  {member.linkedin && member.linkedin !== '#' && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                      {linkedinSVG}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
