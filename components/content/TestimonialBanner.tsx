import React from 'react';
import { Users } from 'lucide-react';

interface TestimonialBannerProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  backgroundVariant?: 'blue' | 'neutral';
  className?: string;
}

export function TestimonialBanner({
  quote,
  name,
  role,
  company,
  backgroundVariant = 'blue',
  className,
}: TestimonialBannerProps) {
  const bgClass = backgroundVariant === 'blue' 
    ? 'bg-[#20127E]' 
    : 'bg-gradient-to-br from-[#F7F8FC] to-white';

  const textColor = backgroundVariant === 'blue' ? 'text-white' : 'text-slate-700';
  const quoteColor = backgroundVariant === 'blue' ? 'text-white/90' : 'text-slate-600';

  return (
    <section className={`py-[100px] ${bgClass} ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote 
            className={`text-xl md:text-2xl font-heading ${textColor} mb-8 font-light`}
            style={{ 
              lineHeight: '1.5',
              fontWeight: 300
            }}
            data-aos="fade-up"
          >
            "{quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div
              className="rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0"
              style={{ 
                width: '48px',
                height: '48px',
                backgroundColor: backgroundVariant === 'blue' ? '#e2e8f0' : '#e2e8f0'
              }}
            >
              <Users className="w-6 h-6 text-slate-400" />
            </div>
            <div>
              <p 
                className={`font-sans font-bold ${textColor} mb-1`}
                style={{ fontSize: '16px', fontWeight: 600 }}
              >
                {name}
              </p>
              <p 
                className={`font-sans ${quoteColor}`}
                style={{ fontSize: '14px', fontWeight: 400 }}
              >
                {role}{company && `, ${company}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

