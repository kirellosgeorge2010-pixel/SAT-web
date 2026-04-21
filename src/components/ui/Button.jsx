import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200',
    secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700',
    outline: 'border border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-800',
    ghost: 'bg-transparent text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg',
  };

  const sizeClass = props.size ? sizes[props.size] : sizes.md;

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
