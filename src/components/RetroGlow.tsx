
import React from 'react';

interface RetroGlowProps {
  children: React.ReactNode;
  className?: string;
}

const RetroGlow: React.FC<RetroGlowProps> = ({ children, className }) => {
  return (
    <div className={`relative ${className || ''}`}>
      <div className="absolute inset-0 bg-retro-accent blur-[20px] opacity-20 rounded-lg"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default RetroGlow;
