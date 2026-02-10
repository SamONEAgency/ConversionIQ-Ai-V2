'use client';

/**
 * WHATSAPP NODE PRODUCT PAGE SECTION INVENTORY
 * ============================================
 * 1. ProductHero_WhatsAppNode - <ProductHero /> (interior hero)
 * 2. Product_MultimediaAdvantage - <SplitSection /> (image-right, muted)
 * 3. Product_ConversionBlueprints - <SplitSection /> (image-left, white)
 * 4. Product_MetaVerifiedSecurity - <SplitSection /> (image-right, muted)
 * 5. Product_Testimonial - <TestimonialBanner />
 * 6. Product_PhoneToCRMIntelligence - <SplitSection /> (image-left, white)
 * 7. Product_PerformanceCompliance - Dark navy section with grid
 * 8. Shared_FooterCTA - <FooterCTA />
 * 9. SiteFooter_NavAndMeta - <Footer />
 */

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductHero } from '@/components/content/ProductHero';
import { SplitSection, FeatureItem } from '@/components/layout/SplitSection';
import { PageSection } from '@/components/layout/PageSection';
import { FeatureList } from '@/components/layout/FeatureList';
import { TestimonialBanner } from '@/components/content/TestimonialBanner';
import { FooterCTA } from '@/components/content/FooterCTA';
import { FileText, Shield, Clock, BookOpen } from 'lucide-react';

export default function WhatsAppNodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <ProductHero
        eyebrow="PRODUCT"
        title={
          <>
            Autonomous WhatsApp<br />
            Global Engagement
          </>
        }
        subtitle="Transform your product catalog into an interactive sales agent. Engage customers in real-time, multimedia conversations that qualify leads and close transactions 24/7."
        videoLabel="WhatsApp Commerce Visual"
      />
      
      {/* SECTION 1: THE MULTIMEDIA ADVANTAGE */}
      <MultimediaAdvantageSection />
      
      {/* SECTION 2: CONVERSION BLUEPRINTS */}
      <ConversionBlueprintsSection />
      
      {/* SECTION 3: META-VERIFIED ENTERPRISE SECURITY */}
      <MetaVerifiedSecuritySection />
      
      {/* SECTION 4: TESTIMONIAL */}
      <TestimonialSection />
      
      {/* SECTION 5: PHONE-TO-CRM INTELLIGENCE STACK */}
      <PhoneToCRMIntelligenceSection />
      
      {/* SECTION 6: PERFORMANCE & GLOBAL COMPLIANCE */}
      <PerformanceComplianceSection />
      
      {/* FOOTER CTA */}
      <FooterCTA
        title="Experience the ConversionIQ Advantage"
        subtitle="See how ChattiLive automates 1-to-1 conversations across Web, SMS, WhatsApp, and Social."
        primaryLabel="Connect Your WhatsApp"
        primaryHref="/request-a-demo"
        secondaryLabel="See the ChattiLive Whatsapp Demo"
        secondaryHref="/request-a-demo"
      />
      
      <Footer />
    </div>
  );
}

