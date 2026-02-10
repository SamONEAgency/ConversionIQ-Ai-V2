import React from 'react';

interface ProductHeroProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle: string;
  videoLabel?: string;
  imageAlt?: string;
  className?: string;
}

/**
 * ProductHero - Interior product page hero component
 * Matches Sierra-style interior hero layout: text stack on top, media card below
 * DO NOT modify the visual styling or layout logic - keep exactly as implemented
 */
export function ProductHero({
  eyebrow = 'PRODUCT',
  title,
  subtitle,
  videoLabel,
  imageAlt,
  className,
}: ProductHeroProps) {
  return (
    <section className={`bg-white w-full ${className || ''}`} style={{ paddingTop: 'calc(72.75px + 25px)', paddingBottom: '25px' }}>
      {/* Text Section - Above Video Background */}
      <div className="w-full px-[25px] mb-[25px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
          <div className="text-center mx-auto" style={{ maxWidth: '720px' }}>
            {/* Overline */}
            <div 
              className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-4"
              style={{ fontSize: '12px', letterSpacing: '0.15em' }}
              data-aos="fade-up"
            >
              {eyebrow}
            </div>
            
            {/* H1 */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-5xl font-heading text-[#383299] mb-6"
              style={{ 
                lineHeight: '1.1',
                fontWeight: 400
              }}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              {title}
            </h1>

            {/* Subcopy */}
            <p 
              className="text-base text-slate-600 font-sans font-light mx-auto" 
              style={{ 
                lineHeight: '1.5',
                maxWidth: '640px'
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

