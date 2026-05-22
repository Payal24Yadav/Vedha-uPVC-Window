import React from 'react';

/**
 * Section wrapper with consistent vertical spacing and optional curve classes.
 * Props:
 *  - children: inner content
 *  - className: additional classes
 *  - curve: "top", "bottom", "full" or undefined for rounded sections
 */
export const Section = ({ children, className = '', curve }) => {
  const curveClass = curve ? `section-curve-${curve}` : '';
  const base = 'site-section'; // consistent vertical rhythm
  return (
    <section className={`${base} ${curveClass} ${className}`}>
      <div className="site-container">
        {children}
      </div>
    </section>
  );
};
