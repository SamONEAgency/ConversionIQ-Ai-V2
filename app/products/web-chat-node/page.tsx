'use client';

/**
 * WEB-CHAT NODE PRODUCT PAGE SECTION INVENTORY
 * =============================================
 * 1. ProductHero_WebChatNode - <WebChatNodeHero /> (interior hero)
 * 2. Product_StrategicReasoningVsStaticRules - <StrategicReasoningSection />
 * 3. Product_LeadQualificationAndIssueResolution - <LeadQualificationSection />
 * 4. Product_DesignAndPerformanceSpecs - <DesignPerformanceSection />
 * 5. Product_ROIAndTracking - <ROITrackingSection />
 * 6. Product_Testimonial/Quote - <TestimonialSection />
 * 7. Shared_FooterCTA - <FooterCTASection /> (Web-Chat specific CTA text)
 * 8. SiteFooter_NavAndMeta - <Footer />
 */

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { TestimonialBanner } from '@/components/content/TestimonialBanner';
import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, MessageSquare, Target, Link2, Clock, Globe, Shield, Settings, Database, Phone, BarChart3, Zap, Languages } from 'lucide-react';
import Image from 'next/image';

export default function WebChatNodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <WebChatNodeHero />
      
      {/* SECTION 1: STRATEGIC REASONING VS. STATIC RULES */}
      <StrategicReasoningSection />
      
      {/* SECTION 2: LEAD QUALIFICATION & ISSUE RESOLUTION */}
      <LeadQualificationSection />
      
      {/* SECTION 3: DESIGN & PERFORMANCE SPECIFICATIONS */}
      <DesignPerformanceSection />
      
      {/* SECTION 4: PROVEN ROI: TRACKING & ATTRIBUTION */}
      <ROITrackingSection />
      
      {/* SECTION 4.5: TESTIMONIAL */}
      <TestimonialSection />
      
      {/* SECTION 5: FOOTER CTA */}
      <FooterCTASection />
      
      <Footer />
    </div>
  );
}

