'use client';

/**
 * SMS NODE PRODUCT PAGE SECTION INVENTORY
 * =======================================
 * 1. ProductHero_SMSNode - <ProductHero /> (interior hero)
 * 2. Product_HowItWorks - <SplitSection /> (image-right)
 * 3. Product_HighVelocitySolutions - <SplitSection /> (image-left)
 * 4. Product_ProfessionalEngine - <SplitSection /> (image-right)
 * 5. Product_Testimonial - <TestimonialBanner />
 * 6. Product_CRMIntegration - <SplitSection /> (image-left)
 * 7. Product_ExecutionLogic - <FeatureList layout="grid" />
 * 8. Shared_FooterCTA - <FooterCTA />
 * 9. SiteFooter_NavAndMeta - <Footer />
 */

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductHero } from '@/components/content/ProductHero';
import { SplitSection, FeatureItem } from '@/components/layout/SplitSection';
import { FeatureList } from '@/components/layout/FeatureList';
import { PageSection } from '@/components/layout/PageSection';
import { TestimonialBanner } from '@/components/content/TestimonialBanner';
import { FooterCTA } from '@/components/content/FooterCTA';

export default function SMSNodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <ProductHero
        eyebrow="PRODUCT"
        title="ChattiLive SMS: Autonomous Two-Way SMS at Scale"
        subtitle="Stop sending 'No-Reply' blasts. Automate the thousands of replies your campaigns generate to qualify leads, resolve inquiries, and drive revenue 24/7."
        videoLabel="SMS Campaign Flow Visual"
      />
      
      {/* SECTION 1: HOW IT WORKS */}
      <HowItWorksSection />
      
      {/* SECTION 2: HIGH-VELOCITY SMS MARKETING SOLUTIONS */}
      <HighVelocitySection />
      
      {/* SECTION 3: PROFESSIONAL ENGINE VS GPT WRAPPER */}
      <ProfessionalEngineSection />
      
      {/* SECTION 4: TESTIMONIAL */}
      <TestimonialSection />
      
      {/* SECTION 5: FRICTIONLESS CRM & STACK INTEGRATION */}
      <CRMIntegrationSection />
      
      {/* SECTION 6: EXECUTION LOGIC & GUARDRAILS */}
      <ExecutionLogicSection />
      
      {/* FOOTER CTA */}
      <FooterCTA
        title="Activate the Machine"
        subtitle="Stop broadcasting. Start converting SMS at scale."
        primaryLabel="Schedule ChattiLive SMS Demo"
        primaryHref="/request-a-demo"
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
      
      <Footer />
    </div>
  );
}

