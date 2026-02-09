'use client';

import React from 'react';
import Slider from 'react-slick';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Logo configuration - logos downloaded from https://www.conversioniq.ai/comment-responder
// Logos are stored in /public/assets/logos/

const logos = [
  { src: '/assets/logos/logo_01.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_02.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_03.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_04.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_05.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_06.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_07.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_08.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_09.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_10.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_11.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_12.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_13.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_14.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_15.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_16.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_17.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_18.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_19.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_20.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_21.svg', alt: 'Trusted Partner' },
  { src: '/assets/logos/logo_22.svg', alt: 'Trusted Partner' },
];

export function TrustedByCarousel() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  // Carousel settings for slow, continuous scrolling
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scroll (no pause)
    speed: 8000, // Slow speed (8 seconds to scroll one slide)
    cssEase: 'linear', // Smooth linear animation
    arrows: false,
    dots: false,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          swipe: true,
        },
      },
    ],
  };

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section 
      ref={ref}
      className={`w-full pt-16 pb-20 -mt-[45px] scroll-mt-[100px] transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Heading - Styled in neutral gray/brand-secondary tone */}
      <div className="w-full px-6 lg:px-8 mb-12">
        <h2 className="text-center text-base md:text-lg font-sans font-normal text-slate-500">
          Trusted in verticals that are serious about social commerce
        </h2>
      </div>

      {/* Logo Carousel - Single Line, Full Width */}
      <div className="w-full overflow-hidden">
        <Slider {...settings} className="trusted-carousel">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center h-20">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