// HERO SECTION - Sierra interior product hero style
function WebChatNodeHero() {
  return (
    <section className="bg-white w-full" style={{ paddingTop: 'calc(72.75px + 25px)', paddingBottom: '25px' }}>
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
              PRODUCT
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
              Autonomous Website Chat & Conversion Engine
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
              Replace static chat boxes and structured replies with an autonomous engagement layer that predicts intent, chats with purpose and automates revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 1: STRATEGIC REASONING VS. STATIC RULES
function StrategicReasoningSection() {
  const bullets = [
    {
      title: 'Intent-Driven Dialogue',
      body: 'Chatti executes complex technical troubleshooting or sales objection handling with equal precision, steering every interaction toward the optimal outcome.',
    },
    {
      title: 'Predictive Engagement',
      body: 'Analyzes real-time behavioral signals to determine if a user requires a support resolution or a purchase nudge, delivering the exact response at the moment of peak intent.',
    },
    {
      title: 'Real-Time Identity Resolution',
      body: 'Powered by Dotti DeepLink™, instantly resolves anonymous clicks into known prospects with verified demographic attributes.',
    },
    {
      title: 'Unified Session Persistence',
      body: 'Maintains a continuous data thread as users navigate the site. No resets, no repeated questions, and zero data loss between pages.',
    },
    {
      title: 'Recognizes and Personalizes',
      body: 'Identifies returning visitors, acknowledges past interest and purchases for personalized experiences that drive trust and loyalty.',
    },
  ];

  return (
    <section className="pt-[100px] pb-[24px] lg:pb-[32px]" style={{ background: '#F7F8FC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Text (60%) */}
          <div className="flex-1 w-full lg:w-auto" style={{ flex: '0 0 60%' }}>
            <h2 
              className="font-heading mb-4 text-left"
              style={{
                fontSize: 'clamp(36px, 3vw, 40px)',
                fontWeight: 300,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              Strategic Reasoning vs. Static Rules
            </h2>
            <p 
              className="text-base text-slate-600 mb-8 font-sans leading-normal font-normal"
              style={{ lineHeight: '1.6', fontSize: '16px' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A dynamic intelligence layer engineered to manage the entire customer sales and support lifecycles.
            </p>
            <div className="space-y-6">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="space-y-2 text-left"
                  data-aos="fade-up"
                  data-aos-delay={200 + (index * 100)}
                >
                  <h3 className="text-base font-heading font-medium text-slate-700" style={{ fontSize: '16px', fontWeight: 600 }}>
                    {bullet.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    {bullet.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Card (40%) */}
          <div 
            className="w-full lg:w-auto flex-shrink-0"
            style={{ flex: '0 0 40%' }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div
              className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
              style={{
                minHeight: '500px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              Web-Chat Dialogue Visual
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 2: LEAD QUALIFICATION & ISSUE RESOLUTION
function LeadQualificationSection() {
  const bullets = [
    {
      title: 'Automated Lead Screening',
      body: 'Identifies high-value intent by drilling into budget, authority, and needs, delivering only qualified opportunities to your CRM.',
    },
    {
      title: 'Tier-1 Support Execution',
      body: 'Resolves technical inquiries and FAQs instantly by ingesting your manuals, reducing the load on your human support team.',
    },
    {
      title: 'Direct Scheduling & Transactions',
      body: 'Enables users to book demos on live calendars or complete purchases natively within the interface.',
    },
    {
      title: 'Automatic Data Mapping',
      body: 'Every piece of information gathered is mapped to the corresponding fields in your CRM for immediate use.',
    },
    {
      title: 'Intelligent Handoff',
      body: 'If a request exceeds the current data set, the system automatically creates a support ticket or triggers a live agent alert.',
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Visual Card */}
          <div 
            className="w-full lg:w-auto flex-shrink-0 order-2 lg:order-1"
            style={{ flex: '0 0 40%' }}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
              style={{
                minHeight: '500px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              }}
            >
              Qualification & Resolution Visual
            </div>
          </div>

          {/* Right: Text (60%) */}
          <div className="flex-1 w-full lg:w-auto order-1 lg:order-2" style={{ flex: '0 0 60%' }}>
            <h2 
              className="font-heading mb-4 text-left"
              style={{
                fontSize: 'clamp(36px, 3vw, 40px)',
                fontWeight: 300,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              Lead Qualification & Issue Resolution
            </h2>
            <p 
              className="text-base text-slate-600 mb-8 font-sans leading-normal font-normal"
              style={{ lineHeight: '1.6', fontSize: '16px' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Automatically screen prospects and resolve support inquiries using your existing playbooks.
            </p>
            <div className="space-y-6">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="space-y-2 text-left"
                  data-aos="fade-right"
                  data-aos-delay={200 + (index * 100)}
                >
                  <h3 className="text-base font-heading font-medium text-slate-700" style={{ fontSize: '16px', fontWeight: 600 }}>
                    {bullet.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.6' }}>
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

// SECTION 3: DESIGN & PERFORMANCE SPECIFICATIONS
function DesignPerformanceSection() {
  const specs = [
    {
      title: 'Asynchronous Execution',
      body: 'The system loads via a single, asynchronous JavaScript snippet—ensuring zero impact on page speed, UX, or SEO rankings.',
    },
    {
      title: 'Universal Compatibility',
      body: 'Native support for WordPress, Shopify, Webflow, and custom enterprise stacks via Google Tag Manager or direct header injection.',
    },
    {
      title: 'Contextual Fluidity',
      body: 'The system monitors the user\'s current URL and references page-specific content for high-converting, relevant opening lines.',
    },
    {
      title: 'Smart Suppression Zones',
      body: 'Configure "No-Bot" zones on sensitive checkout or success pages to protect the final conversion path.',
    },
    {
      title: 'Native Brand Integration',
      body: 'Your Brand, Our Intelligence. Fully customizable CSS, fonts, and avatars to ensure Chatti feels like a native, premium feature of your UI.',
    },
    {
      title: 'Knowledge Base Synchronization',
      body: 'No manual retraining required. Point the core to a URL or PDF to update logic and responses automatically.',
    },
    {
      title: 'Global Language Detection',
      body: 'Automatically detects and responds in 91 languages, maintaining brand-safe logic across every global market.',
    },
    {
      title: 'Human-in-the-Loop Override',
      body: 'Monitor dialogues via the Command Center and intercept any conversation with a single click. Handoff is seamless and invisible to the user.',
    },
  ];

  return (
    <section className="pt-[24px] lg:pt-[32px] pb-[100px]" style={{ background: '#F7F8FC' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* H2 and Intro - Left Aligned */}
        <div className="text-left mb-16" style={{ marginTop: '64px' }}>
          <h2 
            className="font-heading mb-4 text-left"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Design & Performance Specifications
          </h2>
          <p 
            className="text-base text-slate-600 font-sans leading-normal font-normal"
            style={{ lineHeight: '1.6', fontSize: '16px' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Enterprise-grade power delivered with a zero-latency footprint.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="text-left"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 50)}
            >
              <h3 className="text-base font-heading font-medium text-slate-700 mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                {spec.title}
              </h3>
              <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                {spec.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 4: PROVEN ROI: TRACKING & ATTRIBUTION
function ROITrackingSection() {
  const features = [
    {
      title: 'Closed-Loop Attribution',
      body: 'Integrated tracking phone numbers and Bitly URLs prove exactly when the system drives a call or purchase.',
    },
    {
      title: 'Outcome Analytics',
      body: 'Move beyond vanity metrics. Track Goal Completion Rates for leads captured, meetings booked, sales made and issues resolved autonomously.',
    },
    {
      title: 'Ecosystem Connectivity',
      body: 'Every transcript and data point is pushed automatically to Salesforce, HubSpot, GoHighLevel, and Zoho via a bi-directional sync.',
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 
              className="font-heading mb-4 text-center"
              style={{
                fontSize: 'clamp(36px, 3vw, 40px)',
                fontWeight: 300,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              Proven ROI: Tracking & Attribution
            </h2>
            <p 
              className="text-base text-slate-600 font-sans leading-normal font-normal mb-8"
              style={{ lineHeight: '1.6', fontSize: '16px' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Stop wondering if your chat is driving revenue. ChattiLive provides hard-coded conversion tracking and direct attribution.
            </p>
          </div>

          {/* 3-Column Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                <h3 className="text-base font-heading font-medium text-slate-700 mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 4.5: TESTIMONIAL
function TestimonialSection() {
  return (
    <TestimonialBanner
      quote="ConversionIQ eliminated the need for 10 full-time comment moderators and improved our CPA by 22% in under 90 days. The AI handles every comment with more precision than our team ever could."
      name="Michael Torres"
      role="VP of Digital Marketing"
      backgroundVariant="neutral"
    />
  );
}

// SECTION 5: FOOTER CTA
function FooterCTASection() {
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
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
            data-aos="fade-up"
          >
            Experience the ConversionIQ Advantage
          </h2>
          <p 
            className="text-base text-white/90 mb-8 font-sans leading-normal font-light text-center"
            style={{ lineHeight: '1.6', fontSize: '16px' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Deploy Web-Chat as an autonomous conversion engine across every visitor touchpoint.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Button variant="dark-primary" size="default">
              Deploy Web-Chat Now
            </Button>
            <Button variant="dark-secondary" size="default">
              Speak with an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
