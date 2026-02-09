'use client';

/**
 * SOCIAL & MESSENGER NODE PRODUCT PAGE SECTION INVENTORY
 * =======================================================
 * 1. ProductHero_SocialMessengerNode - <ProductHero /> (interior hero)
 * 2. Product_SocialToRevenueBridge - <SplitSection /> (image-right)
 * 3. Product_StrategicSocialObjectives - <SplitSection /> (image-left)
 * 4. Product_MetaApproved - <SplitSection /> (image-right)
 * 5. Product_Testimonial - <TestimonialBanner />
 * 6. Product_CRMIntegrationAttribution - <SplitSection /> (image-left)
 * 7. Product_TacticalFAQ - <PageSection /> with FAQ list
 * 8. Shared_FooterCTA - <FooterCTA />
 * 9. SiteFooter_NavAndMeta - <Footer />
 */

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductHero } from '@/components/content/ProductHero';
import { SplitSection, FeatureItem } from '@/components/layout/SplitSection';
import { PageSection } from '@/components/layout/PageSection';
import { TestimonialBanner } from '@/components/content/TestimonialBanner';
import { FooterCTA } from '@/components/content/FooterCTA';

export default function SocialMessengerNodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <ProductHero
        eyebrow="PRODUCT"
        title="ChattiLive Messenger: Autonomous Social Sales & DM Engine"
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
      
      {/* SECTION 5: SEAMLESS CRM INTEGRATION & ATTRIBUTION */}
      <CRMAttributionSection />
      
      {/* SECTION 6: TACTICAL FAQ */}
      <TacticalFAQSection />
      
      {/* FOOTER CTA */}
      <FooterCTA
        title="Experience the ConversionIQ Advantage"
        subtitle="See how ChattiLive automates 1-to-1 conversations across Web, SMS, WhatsApp, and Social."
        primaryLabel="Connect Your Accounts"
        primaryHref="/request-a-demo"
        secondaryLabel="Watch Social Sales Demo"
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
      body: 'CommentResponder™ handles the public reply for social proof, while ChattiLive simultaneously opens a private, goal-oriented DM.',
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
      title: 'Total Engagement Coverage',
      body: 'DM, comment, or Story mention—Chatti is there. No intent falls through the cracks.',
    },
    {
      title: 'Autonomous Lead Qualification',
      body: 'Filter noise, identify high-intent prospects, ask discovery questions, and map data plus DeepLink™ attributes to your CRM.',
    },
    {
      title: 'Product Discovery & Selection',
      body: 'Help users find products without leaving the app. Browse catalog, suggest based on intent, drive to checkout.',
    },
    {
      title: 'Instant Support Resolution',
      body: 'Handle FAQs, order status checks, and returns directly in DMs, freeing your social manager for strategy.',
    },
    {
      title: 'Persistent Cross-Platform Memory',
      body: 'User on Facebook later visits your website? Chatti remembers. One continuous, intelligent thread.',
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
      title="Strategic Social Objectives"
      subtitle="Chatti doesn't just reply. She manages the entire funnel with top-tier account executive precision."
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
      body: 'Your account stays safe, compliant, and optimized for the latest Instagram and Facebook features.',
    },
    {
      title: 'Contextual Understanding',
      body: 'Chatti handles slang, emojis, and informal language while maintaining professional guardrails.',
    },
    {
      title: 'Zero-Hallucination Sales',
      body: 'Unlike GPT wrappers, Chatti is tethered to your Sales Playbook. She only offers what\'s authorized.',
    },
    {
      title: 'Human-in-the-Loop Fail-Safe',
      body: 'VIP customers flagged instantly. Your team can take over via Command Center seamlessly.',
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
      title='Meta-Approved vs. "Grey Hat" Bots'
      subtitle="Most social automation tools are risky scrapers. ChattiLive is a Meta Approved App using official APIs."
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
      backgroundVariant="blue"
    />
  );
}

// SECTION 5: SEAMLESS CRM INTEGRATION & ATTRIBUTION
function CRMAttributionSection() {
  const features: FeatureItem[] = [
    {
      title: 'Direct CRM Mapping',
      body: 'Every name, email, and preference Chatti captures in DMs pushes automatically to Salesforce, HubSpot, GoHighLevel, or Zoho.',
    },
    {
      title: 'Social ROI Tracking',
      body: 'Finally see which posts or ads drive actual revenue through attributed links and tracking tokens.',
    },
    {
      title: 'Automated Follow-Up',
      body: 'If a user starts a DM conversation but doesn\'t finish, Chatti can trigger follow-up via SMS or Email.',
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
      title="Seamless CRM Integration & Attribution"
      subtitle="Social media data is usually a black box. ChattiLive brings it into the light."
      features={features}
      side="image-left"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 6: TACTICAL FAQ
function TacticalFAQSection() {
  const faqs = [
    {
      question: 'Is ChattiLive safe for my Instagram and Facebook accounts?',
      answer: 'Yes. We\'re a Meta Approved App using official APIs. Your account is never at risk of being flagged or banned.',
    },
    {
      question: 'Can Dotti DeepLink™ identify my Instagram followers?',
      answer: 'Yes. Once a follower engages and provides a contact point, DeepLink reverse-appends thousands of data points for real-world demographics.',
    },
    {
      question: 'Do I need keywords for every post?',
      answer: 'No. ChattiLive can engage with any comment on your posts. Every interaction has potential to become a sale.',
    },
    {
      question: 'How does Public/Private response work?',
      answer: 'CommentResponder posts a public reply for visibility while simultaneously sending a private DM for goal-oriented conversation.',
    },
    {
      question: 'Can she handle my specific brand voice?',
      answer: 'Absolutely. You define personality, tone, and boundaries. Witty and casual or formal and clinical—Chatti adapts.',
    },
  ];

  return (
    <PageSection background="muted" padding="default">
      <div className="text-left mb-16">
        <h2 
          className="font-heading mb-4 text-left"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Tactical FAQ
        </h2>
      </div>
      <div className="space-y-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="py-6 border-b border-slate-200 last:border-b-0"
            data-aos="fade-up"
            data-aos-delay={100 + (index * 50)}
          >
            <h3 
              className="text-base font-heading font-semibold text-slate-700 mb-3"
              style={{ fontSize: '16px', fontWeight: 600 }}
            >
              {faq.question}
            </h3>
            <p 
              className="text-sm text-slate-600 leading-normal font-sans font-normal"
              style={{ fontSize: '16px', lineHeight: '1.6' }}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}