// SECTION 1: THE MULTIMEDIA ADVANTAGE: BEYOND TEXT
function MultimediaAdvantageSection() {
  const features: FeatureItem[] = [
    {
      title: 'Visual Sales & Technical Support',
      body: 'Natively send and receive images, videos, PDFs, and voice notes. ChattiLive Whatsapp can analyze photos of technical issues or deliver high-definition lookbooks based on user intent.',
    },
    {
      title: 'Frictionless Interactive Menus',
      body: 'Replace typing with native buttons and list menus to guide users through complex product selections or support tiers with zero input error.',
    },
    {
      title: 'Verified Brand Authority',
      body: 'We facilitate the \'Official Business Account\' (Green Tick) verification to ensure every message is delivered with immediate brand trust and maximum open rates.',
    },
    {
      title: 'Persistent Cross-Platform Memory',
      body: 'If a user initiates a query on your website and transitions to WhatsApp, the engine maintains the full data thread. Context is never lost, and the prospect never has to repeat themselves.',
    },
    {
      title: 'Global Language Autonomy',
      body: 'Automatically detects and communicates in 91 languages, allowing your brand to scale into international markets from a single intelligence core.',
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
      {/* TODO: Replace placeholder visual card with Rich Media Chat Visual */}
      Rich Media Chat Visual
    </div>
  );

  return (
    <SplitSection
      title="The Multimedia Advantage"
      subtitle="ChattiLive WhatsApp utilizes the full Business API stack to natively exchange high-fidelity media, removing the character and file-type restrictions of traditional SMS."
      features={features}
      side="image-right"
      background="muted"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 2: CONVERSION BLUEPRINTS: WHATSAPP REVENUE CHANNELS
function ConversionBlueprintsSection() {
  const features: FeatureItem[] = [
    {
      title: 'Dynamic Reasoning Engine',
      body: 'Don\'t confuse ChattiLive with clunky \'Press 1 for Support\' bots. The engine understands natural language, handles complex questions mid-flow, and strategically steers the conversation back to the objective.',
    },
    {
      title: 'Click-to-WhatsApp Ad Optimization',
      body: 'Drastically lower CAC by routing Meta Ad traffic directly into an autonomous WhatsApp conversation. Eliminate landing page drop-off and capture intent in a persistent, re-engageable thread.',
    },
    {
      title: 'Conversational Commerce & Catalog Sync',
      body: 'Connect your product catalog directly to ChattiLive. Users can browse, check real-time availability, and initiate checkout flows without exiting the app.',
    },
    {
      title: 'Automated Utility Notifications',
      body: 'Execute \'Back in Stock\' alerts, shipping updates, or appointment reminders. Unlike one-way notifications, ChattiLive manages the subsequent conversation if the user replies with a question.',
    },
    {
      title: 'The Post-Support Paradigm',
      body: 'Deflect Tier-1 support tickets by allowing the engine to handle FAQs, order tracking, and troubleshooting autonomously in the user\'s preferred app.',
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
      {/* TODO: Replace placeholder visual card with WhatsApp Commerce Funnel Visual */}
      WhatsApp Commerce Funnel Visual
    </div>
  );

  return (
    <SplitSection
      title="WhatsApp Conversion Revenue Channels"
      subtitle="ChattiLive Whatsapp manages the entire customer lifecycle, from Click-to-WhatsApp ad conversion to post-purchase support."
      features={features}
      side="image-left"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 3: META-VERIFIED ENTERPRISE SECURITY
function MetaVerifiedSecuritySection() {
  const features: FeatureItem[] = [
    {
      title: 'Official Business API Architecture',
      body: 'Secure your brand\'s reputation by operating on the official WhatsApp Business API. Eliminate the \'Grey Hat\' risks of unauthorized scrapers or unofficial wrappers that lead to permanent number bans.',
    },
    {
      title: 'Tethered Intelligence Guardrails',
      body: 'Unlike open-ended AI models, ChattiLive is strictly tethered to your Brand Guidelines and knowledge based agent business objectives. It is restricted from making unauthorized offers or \'hallucinating\' data.',
    },
    {
      title: 'Binary Objective Execution',
      body: 'While consumer bots prioritize \'chat,\' ChattiLive executes \'Commerce.\' Every message is strategically designed to drive a specific CRM outcome or transaction with mathematical predictability.',
    },
    {
      title: 'Unified Command Center Handoff',
      body: 'High-stakes objections or VIP queries are flagged in real-time. Your team can bypass the automation and take control of the WhatsApp thread instantly from the centralized dashboard.',
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
      {/* TODO: Replace placeholder visual card with Intelligence Engine Visual */}
      Intelligence Engine Visual
    </div>
  );

  return (
    <SplitSection
      title="Meta-Verified Enterprise Security"
      subtitle="ChattiLive WhatsApp is a fully audited Meta Business Solution, engineered to protect your official phone identity and ensure long-term platform standing."
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

// SECTION 5: PHONE-TO-CRM INTELLIGENCE STACK
function PhoneToCRMIntelligenceSection() {
  const features: FeatureItem[] = [
    {
      title: 'Surgical CRM Grounding',
      body: 'Every detail -- language preference, product interests, and session data -- syncs to your CRM in real-time. This ensures your team has the full context of every autonomous interaction.',
    },
    {
      title: 'Direct CRM Mapping',
      body: 'Instantly map WhatsApp phone identities to your core lead records. ChattiLive pushes name, contact info, and preferences directly into Salesforce, HubSpot, GoHighLevel, ZohoCRM or your native legacy CRM.',
    },
    {
      title: 'Identity Enrichment',
      body: 'Powered by Dotti DeepLink; the moment a user engages via WhatsApp, ChattiLive reverse-appends hundreds of demographic and interest data attributes directly into the lead\'s profile.',
    },
    {
      title: 'Sub-Surface Intent Mapping',
      body: 'The engine analyzes the flow of the WhatsApp conversation to extract \'hidden\' fields such as budget ranges or household size, and populates your CRM fields automatically.',
    },
    {
      title: 'Unified Cross-Channel Memory',
      body: 'Started on your website, moved to Whatsapp? ChattiLive remembers. Context never lost, no repetition.',
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
      {/* TODO: Replace placeholder visual card with CRM Data Flow Visual */}
      CRM Data Flow Visual
    </div>
  );

  return (
    <SplitSection
      title="Phone-to-CRM Intelligence Stack"
      subtitle="Convert high-trust WhatsApp interactions into enriched, actionable revenue data."
      features={features}
      side="image-left"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 6: PERFORMANCE & GLOBAL COMPLIANCE
function PerformanceComplianceSection() {
  const features = [
    {
      title: 'Structured Template Governance',
      description: 'We manage the Meta submission and approval process for Highly Structured Messages (HSMs). This ensures your proactive outbound campaigns are platform-compliant while serving as a secure gateway to a full autonomous conversation.',
      icon: FileText,
    },
    {
      title: 'End-to-End Encryption Standards',
      description: 'Every conversation is private and secure, meeting the highest global standards for data protection and GDPR compliance.',
      icon: Shield,
    },
    {
      title: '24-Hour Service Window Management',
      description: 'ChattiLive responds in sub-5 seconds to user-initiated messages, maximizing the Meta Service Window to keep communication costs optimized.',
      icon: Clock,
    },
    {
      title: 'Playbook-Grounded Reasoning',
      description: 'Zero manual chat-flow building. Provide your URL or documentation; the engine learns your product logic and brand tone instantly.',
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-[100px] bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <h2
            className="font-heading mb-4 text-center text-[#1B1340]"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
            }}
            data-aos="fade-up"
          >
            Performance & Global Compliance
          </h2>
          <p
            className="font-sans font-normal text-center text-slate-600"
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Technical standards that enforce factual accuracy and global compliance across every thread.
          </p>
        </div>

        {/* FeatureList Grid with icons matching Workflow Builder style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
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


