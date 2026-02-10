'use client';

/**
 * HOW IT WORKS - PLATFORM OVERVIEW PAGE
 * ====================================
 * Route: /platform/how-it-works
 * Explains ConversionIQ's virtual C-Suite and autonomous revenue orchestration
 */

import React from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import { FooterCTA } from '@/components/content/FooterCTA';
import Link from 'next/link';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="bg-white w-full" style={{ paddingTop: 'calc(72.75px + 25px)', paddingBottom: '25px' }}>
        <div className="w-full px-[25px] mb-[25px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
            <div className="text-center mx-auto" style={{ maxWidth: '720px' }}>
              {/* Overline */}
              <div 
                className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-4"
                style={{ fontSize: '12px', letterSpacing: '0.15em' }}
                data-aos="fade-up"
              >
                PLATFORM
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
                How ConversionIQ Actually Works
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
                A coordinated system of specialized AI agents that mirrors your revenue organization from first touch to closed-won.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: THE VIRTUAL C-SUITE */}
      <VirtualCSuiteSection />

      {/* SECTION 2: FROM CLICK TO CLOSED-WON */}
      <ClickToClosedWonSection />

      {/* SECTION 3: REASONING, NOT SCRIPTS */}
      <ReasoningNotScriptsSection />

      {/* SECTION 4: DEPLOYMENT TIMELINE */}
      <DeploymentTimelineSection />

      {/* SECTION 5: GOVERNANCE & CONTROL */}
      <GovernanceControlSection />

      {/* FOOTER CTA */}
      <FooterCTA
        title="See ConversionIQ in Motion"
        subtitle="Walk through a real click-to-close journey using your funnels and your KPIs. See exactly how the agents collaborate behind the scenes."
        primaryLabel="Book a 15-Minute Demo"
        primaryHref="/request-a-demo"
        secondaryLabel="Explore the Platform"
        secondaryHref="/products/chattlive"
      />

      <Footer />
    </div>
  );
}

// SECTION 1: THE VIRTUAL C-SUITE
function VirtualCSuiteSection() {
  const agents = [
    {
      name: 'Maestri',
      role: 'The Orchestrator',
      description:
        'Defines global objectives (pipeline targets, CAC thresholds, LTV goals) and assigns missions to every other agent. Optimizes the system around business outcomes, not clicks or vanity metrics.',
    },
    {
      name: 'Dotti',
      role: 'The Data Engine',
      description:
        'Powers DeepLink™ identity resolution and enrichment. Ingests pixel activity, CRM history, and 2,000+ third-party attributes to build a live 360° profile for every visitor and contact.',
    },
    {
      name: 'Chatti',
      role: 'The Conversational Closer',
      description:
        'Executes 1-to-1 conversations across Web-Chat, SMS, WhatsApp, and Social DMs using grounded reasoning. Handles discovery, qualification, objection handling, support, and renewal flows with zero hallucination.',
    },
    {
      name: 'Matti',
      role: 'The Creative Strategist',
      description:
        'Aligns copy, offers, and creative hooks to each identity profile and funnel stage. Keeps messaging consistent across channels without manual versioning or A/B test fatigue.',
    },
    {
      name: 'Omni',
      role: 'The Channel Router',
      description:
        'Determines when to escalate a conversation from web to SMS, WhatsApp, or Messenger — preserving full context and history across every handoff so the prospect never repeats themselves.',
    },
    {
      name: 'Auditti',
      role: 'The Compliance Guard',
      description:
        'Independently reviews every outbound response for factual accuracy, brand guardrails, tone compliance, and legal constraints before it reaches the customer.',
    },
  ];

  return (
    <PageSection background="muted" padding="default">
      <div className="max-w-4xl mx-auto mb-12">
        <h2
          className="font-heading mb-4 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Meet the Autonomous Intelligence Core
        </h2>
        <p
          className="font-sans font-normal text-[#4B5563] text-center"
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At the center of ConversionIQ is a connected set of agents, each owning a critical part of the revenue lifecycle. Together, they operate like a seasoned go-to-market team — only faster, always on, and fully measurable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, index) => (
          <AgentCard key={agent.name} agent={agent} index={index} />
        ))}
      </div>
    </PageSection>
  );
}

