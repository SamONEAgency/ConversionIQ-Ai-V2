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
  backgroundVariant = 'neutral',
  className,
}: TestimonialBannerProps) {
  // Always use the light blue background with white card (matching Web-Chat Node page)
  const sectionBgClass = 'bg-[#e6f5fa]'; // Light blue background matching web-chat-node
  
  return (
    <section className={`py-[100px] ${sectionBgClass} ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Centered Card Container */}
        <div className="max-w-[1040px] mx-auto">
          <div 
            className="bg-white rounded-2xl shadow-lg"
            style={{
              borderRadius: '20px',
              boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.08)',
            }}
            data-aos="fade-up"
          >
            <div 
              className="w-full"
              style={{
                paddingTop: 'clamp(28px, 2.5vw, 40px)',
                paddingBottom: 'clamp(28px, 2.5vw, 40px)',
                paddingLeft: 'clamp(24px, 3vw, 64px)',
                paddingRight: 'clamp(24px, 3vw, 64px)',
              }}
            >
              {/* Quote */}
              <p 
                className="font-sans text-left mb-6"
                style={{
                  fontSize: 'clamp(16px, 1.25vw, 20px)',
                  lineHeight: '1.6',
                  fontWeight: 400,
                  color: '#111827',
                  maxWidth: '90%',
                }}
              >
                &ldquo;{quote}&rdquo;
              </p>

              {/* Author Row */}
              <div 
                className="flex items-center gap-4"
                style={{ marginTop: '24px' }}
              >
                {/* Profile Picture Placeholder */}
                <div 
                  className="rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0"
                  style={{ 
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#e2e8f0'
                  }}
                >
                  <Users className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <p 
                    className="font-sans font-bold text-black mb-1"
                    style={{ fontSize: '16px', fontWeight: 600 }}
                  >
                    {name}
                  </p>
                  <p 
                    className="font-sans text-slate-500"
                    style={{ fontSize: '14px', fontWeight: 400 }}
                  >
                    {role}{company && `, ${company}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

