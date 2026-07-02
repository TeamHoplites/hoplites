import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'subteams', label: 'Sub Teams' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav>
      <a className="nav-logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
        <img src={`${import.meta.env.BASE_URL}team-logo.png`} alt="Hoplites Logo" />
        <span>HOPLITES</span>
      </a>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={currentPage === item.id || (item.id === 'subteams' && currentPage === 'subteam-detail') ? 'active' : ''}
              id={`nav-${item.id}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
