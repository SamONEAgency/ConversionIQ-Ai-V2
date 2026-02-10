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
      <section className="bg-white w-full" style={{ paddingTop: 'calc(72.75px + 25px)', paddingBottom: '25px' }}>
        {/* Text Section */}
        <div className="w-full px-[25px] mb-[25px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
            <div className="text-center mx-auto" style={{ maxWidth: '720px' }}>
              {/* Overline */}
              <div
                className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-4"
                style={{ fontSize: '12px', letterSpacing: '0.15em' }}
                data-aos="fade-up"
              >
                RESOURCES
              </div>

              {/* H1 */}
              <h1
                className="text-4xl sm:text-5xl lg:text-5xl font-heading text-[#383299] mb-6"
                style={{
                  lineHeight: '1.1',
                  fontWeight: 400
                }}
                data-aos="fade-up"
                data-aos-delay="50"
              >
                Live & On-Demand Webinars
              </h1>

              {/* Subcopy */}
              <p
                className="text-base text-slate-600 font-sans font-light mx-auto"
                style={{
                  lineHeight: '1.5',
                  maxWidth: '640px'
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                See how autonomous agents are deployed with real screens, metrics, and live Q&A.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING SESSIONS */}
      <PageSection background="light" padding="default" className="bg-[#E6F5FA]">
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
            Upcoming Live Sessions
          </h2>
          <p
            className="font-sans font-normal text-[#4B5563]"
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Join live sessions or watch on-demand episodes built around practical deployment examples and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingSessions.map((session, index) => (
            <UpcomingSessionCard key={index} session={session} index={index} />
          ))}
        </div>
      </PageSection>

      {/* ON-DEMAND LIBRARY */}
      <PageSection background="light" padding="default" className="bg-[#E6F5FA]">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          background: '#00B4D8',
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
        <Calendar size={16} className="text-[#00B4D8]" />
        <span
          className="font-sans font-medium text-[#00B4D8]"
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
        className="font-sans font-medium inline-flex items-center text-[#00B4D8] hover:text-[#0096C7] transition-colors"
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
        <div className="w-full h-full bg-gradient-to-br from-[#E6F5FA] to-[#B3E5FC] flex items-center justify-center">
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="bg-white/90 rounded-full p-4 flex items-center justify-center"
              style={{
                width: '64px',
                height: '64px',
              }}
            >
              <Play className="text-[#00B4D8]" size={24} fill="#00B4D8" />
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
            background: '#E6F5FA',
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#00B4D8',
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
          className="font-sans font-medium inline-flex items-center text-[#00B4D8] hover:text-[#0096C7] transition-colors"
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
