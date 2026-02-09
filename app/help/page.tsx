'use client';

/**
 * HELP CENTER PAGE SECTION INVENTORY
 * ==================================
 * 1. Hero_Search - <PageSection /> with H1, subtext, and search bar
 * 2. CategoryTiles_5Tiles - <PageSection /> with 5 category tiles
 * 3. PopularArticles_8Items - <PageSection /> with 8 popular articles
 * 4. VideoTutorials_6Videos - <PageSection /> with 6 video cards in 3-column grid
 * 5. QuickStartGuides_6Guides - <PageSection /> with 6 quick start cards in 3×2 grid
 * 6. ContactSupport_3Cards - <PageSection /> with 3 contact cards
 * 7. SystemStatus_Badge - System status indicator
 * 8. SiteFooter_NavAndMeta - <Footer />
 */

import React, { useState } from 'react';
import { Search, Play, Clock, MessageCircle, Mail, Phone } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import Link from 'next/link';

interface Category {
  icon: string;
  title: string;
  description: string;
}

interface PopularArticle {
  title: string;
  category: string;
}

interface VideoTutorial {
  title: string;
  duration: string;
  category: string;
}

interface QuickStartGuide {
  product: string;
  description: string;
  time: string;
}

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Category[] = [
    {
      icon: '🚀',
      title: 'Getting Started',
      description: 'Account setup, first deployment, and knowledge base configuration.',
    },
    {
      icon: '🔗',
      title: 'Integration Guides',
      description: 'Connect to Salesforce, HubSpot, GoHighLevel, Zoho, and custom APIs.',
    },
    {
      icon: '📺',
      title: 'Product Tutorials',
      description: 'Walkthroughs for Comment Responder, ChattiLive, and Dotti DeepLink™.',
    },
    {
      icon: '💳',
      title: 'Billing & Account',
      description: 'Subscription management, invoices, and usage-based billing.',
    },
    {
      icon: '🛡',
      title: 'Security & Compliance',
      description: 'SOC2 Type II, data segregation, GDPR/CCPA, and AI governance.',
    },
  ];

  const popularArticles: PopularArticle[] = [
    {
      title: 'How do I install the Web-Chat snippet on my website?',
      category: 'Getting Started',
    },
    {
      title: 'Connecting HubSpot to ConversionIQ',
      category: 'Integrations',
    },
    {
      title: 'Setting up your first Comment Responder knowledge base',
      category: 'Getting Started',
    },
    {
      title: 'How to suppress Chatti on checkout pages',
      category: 'Tutorials',
    },
    {
      title: 'How does Dotti DeepLink™ enrich lead data?',
      category: 'Tutorials',
    },
    {
      title: 'Understanding your invoice and usage metrics',
      category: 'Billing',
    },
    {
      title: 'Handing off a live conversation to a human agent',
      category: 'Tutorials',
    },
    {
      title: 'SOC2 Type II: What it means for your data',
      category: 'Security',
    },
  ];

  const videoTutorials: VideoTutorial[] = [
    {
      title: 'Deploy Web-Chat in Under 5 Minutes',
      duration: '3:42',
      category: 'Getting Started',
    },
    {
      title: 'Comment Responder: Full Setup',
      duration: '7:15',
      category: 'Tutorials',
    },
    {
      title: 'Connecting Salesforce',
      duration: '4:58',
      category: 'Integrations',
    },
    {
      title: 'SMS: Campaign to Conversion',
      duration: '6:22',
      category: 'Tutorials',
    },
    {
      title: 'DeepLink™ Enrichment Explained',
      duration: '5:10',
      category: 'Tutorials',
    },
    {
      title: 'Command Center & Human Handoff',
      duration: '4:30',
      category: 'Tutorials',
    },
  ];

  const quickStartGuides: QuickStartGuide[] = [
    {
      product: 'Comment Responder',
      description: 'Connect Meta, upload knowledge base, activate.',
      time: '~10 min',
    },
    {
      product: 'ChattiLive Web-Chat',
      description: 'Paste one script. Configure voice. Go live.',
      time: '~5 min',
    },
    {
      product: 'ChattiLive SMS',
      description: 'Provision number. Connect CRM. Launch.',
      time: '~15 min',
    },
    {
      product: 'ChattiLive Messenger',
      description: 'Link FB/IG pages. Set DM objectives.',
      time: '~10 min',
    },
    {
      product: 'ChattiLive WhatsApp',
      description: 'Register WhatsApp Business API. Configure.',
      time: '~20 min',
    },
    {
      product: 'Dotti DeepLink™',
      description: 'Install pixel. Configure enrichment rules.',
      time: '~10 min',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO WITH SEARCH */}
      <PageSection background="muted" padding="default">
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
            How Can We Help?
          </h1>
          <p
            className="text-center mx-auto mb-8 font-sans font-normal"
            style={{
              fontSize: '18px',
              color: '#4B5563',
              lineHeight: '1.6',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Search guides, docs, and tutorials — or contact support directly.
          </p>

          {/* SEARCH BAR */}
          <div
            className="mx-auto relative"
            style={{ maxWidth: '560px' }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search for a topic, product, or question…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#D1D5DB] focus:outline-none focus:border-[#14B8A6] transition-colors font-sans"
                style={{
                  height: '52px',
                  fontSize: '16px',
                }}
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* CATEGORY TILES */}
      <PageSection background="light" padding="default">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryTile key={index} category={category} index={index} />
          ))}
        </div>
      </PageSection>

      {/* POPULAR ARTICLES */}
      <PageSection background="muted" padding="default">
        <div className="max-w-4xl">
          <h2
            className="font-heading mb-8 text-left"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Most Popular
          </h2>
          <div className="space-y-0">
            {popularArticles.map((article, index) => (
              <PopularArticle
                key={index}
                article={article}
                index={index}
                isLast={index === popularArticles.length - 1}
              />
            ))}
          </div>
        </div>
      </PageSection>

      {/* VIDEO TUTORIALS */}
      <PageSection background="muted" padding="default">
        <div className="mb-12">
          <h2
            className="font-heading mb-4 text-left"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Watch & Learn
          </h2>
          <p
            className="font-sans font-normal text-[#4B5563] mb-8"
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Step-by-step walkthroughs for every product and integration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTutorials.map((video, index) => (
              <VideoCard key={index} video={video} index={index} />
            ))}
          </div>
        </div>
      </PageSection>

      {/* QUICK START GUIDES */}
      <PageSection background="light" padding="default">
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
            Get Live in Minutes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickStartGuides.map((guide, index) => (
              <QuickStartCard key={index} guide={guide} index={index} />
            ))}
          </div>
        </div>
      </PageSection>

      {/* CONTACT SUPPORT */}
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
            Still Need Help?
          </h2>
          <p
            className="font-sans font-normal text-[#4B5563] mb-8"
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our team is available Monday–Friday, 9 AM–6 PM ET. Average response: under 2 hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <ContactCard
            icon={<MessageCircle size={24} />}
            title="Live Chat"
            description="Talk to our team in real-time."
            actionLabel="Start Chat"
            actionHref="/request-a-demo"
            index={0}
          />
          <ContactCard
            icon={<Mail size={24} />}
            title="Email"
            description="Send a request to support@conversioniq.ai."
            actionLabel="Email Us"
            actionHref="mailto:support@conversioniq.ai"
            index={1}
          />
          <ContactCard
            icon={<Phone size={24} />}
            title="Book a Call"
            description="Schedule 15 minutes with a specialist."
            actionLabel="Book Now"
            actionHref="/request-a-demo"
            index={2}
          />
        </div>

        {/* SYSTEM STATUS */}
        <div className="text-center mt-12">
          <div
            className="inline-block px-4 py-2 rounded-full font-sans font-bold"
            style={{
              background: '#D1FAE5',
              color: '#059669',
              fontSize: '14px',
            }}
            data-aos="fade-up"
          >
            ✅ All Systems Operational
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
}

