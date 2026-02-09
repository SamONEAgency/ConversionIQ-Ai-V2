'use client';

/**
 * CUSTOMER STORIES INDEX PAGE SECTION INVENTORY
 * =============================================
 * 1. Hero_Custom - <PageSection /> with H1 and subtext (not ProductHero)
 * 2. FeaturedStory_Card - Full-width dark navy card with image left, text right
 * 3. StoryGrid_6Cards - 3-column grid with 6 customer story cards
 * 4. Shared_FooterCTA - <FooterCTA />
 * 5. SiteFooter_NavAndMeta - <Footer />
 */

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import { FooterCTA } from '@/components/content/FooterCTA';

interface Story {
  category: string;
  statLabel: string;
  statValue: string;
  title: string;
  subtitle: string;
}

export default function CustomersPage() {
  const stories: Story[] = [
    {
      category: 'POLITICAL & ADVOCACY',
      statLabel: 'Comment coverage',
      statValue: '100%',
      title: 'How a National Campaign Achieved 100% Comment Coverage Across 47 Ad Accounts.',
      subtitle:
        'Comment Responder provided 24/7 autonomous moderation during peak campaign season — zero brand incidents, zero manual intervention.',
    },
    {
      category: 'TRAVEL & HOSPITALITY',
      statLabel: 'Lead qualification rate',
      statValue: '3x',
      title: 'How a Multi-Property Resort Group Tripled Qualified Leads with Zero Live Agents.',
      subtitle:
        'ChattiLive Web-Chat replaced an outsourced live chat vendor, qualifying visitors with enriched data and pushing leads directly to CRM.',
    },
    {
      category: 'HEALTHCARE',
      statLabel: 'Attributes enriched per lead',
      statValue: '2,000+',
      title: 'How a Healthcare Organization Personalized Patient Acquisition with 2,000+ Data Attributes.',
      subtitle:
        'Dotti DeepLink™ turned anonymous website traffic into known prospects — enabling ChattiLive to personalize every conversation.',
    },
    {
      category: 'NON-PROFIT',
      statLabel: 'SMS replies automated',
      statValue: '86%',
      title: 'How a National Non-Profit Automated 86% of Donor SMS Replies.',
      subtitle:
        'ChattiLive SMS handled inbound donor inquiries autonomously — answering questions, providing links, and re-engaging lapsed donors.',
    },
    {
      category: 'AGENCY',
      statLabel: 'Moderation labor reduced',
      statValue: '60%',
      title: 'How a Performance Agency Cut Moderation Labor 60% Across 12 Client Accounts.',
      subtitle:
        'Comment Responder deployed as a white-label layer across all client ad accounts with independent brand voice configuration.',
    },
    {
      category: 'AUTOMOTIVE',
      statLabel: 'Response time',
      statValue: '<5 seconds',
      title: 'How a Global Auto Brand Achieved Sub-5 Second Response Across 14 Markets.',
      subtitle:
        'ChattiLive Web-Chat and WhatsApp detected visitor locale, responded in 91 languages, and routed leads to the nearest dealership.',
    },
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
            Our Customers
          </h1>
          <p
            className="text-center mx-auto font-sans font-normal"
            style={{
              fontSize: '18px',
              color: '#4B5563',
              lineHeight: '1.6',
              maxWidth: '580px',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            See how marketing and revenue teams deploy autonomous agents to convert traffic at scale.
          </p>
        </div>
      </PageSection>

      {/* FEATURED STORY CARD */}
      <PageSection background="light" padding="default">
        <FeaturedStoryCard />
      </PageSection>

      {/* STORY GRID */}
      <PageSection background="muted" padding="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} index={index} />
          ))}
        </div>
      </PageSection>

      {/* FOOTER CTA */}
      <FooterCTA
        title="See what ConversionIQ can do for you."
        subtitle="Every deployment is configured to your brand, your playbook, and your conversion goals."
        primaryLabel="Book a 15-Minute Demo"
        primaryHref="/request-a-demo"
        secondaryLabel="Explore the Platform"
        secondaryHref="/products/chattlive"
      />

      <Footer />
    </div>
  );
}

