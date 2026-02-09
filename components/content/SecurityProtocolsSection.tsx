import React from 'react';
import Image from 'next/image';

interface SecurityProtocolsSectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'ai-without-risk';
  className?: string;
}

const CERTIFICATIONS = [
  {
    src: '/images/certs/Soc-1-compliant.png',
    alt: 'SOC2 Type II Certified',
    label: 'SOC2 Type II Certified',
    delay: 200,
  },
  {
    src: '/images/certs/ISO_42001.png',
    alt: 'ISO 42001: AI Operations',
    label: 'ISO 42001: AI Operations',
    delay: 300,
  },
  {
    src: '/images/certs/Data-Segregation-&-Encryption-compliant.png',
    alt: 'Verified Data Segregation',
    label: 'Verified Data Segregation',
    delay: 400,
  },
  {
    src: '/images/certs/Grounded-Reasoning-compliant.png',
    alt: 'Grounded AI Reasoning',
    label: 'Grounded AI Reasoning',
    delay: 500,
  },
  {
    src: '/images/certs/GDPR-compliant.png',
    alt: 'GDPR Compliant',
    label: 'GDPR Compliant',
    delay: 600,
  },
  {
    src: '/images/certs/Hipaa-compliant.png',
    alt: 'HIPAA Compliant',
    label: 'HIPAA Compliant',
    delay: 700,
  },
];

export function SecurityProtocolsSection({
  title = 'Industrial-Grade Security Protocols',
  subtitle = 'Enterprise-grade protocols engineered to protect your brand and data integrity at scale.',
  variant = 'default',
  className,
}: SecurityProtocolsSectionProps) {
  return (
    <section className={`py-[100px] bg-white text-center ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 
          className="font-heading mb-2.5 text-center"
          style={{
            fontSize: 'clamp(40px, 4vw, 48px)',
            fontWeight: variant === 'ai-without-risk' ? 300 : 600,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          {title}
        </h2>
        {subtitle && (
          <p 
            className="text-sm text-slate-600 max-w-2xl mx-auto mb-12 md:mb-16 font-sans leading-normal font-normal"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {subtitle}
          </p>
        )}

        {/* Certification Badge Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {CERTIFICATIONS.map((cert) => (
            <div 
              key={cert.alt}
              className="flex flex-col items-center justify-center"
              data-aos="fade-scale"
              data-aos-delay={cert.delay}
            >
              <div className="mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  width={200}
                  height={100}
                  className="h-auto max-h-[100px] w-auto object-contain"
                />
              </div>
              <p className="text-sm font-sans font-normal text-center" style={{ fontSize: '14px', color: '#6B7280' }}>
                {cert.label}
              </p>
            </div>
          ))}
        </div>

        {/* Note at Bottom */}
        <p 
          className="text-center font-sans font-normal"
          style={{ 
            fontSize: '12px', 
            color: '#9CA3AF',
            marginTop: '48px'
          }}
        >
          Certifications currently in progress.
        </p>
      </div>
    </section>
  );
}

