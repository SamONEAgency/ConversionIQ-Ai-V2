'use client';

/**
 * WHATSAPP NODE PRODUCT PAGE SECTION INVENTORY
 * ============================================
 * 1. ProductHero_WhatsAppNode - <ProductHero /> (interior hero)
 * 2. Product_RichMediaAdvantage - <SplitSection /> (image-right)
 * 3. Product_SurgicalWhatsAppObjectives - <SplitSection /> (image-left)
 * 4. Product_EnterpriseIntelligence - <SplitSection /> (image-right)
 * 5. Product_Testimonial - <TestimonialBanner />
 * 6. Product_PerformanceCompliance - <PageSection /> with <FeatureList layout="grid" />
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
import { FeatureList } from '@/components/layout/FeatureList';
import { TestimonialBanner } from '@/components/content/TestimonialBanner';
import { FooterCTA } from '@/components/content/FooterCTA';

export default function WhatsAppNodePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <ProductHero
        eyebrow="PRODUCT"
        title="Autonomous WhatsApp Commerce & Global Engagement"
        subtitle="Meet customers where they live. Transform WhatsApp into a 24/7 storefront and support desk with rich media, interactive buttons, and verified trust."
        videoLabel="WhatsApp Commerce Visual"
      />
      
      {/* SECTION 1: THE RICH-MEDIA ADVANTAGE */}
      <RichMediaAdvantageSection />
      
      {/* SECTION 2: SURGICAL WHATSAPP OBJECTIVES */}
      <SurgicalWhatsAppObjectivesSection />
      
      {/* SECTION 3: ENTERPRISE INTELLIGENCE VS BOT LOOPS */}
      <EnterpriseIntelligenceSection />
      
      {/* SECTION 4: TESTIMONIAL */}
      <TestimonialSection />
      
      {/* SECTION 5: PERFORMANCE & GLOBAL COMPLIANCE */}
      <PerformanceComplianceSection />
      
      {/* SECTION 6: TACTICAL FAQ */}
      <TacticalFAQSection />
      
      {/* FOOTER CTA */}
      <FooterCTA
        title="Experience the ConversionIQ Advantage"
        subtitle="See how ChattiLive automates 1-to-1 conversations across Web, SMS, WhatsApp, and Social."
        primaryLabel="Connect Your WhatsApp"
        primaryHref="/request-a-demo"
        secondaryLabel="See the Interactive Demo"
        secondaryHref="/request-a-demo"
      />
      
      <Footer />
    </div>
  );
}

