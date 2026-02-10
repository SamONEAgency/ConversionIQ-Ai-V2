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
import { SplitSection, FeatureItem } from '@/components/layout/SplitSection';
import { FooterCTA } from '@/components/content/FooterCTA';
import { FileText, Layers, Building2, Lock, Shield } from 'lucide-react';

export default function WorkflowBuilderPage() {
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
                Visual Control for Autonomous Journeys
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
                Design end-to-end flows that Chatti, Dotti, and Omni execute autonomously while your team maintains full operational control.
              </p>
            </div>
          </div>
        </div>
      </section>

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
  const features: FeatureItem[] = [
    {
      title: 'Drag-and-Drop Nodes',
      body:
        'Build flows with triggers, enrichment steps, channel activations, wait conditions, and escalation points using an intuitive zoomable canvas. No nested if/else logic to maintain.',
    },
    {
      title: 'Objective Blocks',
      body:
        'Every segment of a journey is tagged with a mission — Capture Lead, Qualify, Book Meeting, Resolve Ticket, Drive Renewal — so success criteria are explicit at every step.',
    },
    {
      title: 'Contextual Previews',
      body:
        'Click any node to see the exact conversation copy, prompts, and guardrails that will execute in production, not just abstract flowchart boxes.',
    },
  ];

  return (
    <SplitSection
      title="Map Journeys the Way Revenue Teams Think"
      features={features}
      side="image-right"
      background="muted"
    >
      <div
        className="w-full bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center text-slate-400 font-sans text-sm rounded-xl"
        style={{
          minHeight: '400px',
          borderRadius: '12px',
        }}
      >
        Workflow Canvas Screenshot
      </div>
    </SplitSection>
  );
}

// SECTION 2: TEMPLATES & PLAYBOOKS
function TemplatesPlaybooksSection() {
  const templates = [
    {
      title: 'Starter Templates',
      description:
        'Launch in hours with pre-built flows for paid-traffic capture, abandoned-cart recovery, high-value lead routing, retention/save plays, and Tier-1 support deflection.',
      icon: FileText,
    },
    {
      title: 'Reusable Playbook Modules',
      description:
        'Wrap your SDR, AE, and CSM playbooks into portable blocks (e.g., Budget Discovery, Renewal Save, Partner Qualification) that can be dropped into any journey.',
      icon: Layers,
    },
    {
      title: 'Vertical-Tuned Blueprints',
      description:
        'Optional best-practice configurations for eCommerce, Healthcare, Financial Services, Multi-Location, and B2B SaaS verticals.',
      icon: Building2,
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
        {templates.map((template, index) => {
          const Icon = template.icon;
          return (
            <div
              key={template.title}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative"
              style={{
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                borderTop: '4px solid #00B4D8',
              }}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              {Icon && (
                <div className="mb-3">
                  <Icon className="w-6 h-6 text-[#00B4D8]" />
                </div>
              )}
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
          );
        })}
      </div>
    </PageSection>
  );
}

// SECTION 3: TESTING & OPTIMIZATION
function TestingOptimizationSection() {
  const testingFeatures: FeatureItem[] = [
    {
      title: 'Safe Sandboxes',
      body:
        'Clone any active workflow to a sandbox environment. Test new messaging, routing rules, or enrichment logic against a controlled traffic subset before promoting to production.',
    },
    {
      title: 'A/B & Multi-Arm Tests',
      body:
        'Split traffic across node variations or entire flow variants. Compare conversion rate, CSAT, handle time, and coverage — not just click-through rates.',
    },
    {
      title: 'Version Control & Rollback',
      body:
        'Every change is captured in a timestamped changelog with author attribution. If a tweak underperforms, roll back to a prior version in one click.',
    },
  ];

  return (
    <SplitSection
      title="Experiment Without Breaking Production"
      features={testingFeatures}
      side="image-left"
      background="muted"
    >
      <div
        className="w-full bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center text-slate-400 font-sans text-sm rounded-xl"
        style={{
          minHeight: '400px',
          borderRadius: '12px',
        }}
      >
        A/B Test Dashboard
      </div>
    </SplitSection>
  );
}

// SECTION 4: COLLABORATION & GOVERNANCE
function CollaborationGovernanceSection() {
  const governanceFeatures = [
    {
      title: 'Role-based Permissions',
      description:
        'Role-based permissions for Marketing, Sales, CX, and Operations — each team sees and edits only what they own.',
      icon: Lock,
    },
    {
      title: 'Inline Collaboration',
      description:
        'Inline commenting and @mentions on any node, so strategic context stays where the work happens.',
      icon: Shield,
    },
    {
      title: 'Approval Workflows',
      description:
        'Approval workflows ensure legal, compliance, or InfoSec sign off on new experiences before they reach production.',
      icon: Lock,
    },
    {
      title: 'Activity History',
      description:
        'Activity history by user: what changed, when, and the rationale behind each update.',
      icon: Shield,
    },
  ];

  return (
    <section className="py-[100px] bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <h2
            className="font-heading mb-8 text-center text-[#1B1340]"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
            }}
            data-aos="fade-up"
          >
            One Canvas for GTM, With Guardrails for Risk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {governanceFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
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
                {Icon && (
                  <div className="mb-3">
                    <Icon className="w-6 h-6 text-[#00B4D8]" />
                  </div>
                )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
