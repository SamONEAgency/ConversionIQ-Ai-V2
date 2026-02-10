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
import { SplitSection } from '@/components/layout/SplitSection';
import { FooterCTA } from '@/components/content/FooterCTA';
import { MessageSquare, Phone, MessageCircle, Facebook, Instagram, Mail, Target, Zap, TrendingUp } from 'lucide-react';

export default function IntegrationsPage() {
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
                Built for Modern Revenue Stacks
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
                Connect ConversionIQ to the systems you already trust without ripping out or rebuilding your workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

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
      initial: 'S',
      color: '#00A1E0', // Salesforce blue
    },
    {
      name: 'HubSpot',
      description:
        'Map contacts, deals, lists, and lifecycle stages. Trigger HubSpot workflows when Chatti qualifies or converts a lead.',
      initial: 'H',
      color: '#FF7A59', // HubSpot orange
    },
    {
      name: 'GoHighLevel',
      description:
        'Plug into existing pipelines, automations, and campaigns without disrupting your current customer journeys.',
      initial: 'G',
      color: '#00C853', // Green
    },
    {
      name: 'Zoho CRM',
      description:
        'Push enriched profiles, qualification answers, and conversation outcomes directly into Zoho modules.',
      initial: 'Z',
      color: '#E53E3E', // Red
    },
    {
      name: 'Custom CRMs & Warehouses',
      description:
        'Use webhooks and our REST API to integrate proprietary systems, CDPs, Snowflake, or BigQuery.',
      initial: '{ }',
      color: '#6B7280', // Gray
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
  const channels = [
    { name: 'Web-Chat', icon: MessageSquare },
    { name: 'SMS', icon: Phone },
    { name: 'WhatsApp Business API', icon: MessageCircle },
    { name: 'Facebook', icon: Facebook },
    { name: 'Instagram', icon: Instagram },
    { name: 'Email & Webhooks', icon: Mail },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 w-full lg:w-auto" style={{ maxWidth: '600px' }}>
            {/* Optional Eyebrow */}
            <div
              className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-2"
              style={{ fontSize: '12px', letterSpacing: '0.15em' }}
              data-aos="fade-up"
            >
              CHANNEL ECOSYSTEM
            </div>
            
            {/* H2 */}
            <h2
              className="font-heading mb-4 text-left"
              style={{
                fontSize: 'clamp(36px, 3vw, 40px)',
                fontWeight: 300,
                color: '#1B1340',
              }}
              data-aos="fade-up"
            >
              Connect the Channels Your Customers Already Use
            </h2>
            
            {/* Supporting Sentence */}
            <p
              className="text-base text-slate-600 mb-8 font-sans leading-normal font-normal"
              style={{ lineHeight: '1.6', fontSize: '16px' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Connect every channel your customers already rely on into a single, autonomous engagement engine.
            </p>
            
            {/* Channel List - 3 rows x 2 columns grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {channels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={channel.name}
                    className="flex items-center gap-3 group"
                    data-aos="fade-up"
                    data-aos-delay={200 + (index * 100)}
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#00B4D8] group-hover:text-[#14B8A6] transition-colors" />
                    </div>
                    <span
                      className="font-heading font-medium text-[#1B1340] group-hover:text-[#14B8A6] transition-colors"
                      style={{ fontSize: '16px', fontWeight: 500, lineHeight: '1.5' }}
                    >
                      {channel.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual Card */}
          <div
            className="w-full lg:w-[480px] flex-shrink-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div
              className="w-full bg-gradient-to-br from-[#383299]/10 to-[#ef2d60]/10 rounded-xl flex items-center justify-center"
              style={{
                minHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
              }}
            >
              <span
                className="font-sans font-medium text-slate-500"
                style={{ fontSize: '16px', fontWeight: 500, color: '#6B7280' }}
              >
                Channel Ecosystem Map
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SECTION 3: AD & MARKETING PLATFORMS
function AdMarketingPlatformsSection() {
  const adFeatures = [
    {
      title: 'Campaign Attribution',
      description:
        'Capture campaign, ad set, and creative identifiers on every enriched lead automatically.',
      icon: Target,
    },
    {
      title: 'Direct Ad-to-Conversation',
      description:
        'Trigger Chatti conversations directly from Click-to-Messenger and Click-to-WhatsApp ad units.',
      icon: Zap,
    },
    {
      title: 'Revenue-Based Optimization',
      description:
        'Send conversion signals and lead quality data back to ad platform optimization engines so they learn from revenue outcomes, not just click-through rates.',
      icon: TrendingUp,
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
            Close the Loop with Your Ad Spend
          </h2>
        </div>

        {/* Single-row horizontal strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {adFeatures.map((feature, index) => {
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
                    <Icon className="w-10 h-10 text-[#1B1340]" />
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

// SECTION 4: IMPLEMENTATION OPTIONS
function ImplementationOptionsSection() {
  const implementationOptions = [
    {
      title: 'Snippet-Based Integration',
      description:
        'Snippet-based website integration via GTM, direct header injection, or platform-specific plugins (Webflow, Shopify, WordPress).',
      time: '~5 min',
    },
    {
      title: 'OAuth Connectors',
      description:
        'OAuth-based CRM and channel connectors wherever possible to reduce IT involvement.',
      time: '~10 min',
    },
    {
      title: 'Enterprise Support',
      description:
        'Comprehensive implementation guides and dedicated solution architects for complex, multi-system enterprise rollouts.',
      time: '~1 hour',
    },
    {
      title: 'Staging Environments',
      description:
        'Staging environments for testing integrations before production deployment.',
      time: '~15 min',
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
            className="bg-white border border-[#E5E7EB] rounded-xl p-6 relative"
            style={{
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              borderLeft: '4px solid #8B5CF6',
            }}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
          >
            {/* Time Badge */}
            <div
              className="absolute top-4 right-4 px-2 py-1 rounded-full"
              style={{
                background: '#F3F4F6',
                fontSize: '12px',
                fontWeight: 600,
                color: '#4B5563',
              }}
            >
              {option.time}
            </div>
            <h3
              className="font-heading font-semibold text-[#1B1340] mb-3 pr-16"
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
