'use client';

/**
 * DOTTI Deeplink PRODUCT PAGE SECTION INVENTORY
 * =============================================
 * 1. ProductHero_DottiDeepLink - <ProductHero /> + inline CTAs (unique to this page)
 * 2. Product_EndOfAnonymousTraffic - <PageSection /> centered text only
 * 3. Product_ThreePillars - <PageSection /> with 3-column FeatureList
 * 4. Product_DataComparisonTable - <PageSection /> with custom data table (UNIQUE)
 * 5. Product_IdentityDrivenOrchestration - <SplitSection /> (image-right)
 * 6. Product_PrivacyFirstGovernance - <SplitSection /> (image-left)
 * 7. Product_CRMIntegration - <PageSection /> with logo pills
 * 8. Shared_FooterCTA - <FooterCTA />
 * 9. SiteFooter_NavAndMeta - <Footer />
 */

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SplitSection, FeatureItem } from '@/components/layout/SplitSection';
import { PageSection } from '@/components/layout/PageSection';
import { FeatureList } from '@/components/layout/FeatureList';
import { FooterCTA } from '@/components/content/FooterCTA';
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
      
      {/* SECTION 2: THE THREE PILLARS */}
      <ThreePillarsSection />
      
      {/* SECTION 3: DATA COMPARISON TABLE */}
      <DataComparisonTableSection />
      
      {/* SECTION 4: IDENTITY-DRIVEN ORCHESTRATION */}
      <IdentityDrivenOrchestrationSection />
      
      {/* SECTION 5: PRIVACY-FIRST DATA GOVERNANCE */}
      <PrivacyFirstGovernanceSection />
      
      {/* SECTION 6: SEAMLESS CRM INTEGRATION */}
      <CRMIntegrationSection />
      
      {/* FOOTER CTA */}
      <FooterCTA
        title="Stop Guessing. Start Identifying."
        subtitle="Give your AI agents the data they need to be dangerous."
        primaryLabel="Activate DeepLink™ Now"
        primaryHref="/request-a-demo"
        secondaryLabel="Talk to a Data Expert"
        secondaryHref="/request-a-demo"
      />
      
      <Footer />
    </div>
  );
}

