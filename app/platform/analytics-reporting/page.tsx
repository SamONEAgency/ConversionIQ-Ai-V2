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
import { FooterCTA } from '@/components/content/FooterCTA';

export default function AnalyticsReportingPage() {
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
            Analytics & Reporting: Know Exactly What AI Delivers
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
            Conversation-level visibility into revenue, savings, and customer experience — across every node, channel, and segment.
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
            ConversionIQ transforms every interaction into structured, attributable data. From a single dashboard, see how Web-Chat, SMS, WhatsApp, Social DMs, and CommentResponder™ contribute to pipeline, retention, and operational efficiency — in real time.
          </p>
        </div>
      </PageSection>

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
  const features = [
    {
      title: 'Goal-Based Metrics',
      description:
        'Track leads captured, meetings booked, opportunities created, deals closed, and tickets resolved autonomously — filterable by node, campaign, workflow, or segment.',
    },
    {
      title: 'Integrated Tracking Infrastructure',
      description:
        'Dedicated tracking phone numbers and short links connect every call, text, and click back to the exact conversation and workflow that originated them.',
    },
    {
      title: 'CRM-Aligned Reporting',
      description:
        'All outcomes write back to Salesforce, HubSpot, GoHighLevel, or Zoho so your BI layer and board reporting stay aligned with your system of record.',
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
          From First Message to Closed-Won, Fully Attributed
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

// SECTION 2: CONVERSATION INTELLIGENCE
function ConversationIntelligenceSection() {
  const features = [
    {
      title: 'Topic Clusters',
      description:
        'Automatically group questions and phrases into themes (billing, product gaps, shipping delays, pricing objections) to inform roadmap, CX strategy, and playbook refinement.',
    },
    {
      title: 'Sentiment & Risk Signals',
      description:
        'Surface conversations that show frustration, confusion, or escalation risk. Give human teams a prioritized queue where intervention has the highest ROI.',
    },
    {
      title: 'Searchable Transcript Archive',
      description:
        'Find any conversation by keyword, campaign, agent, or node. Identify what "great" looks like and convert it into new playbook modules.',
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

// SECTION 3: NODE & FUNNEL PERFORMANCE
function NodeFunnelPerformanceSection() {
  const features = [
    {
      title: 'Node-Level Dashboards',
      description:
        'Dedicated performance views for Web-Chat, SMS, WhatsApp, Social & Messenger, CommentResponder™, and Dotti DeepLink™.',
    },
    {
      title: 'Visual Drop-Off Maps',
      description:
        'See exactly where conversations stall and where re-engagement via SMS, email, or retargeting recovers value downstream.',
    },
    {
      title: 'Capacity & Concurrency Metrics',
      description:
        'Monitor peak concurrent threads, average handle times, and coverage gaps that still require staff augmentation.',
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
          Optimize Every Channel, Not Just the Average
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

// SECTION 4: GOVERNANCE & COMPLIANCE REPORTING
function GovernanceComplianceSection() {
  const features = [
    {
      title: 'Exportable Audit Logs',
      description:
        'Exportable audit logs of all AI decisions, escalations, human overrides, and suppression events.',
    },
    {
      title: 'Compliance Activity Reports',
      description:
        'TCPA, GDPR, HIPAA, and SOC2 compliance activity reports — formatted for internal audits or external review.',
    },
    {
      title: 'Guardrail Evidence',
      description:
        'Guardrail evidence: where the system blocked a response, where human approval was required, and how policies are enforced across every channel in real time.',
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
          Reporting Built for Legal, Ops, and the Board
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

