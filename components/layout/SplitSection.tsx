import React from 'react';
import { cn } from '@/lib/utils';

export interface FeatureItem {
  title: string;
  body: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SplitSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: React.ReactNode;
  features?: FeatureItem[];
  side?: 'image-left' | 'image-right';
  children?: React.ReactNode; // Visual slot
  background?: 'light' | 'muted';
  titleSize?: 'default' | 'large';
  titleWeight?: number;
  className?: string;
}

export function SplitSection({
  eyebrow,
  title,
  subtitle,
  body,
  features,
  side = 'image-right',
  children,
  background = 'light',
  titleSize = 'default',
  titleWeight = 300,
  className,
}: SplitSectionProps) {
  const bgClass = background === 'muted' ? 'bg-[#F7F8FC]' : 'bg-white';
  const titleSizeClass = titleSize === 'large' 
    ? 'clamp(44px, 5vw, 52px)' 
    : 'clamp(36px, 3vw, 40px)';

  const textContent = (
    <div className="flex-1 w-full lg:w-auto" style={side === 'image-left' ? { flex: '0 0 60%' } : { flex: '0 0 60%' }}>
      {eyebrow && (
        <div 
          className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-2"
          style={{ fontSize: '12px', letterSpacing: '0.15em' }}
          data-aos="fade-up"
        >
          {eyebrow}
        </div>
      )}
      <h2 
        className="font-heading mb-4 text-left"
        style={{
          fontSize: `clamp(${titleSize === 'large' ? '44px' : '36px'}, ${titleSize === 'large' ? '5vw' : '3vw'}, ${titleSize === 'large' ? '52px' : '40px'})`,
          fontWeight: titleWeight,
          color: '#1B1340',
        }}
        data-aos="fade-up"
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="text-base text-slate-600 mb-8 font-sans leading-normal font-normal"
          style={{ lineHeight: '1.6', fontSize: '16px' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {subtitle}
        </p>
      )}
      {body && (
        <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
          {body}
        </div>
      )}
      {features && features.length > 0 && (
        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="space-y-2 text-left"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                {Icon && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-[#383299]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-heading font-medium text-slate-700" style={{ fontSize: '16px', fontWeight: 600 }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                        {feature.body}
                      </p>
                    </div>
                  </div>
                )}
                {!Icon && (
                  <>
                    <h3 className="text-base font-heading font-medium text-slate-700" style={{ fontSize: '16px', fontWeight: 600 }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      {feature.body}
                    </p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  const visualContent = children && (
    <div 
      className={cn(
        'w-full lg:w-auto flex-shrink-0',
        side === 'image-left' ? 'order-2 lg:order-1' : 'order-1 lg:order-2'
      )}
      style={side === 'image-left' ? { flex: '0 0 40%' } : { flex: '0 0 40%' }}
      data-aos={side === 'image-left' ? 'fade-left' : 'fade-right'}
      data-aos-delay="200"
    >
      {children}
    </div>
  );

  return (
    <section className={cn('py-[100px]', bgClass, className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {side === 'image-left' ? (
            <>
              {visualContent}
              {textContent}
            </>
          ) : (
            <>
              {textContent}
              {visualContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

