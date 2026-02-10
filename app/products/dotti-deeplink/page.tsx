'use client';

/**
 * DOTTI Deeplink PRODUCT PAGE SECTION INVENTORY
 * =============================================
 * 1. ProductHero_DottiDeepLink - Centered hero + inline CTAs (unique to this page)
 * 2. Product_EndOfAnonymousTraffic - <SplitSection /> (image-right, muted) with 5 bullets
 * 3. Product_DataComparisonTable - <PageSection /> with custom data table (UNIQUE)
 * 4. Product_AutonomousIdentityProtocols - <SplitSection /> (image-left, muted) with 4 bullets
 * 5. Product_PrivacyFirstGovernance - <SplitSection /> (image-right, white) with 5 bullets
 * 6. Product_CRMIntegration - <PageSection /> with text blocks + logo pills
 * 7. Shared_FooterCTA - <FooterCTA /> with trust line
 * 8. SiteFooter_NavAndMeta - <Footer />
 */

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SplitSection, FeatureItem } from '@/components/layout/SplitSection';
import { PageSection } from '@/components/layout/PageSection';
import { FeatureList } from '@/components/layout/FeatureList';
import { Button } from '@/components/ui/Button';

export default function DottiDeepLinkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* HERO SECTION WITH INLINE CTAs */}
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
                Real-Time Identity & Prospect Enrichment
              </h1>

              {/* Subcopy */}
              <p 
                className="text-base text-slate-600 font-sans font-light mx-auto mb-8" 
                style={{ 
                  lineHeight: '1.5',
                  maxWidth: '640px'
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Turn anonymous clicks into known personas by bridging site traffic with thousands of verified financial and demographic data points in milliseconds.
              </p>
              
              {/* CTA Buttons - Unique to this page */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link href="/request-a-demo">
                  <Button
                    variant="primary"
                    size="default"
                    style={{
                      background: '#ef2d60',
                      color: '#FFFFFF',
                      border: 'none',
                      boxShadow: '0 2px 8px rgba(239, 45, 96, 0.3)',
                    }}
                  >
                    Get a Free Data Sample
                  </Button>
                </Link>
                <Link href="/request-a-demo">
                  <Button
                    variant="secondary"
                    size="default"
                    style={{
                      background: 'transparent',
                      color: '#383299',
                      border: '2px solid #383299',
                    }}
                  >
                    See the Enrichment Lab
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 1: THE END OF ANONYMOUS TRAFFIC */}
      <EndOfAnonymousTrafficSection />
      
      {/* SECTION 2: DATA COMPARISON TABLE */}
      <DataComparisonTableSection />
      
      {/* SECTION 3: AUTONOMOUS IDENTITY PROTOCOLS */}
      <AutonomousIdentityProtocolsSection />
      
      {/* SECTION 4: PRIVACY-FIRST DATA GOVERNANCE */}
      <PrivacyFirstGovernanceSection />
      
      {/* SECTION 5: FRICTIONLESS STACK INTEGRATION */}
      <CRMIntegrationSection />
      
      {/* FOOTER CTA */}
      <FooterCTAWithTrustLine
        title="Stop Guessing. Start Identifying."
        subtitle="Give your autonomous agents the data they need to be dangerous."
        primaryLabel="Activate Dotti DeepLink Resolution"
        primaryHref="/request-a-demo"
        secondaryLabel="Get a Free Data Sample"
        secondaryHref="/request-a-demo"
      />
      
      <Footer />
    </div>
  );
}

