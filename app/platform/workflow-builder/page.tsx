'use client';

/**
 * WORKFLOW BUILDER - PLATFORM PAGE
 * =================================
 * Route: /platform/workflow-builder
 * Visual control for autonomous journeys
 */

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import { FooterCTA } from '@/components/content/FooterCTA';

export default function WorkflowBuilderPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <PageSection background="light" padding="default">
        <div className="text-center max-w-4xl mx-auto">
          {/* Kicker */}
          <div
            className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em' }}
            data-aos="fade-up"
          >
            PLATFORM
          </div>

          {/* H1 */}
          <h1
            className="font-heading mb-6 text-center"
            style={{
              fontSize: 'clamp(48px, 5vw, 56px)',
              fontWeight: 300,
              color: '#1B1340',
              lineHeight: '1.2',
            }}
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Workflow Builder: Visual Control for Autonomous Journeys
          </h1>

          {/* Subheadline */}
          <p
            className="font-heading mb-6 text-center mx-auto"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 28px)',
              fontWeight: 300,
              color: '#1B1340',
              lineHeight: '1.4',
              maxWidth: '800px',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Design end-to-end flows that Chatti, Dotti, and Omni execute autonomously — while your team maintains full operational control.
          </p>

          {/* Body */}
          <p
            className="font-sans font-normal text-[#4B5563] text-center mx-auto"
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              maxWidth: '900px',
            }}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            The Workflow Builder gives RevOps, Marketing, and CX a shared canvas to orchestrate Web-Chat, SMS, WhatsApp, and Social journeys. You define the goals and guardrails; the agents handle the execution at scale.
          </p>
        </div>
      </PageSection>

      {/* SECTION 1: THE VISUAL CANVAS */}
      <VisualCanvasSection />

      {/* SECTION 2: TEMPLATES & PLAYBOOKS */}
      <TemplatesPlaybooksSection />

      {/* SECTION 3: TESTING & OPTIMIZATION */}
      <TestingOptimizationSection />

      {/* SECTION 4: COLLABORATION & GOVERNANCE */}
      <CollaborationGovernanceSection />

      {/* FOOTER CTA */}
      <FooterCTA
        title="Design Your First Autonomous Journey"
        subtitle="Bring one funnel to the session. We'll help you convert it into a fully autonomous workflow you can monitor, test, and optimize from day one."
        primaryLabel="Book a Workflow Builder Walkthrough"
        primaryHref="/request-a-demo"
        secondaryLabel="Explore the Platform"
        secondaryHref="/products/chattlive"
      />

      <Footer />
    </div>
  );
}

// SECTION 1: THE VISUAL CANVAS
function VisualCanvasSection() {
  const features = [
    {
      title: 'Drag-and-Drop Nodes',
      description:
        'Build flows with triggers, enrichment steps, channel activations, wait conditions, and escalation points using an intuitive zoomable canvas. No nested if/else logic to maintain.',
    },
    {
      title: 'Objective Blocks',
      description:
        'Every segment of a journey is tagged with a mission — Capture Lead, Qualify, Book Meeting, Resolve Ticket, Drive Renewal — so success criteria are explicit at every step.',
    },
    {
      title: 'Contextual Previews',
      description:
        'Click any node to see the exact conversation copy, prompts, and guardrails that will execute in production, not just abstract flowchart boxes.',
    },
  ];

  return (
    <PageSection background="muted" padding="default">
      <div className="max-w-4xl mx-auto mb-12">
        <h2
          className="font-heading mb-8 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Map Journeys the Way Revenue Teams Think
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={feature.title}
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
              {feature.title}
            </h3>
            <p
              className="font-sans font-normal text-[#4B5563]"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

// SECTION 2: TEMPLATES & PLAYBOOKS
function TemplatesPlaybooksSection() {
  const templates = [
    {
      title: 'Starter Templates',
      description:
        'Launch in hours with pre-built flows for paid-traffic capture, abandoned-cart recovery, high-value lead routing, retention/save plays, and Tier-1 support deflection.',
    },
    {
      title: 'Reusable Playbook Modules',
      description:
        'Wrap your SDR, AE, and CSM playbooks into portable blocks (e.g., Budget Discovery, Renewal Save, Partner Qualification) that can be dropped into any journey.',
    },
    {
      title: 'Vertical-Tuned Blueprints',
      description:
        'Optional best-practice configurations for eCommerce, Healthcare, Financial Services, Multi-Location, and B2B SaaS verticals.',
    },
  ];

  return (
    <PageSection background="light" padding="default">
      <div className="max-w-4xl mx-auto mb-12">
        <h2
          className="font-heading mb-8 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Start from Proven Revenue Recipes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {templates.map((template, index) => (
          <div
            key={template.title}
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
              {template.title}
            </h3>
            <p
              className="font-sans font-normal text-[#4B5563]"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {template.description}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

// SECTION 3: TESTING & OPTIMIZATION
function TestingOptimizationSection() {
  const testingFeatures = [
    {
      title: 'Safe Sandboxes',
      description:
        'Clone any active workflow to a sandbox environment. Test new messaging, routing rules, or enrichment logic against a controlled traffic subset before promoting to production.',
    },
    {
      title: 'A/B & Multi-Arm Tests',
      description:
        'Split traffic across node variations or entire flow variants. Compare conversion rate, CSAT, handle time, and coverage — not just click-through rates.',
    },
    {
      title: 'Version Control & Rollback',
      description:
        'Every change is captured in a timestamped changelog with author attribution. If a tweak underperforms, roll back to a prior version in one click.',
    },
  ];

  return (
    <PageSection background="muted" padding="default">
      <div className="max-w-4xl mx-auto mb-12">
        <h2
          className="font-heading mb-8 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Experiment Without Breaking Production
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testingFeatures.map((feature, index) => (
          <div
            key={feature.title}
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
              {feature.title}
            </h3>
            <p
              className="font-sans font-normal text-[#4B5563]"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

// SECTION 4: COLLABORATION & GOVERNANCE
function CollaborationGovernanceSection() {
  const governanceFeatures = [
    {
      title: 'Role-based Permissions',
      description:
        'Role-based permissions for Marketing, Sales, CX, and Operations — each team sees and edits only what they own.',
    },
    {
      title: 'Inline Collaboration',
      description:
        'Inline commenting and @mentions on any node, so strategic context stays where the work happens.',
    },
    {
      title: 'Approval Workflows',
      description:
        'Approval workflows ensure legal, compliance, or InfoSec sign off on new experiences before they reach production.',
    },
    {
      title: 'Activity History',
      description:
        'Activity history by user: what changed, when, and the rationale behind each update.',
    },
  ];

  return (
    <PageSection background="light" padding="default">
      <div className="max-w-4xl mx-auto mb-12">
        <h2
          className="font-heading mb-8 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          One Canvas for GTM, With Guardrails for Risk
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {governanceFeatures.map((feature, index) => (
          <div
            key={feature.title}
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
              {feature.title}
            </h3>
            <p
              className="font-sans font-normal text-[#4B5563]"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
