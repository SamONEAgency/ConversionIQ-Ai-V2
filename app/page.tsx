'use client';

/**
 * HOMEPAGE SECTION INVENTORY
 * ===========================
 * 1. HomeHero_AiThatGetsPeopleToVerb - <Hero /> component
 * 2. Home_TrustedAcrossIndustries_LogoBar - <TrustedByCarousel />
 * 3. Home_Dashboard_OneCentralIntelligence - <DashboardSection />
 * 4. Home_DeployYourChannels_ZigZag - <DeployChannelsSection />
 * 5. Home_Testimonial_Primary - <TestimonialsSection />
 * 6. Home_NeuralCore_BoardroomAgents - <AutonomousIntelligenceCore />
 * 7. Home_AutonomousRevenueOrchestration_Workflow - <RevenueOrchestrationFlow />
 * 8. Home_ProblemStats_YourTeamIsDrowning - Problem stats section
 * 9. Home_SecurityProtocols_IndustrialGradeSecurity - Security cert badges
 * 10. Home_Integrations_UniversalCompatibility_EngineeredForScale - Integrations split
 * 11. Home_FooterCTA_RevenueMachine - Final CTA section
 * 12. SiteFooter_NavAndMeta - <Footer />
 */

import React, { useRef, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustedByCarousel } from '@/components/TrustedByCarousel';
import { DashboardSection } from '@/components/DashboardSection';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Check, ArrowRight, Shield, Lock, Database, CheckCircle, MessageSquare, Smartphone, Globe, Mail, MessageCircle, Link2, Clock, Languages, TrendingDown, Users } from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