// AGENT CARD COMPONENT
function AgentCard({
  agent,
  index,
}: {
  agent: { name: string; role: string; description: string };
  index: number;
}) {
  return (
    <div
      className="bg-white border border-[#E5E7EB] rounded-xl p-6"
      style={{
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      <div className="mb-3">
        <h3
          className="font-heading font-semibold text-[#1B1340] mb-1"
          style={{
            fontSize: '20px',
            fontWeight: 600,
          }}
        >
          {agent.name}
        </h3>
        <p
          className="font-sans font-medium text-[#6B7280]"
          style={{
            fontSize: '14px',
          }}
        >
          {agent.role}
        </p>
      </div>
      <p
        className="font-sans font-normal text-[#4B5563]"
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
        }}
      >
        {agent.description}
      </p>
    </div>
  );
}

// SECTION 2: FROM CLICK TO CLOSED-WON
function ClickToClosedWonSection() {
  const stages = [
    {
      number: '1',
      title: 'Identify',
      subtitle: 'Data Enrichment',
      description:
        'Dotti DeepLink™ resolves anonymous traffic in milliseconds. When a visitor clicks, Dotti associates that session with thousands of verified demographic, financial, and behavioral attributes — and matches it against your CRM without disrupting the user experience.',
    },
    {
      number: '2',
      title: 'Mirror',
      subtitle: 'Dynamic Personalization',
      description:
        'Matti and Maestri determine the right narrative and objective for that profile: nurture, qualify, upsell, retain, or save. Every experience is orchestrated at the "segment of one" level — no static audience buckets.',
    },
    {
      number: '3',
      title: 'Trigger',
      subtitle: 'Predictive Outreach',
      description:
        'Omni evaluates behavioral signals — traffic source, page depth, scroll velocity, dwell time, prior interaction history — and activates the optimal node: Web-Chat, SMS, WhatsApp, Social DM, or email. Outreach fires at the moment of highest intent probability.',
    },
    {
      number: '4',
      title: 'Close',
      subtitle: 'Objective-Driven Dialogue',
      description:
        'Chatti executes the conversation using your approved playbooks. She asks the right qualifying questions, verifies details, resolves objections, and commits outcomes to the CRM with full transcript history and attribution data.',
    },
  ];

  return (
    <PageSection background="light" padding="default">
      <div className="max-w-4xl mx-auto mb-12">
        <h2
          className="font-heading mb-4 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Four Stages of Autonomous Revenue Orchestration
        </h2>
        <p
          className="font-sans font-normal text-[#4B5563] text-center"
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Every deployment follows the same four-stage pattern, tuned to your specific GTM motion and conversion goals.
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {stages.map((stage, index) => (
          <StageCard key={stage.number} stage={stage} index={index} />
        ))}
      </div>
    </PageSection>
  );
}

// STAGE CARD COMPONENT
function StageCard({
  stage,
  index,
}: {
  stage: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
  };
  index: number;
}) {
  return (
    <div
      className="flex gap-6 items-start"
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      {/* Stage Number */}
      <div
        className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#383299] to-[#ef2d60] rounded-full flex items-center justify-center text-white font-heading font-bold"
        style={{
          fontSize: '24px',
        }}
      >
        {stage.number}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-baseline gap-3 mb-2">
          <h3
            className="font-heading font-semibold text-[#1B1340]"
            style={{
              fontSize: '24px',
              fontWeight: 600,
            }}
          >
            {stage.title}
          </h3>
          <span
            className="font-sans font-medium text-[#6B7280]"
            style={{
              fontSize: '16px',
            }}
          >
            {stage.subtitle}
          </span>
        </div>
        <p
          className="font-sans font-normal text-[#4B5563]"
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
          }}
        >
          {stage.description}
        </p>
      </div>
    </div>
  );
}

