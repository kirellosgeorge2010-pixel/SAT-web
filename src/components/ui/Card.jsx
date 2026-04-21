import React from 'react';

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`rounded-2xl border border-zinc-800/60 bg-zinc-900/50 backdrop-blur-xl p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