function DeployChannelsSection() {
  const products = [
    {
      name: 'Comment Responder',
      subtitle: 'Real-time Social Media Comment Response',
      description: 'Reply to every social comment in seconds with on-brand, objective-driven precision.',
      bullets: [
        {
          title: 'Real-time Response',
          description: 'Delivers 100% brand accurate, knowledge base driven, real-time, hallucination-free replies to public social media comments.',
          icon: MessageSquare,
        },
        {
          title: 'Automated Spam & Sentiment Filtering',
          description: 'Instantly identifies and hides spam, trolls, hate and negativity 24/7, protecting your brand and keeping your comment sections clean.',
          icon: Shield,
        },
        {
          title: 'Intelligent Lead Transition',
          description: 'Detects purchase intent and automatically signals ChattiLive Messenger to open a private 1-to-1 DM to drive a conversion.',
          icon: ArrowRight,
        },
      ],
      bgGradient: 'linear-gradient(135deg, rgba(46, 33, 164, 0.03) 0%, rgba(255, 255, 255, 1) 100%)',
      iconColor: '#2E21A4',
    },
    {
      name: 'ChattiLive Messenger',
      subtitle: 'Meta Social Conversion',
      description: 'Move social curiosity to DM 1-to-1 sales threads in real-time.',
      bullets: [
        {
          title: 'Automated Comment-to-DM',
          description: 'Triggers a private message the second a public comment is made, instantly moving the lead into a private sales environment.',
          icon: MessageCircle,
        },
        {
          title: 'Click-to-Messenger Ad Management',
          description: 'Handles the entire dialogue for specialized Meta ad units, qualifying high-intent traffic and booking meetings without human intervention.',
          icon: Smartphone,
        },
        {
          title: 'Autonomous Lead Re-engagement',
          description: 'Identifies and messages "cold" leads or existing customer-based signals and CRM data to drive renewals, upsells or re-engagement.',
          icon: ArrowRight,
        },
      ],
      bgGradient: 'linear-gradient(135deg, rgba(0, 161, 217, 0.03) 0%, rgba(255, 255, 255, 1) 100%)',
      iconColor: '#00a1d9',
    },
    {
      name: 'ChattiLive Web-Chat',
      subtitle: 'On-site Engagement',
      description: 'Convert website visitors 24/7 with an autonomous chat engine built for conversion.',
      bullets: [
        {
          title: 'Intent-based Reasoning',
          description: 'Analyzes visitor questions in real-time to handle complex, non-linear conversations that break traditional scripted bots.',
          icon: Globe,
        },
        {
          title: 'Objective-Driven Execution',
          description: 'Actively steers website visitors toward specific goals. Pursues sales and support objectives with brand accuracy and human-grade nuance.',
          icon: CheckCircle,
        },
        {
          title: 'Direct CRM Sync',
          description: 'Pushes lead data and transcripts to your existing stack, no manual entry required.',
          icon: Database,
        },
      ],
      bgGradient: 'linear-gradient(135deg, rgba(0, 161, 217, 0.03) 0%, rgba(255, 255, 255, 1) 100%)',
      iconColor: '#00a1d9',
    },
    {
      name: 'ChattiLive SMS',
      subtitle: '1-to-1 Engagement at Scale',
      description: 'Scale unlimited, 1-to-1 SMS sales conversations with on-brand, objective-driven precision.',
      bullets: [
        {
          title: 'Data-Driven Sales Steering',
          description: 'Uses CRM history to personalize every text, ensuring the AI steers the conversation toward your specific conversion goal.',
          icon: Smartphone,
        },
        {
          title: 'Persistent Conversation Memory',
          description: 'Maintains a continuous conversation thread, perfectly synced with your database. The prospect never has to repeat themselves.',
          icon: Database,
        },
        {
          title: 'Autonomous Database Monetization',
          description: 'Can proactively trigger personalized SMS to cold leads or customers based on real-time CRM events to generate conversions on autopilot.',
          icon: ArrowRight,
        },
      ],
      bgGradient: 'linear-gradient(135deg, rgba(0, 161, 217, 0.03) 0%, rgba(255, 255, 255, 1) 100%)',
      iconColor: '#00a1d9',
    },
    {
      name: 'ChattiLive WhatsApp',
      subtitle: 'Global Conversational Commerce',
      description: 'Move international leads to a close with verified, 1-to-1 WhatsApp conversation at scale.',
      bullets: [
        {
          title: 'Verified Brand Authority',
          description: 'Operates through your official WhatsApp Business API. Every message carries the "green check" trust factor, delivering 100% brand-accurate replies.',
          icon: CheckCircle,
        },
        {
          title: 'Rich Media Sales Steering',
          description: 'Uses images, PDFs, and interactive buttons to guide prospects through complex product catalogs and technical questions directly in the chat thread.',
          icon: MessageSquare,
        },
        {
          title: 'Proactive Global Outreach',
          description: 'Autonomous, 1-to-1 messages to international leads, bypassing email clutter, reaching prospects when and where they are most active.',
          icon: Globe,
        },
      ],
      bgGradient: 'linear-gradient(135deg, rgba(0, 161, 217, 0.03) 0%, rgba(255, 255, 255, 1) 100%)',
      iconColor: '#00a1d9',
    },
    {
      name: 'Dotti DeepLink™',
      subtitle: 'Real-time Data Enrichment',
      description: 'Instantly enrich leads with thousands of data attributes to maximize conversions.',
      bullets: [
        {
          title: 'Instant Identity Resolution',
          description: 'Automatically reverse-appends pixel data and thousands of 3rd-party attributes to a lead record the moment they click.',
          icon: Link2,
        },
        {
          title: 'Real-Time Data Injection',
          description: 'Feeds enriched lead profiles directly into the ChattiLive reasoning engine, allowing the AI to instantly personalize the conversation.',
          icon: Database,
        },
        {
          title: 'Frictionless Conversion Path',
          description: 'Bypasses mobile browser login screens to launch prospects directly into a native DM thread, eliminating the #1 cause of lead drop-off.',
          icon: ArrowRight,
        },
      ],
      bgGradient: 'linear-gradient(135deg, rgba(229, 178, 29, 0.03) 0%, rgba(255, 255, 255, 1) 100%)',
      iconColor: '#e5b21d',
    },
  ];

  return (
    <SectionWrapper>
      <section className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 
            className="font-heading mb-16 md:mb-20 text-left"
            style={{
              fontSize: 'clamp(40px, 4vw, 48px)',
              fontWeight: 600,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Deploy Your Channels:
          </h2>

          {/* Zig-Zag Layout - 6 Blocks */}
          <div className="space-y-32 md:space-y-40">
            {products.map((product, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Text Content - Alternates Left/Right */}
                  <div
                    className={`w-full lg:w-[50%] flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <h3
                      className="font-heading mb-3 text-left"
                      style={{
                        fontSize: 'clamp(28px, 3vw, 32px)',
                        fontWeight: 500,
                        color: '#1B1340',
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      className="font-heading font-semibold mb-4 text-left"
                      style={{
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#4B5563',
                      }}
                    >
                      {product.subtitle}
                    </p>
                    <p
                      className="text-sm text-slate-600 font-sans mb-8 text-left font-normal"
                      style={{
                        lineHeight: '1.45',
                      }}
                    >
                      {product.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-5">
                      {product.bullets.map((bullet, bulletIndex) => {
                        const BulletIcon = bullet.icon;
                        return (
                          <div
                            key={bulletIndex}
                            className="flex items-start gap-4"
                            data-aos="fade-up"
                            data-aos-delay={200 + (bulletIndex * 50)}
                          >
                            <div className="flex-shrink-0 mt-1">
                              <BulletIcon
                                className="w-5 h-5"
                                style={{ color: product.iconColor }}
                              />
                            </div>
                            <div className="flex-1">
                              <h4
                                className="font-heading font-semibold mb-1.5 text-left"
                                style={{
                                  fontSize: '15px',
                                  fontWeight: 600,
                                  color: '#1B1340',
                                }}
                              >
                                {bullet.title}
                              </h4>
                              <p
                                className="text-sm text-slate-600 font-sans text-left font-normal"
                                style={{
                                  lineHeight: '1.45',
                                }}
                              >
                                {bullet.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Image Placeholder - Alternates Right/Left */}
                  <div
                    className={`w-full lg:w-[50%] flex items-center justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                    data-aos={isEven ? 'fade-left' : 'fade-right'}
                    data-aos-delay={300 + (index * 100)}
                  >
                    <div
                      className="w-full rounded-2xl overflow-hidden"
                      style={{
                        height: '400px',
                        background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.05)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                      }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0, 161, 217, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%)',
                        }}
                      />
                      <span
                        className="text-slate-400 font-sans text-sm font-medium relative z-10"
                        style={{ fontSize: '14px' }}
                      >
                        {product.name} Mockup
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      logo: '/assets/logos/logo_01.svg',
      quote: 'ConversionIQ eliminated the need for 10 full-time comment moderators and improved our CPA by 22% in under 90 days. The AI handles every comment with more precision than our team ever could.',
      name: 'Michael Torres',
      title: 'VP of Digital Marketing',
    },
    {
      logo: '/assets/logos/logo_02.svg',
      quote: 'We deployed Comment Responder across 47 active ad accounts during peak campaign season. Zero brand incidents, 100% response coverage, and our team could finally focus on strategy instead of moderation.',
      name: 'Sarah Chen',
      title: 'Digital Director',
    },
    {
      logo: '/assets/logos/logo_03.svg',
      quote: 'ChattiLive replaced our entire live chat team on our booking pages. It qualifies leads better than our human agents did and it never sleeps. Our conversion rate jumped within the first month.',
      name: 'David Ramirez',
      title: 'Chief Marketing Officer',
    },
    {
      logo: '/assets/logos/logo_04.svg',
      quote: 'The data enrichment from Dotti DeepLink changed how we approach patient acquisition. We went from generic outreach to knowing exactly who we\'re talking to before the conversation even starts.',
      name: 'Dr. Jennifer Walsh',
      title: 'Director of Growth',
    },
  ];

  return (
    <section className="py-[100px]" style={{ background: '#e6f5fa' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <h2
          className="text-center mb-16 md:mb-20 font-heading"
          style={{
            fontSize: 'clamp(44px, 5vw, 52px)',
            fontWeight: 300,
            color: '#1B1340',
            lineHeight: '1.2',
          }}
          data-aos="fade-up"
        >
          The Results Speak for Themselves
        </h2>

        {/* Testimonials Grid - 4 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
              data-aos-duration="800"
              data-aos-easing="cubic-bezier(0.16, 1, 0.3, 1)"
            >
              {/* Quote */}
              <p
                className="font-sans"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.4',
                  color: '#4B5563',
                  fontWeight: '400',
                  marginBottom: '24px',
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Name */}
              <p
                className="font-sans"
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#1B1340',
                  marginBottom: '4px',
                }}
              >
                {testimonial.name}
              </p>

              {/* Title */}
              <p
                className="font-sans font-light"
                style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  fontWeight: '300',
                  lineHeight: '1.4',
                }}
              >
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutonomousIntelligenceCore() {
  const agents = [
    {
      title: 'Maestri',
      role: 'The Central Command',
      description: 'Manages your "Master Goal" and directs all other agents to prioritize your bottom-line KPIs.',
    },
    {
      title: 'Dotti',
      role: 'The Data Engine',
      description: 'Synthesizes DeepLink™ data and real-time behavior signals to create a 360º prospect profile.',
    },
    {
      title: 'Matti',
      role: 'The Creative Asset Generator',
      description: 'Creates real-time creative variations based on psychological profiles.',
    },
    {
      title: 'Chatti',
      role: 'The Conversational Engine',
      description: 'Executes 1-to-1 dialogues in 91 languages, zero-hallucination, across all channels.',
    },
    {
      title: 'Omni',
      role: 'The Cross-Channel Controller',
      description: 'Chooses the perfect channel and time to trigger messages with persistent memory.',
    },
    {
      title: 'Auditti',
      role: 'The Compliance Guard',
      description: 'Ensures brand-safe, fact-based, compliant output in real time.',
    },
  ];

  return (
    <SectionWrapper>
      <section className="py-[100px] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 
              className="font-heading"
              style={{
                fontSize: 'clamp(40px, 4vw, 48px)',
                fontWeight: 600,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              The Autonomous Intelligence Core
            </h2>
            <p 
              className="text-sm text-slate-600 max-w-3xl mx-auto font-sans font-normal leading-normal"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Deploy a coordinated system of specialized agents to automate your entire revenue cycle.
            </p>
          </div>

          {/* Responsive Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="flex flex-col"
                style={{
                  maxWidth: '100%',
                  width: '100%',
                }}
                data-aos="fade-scale"
                data-aos-delay={index * 100}
              >
                {/* Image Card */}
                <div
                  className="w-full rounded-2xl transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] mb-4"
                  style={{
                    height: '160px',
                    background: '#F9FAFB',
                    borderRadius: '16px',
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="text-slate-400 font-sans text-sm">Image here</span>
                </div>

                {/* Text Content - Outside the card, floating below */}
                <div className="flex flex-col" style={{ gap: '8px' }}>
                  {/* Title */}
                  <h3
                    className="font-heading font-semibold"
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: '#1A1A1A',
                      margin: 0,
                    }}
                  >
                    {agent.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-sans"
                    style={{
                      fontSize: '0.92rem',
                      color: '#666',
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {agent.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

function RevenueOrchestrationFlow() {
  const features = [
    {
      label: 'Identify',
      secondaryLabel: 'Data Enrichment',
      description: 'Dotti reverse-appends proprietary attributes to the click, instantly resolving the prospect\'s profile, interests, and intent.',
    },
    {
      label: 'Mirror',
      secondaryLabel: 'Dynamic Personalization',
      description: 'Matti replaces generic assets with creative tailored to the prospect\'s specific profile to maximize immediate resonance.',
    },
    {
      label: 'Trigger',
      secondaryLabel: 'Predictive Outreach',
      description: 'Omni identifies the high-probability moment to initiate a follow-up via the optimal channel based on real-time behavioral signals.',
    },
    {
      label: 'Close',
      secondaryLabel: 'Objective-Driven Dialogue',
      description: 'Chatti executes the sales playbook, neutralizing objections and syncing the qualified lead directly into your CRM.',
    },
  ];

  return (
    <section 
      className="py-[100px]"
      style={{ 
        background: '#ebebf8',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-stretch">
          {/* Left Side: Text Content (max-width: 600px) */}
          <div 
            className="w-full md:w-auto flex-1"
            style={{ maxWidth: '600px' }}
          >
            <h2 
              className="font-heading mb-4 text-left"
              style={{
                fontSize: 'clamp(44px, 5vw, 52px)',
                fontWeight: 600,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              Autonomous Revenue Orchestration
            </h2>
            <p 
              className="text-sm text-slate-600 mb-12 font-sans text-left leading-normal font-normal"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              High-velocity lead processing that scales your brand without complex logic trees.
            </p>

            {/* Feature Items */}
            <div className="space-y-6 border-t border-slate-200 pt-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="space-y-2 text-left border-t border-slate-200 pt-6 first:border-t-0 first:pt-0"
                  data-aos="fade-left"
                  data-aos-delay={200 + (index * 100)}
                >
                  <h3 className="text-base font-heading font-medium text-slate-700">
                    {feature.label} <span className="font-normal text-slate-600">| {feature.secondaryLabel}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Card (extends to margin) */}
          <div 
            className="w-full md:flex-1 flex-shrink-0 flex"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div
              className="w-full bg-[#f3f3f3] rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm self-stretch"
              style={{
                minHeight: '100%',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemStatsSection() {
  const stats = [
    {
      headline: '<5s Response Time',
      description: 'Real-time inbound routing powered by autonomous agents.',
    },
    {
      headline: '91 Languages',
      description: 'Native localization across global audiences.',
    },
    {
      headline: '22% Lower CPA',
      description: 'Efficiency gains that reduce acquisition costs.',
    },
    {
      headline: '10 FTEs Eliminated',
      description: 'Full-scale automation that reduces headcount requirements.',
    },
  ];

  return (
    <SectionWrapper>
      <section 
        className="py-[100px]"
        style={{ background: '#f9f9f9' }}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Problem Statement */}
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-heading text-brand-blurple mb-4"
              style={{
                fontWeight: 600,
              }}
              data-aos="fade-up"
            >
              Your Team Is Drowning in Manual Lead Processing.
            </h2>
            <p 
              className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-sans"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Complex workflows. Missed follow-ups. Wasted spend.
              ConversionIQ replaces bloated sales ops with precision automation — delivering 10x the impact with a fraction of the lift.
            </p>
          </div>

          {/* Stats Text - Simple text format, no cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="space-y-2"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                <h3 className="text-xl md:text-2xl font-heading text-brand-blurple" style={{ fontWeight: 500 }}>
                  {stat.headline}
                </h3>
                <p className="text-sm md:text-base text-slate-600 font-sans font-light" style={{ lineHeight: '1.5' }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

function SectionWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION (includes Navigation) */}
      <Hero />
      
      {/* TRUSTED BY CAROUSEL */}
      <div className="scroll-mt-[100px]">
        <TrustedByCarousel />
      </div>

      {/* SECTION 2: DASHBOARD SECTION */}
      <DashboardSection />

      {/* SECTION 3: DEPLOY YOUR CHANNELS */}
      <DeployChannelsSection />

      {/* SECTION 3.5: TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 4: THE AUTONOMOUS INTELLIGENCE CORE */}
      <AutonomousIntelligenceCore />

      {/* SECTION 5: AUTONOMOUS REVENUE ORCHESTRATION */}
      <RevenueOrchestrationFlow />

      {/* SECTION 6: SECURITY */}
      <SectionWrapper>
        <section className="py-[100px] bg-white text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 
              className="font-heading mb-2.5 text-center"
              style={{
                fontSize: 'clamp(40px, 4vw, 48px)',
                fontWeight: 600,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              Industrial-Grade Security Protocols
            </h2>
            <p 
              className="text-sm text-slate-600 max-w-2xl mx-auto mb-12 md:mb-16 font-sans leading-normal font-normal"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Enterprise-grade protocols engineered to protect your brand and data integrity at scale.
            </p>

            {/* Certification Badge Grid */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Badge 1: SOC2 */}
              <div 
                className="flex flex-col items-center justify-center"
                data-aos="fade-scale"
                data-aos-delay="200"
              >
                <div className="mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Image
                    src="/images/certs/Soc-1-compliant.png"
                    alt="SOC2 Type II Certified"
                    width={200}
                    height={100}
                    className="h-auto max-h-[100px] w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-sans font-normal text-center" style={{ fontSize: '14px', color: '#6B7280' }}>
                  SOC2 Type II Certified
                </p>
              </div>

              {/* Badge 2: ISO 42001 */}
              <div 
                className="flex flex-col items-center justify-center"
                data-aos="fade-scale"
                data-aos-delay="300"
              >
                <div className="mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Image
                    src="/images/certs/ISO_42001.png"
                    alt="ISO 42001: AI Operations"
                    width={200}
                    height={100}
                    className="h-auto max-h-[100px] w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-sans font-normal text-center" style={{ fontSize: '14px', color: '#6B7280' }}>
                  ISO 42001: AI Operations
                </p>
              </div>

              {/* Badge 3: Data Segregation */}
              <div 
                className="flex flex-col items-center justify-center"
                data-aos="fade-scale"
                data-aos-delay="400"
              >
                <div className="mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Image
                    src="/images/certs/Data-Segregation-&-Encryption-compliant.png"
                    alt="Verified Data Segregation"
                    width={200}
                    height={100}
                    className="h-auto max-h-[100px] w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-sans font-normal text-center" style={{ fontSize: '14px', color: '#6B7280' }}>
                  Verified Data Segregation
                </p>
              </div>

              {/* Badge 4: Grounded Reasoning */}
              <div 
                className="flex flex-col items-center justify-center"
                data-aos="fade-scale"
                data-aos-delay="500"
              >
                <div className="mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Image
                    src="/images/certs/Grounded-Reasoning-compliant.png"
                    alt="Grounded AI Reasoning"
                    width={200}
                    height={100}
                    className="h-auto max-h-[100px] w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-sans font-normal text-center" style={{ fontSize: '14px', color: '#6B7280' }}>
                  Grounded AI Reasoning
                </p>
              </div>

              {/* Badge 5: GDPR */}
              <div 
                className="flex flex-col items-center justify-center"
                data-aos="fade-scale"
                data-aos-delay="600"
              >
                <div className="mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Image
                    src="/images/certs/GDPR-compliant.png"
                    alt="GDPR Compliant"
                    width={200}
                    height={100}
                    className="h-auto max-h-[100px] w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-sans font-normal text-center" style={{ fontSize: '14px', color: '#6B7280' }}>
                  GDPR Compliant
          </p>
        </div>

              {/* Badge 6: HIPAA */}
              <div 
                className="flex flex-col items-center justify-center"
                data-aos="fade-scale"
                data-aos-delay="700"
              >
                <div className="mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image
                    src="/images/certs/Hipaa-compliant.png"
                    alt="HIPAA Compliant"
                    width={200}
                    height={100}
                    className="h-auto max-h-[100px] w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-sans font-normal text-center" style={{ fontSize: '14px', color: '#6B7280' }}>
                  HIPAA Compliant
                </p>
              </div>
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
      </SectionWrapper>

      {/* SECTION 7: INTEGRATION */}
      <SectionWrapper>
        <section className="py-[100px] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Block 1: Universal Compatibility */}
              <div className="space-y-8">
                <div>
                  <h2 
                    className="font-heading mb-4"
                    style={{
                      fontSize: 'clamp(28px, 3vw, 32px)',
                      fontWeight: 500,
                      color: '#1B1340',
                    }}
                  >
                    Universal Compatibility. Instant Deployment.
                  </h2>
                  <p className="text-sm text-slate-600 font-sans font-light" style={{ lineHeight: '1.45' }}>
                    Seamlessly inject autonomous intelligence into your existing stack without rebuilding your workflow.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-slate-700 mb-2">Native CRM Synchronization</h4>
                      <p className="text-sm text-slate-600 font-sans font-light" style={{ lineHeight: '1.45' }}>
                        Bi-directionally syncs with Salesforce, HubSpot, Zoho, GoHighLevel and other proprietary CRM systems. Automatically populates lead records with enriched data and full conversation transcripts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-slate-700 mb-2">Instant Knowledge Absorption</h4>
                      <p className="text-sm text-slate-600 font-sans font-light" style={{ lineHeight: '1.45' }}>
                        The system is operational within minutes. Agents ingest your website, PDFs, and playbooks to mirror your brand voice with zero training lag.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-slate-700 mb-2">Plug-and-Play Connectivity</h4>
                      <p className="text-sm text-slate-600 font-sans font-light" style={{ lineHeight: '1.45' }}>
                        Easily bridges the gap between your ad platforms, communication channels, and backend databases via a centralized API-first architecture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 2: Infinite Scale */}
              <div className="space-y-8">
                <div>
                  <h2 
                    className="font-heading mb-4"
                    style={{
                      fontSize: 'clamp(28px, 3vw, 32px)',
                      fontWeight: 500,
                      color: '#1B1340',
                    }}
                  >
                    Our AI's are Engineered for<br />
                    <span className="italic">Infinite Scale</span>
                  </h2>
                  <p className="text-sm text-slate-600 font-sans font-light" style={{ lineHeight: '1.45' }}>
                    High-velocity infrastructure designed for mission-critical performance and global reach.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-slate-700 mb-2">Unlimited Throughput Capacity</h4>
                      <p className="text-sm text-slate-600 font-sans font-light" style={{ lineHeight: '1.45' }}>
                        Engineered to process tens of thousands of simultaneous conversations with zero latency—from website traffic to high-volume SMS bursts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-slate-700 mb-2">Asynchronous Script Loading</h4>
                      <p className="text-sm text-slate-600 font-sans font-light" style={{ lineHeight: '1.45' }}>
                        The Web-Chat node operates on a non-blocking, asynchronous script, ensuring zero impact on page load speed, UX, or SEO rankings.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-slate-700 mb-2">Global Language Processing</h4>
                      <p className="text-sm text-slate-600 font-sans font-light" style={{ lineHeight: '1.45' }}>
                        The system natively executes dialogues in 91 languages, automatically detecting user locale while maintaining consistent brand logic.
                      </p>
        </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </section>
      </SectionWrapper>

      {/* SECTION 8: PROBLEM + STATS */}
      <ProblemStatsSection />

      {/* CTA Section */}
      <SectionWrapper>
        <section 
          className="py-[100px]"
          style={{ 
            background: '#20127E',
          }}
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* Left Column: Text Content (50%) */}
              <div className="flex-1 w-full lg:w-[50%]">
                <h2 
                  className="font-heading mb-4 text-left"
                  style={{
                    fontSize: 'clamp(44px, 5vw, 52px)',
                    fontWeight: 300,
                    color: '#FFFFFF',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                  }}
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  Welcome to the ConversionIQ.ai Revenue Machine
                </h2>
                <p 
                  className="text-sm text-white/90 mb-6 font-sans font-light text-left"
                  style={{
                    lineHeight: '1.45',
                  }}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Move beyond basic automation. Command an autonomous 1-to-1 sales engine.
                </p>

                {/* Optional Checklist */}
                <ul className="space-y-3 mb-8 text-left">
                  <li 
                    className="flex items-start gap-3 text-white/90 font-sans"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <span className="text-brand-pink text-xl mt-0.5 flex-shrink-0" style={{ fontWeight: 500 }}>✓</span>
                    <span className="text-sm font-light" style={{ lineHeight: '1.45' }}>
                      Precision targeting with proprietary data enrichment
                    </span>
                  </li>
                  <li 
                    className="flex items-start gap-3 text-white/90 font-sans"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <span className="text-brand-pink text-xl mt-0.5 flex-shrink-0" style={{ fontWeight: 500 }}>✓</span>
                    <span className="text-sm font-light" style={{ lineHeight: '1.45' }}>
                      Always-on optimization through autonomous outreach
                    </span>
                  </li>
                  <li 
                    className="flex items-start gap-3 text-white/90 font-sans"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <span className="text-brand-pink text-xl mt-0.5 flex-shrink-0" style={{ fontWeight: 500 }}>✓</span>
                    <span className="text-sm font-light" style={{ lineHeight: '1.45' }}>
                      Seamless CRM handoff, no manual routing
                    </span>
                  </li>
                </ul>

                {/* CTA Buttons - Dark Mode */}
                <div 
                  className="flex flex-col sm:flex-row gap-4 text-left"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Button 
                    variant="dark-primary"
                    size="sm"
                    className="transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg"
                  >
                    Book a 15-Minute Demo
                  </Button>
                  <Button 
                    variant="dark-secondary"
                    size="sm"
                    className="transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg"
                  >
                    View Pricing
                  </Button>
                </div>
              </div>

              {/* Right Column: Device Mockup/Visual (50%) */}
              <div 
                className="flex-1 w-full lg:w-[50%] flex items-center justify-center lg:justify-end"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div
                  className="w-full bg-white/10 rounded-2xl flex items-center justify-center text-white/60 font-sans text-sm"
                  style={{
                    height: '400px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  Device Mockup / Product Visual
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
