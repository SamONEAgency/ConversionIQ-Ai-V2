'use client';

/**
 * SOCIAL & MESSENGER NODE PRODUCT PAGE SECTION INVENTORY
 * =======================================================
 * 1. ProductHero_SocialMessengerNode - <ProductHero /> (interior hero)
 * 2. Product_SocialToRevenueBridge - <SplitSection /> (image-right, muted)
 * 3. Product_StrategicSocialObjectives - <SplitSection /> (image-left, white)
 * 4. Product_MetaApproved - <SplitSection /> (image-right, muted)
 * 5. Product_Testimonial - <TestimonialBanner />
 * 6. Product_FrictionlessStackIntegration - <SplitSection /> (image-left, white)
 * 7. Product_AutonomousOperationalProtocols - Dark navy section with grid
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

export default function SocialMessengerNodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <ProductHero
        eyebrow="PRODUCT"
        title="Autonomous Social Sales & DM Engine"
        subtitle="Stop letting social engagement go to waste. Transform Instagram and Facebook into an automated sales floor that qualifies leads and closes revenue 24/7."
        videoLabel="Social DM Engine Visual"
      />
      
      {/* SECTION 1: THE SOCIAL-TO-REVENUE BRIDGE */}
      <SocialToRevenueSection />
      
      {/* SECTION 2: STRATEGIC SOCIAL OBJECTIVES */}
      <StrategicSocialObjectivesSection />
      
      {/* SECTION 3: META-APPROVED VS GREY HAT BOTS */}
      <MetaApprovedSection />
      
      {/* SECTION 4: TESTIMONIAL */}
      <TestimonialSection />
      
      {/* SECTION 5: FRICTIONLESS STACK INTEGRATION */}
      <FrictionlessStackIntegrationSection />
      
      {/* SECTION 6: AUTONOMOUS OPERATIONAL PROTOCOLS */}
      <AutonomousOperationalProtocolsSection />
      
      {/* FOOTER CTA */}
      <FooterCTA
        title="Experience the ConversionIQ Advantage"
        subtitle="See how ChattiLive automates 1-to-1 conversations across Web, SMS, WhatsApp, and Social."
        primaryLabel="Connect Your Accounts"
        primaryHref="/request-a-demo"
        secondaryLabel="Demo ChattiLive DM"
        secondaryHref="/request-a-demo"
      />
      
      <Footer />
    </div>
  );
}

