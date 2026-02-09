'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageSection } from '@/components/layout/PageSection';

export default function LayoutStyleGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-heading font-bold text-[#1B1340] mb-12">
          Layout & Typography Style Guide
        </h1>
        <p className="text-lg text-slate-600 mb-16">
          Documentation for spacing, typography, and background tokens used across the ConversionIQ design system.
        </p>

        {/* Typography Scale */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Typography Scale
          </h2>
          
          <div className="space-y-8 border border-slate-200 rounded-lg p-8 bg-white">
            <div>
              <h1 
                className="font-heading text-[#1B1340] mb-4"
                style={{
                  fontSize: 'clamp(54px, 5vw, 60px)',
                  fontWeight: 300,
                  lineHeight: '1.1',
                }}
              >
                H1 - Large Display (54-60px, weight 300)
              </h1>
              <code className="text-sm text-slate-500">fontSize: clamp(54px, 5vw, 60px), fontWeight: 300</code>
            </div>

            <div>
              <h1 
                className="font-heading text-[#1B1340] mb-4"
                style={{
                  fontSize: 'clamp(44px, 5vw, 52px)',
                  fontWeight: 300,
                  lineHeight: '1.1',
                }}
              >
                H1 - Interior Product Hero (44-52px, weight 300-400)
              </h1>
              <code className="text-sm text-slate-500">fontSize: clamp(44px, 5vw, 52px), fontWeight: 300-400</code>
            </div>

            <div>
              <h2 
                className="font-heading text-[#1B1340] mb-4"
                style={{
                  fontSize: 'clamp(40px, 4vw, 48px)',
                  fontWeight: 600,
                  lineHeight: '1.1',
                }}
              >
                H2 - Section Headings (40-48px, weight 600)
              </h2>
              <code className="text-sm text-slate-500">fontSize: clamp(40px, 4vw, 48px), fontWeight: 600</code>
            </div>

            <div>
              <h2 
                className="font-heading text-[#1B1340] mb-4"
                style={{
                  fontSize: 'clamp(36px, 3vw, 40px)',
                  fontWeight: 300,
                  lineHeight: '1.1',
                }}
              >
                H2 - Product Section Headings (36-40px, weight 300)
              </h2>
              <code className="text-sm text-slate-500">fontSize: clamp(36px, 3vw, 40px), fontWeight: 300</code>
            </div>

            <div>
              <h3 
                className="font-heading text-slate-700 mb-2"
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                H3 - Feature Titles (16px, weight 600)
              </h3>
              <code className="text-sm text-slate-500">fontSize: 16px, fontWeight: 600</code>
            </div>

            <div>
              <p 
                className="font-sans text-slate-600"
                style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  fontWeight: 400,
                }}
              >
                Body Text - Regular (16px, line-height 1.6, weight 400)
              </p>
              <code className="text-sm text-slate-500">fontSize: 16px, lineHeight: 1.6, fontWeight: 400</code>
            </div>

            <div>
              <p 
                className="font-sans text-slate-600"
                style={{
                  fontSize: '14px',
                  lineHeight: '1.5',
                  fontWeight: 400,
                }}
              >
                Small Text - Supporting copy (14px, line-height 1.5, weight 400)
              </p>
              <code className="text-sm text-slate-500">fontSize: 14px, lineHeight: 1.5, fontWeight: 400</code>
            </div>

            <div>
              <p 
                className="font-sans text-slate-500"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                }}
              >
                Eyebrow / Overline (12px, uppercase, letter-spacing 0.15em)
              </p>
              <code className="text-sm text-slate-500">fontSize: 12px, letterSpacing: 0.15em, textTransform: uppercase</code>
            </div>
          </div>
        </section>

        {/* Font Weights */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Font Weight Scale
          </h2>
          
          <div className="space-y-4 border border-slate-200 rounded-lg p-8 bg-white">
            <div>
              <p className="font-heading" style={{ fontWeight: 200 }}>200 - Extra Light</p>
            </div>
            <div>
              <p className="font-heading" style={{ fontWeight: 300 }}>300 - Light</p>
            </div>
            <div>
              <p className="font-heading" style={{ fontWeight: 400 }}>400 - Regular</p>
            </div>
            <div>
              <p className="font-heading" style={{ fontWeight: 500 }}>500 - Medium</p>
            </div>
            <div>
              <p className="font-heading" style={{ fontWeight: 600 }}>600 - Semi-Bold</p>
            </div>
            <div>
              <p className="font-heading" style={{ fontWeight: 700 }}>700 - Bold</p>
            </div>
          </div>
        </section>

        {/* Section Spacing */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Section Spacing
          </h2>
          
          <div className="space-y-8 border border-slate-200 rounded-lg p-8 bg-white">
            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                Standard Section Padding
              </h3>
              <PageSection background="light" padding="default">
                <p className="text-slate-600">py-[100px] - Default section padding (100px top and bottom)</p>
              </PageSection>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                Large Section Padding
              </h3>
              <PageSection background="muted" padding="large">
                <p className="text-slate-600">py-[120px] - Large section padding (120px top and bottom)</p>
              </PageSection>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                Small Section Padding
              </h3>
              <PageSection background="light" padding="small">
                <p className="text-slate-600">py-[80px] - Small section padding (80px top and bottom)</p>
              </PageSection>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">
                Section-to-Section Spacing
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>Standard spacing: 80-100px vertical padding per section</li>
                <li>Tight spacing (between related sections): 24-32px (matches navigation padding)</li>
                <li>Hero section: calc(72.75px + 25px) top padding (accounts for fixed nav)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Background Colors */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Background Color Tokens
          </h2>
          
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">Light (White)</h3>
              <div className="h-24 bg-white border border-slate-200 rounded flex items-center justify-center">
                <code className="text-sm text-slate-600">bg-white / #FFFFFF</code>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">Muted (Light Purple/Gray)</h3>
              <div className="h-24 rounded flex items-center justify-center" style={{ background: '#F7F8FC' }}>
                <code className="text-sm text-slate-600">bg-[#F7F8FC]</code>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">Dark (Navy Gradient)</h3>
              <div className="h-24 rounded flex items-center justify-center bg-gradient-to-br from-[#1B1340] to-[#2A1F54]">
                <code className="text-sm text-white">bg-gradient-to-br from-[#1B1340] to-[#2A1F54]</code>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">Brand (Purple-Pink Gradient)</h3>
              <div className="h-24 rounded flex items-center justify-center bg-gradient-to-br from-[#383299] to-[#ef2d60]">
                <code className="text-sm text-white">bg-gradient-to-br from-[#383299] to-[#ef2d60]</code>
              </div>
            </div>

            <div className="border border-slate-200 rounded-lg p-8 bg-white">
              <h3 className="text-xl font-heading font-medium text-slate-700 mb-4">CTA Dark Blue</h3>
              <div className="h-24 rounded flex items-center justify-center" style={{ background: '#20127E' }}>
                <code className="text-sm text-white">bg-[#20127E]</code>
              </div>
            </div>
          </div>
        </section>

        {/* Breakpoints */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Responsive Breakpoints
          </h2>
          
          <div className="border border-slate-200 rounded-lg p-8 bg-white">
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><code className="text-sm bg-slate-100 px-2 py-1 rounded">sm:</code> 640px - Small tablets</li>
              <li><code className="text-sm bg-slate-100 px-2 py-1 rounded">md:</code> 768px - Tablets</li>
              <li><code className="text-sm bg-slate-100 px-2 py-1 rounded">lg:</code> 1024px - Desktop</li>
              <li><code className="text-sm bg-slate-100 px-2 py-1 rounded">xl:</code> 1280px - Large desktop</li>
            </ul>
          </div>
        </section>

        {/* Max Widths */}
        <section className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-[#1B1340] mb-8">
            Container Max Widths
          </h2>
          
          <div className="border border-slate-200 rounded-lg p-8 bg-white">
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><code className="text-sm bg-slate-100 px-2 py-1 rounded">max-w-7xl</code> - Standard content container (1280px)</li>
              <li><code className="text-sm bg-slate-100 px-2 py-1 rounded">max-w-4xl</code> - Narrow content (896px)</li>
              <li><code className="text-sm bg-slate-100 px-2 py-1 rounded">max-w-6xl</code> - Medium content (1152px)</li>
              <li><code className="text-sm bg-slate-100 px-2 py-1 rounded">max-w-screen-xl</code> - Wide content (1536px)</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

