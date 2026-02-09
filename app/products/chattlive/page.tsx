'use client';

/**
 * CHATTILIVE PRODUCT PAGE SECTION INVENTORY
 * ==========================================
 * 1. ProductHero_ChattiLive - <ChattliveHero /> (interior hero, NOT homepage hero)
 * 2. Product_PredictiveIntelligence - <PredictiveIntelligenceSection />
 * 3. Product_UnifiedPersistence - <UnifiedPersistenceSection />
 * 4. Product_BrandVoiceObjectives - <BrandVoiceSection />
 * 5. Product_Testimonial/Quote - <TestimonialSection />
 * 6. Product_CentralizedCommand - <CentralizedCommandSection />
 * 7. Product_ActivateEverywhere - <ActivateEverywhereSection />
 * 8. Product_SystemPerformanceSpecs - <SystemPerformanceSection />
 * 9. Product_SystemIntegrityGovernance - <GovernanceSecuritySection />
 * 10. Product_SecurityProtocols_inlineOrCerts - Security certs (AI Without Risk)
 * 11. Shared_FooterCTA - <BottomCTASection />
 * 12. SiteFooter_NavAndMeta - <Footer />
 */

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, Shield, Lock, Database, CheckCircle, MessageSquare, Smartphone, Globe, Mail, MessageCircle, Link2, Clock, Languages, TrendingDown, Users, Zap, Target, BookOpen, Eye, RefreshCw, Settings, Play, X } from 'lucide-react';
import Image from 'next/image';

export default function ChattlivePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <ChattliveHero />
      
      {/* SECTION 2: AUTONOMOUS PREDICTIVE INTELLIGENCE */}
      <PredictiveIntelligenceSection />
      
      {/* SECTION 3: UNIFIED PERSISTENCE */}
      <UnifiedPersistenceSection />
      
      {/* SECTION 4: YOUR BRAND VOICE */}
      <BrandVoiceSection />
      
      {/* SECTION 4.5: TESTIMONIAL */}
      <TestimonialSection />
      
      {/* SECTION 5: CENTRALIZED COMMAND */}
      <CentralizedCommandSection />
      
      {/* SECTION 6: ACTIVATE EVERYWHERE */}
      <ActivateEverywhereSection />
      
      {/* SECTION 7: SYSTEM PERFORMANCE */}
      <SystemPerformanceSection />
      
      {/* SECTION 8: GOVERNANCE & SECURITY */}
      <GovernanceSecuritySection />
      
      {/* SECTION 9: BOTTOM CTA */}
      <BottomCTASection />
      
      <Footer />
    </div>
  );
}

