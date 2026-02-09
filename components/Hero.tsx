'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Mail, Facebook, Instagram, Play, X } from 'lucide-react';

// Rotating word component with gradient styling
function RotatingWord() {
  const words = ['Call.', 'Click.', 'Trust.', 'Engage.', 'Download.', 'Buy.', 'Convert.'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // Show "Convert." for reduced motion
      setCurrentIndex(words.length - 1);
      return;
    }

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 350); // Fade out duration (half of total transition)
    }, 2750); // Change word every 2.75 seconds

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Calculate min-width based on longest word to prevent layout shift
  const longestWord = Math.max(...words.map(w => w.length));
  const minWidth = `${longestWord * 0.65}ch`;

  return (
    <span
      className="inline-block relative"
      style={{ minWidth }}
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        className="inline-block font-heading"
        style={{
          fontWeight: 500,
          background: 'linear-gradient(to right, #383299, #ef2d60)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-8px)',
          transition: prefersReducedMotion 
            ? 'none' 
            : 'opacity 0.35s ease-in-out, transform 0.35s ease-in-out',
        }}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}

export function Hero() {
  const [email, setEmail] = useState('');
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure background video plays
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.play().catch((error) => {
        console.error('Error playing background video:', error);
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="bg-white w-full" style={{ paddingTop: 'calc(72.75px + 25px)', paddingBottom: '25px', minHeight: 'calc(100vh - 50px)' }}>
      <div className="w-full px-[25px]">
        {/* Rounded Card Container */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white relative w-full" style={{ height: 'calc(100vh - 72.75px - 50px)' }}>
          {/* Background Video */}
          <video
            ref={backgroundVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-65 z-0"
            onError={(e) => console.error('Background video error:', e)}
            onLoadedData={() => console.log('Background video loaded')}
          >
            <source src="/Videos/GettyImages-2178794980.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/10 z-[1]"></div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-[8.64px]">
              <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:gap-[8.64px]">
                {/* LEFT SIDE: Headline, Subtext, Email Input + CTA Button */}
                <div className="text-left space-y-[22px] w-full lg:w-auto mb-[12.96px] lg:mb-0">
                  <h1 
                    className="text-4xl sm:text-5xl lg:text-5xl font-heading text-[#383299] max-w-4xl"
                    style={{ 
                      lineHeight: '1.1',
                      fontWeight: 300
                    }}
                  >
                    <span style={{ fontWeight: 300 }}>AI that gets people to</span>
                    <br />
                    <RotatingWord />
                  </h1>

              <p className="text-base text-slate-600 font-sans max-w-4xl mx-auto font-light" style={{ lineHeight: '1.45' }}>
                Deploy a coordinated system of AI agents in minutes that identify,<br />
                engage, and close prospects across every channel.
              </p>

              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="relative flex items-center">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 z-10" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full h-[61.6px] pl-12 pr-[180px] rounded-lg border-2 border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ef2d60] text-[#383299] placeholder:text-slate-400 font-sans bg-white text-[17.6px]"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="default"
                    className="absolute right-1 h-[53.6px] whitespace-nowrap px-6 text-sm"
                  >
                    Try 30 Days Free
                  </Button>
                </div>
              </form>
            </div>

                {/* RIGHT SIDE: Product Video Card */}
                <div className="w-full lg:w-[550px] mb-[12.96px] lg:mb-0">
                  <div 
                    className="shadow-lg rounded-xl overflow-hidden bg-white relative group cursor-pointer" 
                    style={{ aspectRatio: '16/9', minHeight: '300px' }}
                    onClick={() => setIsVideoFullscreen(true)}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/0yk1mbj5ZhY?autoplay=1&mute=1&loop=1&playlist=0yk1mbj5ZhY&controls=0&modestbranding=1&rel=0&playsinline=1"
                      className="w-full h-full rounded-xl"
                      style={{ minHeight: '300px', border: 'none' }}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="ConversionIQ Hero Video"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors rounded-xl">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[#383299] ml-1" fill="#383299" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Fullscreen Video Modal */}
                  {isVideoFullscreen && (
                    <div 
                      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                      onClick={() => setIsVideoFullscreen(false)}
                    >
                      <div 
                        className="relative w-full max-w-6xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Close Button */}
                        <button
                          onClick={() => setIsVideoFullscreen(false)}
                          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                          aria-label="Close video"
                        >
                          <X className="w-8 h-8" />
                        </button>
                        {/* Fullscreen Video */}
                        <iframe
                          src="https://www.youtube.com/embed/0yk1mbj5ZhY?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0"
                          className="w-full h-full rounded-lg"
                          style={{ border: 'none' }}
                          allow="autoplay; encrypted-media; fullscreen"
                          allowFullScreen
                          title="ConversionIQ Hero Video"
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Meta Approved App & Patent-Pending Text - Matching subtitle font style */}
                  <p className="mt-4 text-center text-slate-700 text-[15.4px] font-sans font-light" style={{ lineHeight: '1.45' }}>
                    Meta Approved App | Patent-Pending Technology
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
