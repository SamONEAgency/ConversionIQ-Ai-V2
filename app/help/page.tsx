'use client';

/**
 * HELP CENTER PAGE SECTION INVENTORY
 * ==================================
 * 1. Hero_Search - Sierra-style centered hero with search
 * 2. HorizontalTabs - Tab navigation for filtering content
 * 3. CategoryTiles_5Tiles - Clean cards without emojis
 * 4. PopularArticles_8Items - Visible list with category pills
 * 5. VideoTutorials_6Videos - Card grid with play buttons
 * 6. QuickStartGuides_6Guides - Card grid with time estimates
 * 7. ContactSupport_3Cards - Support contact options
 * 8. SystemStatus_Badge - System status indicator
 * 9. Shared_FooterCTA - <FooterCTA />
 * 10. SiteFooter_NavAndMeta - <Footer />
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  Play,
  Clock,
  MessageCircle,
  Mail,
  Calendar,
  ArrowRight,
  MessageSquare,
  Smartphone,
  Globe,
  Settings,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import { FooterCTA } from '@/components/content/FooterCTA';
import Link from 'next/link';

type CategoryType = 'getting-started' | 'integrations' | 'tutorials' | 'billing' | 'security';

interface PopularArticle {
  title: string;
  answer: string;
  category: CategoryType;
  href: string;
}

interface VideoTutorial {
  title: string;
  duration: string;
  category: CategoryType;
  href: string;
}

interface QuickStartGuide {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  product: string;
  description: string;
  time: string;
  category: CategoryType;
  href: string;
}

interface CategoryTile {
  title: string;
  description: string;
  category: CategoryType;
}

export default function HelpPage() {
  const [featureRequest, setFeatureRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections: CategoryType[] = ['getting-started', 'integrations', 'tutorials', 'billing', 'security'];
      const scrollPosition = window.scrollY + 200; // Offset for fixed nav

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(sections[i]);
          break;
        }
      }
    };

    // Set initial active category based on scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: CategoryType) => {
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

  const handleFeatureSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!featureRequest.trim()) return;
    
    setIsSubmitting(true);
    // Front-end only - just show a success message
    setTimeout(() => {
      alert('Thank you for your feature request! We\'ll review it and get back to you.');
      setFeatureRequest('');
      setIsSubmitting(false);
    }, 500);
  };

  const tabs: { id: CategoryType; label: string }[] = [
    { id: 'getting-started', label: 'Feature Request' },
    { id: 'integrations', label: 'Most Popular' },
    { id: 'tutorials', label: 'Watch & Learn' },
    { id: 'billing', label: 'Quick Start' },
    { id: 'security', label: 'Get Help' },
  ];

  const categoryTiles: CategoryTile[] = [
    {
      title: 'Getting Started',
      description: 'Account setup, first deployment, and knowledge base configuration.',
      category: 'getting-started',
    },
    {
      title: 'Integration Guides',
      description: 'Connect to Salesforce, HubSpot, GoHighLevel, Zoho, and custom APIs.',
      category: 'integrations',
    },
    {
      title: 'Product Tutorials',
      description: 'Walkthroughs for Comment Responder, ChattiLive, and Dotti DeepLink™.',
      category: 'tutorials',
    },
    {
      title: 'Billing & Account',
      description: 'Subscription management, invoices, and usage-based billing.',
      category: 'billing',
    },
    {
      title: 'Security & Compliance',
      description: 'SOC2 Type II, data segregation, GDPR/CCPA, and AI governance.',
      category: 'security',
    },
  ];

  const popularArticles: PopularArticle[] = [
    {
      title: 'How do I install the Web-Chat snippet on my website?',
      answer: 'Copy the JavaScript snippet from your ConversionIQ dashboard and paste it into the <head> section of your website, or use Google Tag Manager. The snippet loads asynchronously and has zero impact on page load speed.',
      category: 'getting-started',
      href: '/help',
    },
    {
      title: 'Connecting HubSpot to ConversionIQ',
      answer: 'Navigate to Integrations in your ConversionIQ dashboard, select HubSpot, and authorize the connection using OAuth. Once connected, leads, conversations, and enrichment data will sync bi-directionally in real-time.',
      category: 'integrations',
      href: '/help',
    },
    {
      title: 'Setting up your first Comment Responder knowledge base',
      answer: 'Upload your brand guidelines, FAQ documents, product specs, or paste URLs from your website. ChattiLive will ingest this content and use it to respond to comments with grounded reasoning, ensuring brand-safe and accurate replies.',
      category: 'getting-started',
      href: '/help',
    },
    {
      title: 'How to suppress Chatti on checkout pages',
      answer: 'In the Web-Chat Node settings, navigate to Suppression Rules. Add the URL patterns for your checkout pages (e.g., /checkout, /cart). Chatti will automatically stay off these pages while remaining active everywhere else.',
      category: 'tutorials',
      href: '/help',
    },
    {
      title: 'How does Dotti DeepLink™ enrich lead data?',
      answer: 'When a visitor provides an email, phone number, or lands on a tracked page, Dotti instantly reverse-appends thousands of verified data attributes including demographics, financial indicators, and lifestyle affinities. This enrichment happens in milliseconds and writes directly to your CRM.',
      category: 'tutorials',
      href: '/help',
    },
    {
      title: 'Understanding your invoice and usage metrics',
      answer: 'Your invoice reflects usage-based billing for conversations, enrichment queries, and node activations. View detailed breakdowns in the Billing section of your dashboard, including conversation volume by node, enrichment queries, and any overage charges.',
      category: 'billing',
      href: '/help',
    },
    {
      title: 'Handing off a live conversation to a human agent',
      answer: 'Monitor all active conversations in the Command Center. When you identify a conversation that needs human intervention, click "Take Over" to seamlessly join the thread. The customer sees no interruption—the handoff is invisible.',
      category: 'tutorials',
      href: '/help',
    },
    {
      title: 'SOC2 Type II: What it means for your data',
      answer: 'SOC2 Type II certification demonstrates that ConversionIQ has undergone rigorous third-party audits of our security, availability, processing integrity, confidentiality, and privacy controls. Your data is protected by enterprise-grade security protocols and strict tenant-level segregation.',
      category: 'security',
      href: '/help',
    },
  ];

  const videoTutorials: VideoTutorial[] = [
    {
      title: 'Deploy Web-Chat in Under 5 Minutes',
      duration: '3:42',
      category: 'getting-started',
      href: '/help',
    },
    {
      title: 'Comment Responder: Full Setup',
      duration: '7:15',
      category: 'tutorials',
      href: '/help',
    },
    {
      title: 'Connecting Salesforce',
      duration: '4:58',
      category: 'integrations',
      href: '/help',
    },
    {
      title: 'SMS: Campaign to Conversion',
      duration: '6:22',
      category: 'tutorials',
      href: '/help',
    },
    {
      title: 'DeepLink™ Enrichment Explained',
      duration: '5:10',
      category: 'tutorials',
      href: '/help',
    },
    {
      title: 'Command Center & Human Handoff',
      duration: '4:30',
      category: 'tutorials',
      href: '/help',
    },
  ];

  const quickStartGuides: QuickStartGuide[] = [
    {
      icon: MessageSquare,
      product: 'Comment Responder',
      description: 'Connect Meta, upload knowledge base, activate.',
      time: '~10 min',
      category: 'getting-started',
      href: '/help',
    },
    {
      icon: Globe,
      product: 'ChattiLive Web-Chat',
      description: 'Paste one script. Configure voice. Go live.',
      time: '~5 min',
      category: 'getting-started',
      href: '/help',
    },
    {
      icon: Smartphone,
      product: 'ChattiLive SMS',
      description: 'Provision number. Connect CRM. Launch.',
      time: '~15 min',
      category: 'integrations',
      href: '/help',
    },
    {
      icon: MessageCircle,
      product: 'ChattiLive Messenger',
      description: 'Link FB/IG pages. Set DM objectives.',
      time: '~10 min',
      category: 'integrations',
      href: '/help',
    },
    {
      icon: MessageCircle,
      product: 'ChattiLive WhatsApp',
      description: 'Register WhatsApp Business API. Configure.',
      time: '~20 min',
      category: 'integrations',
      href: '/help',
    },
    {
      icon: Settings,
      product: 'Dotti DeepLink™',
      description: 'Install pixel. Configure enrichment rules.',
      time: '~10 min',
      category: 'integrations',
      href: '/help',
    },
  ];

  // Show all content (no filtering)
  const filteredArticles = popularArticles;
  const filteredVideos = videoTutorials;
  const filteredGuides = quickStartGuides;
  const filteredCategories = categoryTiles;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION - Sierra Subprocessors Style */}
      <PageSection background="muted" padding="default">
        <div
          className="text-center mx-auto"
          style={{
            maxWidth: '720px',
            paddingTop: '80px',
            paddingBottom: '40px',
          }}
        >
          {/* Eyebrow */}
          <div
            className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em' }}
            data-aos="fade-up"
          >
            HELP CENTER
          </div>

          {/* H1 */}
          <h1
            className="font-heading mb-6 text-center"
            style={{
              fontSize: 'clamp(48px, 5vw, 56px)',
              fontWeight: 300,
              color: '#1B1340',
              lineHeight: '1.2',
            }}
            data-aos="fade-up"
            data-aos-delay="50"
          >
            How Can We Help?
          </h1>

          {/* Subheadline */}
          <p
            className="text-center mx-auto font-sans font-normal"
            style={{
              fontSize: '18px',
              color: '#4B5563',
              lineHeight: '1.6',
              maxWidth: '600px',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Search guides, docs, and tutorials or contact support directly.
          </p>
        </div>
      </PageSection>

      {/* HORIZONTAL TABS - Anchor Navigation */}
      <PageSection background="light" padding="small">
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`px-6 py-2 rounded-full font-sans transition-all duration-200 ${
                activeCategory === tab.id
                  ? 'bg-[#1B1340] text-white'
                  : 'bg-[#F3F4F6] text-[#1B1340] hover:bg-[#E5E7EB]'
              }`}
              aria-selected={activeCategory === tab.id}
              style={{
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </PageSection>

      {/* FEATURE REQUEST FORM */}
      <PageSection id="getting-started" background="light" padding="default">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-heading mb-4 text-center"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Have a feature you'd like to see on the platform?
          </h2>
          <p
            className="font-sans font-normal text-center mb-8"
            style={{
              fontSize: '16px',
              color: '#4B5563',
              lineHeight: '1.6',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Share your ideas and feedback with our team.
          </p>
          <form onSubmit={handleFeatureSubmit} data-aos="fade-up" data-aos-delay="200">
            <div className="mb-4">
              <textarea
                value={featureRequest}
                onChange={(e) => setFeatureRequest(e.target.value)}
                placeholder="Describe the feature or improvement you'd like to see..."
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] bg-white focus:outline-none focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 transition-all font-sans resize-none"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || !featureRequest.trim()}
                className="px-6 py-3 bg-[#00B4D8] text-white rounded-lg font-sans font-semibold hover:bg-[#0D9488] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontSize: '16px',
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </PageSection>

      {/* POPULAR ARTICLES */}
      <PageSection id="integrations" background="muted" padding="default">
        <div className="max-w-4xl">
          <h2
            className="font-heading mb-4 text-left"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Most Popular
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
            Quick answers to the questions teams ask most often.
          </p>
          <div className="space-y-6">
            {filteredArticles.map((article, index) => (
              <PopularArticleRow
                key={index}
                article={article}
                index={index}
                isLast={index === filteredArticles.length - 1}
              />
            ))}
          </div>
        </div>
      </PageSection>

      {/* VIDEO TUTORIALS */}
      <PageSection id="tutorials" background="light" padding="default">
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
            {filteredVideos.map((video, index) => (
              <VideoCard key={index} video={video} index={index} />
            ))}
          </div>
        </div>
      </PageSection>

      {/* QUICK START GUIDES */}
      <PageSection id="billing" background="muted" padding="default">
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
            Get Live in Minutes
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
            Short, prescriptive guides to deploy each node fast.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide, index) => (
              <QuickStartCard key={index} guide={guide} index={index} />
            ))}
          </div>
        </div>
      </PageSection>

      {/* CONTACT SUPPORT */}
      <PageSection id="security" background="muted" padding="default">
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
            className="font-sans font-normal text-[#4B5563] mb-8 mx-auto"
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              maxWidth: '640px',
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
            icon={<Calendar size={24} />}
            title="Book a Call"
            description="Schedule 15 minutes with a specialist."
            actionLabel="Book Now"
            actionHref="/request-a-demo"
            index={2}
          />
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

// CATEGORY TILE CARD - No Emojis
function CategoryTileCard({
  category,
  index,
  onClick,
}: {
  category: CategoryTile;
  index: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-[#E5E7EB] rounded-xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full"
      style={{
        borderRadius: '12px',
      }}
      data-aos="fade-up"
      data-aos-delay={100 + index * 50}
    >
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
    </button>
  );
}

// Helper function to get category label
function getCategoryLabel(category: CategoryType): string {
  const tabMap: Record<CategoryType, string> = {
    'getting-started': 'Getting Started',
    'integrations': 'Integrations',
    'tutorials': 'Product Tutorials',
    'billing': 'Billing & Account',
    'security': 'Security & Compliance',
  };
  return tabMap[category] || category;
}

// POPULAR ARTICLE ROW
function PopularArticleRow({
  article,
  index,
  isLast,
}: {
  article: PopularArticle;
  index: number;
  isLast: boolean;
}) {
  const categoryLabel = getCategoryLabel(article.category);
  
  return (
    <div
      className={`pb-6 ${!isLast ? 'border-b border-[#E5E7EB]' : ''} ${isLast ? 'pb-0' : ''}`}
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
        {article.title}
      </h3>
      <p
        className="font-sans font-normal"
        style={{
          fontSize: '16px',
          color: '#4B5563',
          lineHeight: '1.6',
        }}
      >
        {article.answer}
      </p>
    </div>
  );
}

// VIDEO CARD
function VideoCard({
  video,
  index,
}: {
  video: VideoTutorial;
  index: number;
}) {
  const categoryLabel = getCategoryLabel(video.category);
  
  return (
    <Link
      href={video.href}
      className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        borderRadius: '12px',
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
          {categoryLabel}
        </div>
      </div>
    </Link>
  );
}

// QUICK START CARD
function QuickStartCard({
  guide,
  index,
}: {
  guide: QuickStartGuide;
  index: number;
}) {
  const Icon = guide.icon;
  return (
    <div
      className="bg-white border border-[#E5E7EB] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{
        borderRadius: '12px',
      }}
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex items-center justify-center flex-shrink-0">
          <Icon className="text-[#383299]" size={24} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
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
              href={guide.href}
              className="font-sans font-medium text-[#00B4D8] hover:text-[#0D9488] transition-colors flex items-center gap-1"
              style={{
                fontSize: '14px',
              }}
            >
              Start <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// CONTACT CARD
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
        className="inline-block px-6 py-2 bg-[#00B4D8] text-white rounded-lg font-sans font-semibold hover:bg-[#0D9488] transition-colors"
        style={{
          fontSize: '14px',
        }}
      >
        {actionLabel}
      </Link>
    </div>
  );
}
