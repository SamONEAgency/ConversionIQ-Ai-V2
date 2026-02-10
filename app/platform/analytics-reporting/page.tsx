'use client';

/**
 * ANALYTICS & REPORTING - PLATFORM PAGE
 * =====================================
 * Route: /platform/analytics-reporting
 * Conversation-level revenue visibility
 */

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import { SplitSection, FeatureItem } from '@/components/layout/SplitSection';
import { FooterCTA } from '@/components/content/FooterCTA';
import { FolderTree, AlertCircle, Search, FileText, Shield, CheckCircle } from 'lucide-react';

export default function AnalyticsReportingPage() {
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
                Know Exactly What AI Delivers
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
                Conversation-level visibility into revenue, savings, and customer experience across every node, channel, and segment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: REVENUE ATTRIBUTION */}
      <RevenueAttributionSection />

      {/* SECTION 2: CONVERSATION INTELLIGENCE */}
      <ConversationIntelligenceSection />

      {/* SECTION 3: NODE & FUNNEL PERFORMANCE */}
      <NodeFunnelPerformanceSection />

      {/* SECTION 4: GOVERNANCE & COMPLIANCE REPORTING */}
      <GovernanceComplianceSection />

      {/* FOOTER CTA */}
      <FooterCTA
        title="Prove the ROI of Autonomous Engagement"
        subtitle="Share a snapshot of your current funnel volume. We'll model the revenue and savings opportunities your team is leaving on the table today."
        primaryLabel="Request an ROI Analysis"
        primaryHref="/request-a-demo"
        secondaryLabel="View Sample Dashboards"
        secondaryHref="/request-a-demo"
      />

      <Footer />
    </div>
  );
}

// SECTION 1: REVENUE ATTRIBUTION
function RevenueAttributionSection() {
  const features: FeatureItem[] = [
    {
      title: 'Goal-Based Metrics',
      body:
        'Track leads captured, meetings booked, opportunities created, deals closed, and tickets resolved autonomously — filterable by node, campaign, workflow, or segment.',
    },
    {
      title: 'Integrated Tracking Infrastructure',
      body:
        'Dedicated tracking phone numbers and short links connect every call, text, and click back to the exact conversation and workflow that originated them.',
    },
    {
      title: 'CRM-Aligned Reporting',
      body:
        'All outcomes write back to Salesforce, HubSpot, GoHighLevel, or Zoho so your BI layer and board reporting stay aligned with your system of record.',
    },
  ];

  return (
    <SplitSection
      title="From First Message to Closed-Won, Fully Attributed"
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
        Revenue Attribution Funnel
      </div>
    </SplitSection>
  );
}

// SECTION 2: CONVERSATION INTELLIGENCE
function ConversationIntelligenceSection() {
  const features = [
    {
      title: 'Topic Clusters',
      description:
        'Automatically group questions and phrases into themes (billing, product gaps, shipping delays, pricing objections) to inform roadmap, CX strategy, and playbook refinement.',
      color: '#00B4D8', // Design Blue
      icon: FolderTree,
    },
    {
      title: 'Sentiment & Risk Signals',
      description:
        'Surface conversations that show frustration, confusion, or escalation risk. Give human teams a prioritized queue where intervention has the highest ROI.',
      color: '#ef2d60', // Coral
      icon: AlertCircle,
    },
    {
      title: 'Searchable Transcript Archive',
      description:
        'Find any conversation by keyword, campaign, agent, or node. Identify what "great" looks like and convert it into new playbook modules.',
      color: '#8B5CF6', // Purple
      icon: Search,
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
          Understand What Customers Are Really Saying
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative overflow-hidden"
              style={{
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              }}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              {/* Colored Top Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: feature.color,
                }}
              />
              <div className="mt-2 mb-3">
                {Icon && <Icon className="w-6 h-6" style={{ color: feature.color }} />}
              </div>
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
    </PageSection>
  );
}

// SECTION 3: NODE & FUNNEL PERFORMANCE
function NodeFunnelPerformanceSection() {
  const features: FeatureItem[] = [
    {
      title: 'Node-Level Dashboards',
      body:
        'Dedicated performance views for Web-Chat, SMS, WhatsApp, Social & Messenger, CommentResponder™, and Dotti DeepLink™.',
    },
    {
      title: 'Visual Drop-Off Maps',
      body:
        'See exactly where conversations stall and where re-engagement via SMS, email, or retargeting recovers value downstream.',
    },
    {
      title: 'Capacity & Concurrency Metrics',
      body:
        'Monitor peak concurrent threads, average handle times, and coverage gaps that still require staff augmentation.',
    },
  ];

  return (
    <SplitSection
      title="Optimize Every Channel, Not Just the Average"
      features={features}
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
        Channel Performance Dashboard
      </div>
    </SplitSection>
  );
}

// SECTION 4: GOVERNANCE & COMPLIANCE REPORTING
function GovernanceComplianceSection() {
  const features = [
    {
      title: 'Exportable Audit Logs',
      description:
        'Exportable audit logs of all AI decisions, escalations, human overrides, and suppression events.',
      icon: FileText,
    },
    {
      title: 'Compliance Activity Reports',
      description:
        'TCPA, GDPR, HIPAA, and SOC2 compliance activity reports — formatted for internal audits or external review.',
      icon: Shield,
    },
    {
      title: 'Guardrail Evidence',
      description:
        'Guardrail evidence: where the system blocked a response, where human approval was required, and how policies are enforced across every channel in real time.',
      icon: CheckCircle,
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
            Reporting Built for Legal, Ops, and the Board
          </h2>
        </div>

        {/* Single-row horizontal strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                {Icon && (
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-[#1B1340]" />
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

