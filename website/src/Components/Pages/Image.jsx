import React, { useState, useEffect, useRef } from 'react';
import cn from "classnames";

export default function Image({
  url,
  active,
  rotationPosition,
  parallaxPos,
  scale,
  opacity,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set up intersection observer for mobile view
  useEffect(() => {
    if (!isMobile || !imageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // When the title comes into view
          if (entry.isIntersecting) {
            setIsInView(true);
            // Use the existing animation values
            opacity = 1;
            scale = 1;
          } else {
            setIsInView(false);
            // Reset to initial values
            opacity = 0;
            scale = 0.8;
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    // Observe the parent li element to track when the title is in view
    const parentElement = imageRef.current.closest('.project-item-container');
    if (parentElement) {
      observer.observe(parentElement);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <img
      ref={imageRef}
      className={cn({ 
        active,
        'mobile-view': isMobile,
        'desktop-view': !isMobile,
        'in-view': isInView
      })}
      style={{
        opacity: isMobile ? (isInView ? 1 : 0) : opacity,
        transform: `translate3d(${isMobile ? 0 : parallaxPos.x}px, ${isMobile ? 0 : parallaxPos.y}px, 0px) rotate(${isMobile ? 0 : rotationPosition}deg) scale(${isMobile ? (isInView ? 1 : 0.8) : scale})`,
        borderRadius: 20,
        transition: isMobile ? 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' : 'none',
      }}
      src={url}
      alt=""
    />
  );
}