// SECTION 3: REASONING, NOT SCRIPTS
function ReasoningNotScriptsSection() {
  const points = [
    {
      title: 'Knowledge-Tethered Logic',
      description:
        'Agents are restricted to your approved sales playbooks, FAQs, policies, and product documentation. No generative guessing, no unauthorized offers, no off-brand improvisation.',
    },
    {
      title: 'Deterministic Objectives',
      description:
        'Every interaction has an explicit mission: Qualify, Schedule, Convert, or Resolve. The engine continuously optimizes around those goals, not around "time in chat" or "messages sent."',
    },
    {
      title: 'Unified Long-Term Memory',
      description:
        'Prospects don&apos;t start over. Conversations persist across devices, channels, and sessions. Someone who chats on your site today and replies via SMS next week is treated as a single, continuous thread.',
    },
    {
      title: 'Human-in-the-Loop by Design',
      description:
        'Your team can monitor and intercept any live conversation from the Command Center. When they do, the handoff is instantaneous and invisible to the customer.',
    },
  ];

  return (
    <PageSection background="muted" padding="default">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-heading mb-4 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Why This Is Different From Legacy Chatbots
        </h2>
        <p
          className="font-sans font-normal text-[#4B5563] text-center mb-12"
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          ConversionIQ uses grounded reasoning instead of brittle decision trees or open-ended generative chat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div
              key={point.title}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6"
              style={{
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              }}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <h3
                className="font-heading font-semibold text-[#1B1340] mb-3"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                {point.title}
              </h3>
              <p
                className="font-sans font-normal text-[#4B5563]"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

// SECTION 4: DEPLOYMENT TIMELINE
function DeploymentTimelineSection() {
  const steps = [
    {
      number: '1',
      title: 'Discovery & Playbook Ingestion',
      description:
        'We ingest your existing SDR scripts, support documentation, FAQ content, and compliance policies. No need to rewrite from scratch — we work with what already succeeds for your team.',
    },
    {
      number: '2',
      title: 'Node Configuration',
      description:
        'Configure Web-Chat, SMS, WhatsApp, and Social nodes with brand voice parameters, escalation rules, suppression zones, and channel-specific objectives.',
    },
    {
      number: '3',
      title: 'Controlled Pilot',
      description:
        'Launch in a defined scope — a subset of pages, campaigns, or segments. Measure impact on response coverage, conversion rate, and handle time versus your current control.',
    },
    {
      number: '4',
      title: 'Scale & Standardize',
      description:
        'Roll out across properties, brands, and regions using reusable workflow templates. Governance controls ensure every new region, team, and use case follows the same guardrails your compliance team approved.',
    },
  ];

  return (
    <PageSection background="light" padding="default">
      <div className="max-w-4xl mx-auto mb-12">
        <h2
          className="font-heading mb-4 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          From First Workshop to Live Agents in Days
        </h2>
        <p
          className="font-sans font-normal text-[#4B5563] text-center"
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Enterprise rollouts that used to take quarters now launch in days. Here's how.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex gap-6 items-start"
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
          >
            {/* Step Number */}
            <div
              className="flex-shrink-0 w-12 h-12 bg-[#383299] rounded-full flex items-center justify-center text-white font-heading font-bold"
              style={{
                fontSize: '20px',
              }}
            >
              {step.number}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className="font-heading font-semibold text-[#1B1340] mb-2"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                {step.title}
              </h3>
              <p
                className="font-sans font-normal text-[#4B5563]"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

// SECTION 5: GOVERNANCE & CONTROL
function GovernanceControlSection() {
  const certifications = [
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

  return (
    <PageSection background="muted" padding="default">
      <div className="max-w-7xl mx-auto">
        <h2
          className="font-heading mb-2.5 text-center"
          style={{
            fontSize: 'clamp(40px, 4vw, 48px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Built for Security, Compliance, and Operations Teams
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
          {certifications.map((cert) => (
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
              <p
                className="text-sm font-sans font-normal text-center"
                style={{ fontSize: '14px', color: '#6B7280' }}
              >
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
            marginTop: '48px',
          }}
        >
          Certifications currently in progress.
        </p>
      </div>
    </PageSection>
  );
}
