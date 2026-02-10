/**
 * CUSTOMER STORY DETAIL PAGE (DYNAMIC)
 * ====================================
 * Route: /customers/[slug]
 * Currently implemented: hospitality
 * Other slugs: Coming Soon state
 */

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';
import { TestimonialBanner } from '@/components/content/TestimonialBanner';
import { FooterCTA } from '@/components/content/FooterCTA';

interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  stats: {
    label: string;
    value: string;
  }[];
  challenge: string;
  deployment: string;
  results: {
    metric: string;
    before: string;
    after: string;
  }[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company?: string;
  };
}

const caseStudies: Record<string, CaseStudy> = {
  hospitality: {
    slug: 'hospitality',
    category: 'HOSPITALITY',
    title: 'How a Major Resort Brand Cut CPA by 22% and Eliminated 10 FTEs in 90 Days.',
    stats: [
      { label: 'CPA Improvement', value: '22%' },
      { label: 'FTEs Eliminated', value: '10' },
      { label: 'Response Time', value: '<30s' },
      { label: 'Brand Incidents', value: '0' },
    ],
    challenge:
      'A major hospitality brand running high-volume Meta advertising was drowning in comment chaos. A team of 10 full-time moderators couldn\'t keep up with volume across dozens of active ad accounts. Missed comments were bleeding ad spend and damaging brand perception.',
    deployment:
      'ConversionIQ deployed Comment Responder across all active Meta ad accounts. The system began analyzing and responding to every public comment with on-brand, objective-driven precision. ChattiLive Messenger was activated simultaneously to move high-intent commenters into private DM sales threads.',
    results: [
      { metric: 'Moderation Staff', before: '10 FTEs', after: '0 FTEs' },
      { metric: 'Cost Per Acquisition', before: 'Baseline', after: '−22%' },
      { metric: 'Response Coverage', before: '~40%', after: '100%' },
      { metric: 'Response Time', before: '2–4 hours', after: '<30 seconds' },
      { metric: 'Brand Incidents', before: '3–5/month', after: '0' },
    ],
    testimonial: {
      quote:
        'ConversionIQ eliminated the need for 10 full-time comment moderators and improved our CPA by 22% in under 90 days. The AI handles every comment with more precision than our team ever could.',
      name: 'Michael Torres',
      role: 'VP of Digital Marketing',
      company: 'Major Hospitality Brand',
    },
  },
};

const relatedStories = [
  {
    slug: 'political-campaign',
    category: 'POLITICAL & ADVOCACY',
    statLabel: 'Comment coverage',
    statValue: '100%',
    title: 'How a National Campaign Achieved 100% Comment Coverage Across 47 Ad Accounts.',
  },
  {
    slug: 'travel-hospitality',
    category: 'TRAVEL & HOSPITALITY',
    statLabel: 'Lead qualification rate',
    statValue: '3x',
    title: 'How a Multi-Property Resort Group Tripled Qualified Leads with Zero Live Agents.',
  },
  {
    slug: 'healthcare',
    category: 'HEALTHCARE',
    statLabel: 'Attributes enriched per lead',
    statValue: '2,000+',
    title: 'How a Healthcare Organization Personalized Patient Acquisition with 2,000+ Data Attributes.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug];

  if (!caseStudy) {
    return {
      title: 'Case Study Coming Soon | Customer Stories | ConversionIQ',
      description: 'This case study is currently being prepared. Check back soon for the full story.',
    };
  }

  return {
    title: `${caseStudy.title} | Customer Stories | ConversionIQ`,
    description: `See how ${caseStudy.category.toLowerCase()} brands deploy ConversionIQ to automate engagement and convert pipeline — with measurable results.`,
  };
}

export default function CustomerStoryPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug];

  if (!caseStudy) {
    return <ComingSoonPage slug={params.slug} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO IMAGE */}
      <div
        className="w-full bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center text-slate-400 font-sans text-sm"
        style={{
          height: '400px',
        }}
      >
        {/* TODO: Replace placeholder with case study hero image */}
        Case Study Hero Image
      </div>

      {/* HERO CONTENT */}
      <section className="bg-white w-full" style={{ paddingTop: 'calc(72.75px + 25px)', paddingBottom: '25px' }}>
        <div className="w-full px-[25px] mb-[25px]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
            <div className="text-center mx-auto" style={{ maxWidth: '720px' }}>
              {/* Overline */}
              <div 
                className="text-xs uppercase tracking-wider text-slate-500 font-sans font-light mb-4"
                style={{ fontSize: '12px', letterSpacing: '0.15em' }}
                data-aos="fade-up"
              >
                {caseStudy.category}
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
                {caseStudy.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <PageSection background="light" padding="default">
        <StatBar stats={caseStudy.stats} />
      </PageSection>

      {/* THE CHALLENGE */}
      <PageSection background="muted" padding="default">
        <div className="max-w-4xl">
          <h2
            className="font-heading mb-6 text-left"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            The Challenge
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
            {caseStudy.challenge}
          </p>
        </div>
      </PageSection>

      {/* THE DEPLOYMENT */}
      <PageSection background="light" padding="default">
        <div className="max-w-4xl">
          <h2
            className="font-heading mb-6 text-left"
            style={{
              fontSize: 'clamp(36px, 3vw, 40px)',
              fontWeight: 300,
              color: '#1B1340',
            }}
            data-aos="fade-up"
          >
            The Deployment
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
            {caseStudy.deployment}
          </p>
        </div>
      </PageSection>

      {/* THE RESULTS */}
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
            The Results
          </h2>
          <ResultsTable results={caseStudy.results} />
        </div>
      </PageSection>

      {/* TESTIMONIAL */}
      <TestimonialBanner
        quote={caseStudy.testimonial.quote}
        name={caseStudy.testimonial.name}
        role={caseStudy.testimonial.role}
        company={caseStudy.testimonial.company}
        backgroundVariant="neutral"
      />

      {/* RELATED STORIES */}
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
            Related Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStories.map((story, index) => (
              <RelatedStoryCard key={story.slug} story={story} index={index} />
            ))}
          </div>
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

