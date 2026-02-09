'use client';

/**
 * INTEGRATIONS PAGE
 * =================
 * Route: /integrations
 * Connect ConversionIQ to your stack
 */

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import { FooterCTA } from '@/components/content/FooterCTA';

export default function IntegrationsPage() {
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
            Integrations: Built for Modern Revenue Stacks
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
            Connect ConversionIQ to the systems you already trust — without ripping out or rebuilding your workflows.
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
            ConversionIQ sits on top of your existing CRM, marketing automation, and communication tools. Bi-directional sync, official channel integrations, and an API-first design make deployment low-risk, low-lift, and high-impact.
          </p>
        </div>
      </PageSection>

      {/* SECTION 1: CRM & DATA PLATFORMS */}
      <CRMDataPlatformsSection />

      {/* SECTION 2: CHANNELS & MESSAGING */}
      <ChannelsMessagingSection />

      {/* SECTION 3: AD & MARKETING PLATFORMS */}
      <AdMarketingPlatformsSection />

      {/* SECTION 4: IMPLEMENTATION OPTIONS */}
      <ImplementationOptionsSection />

      {/* FOOTER CTA */}
      <FooterCTA
        title="See How ConversionIQ Fits into Your Stack"
        subtitle="Share a simple diagram of your tools. We'll show you exactly where autonomous agents plug in — and what can remain untouched."
        primaryLabel="Talk to an Integration Specialist"
        primaryHref="/request-a-demo"
        secondaryLabel="View Integration Docs"
        secondaryHref="/help"
      />

      <Footer />
    </div>
  );
}

// SECTION 1: CRM & DATA PLATFORMS
function CRMDataPlatformsSection() {
  const crmIntegrations = [
    {
      name: 'Salesforce',
      description:
        'Sync leads, contacts, activities, opportunities, and full conversation transcripts in real time. Respects standard and custom field schemas.',
    },
    {
      name: 'HubSpot',
      description:
        'Map contacts, deals, lists, and lifecycle stages. Trigger HubSpot workflows when Chatti qualifies or converts a lead.',
    },
    {
      name: 'GoHighLevel',
      description:
        'Plug into existing pipelines, automations, and campaigns without disrupting your current customer journeys.',
    },
    {
      name: 'Zoho CRM',
      description:
        'Push enriched profiles, qualification answers, and conversation outcomes directly into Zoho modules.',
    },
    {
      name: 'Custom CRMs & Warehouses',
      description:
        'Use webhooks and our REST API to integrate proprietary systems, CDPs, Snowflake, or BigQuery.',
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
          Native CRM Synchronization
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
          Keep your CRM as the source of truth while agents handle the heavy lifting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {crmIntegrations.map((integration, index) => (
          <div
            key={integration.name}
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
              {integration.name}
            </h3>
            <p
              className="font-sans font-normal text-[#4B5563]"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {integration.description}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

// SECTION 2: CHANNELS & MESSAGING
function ChannelsMessagingSection() {
  const channelIntegrations = [
    {
      name: 'Web-Chat',
      description:
        'Lightweight, asynchronous script via direct install or Google Tag Manager. Zero impact on Core Web Vitals, page speed, or SEO rankings.',
    },
    {
      name: 'SMS',
      description:
        '10DLC, shortcode, and toll-free support with automated TCR registration and carrier-grade opt-out management.',
    },
    {
      name: 'WhatsApp Business API',
      description:
        'Verified business messaging at global scale, including outbound template management and Green Tick support.',
    },
    {
      name: 'Instagram & Facebook',
      description:
        'Official Meta Approved App for CommentResponder™ and ChattiLive Messenger. No scraping, no grey-hat automations.',
    },
    {
      name: 'Email & Webhooks',
      description:
        'Trigger notifications, conversation summaries, and escalation alerts via your preferred email provider or webhook endpoints.',
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
          Connect the Channels Your Customers Already Use
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {channelIntegrations.map((integration, index) => (
          <div
            key={integration.name}
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
              {integration.name}
            </h3>
            <p
              className="font-sans font-normal text-[#4B5563]"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {integration.description}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

// SECTION 3: AD & MARKETING PLATFORMS
function AdMarketingPlatformsSection() {
  const adFeatures = [
    {
      title: 'Campaign Attribution',
      description:
        'Capture campaign, ad set, and creative identifiers on every enriched lead automatically.',
    },
    {
      title: 'Direct Ad-to-Conversation',
      description:
        'Trigger Chatti conversations directly from Click-to-Messenger and Click-to-WhatsApp ad units.',
    },
    {
      title: 'Revenue-Based Optimization',
      description:
        'Send conversion signals and lead quality data back to ad platform optimization engines so they learn from revenue outcomes, not just click-through rates.',
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
          Close the Loop with Your Ad Spend
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {adFeatures.map((feature, index) => (
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

// SECTION 4: IMPLEMENTATION OPTIONS
function ImplementationOptionsSection() {
  const implementationOptions = [
    {
      title: 'Snippet-Based Integration',
      description:
        'Snippet-based website integration via GTM, direct header injection, or platform-specific plugins (Webflow, Shopify, WordPress).',
    },
    {
      title: 'OAuth Connectors',
      description:
        'OAuth-based CRM and channel connectors wherever possible to reduce IT involvement.',
    },
    {
      title: 'Enterprise Support',
      description:
        'Comprehensive implementation guides and dedicated solution architects for complex, multi-system enterprise rollouts.',
    },
    {
      title: 'Staging Environments',
      description:
        'Staging environments for testing integrations before production deployment.',
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
          Low-Lift Deployment for Any Team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {implementationOptions.map((option, index) => (
          <div
            key={option.title}
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
              {option.title}
            </h3>
            <p
              className="font-sans font-normal text-[#4B5563]"
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {option.description}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
