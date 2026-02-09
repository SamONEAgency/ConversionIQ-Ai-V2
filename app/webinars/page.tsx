'use client';

/**
 * WEBINARS PAGE
 * =============
 * Route: /webinars
 * Live & on-demand webinar sessions
 */

import React from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import { FooterCTA } from '@/components/content/FooterCTA';
import { Calendar, Play, Clock } from 'lucide-react';

export default function WebinarsPage() {
  const upcomingSessions = [
    {
      tag: 'Web-Chat Node',
      title: 'Designing an Autonomous Web-Chat Funnel That Actually Converts',
      date: 'April 25 · 11:00 AM PT',
      description:
        'A live, end-to-end walkthrough — from snippet install to qualification logic, handoff rules, and performance benchmarks.',
      ctaLabel: 'Save your seat →',
      ctaHref: '/request-a-demo',
    },
    {
      tag: 'ChattiLive SMS',
      title: 'From No-Reply to Two-Way: SMS Campaigns That Close Deals',
      date: 'May 8 · 9:00 AM PT',
      description:
        'See how teams are turning existing SMS blasts into fully autonomous 1-to-1 sales conversations with measurable revenue lift.',
      ctaLabel: 'Register →',
      ctaHref: '/request-a-demo',
    },
  ];

  const onDemandSessions = [
    {
      title: 'Turning Anonymous Traffic into Qualified Pipeline 24/7',
      tag: 'Web-Chat Node',
      duration: '32 min',
    },
    {
      title: 'CommentResponder™: Turning Comment Chaos into Revenue',
      tag: 'Social & Messenger',
      duration: '28 min',
    },
    {
      title: 'Identity Enrichment for the Segment of One',
      tag: 'Dotti DeepLink™',
      duration: '35 min',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <PageSection background="light" padding="default">
        <div className="text-center max-w-4xl mx-auto">
          {/* Kicker */}
          <div
            className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-4"
            style={{ fontSize: '12px', letterSpacing: '0.15em' }}
            data-aos="fade-up"
          >
            RESOURCES
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
            Live & On-Demand Webinars
          </h1>

          {/* Subheadline */}
          <p
            className="font-heading mb-6 text-center mx-auto"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 28px)',
              fontWeight: 300,
              color: '#1B1340',
              lineHeight: '1.4',
              maxWidth: '800px',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            See exactly how autonomous agents are deployed — with real screens, real metrics, and live Q&A.
          </p>

          {/* Body */}
          <p
            className="font-sans font-normal text-[#4B5563] text-center mx-auto"
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              maxWidth: '900px',
            }}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Join upcoming live sessions with the ConversionIQ team and customer leaders, or watch past episodes on demand. Every session is built around practical deployment examples and measurable outcomes — not slide decks.
          </p>
        </div>
      </PageSection>

      {/* UPCOMING SESSIONS */}
      <PageSection background="muted" padding="default">
        <div className="max-w-4xl mx-auto mb-12">
          <h2
            className="font-heading mb-8 text-left"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Upcoming Live Sessions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {upcomingSessions.map((session, index) => (
            <UpcomingSessionCard key={index} session={session} index={index} />
          ))}
        </div>
      </PageSection>

      {/* ON-DEMAND LIBRARY */}
      <PageSection background="light" padding="default">
        <div className="max-w-4xl mx-auto mb-12">
          <h2
            className="font-heading mb-4 text-left"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            Watch On-Demand
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
            Browse by product, vertical, or use case. Each session includes a chapterized recording and a takeaway deck.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {onDemandSessions.map((session, index) => (
            <OnDemandCard key={index} session={session} index={index} />
          ))}
        </div>
      </PageSection>

      {/* FOOTER CTA */}
      <FooterCTA
        title="Want a Session Tailored to Your Team?"
        subtitle="We'll run a private workshop on your funnel and your metrics, with a clear implementation plan at the end."
        primaryLabel="Request a Private Workshop"
        primaryHref="/request-a-demo"
        secondaryLabel="Explore the Platform"
        secondaryHref="/products/chattlive"
      />

      <Footer />
    </div>
  );
}

// UPCOMING SESSION CARD COMPONENT
function UpcomingSessionCard({
  session,
  index,
}: {
  session: {
    tag: string;
    title: string;
    date: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  index: number;
}) {
  return (
    <div
      className="bg-white border border-[#E5E7EB] rounded-xl p-6"
      style={{
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      {/* Tag */}
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
        {session.tag}
      </div>

      {/* Title */}
      <h3
        className="font-heading font-semibold text-[#1B1340] mb-3"
        style={{
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: '1.3',
        }}
      >
        {session.title}
      </h3>

      {/* Date */}
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={16} className="text-[#6B7280]" />
        <span
          className="font-sans font-medium text-[#6B7280]"
          style={{
            fontSize: '14px',
          }}
        >
          {session.date}
        </span>
      </div>

      {/* Description */}
      <p
        className="font-sans font-normal text-[#4B5563] mb-6"
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
        }}
      >
        {session.description}
      </p>

      {/* CTA */}
      <Link
        href={session.ctaHref}
        className="font-sans font-medium inline-flex items-center text-[#14B8A6] hover:text-[#0D9488] transition-colors"
        style={{
          fontSize: '16px',
        }}
      >
        {session.ctaLabel}
      </Link>
    </div>
  );
}

// ON-DEMAND CARD COMPONENT
function OnDemandCard({
  session,
  index,
}: {
  session: {
    title: string;
    tag: string;
    duration: string;
  };
  index: number;
}) {
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
            {session.duration}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tag */}
        <div
          className="inline-block px-3 py-1 rounded-full mb-3"
          style={{
            background: '#F3F4F6',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#6B7280',
          }}
        >
          {session.tag}
        </div>

        {/* Title */}
        <h3
          className="font-heading font-semibold text-[#1B1340] mb-4"
          style={{
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '1.3',
          }}
        >
          {session.title}
        </h3>

        {/* CTA */}
        <Link
          href="/request-a-demo"
          className="font-sans font-medium inline-flex items-center text-[#14B8A6] hover:text-[#0D9488] transition-colors"
          style={{
            fontSize: '16px',
          }}
        >
          Watch now →
        </Link>
      </div>
    </div>
  );
}
