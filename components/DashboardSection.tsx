'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function DashboardSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate scroll progress when section is in viewport
        // Creates a smooth parallax effect similar to Sierra.ai
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          // Normalize scroll progress (0 to 1)
          const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5)));
          setScrollY(scrollProgress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="dashboard-section relative bg-white w-full py-8 lg:py-12 overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Header */}
        <div 
          ref={ref}
          className={cn(
            'text-center space-y-3 mb-6 transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h1 
            className="font-heading leading-tight"
            style={{
              fontSize: 'clamp(40px, 4vw, 48px)',
              fontWeight: 600,
              color: '#1B1340',
            }}
          >
            One Central Intelligence. Every Channel.<br />
            Infinite Scale.
          </h1>
          <h2 className="text-sm md:text-base font-sans font-normal text-slate-500 max-w-3xl mx-auto">
            Activate ChattiLive across your channels to turn CRM data and anonymous signals into autonomous 1-to-1 objective-driven conversations. Works with the tools you already use.
          </h2>
        </div>

        {/* Dashboard Image with Glow and Scroll Effect */}
        <div 
          className="relative w-full rounded-2xl overflow-visible flex justify-center items-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? `translateY(${-scrollY * 50}px) scale(${0.88 + scrollY * 0.12})` 
              : 'translateY(80px) scale(0.8)',
            transition: isVisible ? 'none' : 'opacity 1.2s ease-out, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Blue Glow - Left Side */}
          <div 
            className="absolute -z-10 rounded-2xl blur-3xl pointer-events-none"
            style={{
              width: '50%',
              height: '120%',
              background: 'radial-gradient(circle at 40% center, rgba(56, 50, 153, 1) 0%, rgba(99, 102, 241, 0.8) 30%, rgba(79, 70, 229, 0.5) 50%, transparent 70%)',
              left: '-15%',
              top: '50%',
              transform: `translateY(-50%) scale(${1.1 + scrollY * 0.4})`,
              opacity: isVisible ? 1 : 0,
            }}
          />
          
          {/* Purple Glow - Right Side */}
          <div 
            className="absolute -z-10 rounded-2xl blur-3xl pointer-events-none"
            style={{
              width: '50%',
              height: '120%',
              background: 'radial-gradient(circle at 60% center, rgba(147, 51, 234, 1) 0%, rgba(168, 85, 247, 0.8) 25%, rgba(192, 132, 252, 0.5) 45%, transparent 65%)',
              right: '-15%',
              top: '50%',
              transform: `translateY(-50%) scale(${1.1 + scrollY * 0.4})`,
              opacity: isVisible ? 1 : 0,
            }}
          />
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white inline-block" style={{ maxWidth: '90%', maxHeight: '60vh' }}>
            <Image
              src="/images/dashboard.png"
              alt="ConversionIQ Agent OS Dashboard"
              width={1092}
              height={703}
              className="object-contain rounded-2xl"
              priority
              quality={90}
            />
          </div>
        </div>

        {/* Feature Cards Below Dashboard */}
        <div 
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16',
            'transition-all duration-1000 ease-out delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Feature 1: Insights */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-heading text-brand-blurple mb-2" style={{ fontWeight: 500 }}>Insights</h3>
            <p className="text-slate-600 font-sans text-sm">
              Use AI to improve your AI. Analyze agent performance with deep insights from conversations.
            </p>
          </div>

          {/* Feature 2: Explorer */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-heading text-brand-blurple mb-2" style={{ fontWeight: 500 }}>Explorer</h3>
            <p className="text-slate-600 font-sans text-sm">
              Analyze agent performance with ChatGPT-style Deep Research for conversations.
            </p>
          </div>

          {/* Feature 3: Monitors */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-heading text-brand-blurple mb-2" style={{ fontWeight: 500 }}>Monitors</h3>
            <p className="text-slate-600 font-sans text-sm">
              Identify conversations needing extra attention proactively.
            </p>
          </div>

          {/* Feature 4: Experiments */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-heading text-brand-blurple mb-2" style={{ fontWeight: 500 }}>Experiments</h3>
            <p className="text-slate-600 font-sans text-sm">
              Run multivariate tests to optimize conversation design and agent performance.
            </p>
          </div>

          {/* Feature 5: Observability */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-heading text-brand-blurple mb-2" style={{ fontWeight: 500 }}>Observability</h3>
            <p className="text-slate-600 font-sans text-sm">
              Understand every agent action — from tool calls, knowledge lookups, latency and more.
            </p>
          </div>

          {/* Feature 6: Agent Studio */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-heading text-brand-blurple mb-2" style={{ fontWeight: 500 }}>Agent Studio</h3>
            <p className="text-slate-600 font-sans text-sm">
              Build powerful agents without engineering support that adhere to goals and guardrails.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