// HERO SECTION - Vertical stack layout, interior product hero style
function ChattliveHero() {
  const backgroundVideoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    // Ensure background video plays
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.play().catch((error) => {
        console.error('Error playing background video:', error);
      });
    }
  }, []);

  return (
    <section className="bg-white w-full" style={{ paddingTop: 'calc(72.75px + 25px)', paddingBottom: '25px' }}>
      {/* Text Section - Above Video Background */}
      <div className="w-full px-[25px] mb-[25px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
          <div className="text-left" style={{ maxWidth: '720px' }}>
            {/* Overline */}
            <div 
              className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-4"
              style={{ fontSize: '12px', letterSpacing: '0.15em' }}
              data-aos="fade-up"
            >
              PRODUCT
            </div>
            
            {/* H1 */}
            <h1 
              className="font-heading mb-4 text-left"
              style={{ 
                fontSize: 'clamp(44px, 5vw, 52px)',
                fontWeight: 300,
                color: '#1B1340',
                lineHeight: '1.1'
              }}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <span style={{ fontWeight: 400 }}>ChattiLive</span><br />
              Scale 1-to-1 Conversations Across Every Platform
            </h1>

            {/* Subcopy */}
            <p 
              className="text-base text-slate-600 font-sans font-light" 
              style={{ 
                lineHeight: '1.5',
                maxWidth: '640px'
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A centralized intelligence core to automate sales and support via Web, SMS, WhatsApp, and Social.
            </p>
          </div>
        </div>
      </div>

      {/* Video Background Section - Below Text */}
      <div className="w-full px-[25px]">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white relative w-full" style={{ minHeight: 'calc(100vh - 72.75px - 50px)' }}>
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
        </div>
      </div>
    </section>
  );
}

// SECTION 2: AUTONOMOUS PREDICTIVE INTELLIGENCE
function PredictiveIntelligenceSection() {
  const bullets = [
    {
      title: 'Predictive Lead Capture',
      body: 'Engage anonymous site traffic by anticipating the high probability moment of intent.',
      icon: Target,
    },
    {
      title: 'Persistent Multi-Channel Nurture',
      body: 'Maintain persistent dialogues via SMS, WhatsApp, and Messenger that adapt as intent evolves.',
      icon: MessageCircle,
    },
    {
      title: 'Real-Time Identity Resolution',
      body: 'Powered by Dotti DeepLink™, instantly resolves anonymous traffic into enriched lead profiles with verified demographic, sociographic and affinity-based context.',
      icon: Link2,
    },
    {
      title: 'Autonomous Conversion & Handoff',
      body: 'Executes the close or injects qualified, high-value leads directly into your CRM with full conversation transcripts.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="font-heading mb-4 text-center"
            style={{
              fontSize: 'clamp(44px, 5vw, 52px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Autonomous Predictive Intelligence
          </h2>
          <p 
            className="text-sm text-slate-600 max-w-3xl mx-auto font-sans leading-normal font-normal"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Most tools are isolated, scripted boxes. ChattiLive is an intelligence layer that unifies your customer lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bullets.map((bullet, index) => {
            const Icon = bullet.icon;
            return (
              <div
                key={index}
                className="flex gap-4 text-left"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon className="w-5 h-5 text-[#383299]" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-medium text-slate-700 mb-2">
                    {bullet.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal">
                    {bullet.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// SECTION 3: UNIFIED PERSISTENCE
function UnifiedPersistenceSection() {
  const bullets = [
    {
      title: 'Social Recognition',
      body: 'Prospects engaging on Instagram or Messenger are instantly recognized the moment they land on your website.',
    },
    {
      title: 'Web-to-Mobile Continuity',
      body: 'The system greets returning users by name on your site, referencing specific social interests from previous sessions.',
    },
    {
      title: 'Automated Cross-Channel Persistence',
      body: 'For opted-in leads, the system resumes the dialogue via SMS or WhatsApp if a web session expires, ensuring the nurture sequence continues without manual intervention.',
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 w-full lg:w-auto">
            <h2 
              className="font-heading mb-4 text-left"
              style={{
                fontSize: 'clamp(44px, 5vw, 52px)',
                fontWeight: 300,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              Unified Persistence: One Continuous Thread
            </h2>
            <p 
              className="text-sm text-slate-600 mb-8 font-sans leading-normal font-normal"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Eliminate the "reset" button. Bridge platforms so your brand never asks the same question twice.
            </p>
            <div className="space-y-6">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="space-y-2 text-left"
                  data-aos="fade-up"
                  data-aos-delay={200 + (index * 100)}
                >
                  <h3 className="text-base font-heading font-medium text-slate-700">
                    {bullet.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal">
                    {bullet.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Card */}
          <div 
            className="w-full lg:w-[480px] flex-shrink-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div
              className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
              style={{
                minHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              Unified Timeline Visual
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 4: YOUR BRAND VOICE (zig-zag right)
function BrandVoiceSection() {
  const bullets = [
    {
      title: 'Adaptive Persona Switching',
      body: 'Automatically pivots from Formal/Authoritative on corporate sites to Casual/Relatable on SMS, all configured by you.',
    },
    {
      title: 'Objective-Driven Logic',
      body: 'Assign specific system missions — Qualify, Schedule, Convert or Resolve. The engine navigates every dialogue toward your defined goal.',
    },
    {
      title: 'Specialized Knowledge Ingestion',
      body: 'Deploy Sales Playbooks to campaign knowledge bases and Technical Manuals to support knowledge bases with zero-hallucination accuracy.',
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Visual Card */}
          <div 
            className="w-full lg:w-[480px] flex-shrink-0 order-2 lg:order-1"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
              style={{
                minHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              Persona Selection UI Mockup
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 w-full lg:w-auto order-1 lg:order-2">
            <h2 
              className="font-heading mb-4 text-left"
              style={{
                fontSize: 'clamp(44px, 5vw, 52px)',
                fontWeight: 300,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              Your Brand Voice. Your Business Objectives.
            </h2>
            <p 
              className="text-sm text-slate-600 mb-8 font-sans leading-normal font-normal"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Switch tone and voice between sales, support, or qualification missions with a single setting.
            </p>
            <div className="space-y-6">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="space-y-2 text-left"
                  data-aos="fade-right"
                  data-aos-delay={200 + (index * 100)}
                >
                  <h3 className="text-base font-heading font-medium text-slate-700">
                    {bullet.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal">
                    {bullet.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 4.5: TESTIMONIAL
function TestimonialSection() {
  return (
    <section 
      className="py-[60px] md:py-[80px] lg:py-[100px]"
      style={{ background: '#e6f5fa' }}
    >
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
              &ldquo;ConversionIQ eliminated the need for 10 full-time comment moderators and improved our CPA by 22% in under 90 days. The AI handles every comment with more precision than our team ever could.&rdquo;
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
                  className="font-sans font-semibold text-black mb-1"
                  style={{ 
                    fontSize: '18px',
                    fontWeight: 600
                  }}
                >
                  Michael Torres
                </p>
                <p 
                  className="font-sans text-slate-500"
                  style={{ 
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#6B7280'
                  }}
                >
                  VP of Digital Marketing
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

// SECTION 5: CENTRALIZED COMMAND
function CentralizedCommandSection() {
  const bullets = [
    {
      title: 'The Unified Inbox',
      body: 'Aggregate every interaction from Web, SMS, WhatsApp, and Social into one operational view with automated sentiment tracking.',
      icon: Mail,
    },
    {
      title: 'Bi-Directional CRM Integration',
      body: 'Deep-native sync with Salesforce, HubSpot, GoHighLevel, ZohoCRM, plus custom API bridges to fuel any custom CRM with real-time enriched data.',
      icon: RefreshCw,
    },
    {
      title: 'Real-Time Data Enrichment',
      body: 'Dotti DeepLink™ optionally pushes full transcripts and 3rd-party attributes directly into your stack for 100% visibility.',
      icon: Database,
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="font-heading mb-4 text-center"
            style={{
              fontSize: 'clamp(44px, 5vw, 52px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Centralized Command. Total Visibility. Zero Manual Entry.
          </h2>
          <p 
            className="text-sm text-slate-600 max-w-3xl mx-auto font-sans leading-normal font-normal"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Inject autonomous intelligence into your stack without rebuilding your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bullets.map((bullet, index) => {
            const Icon = bullet.icon;
            return (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#383299]" />
                </div>
                <h3 className="text-base font-heading font-medium text-slate-700 mb-2">
                  {bullet.title}
                </h3>
                <p className="text-sm text-slate-600 leading-normal font-sans font-normal">
                  {bullet.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// SECTION 6: ACTIVATE EVERYWHERE
function ActivateEverywhereSection() {
  const bullets = [
    {
      title: 'ChattiLive Web-Chat',
      body: 'Convert site traffic into a qualified pipeline 24/7.',
    },
    {
      title: 'ChattiLive SMS',
      body: 'The autonomous sales force for mission-driven 1-to-1 mobile dialogues and long-term nurture.',
    },
    {
      title: 'ChattiLive WhatsApp',
      body: 'Global support and sales on the world\'s most popular messaging app.',
    },
    {
      title: 'ChattiLive Messenger',
      body: 'Synchronized customer journeys across the Meta ecosystem.',
    },
    {
      title: 'Dotti DeepLink',
      body: 'Real-time lead enrichment and reverse-append data cloud.',
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Visual Card */}
          <div 
            className="w-full lg:w-[480px] flex-shrink-0 order-2 lg:order-1"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
              style={{
                minHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              Channel Activation Visual
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 w-full lg:w-auto order-1 lg:order-2">
            <h2 
              className="font-heading mb-4 text-left"
              style={{
                fontSize: 'clamp(44px, 5vw, 52px)',
                fontWeight: 300,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              Activate Everywhere Instantly. One Continuous Conversation.
            </h2>
            <p 
              className="text-sm text-slate-600 mb-8 font-sans leading-normal font-normal"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Deploy specialized conversational intelligence across the channels that drive your revenue.
            </p>
            <div className="space-y-6">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="space-y-2 text-left"
                  data-aos="fade-right"
                  data-aos-delay={200 + (index * 100)}
                >
                  <h3 className="text-base font-heading font-medium text-slate-700">
                    {bullet.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal">
                    {bullet.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 7: SYSTEM PERFORMANCE
function SystemPerformanceSection() {
  const metrics = [
    {
      value: '24/7',
      label: 'Global Execution',
      body: 'Automate engagement in 91 languages across every time zone with zero downtime.',
    },
    {
      value: 'Zero-Lag',
      label: 'Implementation',
      body: 'The system is operational the moment it ingests your brand guidelines, playbooks, PDFs, or website data.',
    },
    {
      value: '100%',
      label: 'Attributable ROI',
      body: 'Integrated tracking and phone number attribution provide total visibility into conversation-driven revenue.',
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
                fontWeight: 300,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              System Performance Specifications
            </h2>
            <p 
              className="text-sm text-slate-600 mb-12 font-sans text-left leading-normal font-normal"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              High-velocity infrastructure engineered for global scale and mission-critical reliability.
            </p>

            {/* Feature Items */}
            <div className="space-y-6 border-t border-slate-200 pt-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="space-y-2 text-left border-t border-slate-200 pt-6 first:border-t-0 first:pt-0"
                  data-aos="fade-left"
                  data-aos-delay={200 + (index * 100)}
                >
                  <h3 className="text-base font-heading font-medium text-slate-700">
                    {metric.label} <span className="font-normal text-slate-600">| {metric.value}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal">
                    {metric.body}
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
              System Performance Visual
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 8: GOVERNANCE & SECURITY
function GovernanceSecuritySection() {
  const bullets = [
    {
      title: 'Centralized Intelligence Core',
      body: 'A unified logic layer. Training occurs once on your proprietary company data to maintain brand persistence and memory across every channel.',
    },
    {
      title: 'Dual-Layer Hallucination Shielding',
      body: 'Powered by Auditti™. While Chatti provides fluid, helpful responses to external queries, Auditti conducts an independent, real-time review of every output to verify factual accuracy and eliminate hallucinations before they reach the user.',
    },
    {
      title: 'Enterprise-Grade Security Protocols',
      body: 'SOC2 Type II certified. All data is encrypted and segregated. Your proprietary information is never utilized to train public AI models.',
    },
    {
      title: 'Governance-Ready',
      body: 'Bake internal legal requirements directly into AI logic for brand-safe delivery at scale.',
    },
    {
      title: 'Native CRM Architecture',
      body: 'Engineered for bi-directional sync. Every interaction is automatically logged, and every lead record is enriched with full attribution without manual entry.',
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Visual Card */}
          <div 
            className="w-full lg:w-[480px] flex-shrink-0 order-2 lg:order-1"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
              style={{
                minHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              Governance & Security Visual
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 w-full lg:w-auto order-1 lg:order-2">
            <h2 
              className="font-heading mb-4 text-left"
              style={{
                fontSize: 'clamp(44px, 5vw, 52px)',
                fontWeight: 300,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              System Integrity & Governance
            </h2>
            <div className="space-y-6">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="space-y-2 text-left"
                  data-aos="fade-right"
                  data-aos-delay={200 + (index * 100)}
                >
                  <h3 className="text-base font-heading font-medium text-slate-700">
                    {bullet.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal">
                    {bullet.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Without Risk Subsection */}
        <div className="text-center mt-16">
          <h2 
            className="font-heading mb-2.5 text-center"
            style={{
              fontSize: 'clamp(44px, 5vw, 52px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            AI Without Risk
          </h2>
          <p 
            className="text-sm text-slate-600 max-w-2xl mx-auto mb-12 md:mb-16 font-sans leading-normal font-normal"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            SOC2 and ISO certifications to support enterprise deployment.
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
      </div>
    </section>
  );
}

// SECTION 9: BOTTOM CTA
function BottomCTASection() {
  return (
    <section 
      className="py-[100px] text-white"
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
            Experience the ConversionIQ Advantage
          </h2>
          <p 
            className="text-sm text-white/90 mb-8 font-sans leading-normal font-light text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            See how ChattiLive automates 1-to-1 conversations across Web, SMS, WhatsApp, and Social.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Button variant="dark-primary" size="default">
              Book a Demo
            </Button>
            <Button variant="dark-secondary" size="default">
              Watch the Overview
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

