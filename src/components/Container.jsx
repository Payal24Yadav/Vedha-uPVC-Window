import React from 'react';

/**
 * Premium container used across the site.
 * - Max width 1280px (max-w-7xl)
 * - Centered horizontally
 * - Optional glass background for sections
 */
export const Container = ({ children, glass = false, className = '' }) => {
  const base = 'site-container';
  const glassClass = glass ? 'bg-white/90 backdrop-blur-lg rounded-premium shadow-premium' : '';
  return (
    <div className={`${base} ${glassClass} ${className}`}>
      {children}
    </div>
  );
};
