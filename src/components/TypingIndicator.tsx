
import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-1 p-2 text-retro-accent">
      <div className="w-2 h-2 rounded-full bg-retro-accent animate-pulse"></div>
      <div className="w-2 h-2 rounded-full bg-retro-accent animate-pulse delay-150"></div>
      <div className="w-2 h-2 rounded-full bg-retro-accent animate-pulse delay-300"></div>
    </div>
  );
};

export default TypingIndicator;