// CATEGORY TILE COMPONENT
function CategoryTile({
  category,
  index,
}: {
  category: Category;
  index: number;
}) {
  return (
    <div
      className="bg-white border border-[#E5E7EB] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
      style={{
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      data-aos="fade-up"
      data-aos-delay={100 + index * 50}
    >
      <div
        className="text-3xl mb-4"
        style={{
          fontSize: '24px',
        }}
      >
        {category.icon}
      </div>
      <h3
        className="font-heading font-semibold text-[#1B1340] mb-2"
        style={{
          fontSize: '18px',
          fontWeight: 600,
        }}
      >
        {category.title}
      </h3>
      <p
        className="font-sans font-normal text-[#6B7280]"
        style={{
          fontSize: '14px',
          lineHeight: '1.5',
        }}
      >
        {category.description}
      </p>
    </div>
  );
}

// POPULAR ARTICLE COMPONENT
function PopularArticle({
  article,
  index,
  isLast,
}: {
  article: PopularArticle;
  index: number;
  isLast: boolean;
}) {
  return (
    <div
      className={`py-4 ${!isLast ? 'border-b border-[#E5E7EB]' : ''}`}
      data-aos="fade-up"
      data-aos-delay={100 + index * 50}
    >
      <div className="flex items-start justify-between gap-4">
        <Link
          href={`/help/article/${article.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="flex-1 font-sans font-medium text-[#1B1340] hover:text-[#14B8A6] transition-colors"
          style={{
            fontSize: '16px',
          }}
        >
          {article.title}
        </Link>
        <div
          className="px-3 py-1 rounded-full font-sans font-medium"
          style={{
            background: '#F3F4F6',
            color: '#6B7280',
            fontSize: '12px',
          }}
        >
          {article.category}
        </div>
      </div>
    </div>
  );
}

// VIDEO CARD COMPONENT
function VideoCard({
  video,
  index,
}: {
  video: VideoTutorial;
  index: number;
}) {
  return (
    <div
      className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
      style={{
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      {/* Video Thumbnail */}
      <div className="relative" style={{ aspectRatio: '16 / 9' }}>
        <div className="w-full h-full bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center">
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="bg-white/90 rounded-full p-4 flex items-center justify-center"
              style={{
                width: '64px',
                height: '64px',
              }}
            >
              <Play className="text-[#1B1340]" size={24} fill="#1B1340" />
            </div>
          </div>
          {/* Duration Badge */}
          <div
            className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded font-sans font-medium flex items-center gap-1"
            style={{
              fontSize: '12px',
            }}
          >
            <Clock size={12} />
            {video.duration}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4
          className="font-heading font-semibold text-[#1B1340] mb-2"
          style={{
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '1.3',
          }}
        >
          {video.title}
        </h4>
        <div
          className="inline-block px-2 py-1 rounded-full font-sans font-medium"
          style={{
            background: '#F3F4F6',
            color: '#6B7280',
            fontSize: '12px',
          }}
        >
          {video.category}
        </div>
      </div>
    </div>
  );
}

// QUICK START CARD COMPONENT
function QuickStartCard({
  guide,
  index,
}: {
  guide: QuickStartGuide;
  index: number;
}) {
  return (
    <div
      className="bg-white border border-[#E5E7EB] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      {/* Icon Placeholder */}
      <div
        className="w-12 h-12 bg-gradient-to-br from-[#383299]/10 to-[#ef2d60]/10 rounded-lg flex items-center justify-center mb-4"
        style={{
          fontSize: '24px',
        }}
      >
        🚀
      </div>

      {/* Product Name */}
      <h4
        className="font-heading font-semibold text-[#1B1340] mb-2"
        style={{
          fontSize: '18px',
          fontWeight: 600,
        }}
      >
        {guide.product}
      </h4>

      {/* Description */}
      <p
        className="font-sans font-normal text-[#4B5563] mb-4"
        style={{
          fontSize: '14px',
          lineHeight: '1.5',
        }}
      >
        {guide.description}
      </p>

      {/* Time Pill + Link */}
      <div className="flex items-center justify-between">
        <div
          className="px-3 py-1 rounded-full font-sans font-medium flex items-center gap-1"
          style={{
            background: '#F3F4F6',
            color: '#6B7280',
            fontSize: '12px',
          }}
        >
          <Clock size={12} />
          {guide.time}
        </div>
        <Link
          href={`/help/guide/${guide.product.toLowerCase().replace(/\s+/g, '-')}`}
          className="font-sans font-medium text-[#14B8A6] hover:text-[#0D9488] transition-colors"
          style={{
            fontSize: '14px',
          }}
        >
          Start →
        </Link>
      </div>
    </div>
  );
}

// CONTACT CARD COMPONENT
function ContactCard({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  index: number;
}) {
  return (
    <div
      className="bg-white border border-[#E5E7EB] rounded-xl p-6 text-center"
      style={{
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      <div className="text-[#1B1340] mb-4 flex justify-center">{icon}</div>
      <h3
        className="font-heading font-semibold text-[#1B1340] mb-2"
        style={{
          fontSize: '18px',
          fontWeight: 600,
        }}
      >
        {title}
      </h3>
      <p
        className="font-sans font-normal text-[#4B5563] mb-4"
        style={{
          fontSize: '14px',
          lineHeight: '1.5',
        }}
      >
        {description}
      </p>
      <Link
        href={actionHref}
        className="inline-block px-6 py-2 bg-[#14B8A6] text-white rounded-lg font-sans font-semibold hover:bg-[#0D9488] transition-colors"
        style={{
          fontSize: '14px',
        }}
      >
        {actionLabel}
      </Link>
    </div>
  );
}
