'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProductHero } from '@/components/content/ProductHero';
import { SplitSection, FeatureItem } from '@/components/layout/SplitSection';
import { FeatureList } from '@/components/layout/FeatureList';
import { SecurityProtocolsSection } from '@/components/content/SecurityProtocolsSection';
import { TestimonialBanner } from '@/components/content/TestimonialBanner';
import { FooterCTA } from '@/components/content/FooterCTA';
import { MessageSquare, Target, Link2 } from 'lucide-react';

export default function ComponentsStyleGuide() {
  const exampleFeatures: FeatureItem[] = [
    {
      title: 'Automated Lead Screening',
      body: 'Identifies high-value intent by drilling into budget, authority, and needs, delivering only qualified opportunities to your CRM.',
      icon: Target,
    },
    {
      title: 'Tier-1 Support Execution',
      body: 'Resolves technical inquiries and FAQs instantly by ingesting your manuals, reducing the load on your human support team.',
      icon: MessageSquare,
    },
    {
      title: 'Direct Scheduling & Transactions',
      body: 'Enables users to book demos on live calendars or complete purchases natively within the interface.',
      icon: Link2,
    },
  ];

  const visualCard = (
    <div
      className="w-full bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5 rounded-xl flex items-center justify-center text-slate-400 font-sans text-sm"
      style={{
        minHeight: '400px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      }}
    >
      Example Visual Card
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-heading font-bold text-[#1B1340] mb-12">
          Component Style Guide
        </h1>
        <p className="text-lg text-slate-600 mb-16">
          Developer reference for all reusable components in the ConversionIQ design system.
        </p>

        {/* Hero Components */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Hero Components
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                ProductHero (Interior Product Pages)
              </h3>
              <div className="border border-slate-200 rounded-lg p-8 bg-slate-50">
                <ProductHero
                  eyebrow="PRODUCT"
                  title="Example Product Title"
                  subtitle="This is an example subtitle that describes the product value proposition in a concise way."
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                ProductHero - ChattiLive Variant
              </h3>
              <div className="border border-slate-200 rounded-lg p-8 bg-slate-50">
                <ProductHero
                  eyebrow="PRODUCT"
                  title="ChattiLive: Scale 1-to-1 Conversations Across Every Platform"
                  subtitle="A centralized intelligence core to automate sales and support via Web, SMS, WhatsApp, and Social."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Split Sections */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Split Sections
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                SplitSection - Image Right (Default)
              </h3>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <SplitSection
                  title="Autonomous Predictive Intelligence"
                  subtitle="Most tools are isolated, scripted boxes. ChattiLive is an intelligence layer that unifies your customer lifecycle."
                  features={exampleFeatures}
                  side="image-right"
                >
                  {visualCard}
                </SplitSection>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                SplitSection - Image Left
              </h3>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <SplitSection
                  title="Strategic Reasoning vs. Static Rules"
                  subtitle="A dynamic intelligence layer engineered to manage the entire customer sales and support lifecycles."
                  features={exampleFeatures.slice(0, 2)}
                  side="image-left"
                  background="muted"
                >
                  {visualCard}
                </SplitSection>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Lists */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Feature Lists
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                FeatureList - Stacked Layout
              </h3>
              <div className="border border-slate-200 rounded-lg p-8 bg-white">
                <FeatureList items={exampleFeatures} layout="stacked" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                FeatureList - Grid Layout
              </h3>
              <div className="border border-slate-200 rounded-lg p-8 bg-white">
                <FeatureList items={exampleFeatures} layout="grid" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                FeatureList - Centered Layout
              </h3>
              <div className="border border-slate-200 rounded-lg p-8 bg-white">
                <FeatureList items={exampleFeatures} layout="centered" />
              </div>
            </div>
          </div>
        </section>

        {/* Security & Certifications */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Security & Certifications
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                SecurityProtocolsSection - Default
              </h3>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <SecurityProtocolsSection />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                SecurityProtocolsSection - AI Without Risk Variant
              </h3>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <SecurityProtocolsSection
                  title="AI Without Risk"
                  subtitle="SOC2 and ISO certifications to support enterprise deployment."
                  variant="ai-without-risk"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Testimonials
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                TestimonialBanner - Blue Variant
              </h3>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <TestimonialBanner
                  quote="ConversionIQ eliminated the need for 10 full-time comment moderators and improved our CPA by 22% in under 90 days. The AI handles every comment with more precision than our team ever could."
                  name="Michael Torres"
                  role="VP of Digital Marketing"
                  backgroundVariant="blue"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                TestimonialBanner - Neutral Variant
              </h3>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <TestimonialBanner
                  quote="This is an example testimonial quote that demonstrates the neutral background variant styling."
                  name="Jane Doe"
                  role="Chief Marketing Officer"
                  company="Example Company"
                  backgroundVariant="neutral"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTAs */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Footer CTAs
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                FooterCTA - Revenue Machine Variant
              </h3>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <FooterCTA
                  title="Welcome to the ConversionIQ.ai Revenue Machine"
                  subtitle="Deploy autonomous intelligence across every channel to turn anonymous signals into qualified revenue."
                  primaryLabel="Book a Demo"
                  secondaryLabel="Watch the Overview"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                FooterCTA - Web-Chat Node Variant
              </h3>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <FooterCTA
                  title="Experience the ConversionIQ Advantage"
                  subtitle="Deploy Web-Chat as an autonomous conversion engine across every visitor touchpoint."
                  primaryLabel="Deploy Web-Chat Now"
                  secondaryLabel="Speak with an Expert"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

