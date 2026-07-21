import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isHovering = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instantly position the center dot
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const tick = () => {
      // Linear interpolation for cursor lag (higher delay = slower follower)
      const delay = 6;
      ringX += (mouseX - ringX) / delay;
      ringY += (mouseY - ringY) / delay;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      requestAnimationFrame(tick);
    };

    // Global click listener to add a quick click pulse animation
    const onMouseDown = () => {
      ring.classList.add('cursor-clicked');
    };

    const onMouseUp = () => {
      ring.classList.remove('cursor-clicked');
    };

    // Track mouse over interactive/hoverable elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.subteam-card') || 
        target.closest('.photo-card') || 
        target.closest('.play-btn') || 
        target.closest('.social-link') ||
        target.closest('.back-btn') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isInteractive) {
        if (!isHovering) {
          isHovering = true;
          ring.classList.add('cursor-hover');
          dot.classList.add('cursor-hover');
        }
      } else {
        if (isHovering) {
          isHovering = false;
          ring.classList.remove('cursor-hover');
          dot.classList.remove('cursor-hover');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    // Hide standard cursor on desktop
    document.body.classList.add('hide-default-cursor');

    const animId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.classList.remove('hide-default-cursor');
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