// FEATURED STORY CARD
function FeaturedStoryCard() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: '#1B1340',
        borderRadius: '16px',
      }}
      data-aos="fade-up"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Placeholder - Left (60%) */}
        <div
          className="w-full lg:w-[60%] bg-gradient-to-br from-[#383299]/20 to-[#ef2d60]/20 flex items-center justify-center text-white/40 font-sans text-sm"
          style={{
            minHeight: '400px',
          }}
        >
          {/* TODO: Replace placeholder with featured story image */}
          Featured Story Image
        </div>

        {/* Text Content - Right (40%) */}
        <div className="w-full lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center">
          {/* Teal Pill Badge */}
          <div
            className="inline-block px-3 py-1 rounded-full mb-6"
            style={{
              background: '#14B8A6',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#FFFFFF',
            }}
          >
            HOSPITALITY
          </div>

          {/* Stat */}
          <div className="mb-6">
            <div
              className="text-sm font-sans font-medium mb-2"
              style={{
                color: '#14B8A6',
                fontSize: '12px',
              }}
            >
              CPA improvement
            </div>
            <div
              className="font-heading font-bold text-white"
              style={{
                fontSize: '48px',
                lineHeight: '1',
              }}
            >
              22%
            </div>
          </div>

          {/* H2 */}
          <h2
            className="font-heading font-semibold text-white mb-4"
            style={{
              fontSize: 'clamp(28px, 3vw, 32px)',
              fontWeight: 600,
              lineHeight: '1.3',
            }}
          >
            How a Major Resort Brand Cut CPA by 22% and Eliminated 10 FTEs in 90 Days.
          </h2>

          {/* Subtext */}
          <p
            className="font-sans font-normal text-white/90 mb-6"
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
            }}
          >
            ConversionIQ replaced a 10-person comment moderation team with fully autonomous AI — responding to every comment with on-brand precision across dozens of Meta ad accounts.
          </p>

          {/* Link */}
          <Link
            href="/customers/major-resort-brand"
            className="font-sans font-medium inline-flex items-center"
            style={{
              color: '#14B8A6',
              fontSize: '16px',
            }}
          >
            Read the full story →
          </Link>
        </div>
      </div>
    </div>
  );
}

// STORY CARD COMPONENT
function StoryCard({ story, index }: { story: Story; index: number }) {
  return (
    <div
      className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      {/* Image Placeholder */}
      <div
        className="w-full bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center text-slate-400 font-sans text-sm"
        style={{
          aspectRatio: '1 / 1',
        }}
      >
        {/* TODO: Replace placeholder with story image */}
        Story Image
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Teal Vertical Pill */}
        <div
          className="inline-block px-3 py-1 rounded-full mb-4"
          style={{
            background: '#14B8A6',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#FFFFFF',
          }}
        >
          {story.category}
        </div>

        {/* Stat */}
        <div className="mb-4">
          <div
            className="text-xs font-sans font-medium mb-1"
            style={{
              color: '#6B7280',
              fontSize: '12px',
            }}
          >
            {story.statLabel}
          </div>
          <div
            className="font-heading font-bold text-[#1B1340]"
            style={{
              fontSize: '32px',
              lineHeight: '1',
            }}
          >
            {story.statValue}
          </div>
        </div>

        {/* H3 */}
        <h3
          className="font-heading font-semibold text-[#1B1340] mb-3"
          style={{
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '1.3',
          }}
        >
          {story.title}
        </h3>

        {/* Subtext */}
        <p
          className="font-sans font-normal text-[#4B5563] mb-4"
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
          }}
        >
          {story.subtitle}
        </p>

        {/* Link */}
        <Link
          href={`/customers/${story.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
          className="font-sans font-medium inline-flex items-center"
          style={{
            color: '#14B8A6',
            fontSize: '16px',
          }}
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