// SECTION 1: THE END OF ANONYMOUS TRAFFIC
function EndOfAnonymousTrafficSection() {
  const features: FeatureItem[] = [
    {
      title: 'Instant Reverse-Append Logic',
      body: 'The moment a user provides a single contact point (Email or Phone) or lands on a tracked gateway, the Dotti automatically populates missing CRM fields with verified 3rd-party data.',
    },
    {
      title: 'Surgical Identity Resolution',
      body: 'Segment and prioritize your traffic using up to 2,000+ objective data markers, including Demographics (Age/Gender), Geographic (Precision Location), Financial Attributes (Net Worth/HHI), Credit Intent, Property Data, Professional Profiles, and Lifestyle Affinities (Interests/Hobbies).',
    },
    {
      title: 'Verified Lifestyle Affinities',
      body: 'Identify the prospect\'s real-world behaviors -- from boat ownership and frequent travel to specific tech enthusiast triggers, for hyper-accurate marketing orchestration.',
    },
    {
      title: 'Digital Body Language Mapping',
      body: 'Track real-time user paths and pixel data to distinguish between \'casual browsing\' and \'high-intent buying\' behaviors, allowing the engine to prioritize the most valuable leads.',
    },
    {
      title: 'Historical Database Synchronization',
      body: 'DeepLink cross-references your internal records in real-time to recognize returning buyers and past interactions, ensuring context is never lost.',
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
      {/* TODO: Replace placeholder visual card with Orchestration Flow Visual */}
      Orchestration Flow Visual
    </div>
  );

  return (
    <SplitSection
      title="The End of Anonymous Traffic"
      subtitle="Most platforms only see IP addresses. Dotti DeepLink identifies the human behind the screen, transforming raw traffic into enriched, high-fidelity prospect profiles."
      features={features}
      side="image-right"
      background="muted"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}


// SECTION 2: DATA COMPARISON TABLE (UNIQUE TO THIS PAGE)
function DataComparisonTableSection() {
  const tableData = [
    {
      resolvedProfile: 'Anonymous User',
      identifiedAttribute: '$2.5M Net Worth / Avid Golfer',
      autonomousExecution: 'Matti displays "Luxury Golf Resort" creative',
    },
    {
      resolvedProfile: 'New Lead',
      identifiedAttribute: '750+ Credit Score',
      autonomousExecution: 'Chatti offers premium financing or VIP tiering',
    },
    {
      resolvedProfile: 'Returning Visitor',
      identifiedAttribute: 'Past Purchase: Luxury SUV',
      autonomousExecution: 'Omni triggers a personalized concierge SMS',
    },
    {
      resolvedProfile: 'Abandoned Cart',
      identifiedAttribute: 'Primary Language: Spanish',
      autonomousExecution: 'Chatti re-engages in Spanish automatically',
    },
  ];

  return (
    <PageSection background="light" padding="default">
      <div className="text-center mb-12">
        <h2
          className="font-heading mb-4 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Conversion Blueprints: Data-Driven Orchestration
        </h2>
        <p
          className="text-base text-slate-600 max-w-2xl mx-auto font-sans leading-normal font-normal"
          style={{ lineHeight: '1.6', fontSize: '16px' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dotti doesn&apos;t just collect data. She provides the &apos;Grounded Intelligence&apos; that allows Maestri, Chatti, Matti and Omni to pivot their execution with mathematical precision.
        </p>
      </div>
      
      {/* Data Comparison Table */}
      <div
        className="w-full overflow-hidden rounded-xl"
        style={{
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <table className="w-full border-collapse">
          {/* Header Row */}
          <thead>
            <tr style={{ background: '#1B1340', color: '#FFFFFF' }}>
              <th
                className="text-left font-heading font-semibold"
                style={{
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                The Resolved Profile
              </th>
              <th
                className="text-left font-heading font-semibold"
                style={{
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                Identified Attribute
              </th>
              <th
                className="text-left font-heading font-semibold"
                style={{
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                Autonomous Execution
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                style={{
                  background: index % 2 === 0 ? '#FFFFFF' : '#F7F8FC',
                }}
              >
                <td
                  className="font-sans font-medium text-slate-700"
                  style={{
                    padding: '16px',
                    fontSize: '16px',
                    fontWeight: 500,
                  }}
                >
                  {row.resolvedProfile}
                </td>
                <td
                  className="font-sans font-normal text-slate-600"
                  style={{
                    padding: '16px',
                    fontSize: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  {row.identifiedAttribute}
                </td>
                <td
                  className="font-sans font-normal text-slate-600"
                  style={{
                    padding: '16px',
                    fontSize: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  {row.autonomousExecution}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageSection>
  );
}

// SECTION 3: AUTONOMOUS IDENTITY PROTOCOLS
function AutonomousIdentityProtocolsSection() {
  const features: FeatureItem[] = [
    {
      title: 'The Eyes of the Ecosystem',
      body: 'Without Dotti, AI is forced to guess. With Dotti, every conversation is grounded in the prospect\'s real-world profile.',
    },
    {
      title: 'Predictive Lead Scoring',
      body: 'Dotti analyzes the user path to determine \'Lead Velocity.\' High-value profiles are instantly flagged for Maestri to prioritize and escalate for human intervention.',
    },
    {
      title: 'Surgical CRM Mapping',
      body: 'No manual data entry. Every attribute resolved by Dotti; from home value to household composition, maps directly to the corresponding fields in Salesforce, HubSpot, ZohoCRM, GoHighLevel or your legacy CRM.',
    },
    {
      title: 'Identity-Driven Orchestration',
      body: 'Dotti provides the foundational data layer that allows the platform to move from generic automation to personalized, high-fidelity sales experiences.',
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
      {/* TODO: Replace placeholder visual card with Identity Orchestration Visual */}
      Identity Orchestration Visual
    </div>
  );

  return (
    <SplitSection
      title="Autonomous Identity Protocols"
      subtitle="The technical foundation that ensures every interaction in the ecosystem is fueled by precision, not guesswork."
      features={features}
      side="image-left"
      background="muted"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 4: PRIVACY-FIRST DATA GOVERNANCE
function PrivacyFirstGovernanceSection() {
  const features: FeatureItem[] = [
    {
      title: 'Audited Security Standards',
      body: 'ChattiLive is SOC2 Type II certified and is currently in progress with ISO 42001 certification. These protocols ensure that our AI management systems and data handling processes meet the highest global standards for security and ethics.',
    },
    {
      title: 'Regulatory Compliance Engineering',
      body: 'Dotti is designed to operate in a \'Consent-First\' environment. The engine integrates with your Consent Management Platform (CMP) to ensure resolution and tracking protocols only activate upon verified user opt-in, mitigating risks associated with CIPA and regional wiretapping statutes.',
    },
    {
      title: 'Dynamic Data Suppression',
      body: 'The system features \'No-Track\' zone configurations. You can suppress identity resolution on sensitive URLs (e.g., checkout pages, HIPAA-regulated portals, or specific geographic regions) to ensure total alignment with your legal risk profile.',
    },
    {
      title: 'CCPA & GDPR Compliance',
      body: 'All identity resolution and data sourcing protocols meet the most rigorous global privacy standards for data processing and \'Right to be Forgotten\' requests.',
    },
    {
      title: 'Secure Data Segregation',
      body: 'Your proprietary customer data is never mixed with 3rd-party clouds or used to train public LLMs. Your data remains your competitive advantage.',
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
      {/* TODO: Replace placeholder visual card with Governance & Security Visual */}
      Governance & Security Visual
    </div>
  );

  return (
    <SplitSection
      title="Privacy-First Data Governance"
      subtitle="Intelligence must never compromise integrity. Dotti operates within a strictly audited, enterprise-grade compliance framework."
      features={features}
      side="image-right"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 5: FRICTIONLESS STACK INTEGRATION
function CRMIntegrationSection() {
  const crmLogos = ['Salesforce', 'HubSpot', 'GoHighLevel', 'Zoho', 'Custom APIs'];

  return (
    <PageSection background="light" padding="default">
      <div className="text-center mb-12">
        <h2
          className="font-heading mb-4 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Frictionless Stack Integration
        </h2>
        <p
          className="text-base text-slate-600 max-w-2xl mx-auto font-sans leading-normal font-normal mb-8"
          style={{ lineHeight: '1.6', fontSize: '16px' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dotti does the technical heavy lifting, ensuring your core database is enriched without manual intervention.
        </p>
      </div>
      
      {/* Two Text Blocks - Side by Side */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h3
            className="font-heading font-semibold text-slate-700 mb-2"
            style={{
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            Real-Time Data Injection
          </h3>
          <p
            className="text-base text-slate-600 font-sans leading-normal font-normal"
            style={{ lineHeight: '1.6', fontSize: '16px' }}
          >
            Dotti writes enriched attributes directly to your CRM, ensuring your sales team has the full financial context before they ever pick up the phone.
          </p>
        </div>
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3
            className="font-heading font-semibold text-slate-700 mb-2"
            style={{
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            Universal API Connectivity
          </h3>
          <p
            className="text-base text-slate-600 font-sans leading-normal font-normal"
            style={{ lineHeight: '1.6', fontSize: '16px' }}
          >
            Whether you use Salesforce, HubSpot, or a custom internal stack, Dotti integrates via native hooks to maintain a single source of truth.
          </p>
        </div>
      </div>
      
      {/* CRM Logo Pills */}
      <div
        className="flex flex-wrap justify-center items-center gap-4"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        {crmLogos.map((crm, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-white border border-slate-200 rounded-full font-sans font-medium text-slate-700 hover:border-[#383299] hover:text-[#383299] transition-colors"
            style={{
              fontSize: '16px',
              fontWeight: 500,
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}
          >
            {crm}
          </div>
        ))}
      </div>
    </PageSection>
  );
}

// FOOTER CTA WITH TRUST LINE
function FooterCTAWithTrustLine({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <section
      className="py-[100px] text-white"
      style={{ background: '#20127E' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
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
            {title}
          </h2>
          <p
            className="text-base text-white/90 mb-8 font-sans leading-normal font-light text-center"
            style={{ lineHeight: '1.6', fontSize: '16px' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link href={primaryHref}>
              <Button
                variant="dark-primary"
                size="default"
              >
                {primaryLabel}
              </Button>
            </Link>
            <Link href={secondaryHref}>
              <Button
                variant="dark-secondary"
                size="default"
              >
                {secondaryLabel}
              </Button>
            </Link>
          </div>

          {/* Trust Line */}
          <p
            className="text-center font-sans font-normal italic"
            style={{
              fontSize: '12px',
              color: '#9CA3AF',
            }}
            data-aos="fade-up"
            data-aos-delay="250"
          >
            SOC2 Type II Security — Every identity resolution happens within an encrypted, audited environment.
          </p>
        </div>
      </div>
    </section>
  );
}

