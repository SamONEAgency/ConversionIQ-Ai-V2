import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  size?: 'default' | 'narrow' | 'hero';
  children: React.ReactNode;
  className?: string;
}

export function Container({
  size = 'default',
  children,
  className,
}: ContainerProps) {
  const maxWidths = {
    default: 'max-w-container',
    narrow: 'max-w-container-narrow',
    hero: 'max-w-hero',
  };
  
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        maxWidths[size],
        className
      )}
    >
      {children}
    </div>
  );
}


