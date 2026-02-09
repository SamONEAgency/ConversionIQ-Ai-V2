import React from 'react';
import { Button } from '@/components/ui/Button';

interface FooterCTAProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export function FooterCTA({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className,
}: FooterCTAProps) {
  return (
    <section 
      className={`py-[100px] text-white ${className || ''}`}
      style={{ background: '#20127E' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="font-heading mb-4 text-center"
            style={{
              fontSize: 'clamp(44px, 5vw, 52px)',
              fontWeight: 300,
              color: '#FFFFFF',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
            data-aos="fade-up"
          >
            {title}
          </h2>
          <p 
            className="text-base text-white/90 mb-8 font-sans leading-normal font-light text-center"
            style={{ lineHeight: '1.6', fontSize: '16px' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {subtitle}
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {primaryHref ? (
              <a href={primaryHref}>
                <Button variant="dark-primary" size="default">
                  {primaryLabel}
                </Button>
              </a>
            ) : (
              <Button variant="dark-primary" size="default">
                {primaryLabel}
              </Button>
            )}
            {secondaryLabel && (
              secondaryHref ? (
                <a href={secondaryHref}>
                  <Button variant="dark-secondary" size="default">
                    {secondaryLabel}
                  </Button>
                </a>
              ) : (
                <Button variant="dark-secondary" size="default">
                  {secondaryLabel}
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

