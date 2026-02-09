'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid';
  hover?: boolean;
  children: React.ReactNode;
}

export function Card({
  variant = 'solid',
  hover = true,
  children,
  className,
  ...props
}: CardProps) {
  const baseStyles = 'bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-300';
  
  const hoverStyles = hover
    ? 'hover:shadow-xl hover:-translate-y-1'
    : '';
  
  return (
    <div
      className={cn(
        baseStyles,
        hoverStyles,
        'p-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
