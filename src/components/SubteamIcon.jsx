import React from 'react';

export default function SubteamIcon({ type }) {
  const normalizedType = type ? type.toLowerCase().trim() : '';

  // Gradient helper definition
  const GradientDef = () => (
    <defs>
      <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--primary)" />
        <stop offset="100%" stopColor="var(--accent)" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
  );

  switch (normalizedType) {
    case 'drivers':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          <path d="M12 2a10 10 0 0 0-10 10c0 3.5 1.8 6.6 4.5 8.4l1-1.5C5 17.5 3.5 14.9 3.5 12A8.5 8.5 0 0 1 12 3.5a8.5 8.5 0 0 1 8.5 8.5c0 2.9-1.5 5.5-4 6.9l1 1.5c2.7-1.8 4.5-4.9 4.5-8.4A10 10 0 0 0 12 2z" stroke="url(#cyber-grad)" />
          <path d="M12 5a7 7 0 0 0-7 7c0 2.5 1.3 4.7 3.2 5.9l1.2-1.8A4.8 4.8 0 0 1 8.5 12a3.5 3.5 0 0 1 7 0 4.8 4.8 0 0 1-.9 2.8l1.2 1.8c1.9-1.2 3.2-3.4 3.2-5.9a7 7 0 0 0-7-7z" stroke="url(#cyber-grad)" />
          <path d="M12 9a3 3 0 0 0-3 3c0 .8.3 1.5.8 2l.8-1.2A1.5 1.5 0 0 1 10.5 12a1.5 1.5 0 0 1 3 0c0 .3-.1.6-.3.8l.8 1.2c.5-.5.8-1.2.8-2a3 3 0 0 0-3-3z" stroke="url(#cyber-grad)" />
          <path d="M12 11v2M10 12h4" stroke="url(#cyber-grad)" />
        </svg>
      );

    case 'chassis':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          {/* Main frame lines */}
          <path d="M4 6h16M4 18h16M8 6v12M16 6v12M4 6l4 4M20 6l-4 4M4 18l4-4M20 18l-4-4" stroke="url(#cyber-grad)" />
          <rect x="8" y="10" width="8" height="4" rx="1" stroke="url(#cyber-grad)" />
          <path d="M2 12h2M20 12h2" stroke="url(#cyber-grad)" />
        </svg>
      );

    case 'transmission':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          {/* Outer gear */}
          <circle cx="12" cy="12" r="7" stroke="url(#cyber-grad)" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4" stroke="url(#cyber-grad)" strokeWidth="2" />
          {/* Inner drive */}
          <circle cx="12" cy="12" r="3" stroke="url(#cyber-grad)" />
          <path d="M12 10v4M10 12h4" stroke="url(#cyber-grad)" />
        </svg>
      );

    case 'steering':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          <circle cx="12" cy="12" r="9" stroke="url(#cyber-grad)" />
          <circle cx="12" cy="12" r="2" stroke="url(#cyber-grad)" />
          <path d="M12 14v5M4 12h6M14 12h6M8.5 8.5l2 2M15.5 8.5l-2 2" stroke="url(#cyber-grad)" />
        </svg>
      );

    case 'electrical':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          <rect x="4" y="6" width="16" height="12" rx="2" stroke="url(#cyber-grad)" />
          <path d="M9 6V4h6v2M12 9l-2 3h4l-2 3" stroke="url(#cyber-grad)" strokeLinecap="round" />
          <circle cx="7" cy="15" r="0.5" fill="var(--accent)" />
          <circle cx="17" cy="15" r="0.5" fill="var(--accent)" />
        </svg>
      );

    case 'braking':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          {/* Brake Rotor */}
          <circle cx="12" cy="12" r="8" stroke="url(#cyber-grad)" />
          <circle cx="12" cy="12" r="3" stroke="url(#cyber-grad)" />
          {/* Caliper */}
          <path d="M18.5 7.5A8.9 8.9 0 0 0 12 3.5V5a7.4 7.4 0 0 1 4.9 3l1.6-1.5z" stroke="url(#cyber-grad)" strokeWidth="2.5" strokeLinecap="square" />
          {/* Rotor cooling holes */}
          <circle cx="12" cy="7" r="0.5" fill="var(--primary)" />
          <circle cx="12" cy="17" r="0.5" fill="var(--primary)" />
          <circle cx="7" cy="12" r="0.5" fill="var(--primary)" />
          <circle cx="17" cy="12" r="0.5" fill="var(--primary)" />
        </svg>
      );

    case 'solar':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          <rect x="3" y="3" width="18" height="12" rx="2" stroke="url(#cyber-grad)" />
          <path d="M3 9h18M9 3v12M15 3v12" stroke="url(#cyber-grad)" />
          <path d="M12 18v3M8 21h8" stroke="url(#cyber-grad)" />
        </svg>
      );

    case 'suspension and wheel assembly':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          {/* Shock Absorber coil */}
          <path d="M12 2v4M12 18v4M9 8h6M9 16h6" stroke="url(#cyber-grad)" />
          <path d="M12 6l-3 2h6l-6 2h6l-6 2h6l-3 2" stroke="url(#cyber-grad)" strokeWidth="1.8" />
          <circle cx="12" cy="18" r="1.5" stroke="url(#cyber-grad)" />
        </svg>
      );

    case 'autonomous':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          {/* Radar waves and microchip nodes */}
          <rect x="5" y="5" width="14" height="14" rx="3" stroke="url(#cyber-grad)" />
          <path d="M9 9h6v6H9z" stroke="url(#cyber-grad)" />
          <path d="M9 5V3M15 5V3M9 19v2M15 19v2M5 9H3M5 15H3M19 9h2M19 15h2" stroke="url(#cyber-grad)" />
          <circle cx="12" cy="12" r="1" fill="var(--accent)" />
        </svg>
      );

    case 'innovation':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          <path d="M15 14c.7-1 1.3-2.5 1.3-4a4.3 4.3 0 0 0-8.6 0c0 1.5.6 3 1.3 4" stroke="url(#cyber-grad)" />
          <path d="M9 18h6M10 21h4M12 14v4M9 14v1M15 14v1" stroke="url(#cyber-grad)" />
          {/* Glow rays */}
          <path d="M12 2v1M5 5l1 1M3 10h1M5 15l1-1M19 5l-1 1M21 10h-1M19 15l-1-1" stroke="url(#cyber-grad)" />
        </svg>
      );

    case 'businessplan':
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          {/* Chart lines */}
          <path d="M3 3v18h18" stroke="url(#cyber-grad)" />
          <path d="M18.5 7.5l-5 5-3-3-5.5 5.5" stroke="url(#cyber-grad)" />
          <path d="M14 7.5h4.5V12" stroke="url(#cyber-grad)" />
          <circle cx="18.5" cy="7.5" r="1" fill="var(--accent)" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)', filter: 'drop-shadow(0 0 4px var(--primary-glow))' }}>
          <GradientDef />
          <circle cx="12" cy="12" r="8" stroke="url(#cyber-grad)" />
          <path d="M12 8v8M8 12h8" stroke="url(#cyber-grad)" />
        </svg>
      );
  }
}
