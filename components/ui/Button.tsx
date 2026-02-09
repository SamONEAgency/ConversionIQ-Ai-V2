'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'alt' | 'dark-primary' | 'dark-secondary';
  size?: 'default' | 'lg' | 'sm';
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'default',
  isLoading = false,
  children,
  className,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 ease-in-out disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer min-h-[44px] min-w-[120px]';
  
  const variants = {
    primary: 'bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2',
    secondary: 'bg-white text-slate-600 border border-slate-300 rounded-lg hover:border-slate-400 active:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2',
    alt: 'bg-[#383299] text-white rounded-lg hover:bg-[#2f297f] active:bg-[#2a256b] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2',
    'dark-primary': 'text-white rounded-xl border-none focus:outline-none',
    'dark-secondary': 'text-white rounded-xl bg-transparent border-2 border-white font-medium focus:outline-none',
  };
  
  const sizes = {
    default: 'px-8 py-4 text-base',
    lg: 'px-8 py-4 text-base',
    sm: 'px-6 py-3 text-sm',
  };

  // State for hover and active states
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  // Dark mode variant styles
  const getDarkModeStyles = () => {
    if (variant === 'dark-primary') {
      // Filled pink button (right button style from image)
      // Default state
      let styles: React.CSSProperties = {
        background: '#ef2d60', // Pink background
        color: '#FFFFFF',
        border: 'none',
        boxShadow: '0 2px 8px rgba(239, 45, 96, 0.3)',
      };

      // Hover state
      if (isHovered && !isActive) {
        styles = {
          ...styles,
          background: '#d92655', // Darker pink on hover
          transform: 'scale(1.03)',
          boxShadow: '0 4px 12px rgba(239, 45, 96, 0.4)',
        };
      }

      // Active state
      if (isActive) {
        styles = {
          ...styles,
          background: '#c7224a', // Even darker pink
          transform: 'scale(0.98)',
          boxShadow: '0 1px 4px rgba(239, 45, 96, 0.3)',
        };
      }

      // Focus state
      if (isFocused) {
        styles = {
          ...styles,
          outline: '2px solid #FFFFFF',
          outlineOffset: '2px',
        };
      }

      return styles;
    }

    if (variant === 'dark-secondary') {
      // White button with full white background
      // Default state
      let styles: React.CSSProperties = {
        background: '#FFFFFF', // Full white background
        color: '#20127E', // Dark text for contrast on white
        border: '2px solid #FFFFFF', // White border
      };

      // Hover state
      if (isHovered && !isActive) {
        styles = {
          ...styles,
          background: '#FFFFFF', // Keep white background
          borderColor: '#FFFFFF',
          transform: 'scale(1.03)',
          boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
        };
      }

      // Active state
      if (isActive) {
        styles = {
          ...styles,
          background: '#F5F5F5', // Slightly off-white on active
          color: '#20127E',
          transform: 'scale(0.98)',
        };
      }

      // Focus state
      if (isFocused) {
        styles = {
          ...styles,
          border: '2px solid #FFFFFF',
          outline: '2px solid #FFFFFF',
          outlineOffset: '2px',
          boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)',
        };
      }

      return styles;
    }

    return {};
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      style={{
        ...getDarkModeStyles(),
        transition: 'all 0.3s ease-in-out',
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          <span className="opacity-60">Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