// SECTION 1: THE END OF ANONYMOUS TRAFFIC
function EndOfAnonymousTrafficSection() {
  return (
    <PageSection background="light" padding="default">
      <div className="text-center mx-auto" style={{ maxWidth: '700px' }}>
        <h2
          className="font-heading mb-4 text-center"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          The End of Anonymous Traffic
        </h2>
        <p
          className="text-base text-slate-600 font-sans leading-normal font-normal"
          style={{ lineHeight: '1.6', fontSize: '16px' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Most websites only know visitors by IP address. Dotti DeepLink™ changes the equation by identifying the human behind the screen.
        </p>
      </div>
    </PageSection>
  );
}

// SECTION 2: THE THREE PILLARS OF DOTTI INTELLIGENCE
function ThreePillarsSection() {
  const pillars: FeatureItem[] = [
    {
      title: 'DeepLink™ Enrichment',
      body: 'Instant access to 2,000+ verified attributes: net worth, credit intent, and lifestyle affinities.',
    },
    {
      title: 'Historical Memory',
      body: 'Auto cross-references your database to recognize returning buyers and past interactions instantly.',
    },
    {
      title: 'Digital Body Language',
      body: 'Track real-time user paths to understand the &apos;Why&apos; behind visits and identify high-intent behaviors.',
    },
  ];

  return (
    <PageSection background="muted" padding="default">
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
          The Three Pillars of Dotti Intelligence
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="text-center"
            data-aos="fade-up"
            data-aos-delay={200 + (index * 100)}
          >
            <h3 className="text-base font-heading font-medium text-slate-700 mb-2" style={{ fontSize: '16px', fontWeight: 600 }}>
              {pillar.title}
            </h3>
            <p className="text-sm text-slate-600 leading-normal font-sans font-normal" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

// SECTION 3: DATA COMPARISON TABLE (UNIQUE TO THIS PAGE)
function DataComparisonTableSection() {
  const tableData = [
    {
      youKnow: 'Anonymous User',
      dottiReveals: '$2.5M Net Worth / Avid Golfer',
      resultingAction: 'Matti displays &apos;Golf Vacation&apos; creative',
    },
    {
      youKnow: 'New Lead',
      dottiReveals: '45-54 Age Group / High Credit Score',
      resultingAction: 'Chatti offers premium financing options',
    },
    {
      youKnow: 'Returning Visitor',
      dottiReveals: 'Past Purchase: Luxury SUV',
      resultingAction: 'Omni triggers a VIP concierge text',
    },
    {
      youKnow: 'Abandoned Cart',
      dottiReveals: 'Hispanic / Bilingual',
      resultingAction: 'Chatti engages in Spanish automatically',
    },
  ];

  return (
    <PageSection background="muted" padding="default">
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
          Surgical Data for the &apos;Segment of One&apos;
        </h2>
        <p
          className="text-base text-slate-600 max-w-2xl mx-auto font-sans leading-normal font-normal"
          style={{ lineHeight: '1.6', fontSize: '16px' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dotti doesn&apos;t just collect data—she feeds the Boardroom so Matti changes imagery and Chatti pivots her sales script.
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
                You Know This
              </th>
              <th
                className="text-left font-heading font-semibold"
                style={{
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                Dotti Reveals This
              </th>
              <th
                className="text-left font-heading font-semibold"
                style={{
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                The Resulting Action
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
                  {row.youKnow}
                </td>
                <td
                  className="font-sans font-normal text-slate-600"
                  style={{
                    padding: '16px',
                    fontSize: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  {row.dottiReveals}
                </td>
                <td
                  className="font-sans font-normal text-slate-600"
                  style={{
                    padding: '16px',
                    fontSize: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  {row.resultingAction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageSection>
  );
}

// SECTION 4: IDENTITY-DRIVEN ORCHESTRATION
function IdentityDrivenOrchestrationSection() {
  const features: FeatureItem[] = [
    {
      title: 'Instant Reverse-Append',
      body: 'When a user provides an email, phone, or lands on a tracked page, Dotti fills in CRM blanks automatically.',
    },
    {
      title: 'Verified Affinities',
      body: 'Know if your prospect is a boat owner, frequent traveler, or tech enthusiast. Lifestyle Triggers for spot-on marketing.',
    },
    {
      title: 'Financial Clarity',
      body: 'Segment traffic by household income, home value, or discretionary spending capacity.',
    },
    {
      title: 'Predictive Intent',
      body: 'Dotti analyzes the User Path to determine browsing vs. buying, allowing Maestri to prioritize high-value leads.',
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
      title="Identity-Driven Orchestration"
      subtitle="Dotti is the eyes of the ecosystem. Without her, AI guesses. With her, every node becomes precise."
      features={features}
      side="image-right"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 5: PRIVACY-FIRST DATA GOVERNANCE
function PrivacyFirstGovernanceSection() {
  const features: FeatureItem[] = [
    {
      title: 'CCPA & GDPR Compliant',
      body: 'Data sourcing and processing meet the strictest global privacy standards.',
    },
    {
      title: 'Secure Data Segregation',
      body: 'Your internal customer data is never mixed with 3rd party clouds or used to train public AI models.',
    },
    {
      title: 'SOC2 Type II Security',
      body: 'Every identity resolution happens within an encrypted, audited environment.',
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
      subtitle="Intelligence should never come at the expense of integrity. Enterprise-grade compliance at core."
      features={features}
      side="image-left"
      background="muted"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 6: SEAMLESS CRM INTEGRATION
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
          Seamless CRM Integration
        </h2>
        <p
          className="text-base text-slate-600 max-w-2xl mx-auto font-sans leading-normal font-normal mb-8"
          style={{ lineHeight: '1.6', fontSize: '16px' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dotti does the busy work. Every attribute she discovers maps directly to correct fields in your stack.
        </p>
      </div>
      
      {/* CRM Logo Pills */}
      <div
        className="flex flex-wrap justify-center items-center gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
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

