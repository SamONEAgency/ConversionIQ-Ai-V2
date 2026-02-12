'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Navigation } from './Navigation';
import { Mail } from 'lucide-react';
import ConversionIQChatMockup from '@/components/ui/ConversionIQChatMockup';

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
          color: '#FFFFFF',
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
  const [activeSceneId, setActiveSceneId] = useState('webchat');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Map scene IDs to video files based on person names
  const sceneVideoMap: Record<string, string> = {
    'webchat': '/Videos/Marcus_Vacation.mp4',  // Marcus
    'sms': '/Videos/Sarah_Raybans.mp4',        // Sarah
    'social': '/Videos/Jessica_Demo.mp4',      // Jessica
    'dotti': '/Videos/David_Golfer.mp4',       // David
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  const handleSceneChange = (sceneId: string) => {
    setActiveSceneId(sceneId);
  };

  useEffect(() => {
    // Auto-play video on mount and when scene changes
    if (videoRef.current && typeof window !== 'undefined') {
      const video = videoRef.current;
      const videoSrc = sceneVideoMap[activeSceneId] || '/Videos/Hero video.mp4';
      
      // Get current src without origin
      const currentSrc = video.src.replace(window.location.origin, '');
      
      // Only change source if it's different
      if (currentSrc !== videoSrc) {
        video.src = videoSrc;
        video.load();
        video.play().catch((error) => {
          console.error('Error autoplaying video:', error);
        });
      }
    }
  }, [activeSceneId]);

  const handleVideoEnded = useCallback(() => {
    // When video ends, trigger scene advance in chat mockup
    if (typeof window !== 'undefined' && (window as any).__advanceChatScene) {
      (window as any).__advanceChatScene();
    }
  }, []);

  return (
    <>
      {/* Navigation - Outside Hero card to ensure fixed positioning works */}
      <Navigation />
      
      <section 
        className="w-full relative"
        style={{ 
          background: '#FFFFFF',
          padding: '25px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Main Card - Fits Almost Entire Viewport */}
        <div 
          className="rounded-2xl md:rounded-[24px] w-full relative overflow-visible"
          style={{
            width: 'calc(100vw - 50px)',
            minHeight: 'calc(100vh - 50px)',
            boxShadow: '0 8px 32px rgba(27, 19, 64, 0.08)',
            opacity: 0,
            transform: 'scale(0.98)',
            animation: 'fadeInScale 600ms ease 100ms forwards',
            position: 'relative',
          }}
        >
          {/* Video Background */}
          <video
            ref={videoRef}
            src={sceneVideoMap[activeSceneId] || '/Videos/Hero video.mp4'}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              borderRadius: '24px',
            }}
            muted
            playsInline
            autoPlay
            onEnded={handleVideoEnded}
          />
        
        {/* Darkening Overlay - Left side dark, feathers to transparent on right */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: '24px',
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 30%, rgba(0, 0, 0, 0.1) 60%, transparent 100%)',
            zIndex: 1,
          }}
        />
        
        {/* Hero Inner Container - Two Column Layout with Max-Width Container */}
        <div 
          className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10"
          style={{
            minHeight: 'calc(100vh - 112px)',
          }}
        >
          <div 
            className="hero-inner w-full"
            style={{
              display: 'flex',
              minHeight: 'calc(100vh - 112px)',
              position: 'relative',
            }}
          >
            {/* Text Column - Left Side */}
            <div 
              className="hero-text-col flex-1 flex flex-col justify-center relative z-10"
              style={{
                padding: '60px 0 60px 0',
              }}
            >
            <div 
              className="text-left space-y-6 w-full"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeInUp 500ms ease 300ms forwards',
              }}
            >
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading max-w-4xl"
                style={{ 
                  lineHeight: '1.1',
                  fontWeight: 300,
                  color: '#FFFFFF'
                }}
              >
                <span style={{ fontWeight: 300 }}>AI that gets people to</span>
                <br />
                <RotatingWord />
              </h1>

              <p 
                className="text-base font-sans max-w-4xl font-light"
                style={{ 
                  lineHeight: '1.45',
                  color: 'rgba(255,255,255,0.7)',
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animation: 'fadeInUp 500ms ease 450ms forwards',
                }}
              >
                Deploy a coordinated system of AI agents in minutes that identify,<br />
                engage, and close prospects across every channel.
              </p>

              <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-md"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  animation: 'fadeInUp 500ms ease 600ms forwards',
                }}
              >
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
          </div>

            {/* Chat Column - Right Side, Bottom Anchored */}
            <div 
              className="hero-chat-col flex-1 flex flex-col justify-end items-end relative z-10"
              style={{
                padding: '0',
              }}
            >
              <div 
                className="hero-chat-wrapper pointer-events-auto"
                style={{
                  position: 'absolute',
                  bottom: '-90px',
                  right: '0px', // Will be overridden by responsive classes
                  width: '440px',
                  zIndex: 10,
                }}
              >
                <ConversionIQChatMockup onSceneChange={handleSceneChange} onVideoEnd={handleVideoEnded} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