// SECTION 1: THE SOCIAL-TO-REVENUE BRIDGE
function SocialToRevenueSection() {
  const features: FeatureItem[] = [
    {
      title: 'Universal Comment-to-DM Logic',
      body: 'Trigger an adaptive, goal-oriented sales dialogue from any public comment on your posts. No manual keyword hunting required.',
    },
    {
      title: 'Dual-Response Execution',
      body: 'CommentResponder handles the public reply for social proof, while ChattiLive simultaneously opens a private, goal-oriented DM.',
    },
    {
      title: 'Story & Mention Activation',
      body: 'Automatically acknowledge Story mentions and instantly pivot to discovery questions, discount delivery, or demo scheduling.',
    },
    {
      title: 'Persistent Multi-Platform Memory',
      body: 'If a prospect starts a thread on Instagram and later visits your website, the engine maintains the data thread. One continuous, intelligent profile.',
    },
    {
      title: 'Identity Resolution',
      body: 'Powered by Dotti Deeplink, instantly bridge social handles to real-world profiles, revealing demographic attributes and lifestyle triggers the moment a contact point is shared.',
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
      {/* TODO: Replace placeholder visual card with Comment-to-DM Flow Visual */}
      Comment-to-DM Flow Visual
    </div>
  );

  return (
    <SplitSection
      title="The Social-to-Revenue Bridge"
      subtitle="Social media is where discovery happens; ChattiLive is where the transaction is secured. Eliminate the gap between engagement and attribution."
      features={features}
      side="image-right"
      background="muted"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 2: STRATEGIC SOCIAL OBJECTIVES
function StrategicSocialObjectivesSection() {
  const features: FeatureItem[] = [
    {
      title: 'The Paid Ad Accelerator',
      body: 'A user comments on a Paid Meta Ad. CommentResponder replies publicly to boost the algorithm and build social trust, while ChattiLive DM initiates a 1-to-1 qualification sequence to convert the ad-click into a lead, appointment or sale.',
    },
    {
      title: 'Direct-Response Messenger Ads',
      body: 'Eliminate landing page friction. Send Instagram/FB Ad traffic directly into a ChattiLive DM for instant conversational engagement, product selection and checkout.',
    },
    {
      title: 'The End of Scripted Chat-Flows',
      body: 'Move beyond the \'ManyChat\' era of rigid buttons and fragile \'if/then\' trees. ChattiLive DM replaces manual flow-building with Grounded Reasoning, allowing the engine to handle slang, typos, and complex intent within Messenger while staying locked on your business conversion objective.',
    },
    {
      title: 'Post-Purchase Support Layer',
      body: 'For opted-in users, ChattiLive manages order status inquiries, returns, and FAQs natively in DMs, deflecting Tier-1 tickets from your support desk.',
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
      {/* TODO: Replace placeholder visual card with Social Funnel Visual */}
      Social Funnel Visual
    </div>
  );

  return (
    <SplitSection
      title="Strategic Social Objectives: High-Value Workflows"
      subtitle="ChattiLive DM transforms Meta Messenger into a reasoning engine, executing complex sales and support sequences that previously required manual intervention or rigid 'if/then' flows."
      features={features}
      side="image-left"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 3: META-APPROVED VS GREY HAT BOTS
function MetaApprovedSection() {
  const features: FeatureItem[] = [
    {
      title: 'Official API Integration',
      body: 'Unlike risky scrapers or \'grey hat\' tools, ChattiLive is an officially approved Meta application. Your accounts remain secure, compliant, and optimized for the latest features without risk of \'shadow-banning.\'',
    },
    {
      title: 'Contextual Understanding',
      body: 'ChattiLive DM handles slang, emojis, and informal language while maintaining professional guardrails.',
    },
    {
      title: 'Zero-Hallucination Guardrails',
      body: 'The engine is strictly tethered to your Brand Playbook. It is restricted from making unauthorized offers or \'hallucinating\' data outside your specific parameters.',
    },
    {
      title: 'Deterministic Sales Logic',
      body: 'While basic bots \'chat,\' ChattiLive executes. Every interaction is designed to move the user toward a specific CRM goal or transaction with mathematical predictability.',
    },
    {
      title: 'High-Intent Human Escalation',
      body: 'Upon detecting high-value signals or specific conversion triggers, the engine instantly alerts your team and facilitates a seamless handoff to a live agent.',
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
      {/* TODO: Replace placeholder visual card with Meta Approved Badge Visual */}
      Meta Approved Badge Visual
    </div>
  );

  return (
    <SplitSection
      title="Meta-Approved App vs. 'Grey Hat' Bots"
      subtitle="ChattiLive DM is an officially verified Meta interface, engineered for enterprise-grade safety and platform longevity."
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

// SECTION 5: FRICTIONLESS STACK INTEGRATION
function FrictionlessStackIntegrationSection() {
  const features: FeatureItem[] = [
    {
      title: 'Direct CRM Mapping',
      body: 'Every name, email, phone number, and preference captured in DMs is written directly to Salesforce, HubSpot, ZohoCRM, GoHighLevel or your native legacy system in real-time. The engine maps social handles to existing lead records to ensure a single source of truth.',
    },
    {
      title: 'Non-Disruptive Integration',
      body: 'The engine does not replace your social media manager\'s organic workflow. It remains passive until intent is detected, managing the heavy lifting of lead capture.',
    },
    {
      title: 'Conversational Data Extraction',
      body: 'As Chatti identifies specific variables like budget, timeline, or purchase intent during a DM, it automatically writes those values into the corresponding fields in your CRM.',
    },
    {
      title: 'Social ROI Attribution',
      body: 'Eliminate \'dark social\' data. Track every dollar of revenue back to the specific post, ad, or mention via integrated tracking tokens.',
    },
    {
      title: 'Permission-Based Cross-Channel Follow-Up',
      body: 'If a DM conversation stalls, the system can trigger a re-engagement sequence via SMS, Email or even Print-on-Demand. This activation occurs only where explicit, channel-specific opt-in and consent have been verified within the CRM.',
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
      {/* TODO: Replace placeholder visual card with CRM Attribution Visual */}
      CRM Attribution Visual
    </div>
  );

  return (
    <SplitSection
      title="Frictionless Stack Integration"
      subtitle="Bridge the gap between social engagement and your core revenue database."
      features={features}
      side="image-left"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 6: AUTONOMOUS OPERATIONAL PROTOCOLS & REGULATORY COMPLIANCE
function AutonomousOperationalProtocolsSection() {
  const features: FeatureItem[] = [
    {
      title: 'Contextual Intent Detection',
      body: 'The engine distinguishes between \'trolls,\' general praise, and high-intent sales inquiries, adapting its priority level, objective and tone accordingly.',
    },
    {
      title: 'Meta-Approved Compliance',
      body: 'Automated handling of platform-specific rules, including the 24-hour messaging window and opt-out requirements.',
    },
    {
      title: 'Global Language Support',
      body: 'Automatically detects and responds in 91 languages, ensuring your brand voice remains consistent across global social markets.',
    },
    {
      title: 'Identity Enrichment',
      body: 'Powered by Dotti DeepLink, the moment a user provides a contact point (Email or Phone) during a Messenger dialogue, Dotti can instantly reverse-append hundreds of demographic, financial and interest data points, directly into the CRM record.',
    },
    {
      title: 'Knowledgebase Grounded Reasoning',
      body: 'Zero manual chat-flow building. Provide your URL or documentation; the engine learns your product logic, business objectives and social tone instantly.',
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
            Autonomous Operational Protocols & Regulatory Compliance
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
            Technical standards that enforce factual accuracy and platform compliance across every thread.
          </p>
        </div>

        {/* FeatureList Grid with custom grey background styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6"
              style={{
                borderRadius: '12px',
              }}
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <h3
                className="font-heading font-semibold text-slate-700 mb-3"
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                {feature.title}
              </h3>
              <p
                className="font-sans font-normal text-slate-600"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

