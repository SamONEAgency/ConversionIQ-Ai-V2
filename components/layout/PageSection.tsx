import React from 'react';
import { cn } from '@/lib/utils';

type BackgroundVariant = 'light' | 'muted' | 'dark' | 'brand';

interface PageSectionProps {
  id?: string;
  background?: BackgroundVariant;
  className?: string;
  children: React.ReactNode;
  padding?: 'default' | 'large' | 'small';
}

const backgroundStyles: Record<BackgroundVariant, string> = {
  light: 'bg-white',
  muted: 'bg-[#F7F8FC]',
  dark: 'bg-gradient-to-br from-[#1B1340] to-[#2A1F54]',
  brand: 'bg-gradient-to-br from-[#383299] to-[#ef2d60]',
};

const paddingStyles = {
  default: 'py-[100px]',
  large: 'py-[120px]',
  small: 'py-[80px]',
};

export function PageSection({
  id,
  background = 'light',
  className,
  children,
  padding = 'default',
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full',
        backgroundStyles[background],
        paddingStyles[padding],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