// SECTION 1: THE RICH-MEDIA ADVANTAGE: BEYOND TEXT
function RichMediaAdvantageSection() {
  const features: FeatureItem[] = [
    {
      title: 'Visual Sales & Support',
      body: 'Send and receive images, videos, PDFs, and voice notes. Share lookbooks or analyze photos of technical issues.',
    },
    {
      title: 'Interactive Quick Replies',
      body: 'Guide users through complex decisions with native buttons and list menus. Eliminates typing friction.',
    },
    {
      title: 'Verified Brand Authority',
      body: 'We help you secure the Green Tick (Official Business Account). Builds trust and increases open rates.',
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
      title="The Rich-Media Advantage: Beyond Text"
      subtitle="Unlike SMS limits, ChattiLive WhatsApp uses the full power of the Business API for immersive brand experiences."
      features={features}
      side="image-right"
      background="muted"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 2: SURGICAL WHATSAPP OBJECTIVES
function SurgicalWhatsAppObjectivesSection() {
  const features: FeatureItem[] = [
    {
      title: 'Conversational Commerce',
      body: 'Turn your product catalog into chat. Browse products, check availability, complete purchases without leaving the app.',
    },
    {
      title: 'Identity-Driven Personalization',
      body: 'Dotti DeepLink™ enriches profiles for product recommendations based on verified demographic or financial insights.',
    },
    {
      title: 'Global Support at Scale',
      body: 'Resolve Tier-1 issues autonomously in 91 languages. FAQs, order tracking, troubleshooting—24/7.',
    },
    {
      title: 'Proactive Notifications',
      body: 'Send shipping updates, appointment reminders, or \'Back in Stock\' alerts. Chatti answers follow-up questions.',
    },
    {
      title: 'Click-to-WhatsApp Ad Optimization',
      body: 'Lower CAC by sending ad traffic directly into a Chatti conversation instead of static landing pages.',
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
      title="Surgical WhatsApp Objectives"
      subtitle="Handle the entire customer lifecycle, from Click-to-WhatsApp ads to post-purchase loyalty."
      features={features}
      side="image-left"
      background="light"
      titleWeight={300}
    >
      {visualCard}
    </SplitSection>
  );
}

// SECTION 3: ENTERPRISE INTELLIGENCE VS BOT LOOPS
function EnterpriseIntelligenceSection() {
  const features: FeatureItem[] = [
    {
      title: 'Dynamic Reasoning Engine',
      body: 'Understands natural language. Handles complex questions mid-flow, then steers back to the objective.',
    },
    {
      title: 'Unified Cross-Channel Memory',
      body: 'Started on your website, moved to WhatsApp? Chatti remembers. Context never lost, no repetition.',
    },
    {
      title: 'Surgical CRM Grounding',
      body: 'Every detail—language preference, product interests, DeepLink™ data—syncs to your CRM in real-time.',
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
      title="Enterprise Intelligence vs. Bot Loops"
      subtitle="Don't confuse ChattiLive with clunky 'Press 1 for Support' bots."
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

// SECTION 5: PERFORMANCE & GLOBAL COMPLIANCE
function PerformanceComplianceSection() {
  const features: FeatureItem[] = [
    {
      title: 'End-to-End Encryption',
      body: 'Every conversation is private and secure, meeting the highest global standards including GDPR compliance.',
    },
    {
      title: 'Template Management',
      body: 'We manage Meta approval for outbound templates, ensuring campaigns are never flagged as spam.',
    },
    {
      title: '24-Hour Window Management',
      body: 'Chatti responds instantly to user messages, maximizing the Service Window to keep costs optimized.',
    },
  ];

  return (
    <PageSection background="muted" padding="default">
      <div className="text-left mb-12">
        <h2 
          className="font-heading mb-4 text-left"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Performance & Global Compliance
        </h2>
        <p
          className="text-base text-slate-600 mb-8 font-sans leading-normal font-normal"
          style={{ lineHeight: '1.6', fontSize: '16px' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          WhatsApp is a high-trust environment. We keep your account healthy and high-performing.
        </p>
      </div>
      <FeatureList items={features} layout="grid" />
    </PageSection>
  );
}

// SECTION 6: TACTICAL FAQ
function TacticalFAQSection() {
  const faqs = [
    {
      question: 'What\'s the difference between the WhatsApp App and the API?',
      answer: 'The standard Business App is for small teams replying manually. The ChattiLive API enables automation, multi-user access, and thousands of simultaneous conversations.',
    },
    {
      question: 'Can Dotti DeepLink™ enrich my WhatsApp leads?',
      answer: 'Yes. When a user engages and provides identifying info, DeepLink appends thousands of data attributes for immediate financial and demographic visibility.',
    },
    {
      question: 'Can Chatti handle images and documents?',
      answer: 'Yes. Receive and analyze photos (receipts, broken parts) and send documents (PDF invoices, user manuals) in conversation.',
    },
    {
      question: 'Do I need a new phone number?',
      answer: 'You can register a new number or often use your existing line. Our team handles Meta verification for official business account setup.',
    },
    {
      question: 'What happens if the AI encounters a problem?',
      answer: 'Graceful Escalation. If Chatti can\'t resolve with 100% certainty, she notifies your team who can take over via Command Center.',
    },
  ];

  return (
    <PageSection background="light" padding="default">
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

