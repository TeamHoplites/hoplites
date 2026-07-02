import React from 'react';
import Footer from '../components/Footer';

const instagramSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const linkedinSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Leadership() {
  const currentLeaders = [
    {
      role: '⚔ CAPTAIN',
      name: 'PUBESHVARAN',
      years: '2026 – 2027',
      photo: '',
      isVice: false,
      instagram: 'https://www.instagram.com/pub3sh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      linkedin: 'https://www.linkedin.com/in/pubeshvaran-s-g-9a26b7318?utm_source=share_via&utm_content=profile&utm_medium=member_android'
    },
    {
      role: '🛡 VICE CAPTAIN',
      name: 'Vice Captain Name',
      years: '2026 – 2027',
      photo: '',
      isVice: true,
      instagram: '#',
      linkedin: '#'
    }
  ];

  const previousLeaders = [
    {
      year: '2025 – 2026',
      members: [
        {
          name: 'Gokula Prasath V',
          role: 'Ex - Captain',
          photo: '/assets/vgp_img.jpg',
          instagram: 'https://www.instagram.com/gokulaprasath_v?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          linkedin: 'https://www.linkedin.com/in/gokulaprasathv?utm_source=share_via&utm_content=profile&utm_medium=member_android'
        },
        {
          name: 'Pubeshvaran S G',
          role: 'Ex - Vice Captain',
          photo: '',
          instagram: 'https://www.instagram.com/pub3sh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          linkedin: 'https://www.linkedin.com/in/pubeshvaran-s-g-9a26b7318?utm_source=share_via&utm_content=profile&utm_medium=member_android'
        }
      ]
    },
    {
      year: '2024 – 2025',
      members: [
        {
          name: 'Santhosh A P',
          role: 'Ex - Captain',
          photo: '/assets/ap_img.jpg',
          instagram: 'https://www.instagram.com/santhosh_ap07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          linkedin: 'https://www.linkedin.com/in/santhosh-ap-472359234?utm_source=share_via&utm_content=profile&utm_medium=member_android'
        },
        {
          name: 'Gokula Prasath V',
          role: 'Ex - Vice Captain',
          photo: '/assets/vgp_img.jpg',
          instagram: 'https://www.instagram.com/gokulaprasath_v?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          linkedin: 'https://www.linkedin.com/in/gokulaprasathv?utm_source=share_via&utm_content=profile&utm_medium=member_android'
        }
      ]
    },
    {
      year: '2023 – 2024',
      members: [
        {
          name: 'Reeman Roshan Paul L',
          role: 'Ex - Captain',
          photo: '/assets/reeman_img.jpg',
          instagram: 'https://www.instagram.com/reemanroshan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          linkedin: 'https://www.linkedin.com/in/reeman-roshan-paul-l-3485b8350?utm_source=share_via&utm_content=profile&utm_medium=member_android'
        },
        {
          name: 'Santhosh A P',
          role: 'Ex - Vice Captain',
          photo: '/assets/ap_img.jpg',
          instagram: 'https://www.instagram.com/santhosh_ap07?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          linkedin: 'https://www.linkedin.com/in/santhosh-ap-472359234?utm_source=share_via&utm_content=profile&utm_medium=member_android'
        }
      ]
    },
    {
      year: '2022 – 2023',
      members: [
        {
          name: 'Syed Atheef M',
          role: 'Ex - Captain',
          photo: '/assets/atheef_img.jpg',
          instagram: 'https://www.instagram.com/_.atheef.__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          linkedin: 'https://www.linkedin.com/in/syed-atheef-m-47a228154?utm_source=share_via&utm_content=profile&utm_medium=member_android'
        },
        {
          name: 'Nitish Kumar K',
          role: 'Ex - Vice Captain',
          photo: '/assets/nitish_img.jpg',
          instagram: 'https://www.instagram.com/__nitish_007__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          linkedin: 'https://www.linkedin.com/in/nitish-kumar-k-266442225?utm_source=share_via&utm_content=profile&utm_medium=member_android'
        }
      ]
    }
  ];

  return (
    <div className="page active" id="leadership">
      <div className="page-hero">
        <div className="section-label">Command</div>
        <h2 className="section-title" style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#fff' }}>
          Leadership
        </h2>
        <div className="section-divider"></div>
        <p style={{ color: 'var(--text-muted)', maxWidth: '550px', margin: '1rem auto 0', fontSize: '0.9rem', lineHeight: '1.7' }}>
          The warriors who lead the Hoplites into battle on and off the track.
        </p>
      </div>

      <div style={{ textAlign: 'center', padding: '1rem 2rem 0' }}>
        <span style={{ fontFamily: "'Cinzel',serif", fontSize: '0.7rem', letterSpacing: '4px', color: 'var(--gold)', textTransform: 'uppercase' }}>
          Current Season
        </span>
      </div>

      <div className="current-leadership">
        {currentLeaders.map((leader, idx) => (
          <div key={idx} className={`captain-card ${leader.isVice ? 'vice-captain' : 'captain'}`}>
            <div className="captain-photo">
              {leader.photo ? (
                <span><img src={leader.photo} alt={leader.name} /></span>
              ) : (
                <span>👤</span>
              )}
              <div className="captain-photo-overlay"></div>
              <div
                className="captain-badge"
                style={leader.isVice ? { background: 'linear-gradient(135deg,var(--red),#8B0000)' } : undefined}
              >
                {leader.role}
              </div>
            </div>
            <div className="captain-info">
              <div className="captain-name">{leader.name}</div>
              <div className="captain-year">{leader.years}</div>
              <div className="social-links" style={{ justifyContent: 'center' }}>
                {leader.instagram !== '#' && (
                  <a href={leader.instagram} className="social-link" title="Instagram" target="_blank" rel="noopener noreferrer">
                    {instagramSVG}
                  </a>
                )}
                {leader.linkedin !== '#' && (
                  <a href={leader.linkedin} className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                    {linkedinSVG}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="page-separator"></div>

      <div className="prev-leaders-section">
        <div className="section-header">
          <div className="section-label">Alumni</div>
          <h3 className="section-title" style={{ fontSize: '1.8rem' }}>Previous Leaders</h3>
          <div className="section-divider"></div>
        </div>

        {previousLeaders.map((group, idx) => (
          <div key={idx} className="prev-year-group">
            <div className="prev-year-title">⚔ {group.year}</div>
            <div className="prev-leaders-grid">
              {group.members.map((member, memberIdx) => (
                <div key={memberIdx} className="member-card">
                  <div className="member-photo">
                    {member.photo ? (
                      <span><img src={member.photo} alt={member.name} /></span>
                    ) : (
                      <span>👤</span>
                    )}
                  </div>
                  <div className="member-info">
                    <div className="member-name">{member.name}</div>
                    <div
                      className="member-role"
                      style={member.role.includes('Vice') ? { color: 'var(--red-bright)' } : { color: 'var(--gold)' }}
                    >
                      {member.role}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                      {group.year}
                    </div>
                    <div className="social-links">
                      {member.instagram && (
                        <a href={member.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                          {instagramSVG}
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                          {linkedinSVG}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