// SECTION 1: HOW IT WORKS
function HowItWorksSection() {
  const features: FeatureItem[] = [
    {
      title: 'Outbound Execution',
      body: 'Launch your campaign via your existing CRM or our platform.',
    },
    {
      title: 'Instant Autonomous Response',
      body: 'When a prospect replies with a question or shows interest, the ChattiLive SMS responds in seconds based on your knowledge base campaign objectives.',
    },
    {
      title: 'Time-of-Day Compliance Shielding',
      body: 'The system automatically cross-references the recipient\'s area code, time zone and local regulations to ensure every response is delivered within legal TCPA and state-specific windows.',
    },
    {
      title: 'Real-Time Identity Enrichment',
      body: 'Dotti DeepLink™ can instantly reverse-append thousands of data points to their phone number for financial and demographic insight.',
    },
    {
      title: 'ChattiLive Responds',
      body: 'Our AI Brain analyzes the reply, references your campaign knowledgebase objectives, and texts back in seconds.',
    },
    {
      title: 'Objective-Driven Closure',
      body: 'The engine maintains the thread until the mission is met; securing a conversion, resolving a ticket, or reaching full qualification.',
    },
  ];

  const visualCard = (
    <div
      className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
      style={{
        minHeight: '500px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* TODO: Replace placeholder visual card with SMS Conversation Flow Visual */}
      SMS Conversation Flow Visual
    </div>
  );

  return (
    <SplitSection
      title="How It Works: From Monologue to Dialogue"
      subtitle="Most SMS tools are one-way dead ends. ChattiLive turns every outbound campaign into an automated sales conversation."
      features={features}
      side="image-right"
      background="muted"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 2: HIGH-VELOCITY SMS MARKETING SOLUTIONS
function HighVelocitySection() {
  const features: FeatureItem[] = [
    {
      title: 'Mass-Scale Concurrency',
      body: 'If 1,000 prospects reply simultaneously, the system initiates 1,000 unique, intelligent conversations without delay.',
    },
    {
      title: 'No "Text Teams" Required',
      body: 'Eliminate the cost of hiring people to manually monitor and reply to SMS marketing. ChattiLive monitors all incoming SMS traffic and executes responses autonomously.',
    },
    {
      title: 'High-Value Escalation',
      body: 'Upon detecting high-intent signals or specific conversion triggers, the ChattiLive instantly alerts your team and facilitates a seamless handoff to a live agent.',
    },
    {
      title: 'Intelligent MMS Processing',
      body: 'The engine receives and analyzes images sent by customers for visual support claims or product inquiries.',
    },
    {
      title: 'Missed-Call Text Back',
      body: 'If a prospect calls your number and the line is busy, the engine instantly initiates a text dialogue to capture the intent.',
    },
  ];

  const visualCard = (
    <div
      className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
      style={{
        minHeight: '500px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* TODO: Replace placeholder visual card with SMS Marketing Dashboard Visual */}
      SMS Marketing Dashboard Visual
    </div>
  );

  return (
    <SplitSection
      title="High-Velocity SMS Marketing Solutions"
      subtitle="Scale your outreach without increasing headcount or manual monitoring."
      features={features}
      side="image-left"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 3: PROFESSIONAL ENGINE VS GPT WRAPPER
function ProfessionalEngineSection() {
  const features: FeatureItem[] = [
    {
      title: 'Verified Knowledge Tethering',
      body: 'Unlike a standard LLM wrapper, the engine is strictly tethered to your brand guidelines and campaign knowledgebase. It is restricted from making unauthorized offers or \'hallucinating\' data outside your specific parameters.',
    },
    {
      title: 'Dual-Layer Verification',
      body: 'Powered by Auditti™; every response undergoes a real-time, independent review to ensure factual accuracy and brand-safe delivery before the text is sent.',
    },
    {
      title: 'Objective-Driven Dialogue',
      body: 'While wrappers provide open-ended conversation, ChattiLive utilizes mission-driven logic to steer every interaction toward a specific business result.',
    },
    {
      title: 'Sentiment-Aware Adaptation',
      body: 'The system identifies tone, urgency, or frustration, automatically adapting its persona or triggering a human escalation to protect the brand.',
    },
    {
      title: 'Versatile Messaging Infrastructure',
      body: 'Support for 10DLC, Shortcodes, and Toll-Free numbers. The right gateway for your specific use case.',
    },
  ];

  const visualCard = (
    <div
      className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
      style={{
        minHeight: '500px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* TODO: Replace placeholder visual card with Engine Architecture Visual */}
      Engine Architecture Visual
    </div>
  );

  return (
    <SplitSection
      title='Professional Engine vs. "GPT Wrapper"'
      subtitle="A GPT wrapper merely facilitates chat; ChattiLive SMS executes with enterprise-grade safety, deterministic logic and objective-driven purpose."
      features={features}
      side="image-right"
      background="muted"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 4: TESTIMONIAL
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

// SECTION 5: FRICTIONLESS CRM & STACK INTEGRATION
function CRMIntegrationSection() {
  const features: FeatureItem[] = [
    {
      title: 'Non-Disruptive Integration',
      body: 'The engine does not need to replace your existing marketing journeys or triggered CRM workflows. It can remain passive until a prospect initiates a reply, at which point it activates to manage the dialogue.',
    },
    {
      title: 'Conversational Data Extraction',
      body: 'When a prospect mentions specific details, such as their available budget, desired timeline, or location, the engine automatically extracts those values and writes them directly into the corresponding fields in your CRM.',
    },
    {
      title: 'Triggered Re-Engagement',
      body: 'Configure your CRM to fire a text when a lead goes cold. The engine manages the entire follow-up dialogue to recover the opportunity.',
    },
    {
      title: 'Closed-Loop Attribution',
      body: 'Track revenue directly to specific SMS campaigns through integrated tracking links and phone number attribution.',
    },
    {
      title: 'Seamless Number Migration',
      body: 'Port existing business numbers or provision new localized assets with zero system downtime.',
    },
    {
      title: 'Human-in-the-Loop Override',
      body: 'Monitor every live SMS thread from the Command Center and intercept high-value conversations with a single click.',
    },
  ];

  const visualCard = (
    <div
      className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
      style={{
        minHeight: '500px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* TODO: Replace placeholder visual card with CRM Integration Visual */}
      CRM Integration Visual
    </div>
  );

  return (
    <SplitSection
      title="Frictionless CRM & Stack Integration"
      subtitle="A core component of your revenue stack, engineered for 100% data visibility."
      features={features}
      side="image-left"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 6: EXECUTION LOGIC & GUARDRAILS
function ExecutionLogicSection() {
  const features: FeatureItem[] = [
    {
      title: 'Response Latency',
      body: 'Sub-5 second response time across all active threads, eliminating lead decay and maximizing conversion probability.',
    },
    {
      title: 'Legal Window Enforcement',
      body: 'The engine respects local TCPA and state-specific \'quiet hours\' (e.g., Florida\'s 8 AM - 8 PM window). If a consumer initiates a reply outside of these legal windows, the system queues the response for delivery at the start of the next compliant window.',
    },
    {
      title: 'Language Support',
      body: 'The engine detects and communicates in 91 languages, allowing for global SMS scale from a single intelligence core.',
    },
    {
      title: 'Compliance Standards',
      body: 'Automated TCR registration and carrier-grade opt-out management to ensure high deliverability and regulatory adherence.',
    },
    {
      title: 'Intelligence Training',
      body: 'Zero manual chat-flow building. The engine utilizes grounded reasoning based on your website, PDFs, or Playbooks to handle natural dialogue.',
    },
  ];

  return (
    <PageSection background="muted" padding="default">
      <div className="text-left mb-16">
        <h2 
          className="font-heading mb-4 text-left"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Execution Logic & Guardrails
        </h2>
        <p 
          className="text-base text-slate-600 font-sans leading-normal font-normal"
          style={{ lineHeight: '1.6', fontSize: '16px' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Technical protocols that enforce factual accuracy and legal window adherence across every thread.
        </p>
      </div>
      <FeatureList items={features} layout="grid" />
    </PageSection>
  );
}