// STAT BAR COMPONENT
function StatBar({ stats }: { stats: CaseStudy['stats'] }) {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center bg-white rounded-xl p-6 border border-[#E5E7EB]"
          style={{
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div
            className="font-heading font-bold text-[#1B1340] mb-2"
            style={{
              fontSize: '36px',
              lineHeight: '1',
            }}
          >
            {stat.value}
          </div>
          <div
            className="font-sans font-medium text-[#6B7280]"
            style={{
              fontSize: '14px',
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// RESULTS TABLE COMPONENT
function ResultsTable({ results }: { results: CaseStudy['results'] }) {
  return (
    <div
      className="w-full overflow-hidden rounded-xl bg-white"
      style={{
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      }}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr style={{ background: '#1B1340', color: '#FFFFFF' }}>
            <th
              className="text-left font-heading font-semibold"
              style={{
                padding: '16px',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              Metric
            </th>
            <th
              className="text-left font-heading font-semibold"
              style={{
                padding: '16px',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              Before
            </th>
            <th
              className="text-left font-heading font-semibold"
              style={{
                padding: '16px',
                fontSize: '16px',
                fontWeight: 600,
              }}
            >
              After
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr
              key={index}
              style={{
                background: index % 2 === 0 ? '#FFFFFF' : '#F7F8FC',
              }}
            >
              <td
                className="font-sans font-medium text-slate-700"
                style={{
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
              >
                {result.metric}
              </td>
              <td
                className="font-sans font-normal text-slate-600"
                style={{
                  padding: '16px',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {result.before}
              </td>
              <td
                className="font-sans font-normal text-slate-600"
                style={{
                  padding: '16px',
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {result.after}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// RELATED STORY CARD COMPONENT
function RelatedStoryCard({
  story,
  index,
}: {
  story: typeof relatedStories[0];
  index: number;
}) {
  return (
    <Link href={`/customers/${story.slug}`}>
      <div
        className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
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
            className="font-heading font-semibold text-[#1B1340]"
            style={{
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '1.3',
            }}
          >
            {story.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

// COMING SOON PAGE
function ComingSoonPage({ slug }: { slug: string }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PageSection background="light" padding="default">
        <div className="text-center max-w-2xl mx-auto">
          <h1
            className="font-heading mb-4 text-center"
            style={{
              fontSize: 'clamp(48px, 5vw, 56px)',
              fontWeight: 300,
              color: '#1B1340',
              lineHeight: '1.2',
            }}
          >
            Case Study Coming Soon
          </h1>
          <p
            className="font-sans font-normal text-[#4B5563] mb-8"
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
            }}
          >
            This case study is currently being prepared. Check back soon for the full story.
          </p>
          <Link
            href="/customers"
            className="inline-block px-6 py-3 bg-[#383299] text-white rounded-lg font-sans font-semibold hover:bg-[#2f297f] transition-colors"
            style={{
              fontSize: '16px',
            }}
          >
            View All Customer Stories
          </Link>
        </div>
      </PageSection>
      <Footer />
    </div>
  );
}

