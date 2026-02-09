'use client';

/**
 * FAQ PAGE SECTION INVENTORY
 * =========================
 * 1. Hero_Custom - <PageSection /> with H1 and subtext (not ProductHero)
 * 2. CategoryNav_Pills - Horizontal anchor-link pills for section navigation
 * 3. FAQ_PlatformImplementation - H2 + 4 Q/A pairs
 * 4. FAQ_TheIntelligence - H2 + 4 Q/A pairs
 * 5. FAQ_OperationsMaintenance - H2 + 3 Q/A pairs
 * 6. FAQ_DataSecurity - H2 + 3 Q/A pairs
 * 7. FAQ_SpeedScale - H2 + 3 Q/A pairs
 * 8. Shared_FooterCTA - <FooterCTA />
 * 9. SiteFooter_NavAndMeta - <Footer />
 */

import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import { FooterCTA } from '@/components/content/FooterCTA';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('platform');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['platform', 'intelligence', 'operations', 'security', 'speed'];
      const scrollPosition = window.scrollY + 200; // Offset for fixed nav

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveCategory(sectionId);
    }
  };

  const categories = [
    { id: 'platform', label: 'Platform & Implementation' },
    { id: 'intelligence', label: 'The Intelligence' },
    { id: 'operations', label: 'Operations & Maintenance' },
    { id: 'security', label: 'Data & Security' },
    { id: 'speed', label: 'Speed & Scale' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* HERO SECTION */}
      <PageSection background="light" padding="default">
        <div className="text-center">
          <h1
            className="font-heading mb-4 text-center"
            style={{
              fontSize: 'clamp(48px, 5vw, 56px)',
              fontWeight: 300,
              color: '#1B1340',
              lineHeight: '1.2',
            }}
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-center mx-auto font-sans font-normal"
            style={{
              fontSize: '18px',
              color: '#4B5563',
              lineHeight: '1.6',
              maxWidth: '640px',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Everything you need to know about deploying autonomous intelligence, managing data security, and scaling your revenue engine.
          </p>
        </div>
      </PageSection>

      {/* CATEGORY NAVIGATION PILLS */}
      <PageSection background="light" padding="small">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`px-6 py-2 rounded-full font-sans transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-[#1B1340] text-white'
                  : 'bg-[#F3F4F6] text-[#1B1340] hover:bg-[#E5E7EB]'
              }`}
              style={{
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
      </PageSection>

      {/* FAQ SECTIONS */}
      <PlatformImplementationSection />
      <TheIntelligenceSection />
      <OperationsMaintenanceSection />
      <DataSecuritySection />
      <SpeedScaleSection />

      {/* FOOTER CTA */}
      <FooterCTA
        title="Still have questions?"
        subtitle="Our team is ready to help you scale the unscalable."
        primaryLabel="Talk to an Expert"
        primaryHref="/request-a-demo"
        secondaryLabel="Book a 10-Minute Demo"
        secondaryHref="/request-a-demo"
      />

      <Footer />
    </div>
  );
}

// SECTION 1: PLATFORM & IMPLEMENTATION
function PlatformImplementationSection() {
  const faqs = [
    {
      question: 'What exactly is ConversionIQ?',
      answer:
        'An autonomous sales and engagement platform. Unlike scripted chatbots, our reasoning engine identifies, engages, and qualifies leads across Web, SMS, Social, and WhatsApp.',
    },
    {
      question: 'How long does it take to get started?',
      answer:
        'Live in minutes. Most nodes require only a JavaScript snippet or single click. Chatti learns from your website or documents—no lengthy training period.',
    },
    {
      question: 'Does this replace my current CRM?',
      answer:
        'No. ConversionIQ is an intelligent overlay. Native bi-directional integrations with Salesforce, HubSpot, GoHighLevel, and Zoho ensure your CRM is always enriched.',
    },
    {
      question: 'Do I need a developer to install the nodes?',
      answer:
        'No. Designed for marketing and sales teams. If you can copy-paste a snippet or connect via API, you can deploy ConversionIQ.',
    },
  ];

  return (
    <PageSection background="muted" padding="default" id="platform">
      <div className="mb-12">
        <h2
          className="font-heading mb-8 text-left"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Platform & Implementation
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="pb-6 border-b border-[#E5E7EB] last:border-b-0 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <h3
                className="font-heading font-semibold mb-3 text-[#1B1340]"
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                {faq.question}
              </h3>
              <p
                className="font-sans font-normal"
                style={{
                  fontSize: '16px',
                  color: '#4B5563',
                  lineHeight: '1.6',
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

// SECTION 2: THE INTELLIGENCE (THE BOARDROOM)
function TheIntelligenceSection() {
  const faqs = [
    {
      question: 'Who are the Agents like Maestri and Chatti?',
      answer:
        'Our Virtual C-Suite. Maestri orchestrates, Chatti dialogues, Dotti handles data, Matti creative, Omni connectivity, and Auditti oversight.',
    },
    {
      question: 'How does the system understand nuance and complex requests?',
      answer:
        'Named Entity Recognition (NER) and Relationship Extraction. Chatti identifies entities like budgets, locations, or competitors and understands relationships to pivot strategy.',
    },
    {
      question: 'How does Chatti know what to say?',
      answer:
        'Strictly tethered to your Sales Playbook. By ingesting PDFs, URLs, and manuals, she provides Grounded Reasoning for zero-hallucination brand safety.',
    },
    {
      question: 'What happens if Chatti cannot answer a question?',
      answer:
        'Graceful Escalation. If outside her knowledge base, she notifies your team or creates a support ticket—no dead ends.',
    },
  ];

  return (
    <PageSection background="light" padding="default" id="intelligence">
      <div className="mb-12">
        <h2
          className="font-heading mb-8 text-left"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          The Intelligence (The Boardroom)
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="pb-6 border-b border-[#E5E7EB] last:border-b-0 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <h3
                className="font-heading font-semibold mb-3 text-[#1B1340]"
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                {faq.question}
              </h3>
              <p
                className="font-sans font-normal"
                style={{
                  fontSize: '16px',
                  color: '#4B5563',
                  lineHeight: '1.6',
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

// SECTION 3: OPERATIONS & MAINTENANCE
function OperationsMaintenanceSection() {
  const faqs = [
    {
      question: 'How much upkeep is required once live?',
      answer:
        'Very little. Live-Sync Knowledge means Chatti updates automatically when you change a price or upload a new PDF. No manual reprogramming.',
    },
    {
      question: 'Can a human take over a live conversation?',
      answer:
        'Yes. Monitor all threads in the Command Center. Jump in with one click—handoff is seamless and invisible to the customer.',
    },
    {
      question: 'Can I set No-Bot zones for certain pages?',
      answer:
        'Yes. Smart Suppression rules ensure Chatti stays off sensitive checkout pages or URLs where you prefer human-only interaction.',
    },
  ];

  return (
    <PageSection background="muted" padding="default" id="operations">
      <div className="mb-12">
        <h2
          className="font-heading mb-8 text-left"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Operations & Maintenance
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="pb-6 border-b border-[#E5E7EB] last:border-b-0 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <h3
                className="font-heading font-semibold mb-3 text-[#1B1340]"
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                {faq.question}
              </h3>
              <p
                className="font-sans font-normal"
                style={{
                  fontSize: '16px',
                  color: '#4B5563',
                  lineHeight: '1.6',
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

// SECTION 4: DATA & SECURITY
function DataSecuritySection() {
  const faqs = [
    {
      question: 'Is my data secure?',
      answer:
        'Security is in our DNA. SOC2 Type II certified, pursuing ISO 42001. Every conversation is encrypted at rest and in transit.',
    },
    {
      question: 'Is my proprietary data used to train public AI models?',
      answer:
        'Absolutely not. Your data is segregated and private. We do not share with public LLMs like ChatGPT or Gemini for training.',
    },
    {
      question: 'Is Dotti DeepLink™ compliant with privacy laws?',
      answer:
        'Yes. All identity resolution and data enrichment meet the strictest global standards, including CCPA and GDPR compliance.',
    },
  ];

  return (
    <PageSection background="light" padding="default" id="security">
      <div className="mb-12">
        <h2
          className="font-heading mb-8 text-left"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          Data & Security
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="pb-6 border-b border-[#E5E7EB] last:border-b-0 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <h3
                className="font-heading font-semibold mb-3 text-[#1B1340]"
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                {faq.question}
              </h3>
              <p
                className="font-sans font-normal"
                style={{
                  fontSize: '16px',
                  color: '#4B5563',
                  lineHeight: '1.6',
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

// SECTION 5: THE SCIENCE OF SPEED & SCALE
function SpeedScaleSection() {
  const faqs = [
    {
      question: 'Can the system handle high-volume traffic?',
      answer:
        'Yes. Built for scale. Whether ten visitors or ten thousand simultaneous SMS replies, our infrastructure handles every conversation in real-time with zero latency.',
    },
    {
      question: 'Does the Web-Chat Node slow down my website?',
      answer:
        'No. Our script loads asynchronously. Zero impact on page load speed, user experience, or Google SEO rankings.',
    },
    {
      question: 'How many languages does the platform support?',
      answer:
        'Chatti natively understands and responds in 91 languages. She auto-detects user language and maintains your brand voice across every global market.',
    },
  ];

  return (
    <PageSection background="muted" padding="default" id="speed">
      <div className="mb-12">
        <h2
          className="font-heading mb-8 text-left"
          style={{
            fontSize: 'clamp(36px, 3vw, 40px)',
            fontWeight: 300,
            color: '#1B1340',
          }}
          data-aos="fade-up"
        >
          The Science of Speed & Scale
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="pb-6 border-b border-[#E5E7EB] last:border-b-0 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <h3
                className="font-heading font-semibold mb-3 text-[#1B1340]"
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                }}
              >
                {faq.question}
              </h3>
              <p
                className="font-sans font-normal"
                style={{
                  fontSize: '16px',
                  color: '#4B5563',
                  lineHeight: '1.6',
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
