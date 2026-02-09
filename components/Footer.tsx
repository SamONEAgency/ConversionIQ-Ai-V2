'use client';

import React from 'react';
import { Linkedin, Twitter, Youtube, Instagram, Globe, Facebook, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const platformLinks = [
    { label: 'Overview', href: '/chattilive-overview' },
    { label: 'Workflow Builder', href: '/chattilive-overview' },
    { label: 'Analytics & Reporting', href: '/chattilive-overview' },
  ];

  const productLinks = [
    { label: 'Autonomous Agents', href: '/chattilive-overview' },
    { label: 'Lead Conversion Engine', href: '/chattilive-overview' },
    { label: 'AI Chatbots', href: '/chattilive-overview' },
    { label: 'Web-Chat Node', href: '/web-chat-node' },
    { label: 'SMS Node', href: '/products/sms-node' },
    { label: 'Social & Messenger Node', href: '/products/social-messenger-node' },
    { label: 'WhatsApp Node', href: '/products/whatsapp-node' },
    { label: 'Dotti DeepLink™', href: '/products/dotti-deeplink' },
  ];

  const integrationsLinks = [
    { label: 'HubSpot', href: '/chattilive-overview' },
    { label: 'Meta', href: '/social-messenger-node' },
    { label: 'Intercom', href: '/coming-soon/intercom' },
  ];

  const useCasesLinks = [
    { label: 'Marketing Teams', href: '/coming-soon/use-cases' },
    { label: 'Sales Teams', href: '/coming-soon/use-cases' },
    { label: 'Ecommerce', href: '/coming-soon/use-cases' },
  ];

  const companyResourcesLinks = [
    { label: 'About Us', href: '/coming-soon/resources' },
    { label: 'Blog', href: 'https://www.conversioniq.ai/blog', external: true },
    { label: 'Customer Stories', href: '/customers' },
    { label: 'Help Center', href: '/help' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Careers', href: '/coming-soon/careers' },
    { label: 'Partners', href: '/coming-soon/resources' },
  ];

  const bottomLegalLinks = [
    { label: 'Privacy Policy', href: '/coming-soon/legal' },
    { label: 'Terms of Use', href: '/coming-soon/legal' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-3">
        {/* 5 Column Grid - Aligned with page margins */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8">
          {/* Column 1: Platform */}
          <div className="flex flex-col">
            <h3 
              className="font-medium mb-2 font-sans text-slate-500 uppercase tracking-wide"
              style={{ 
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Platform
            </h3>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-800 transition-colors font-sans font-light cursor-pointer"
                    style={{ lineHeight: '1.45' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="flex flex-col">
            <h3 
              className="font-medium mb-2 font-sans text-slate-500 uppercase tracking-wide"
              style={{ 
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Products
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-800 transition-colors font-sans font-light cursor-pointer"
                    style={{ lineHeight: '1.45' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Integrations */}
          <div className="flex flex-col">
            <h3 
              className="font-medium mb-2 font-sans text-slate-500 uppercase tracking-wide"
              style={{ 
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Integrations
            </h3>
            <ul className="space-y-2">
              {integrationsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-800 transition-colors font-sans font-light cursor-pointer"
                    style={{ lineHeight: '1.45' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Use Cases */}
          <div className="flex flex-col">
            <h3 
              className="font-medium mb-2 font-sans text-slate-500 uppercase tracking-wide"
              style={{ 
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Use Cases
            </h3>
            <ul className="space-y-2">
              {useCasesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-800 transition-colors font-sans font-light cursor-pointer"
                    style={{ lineHeight: '1.45' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company & Resources */}
          <div className="flex flex-col">
            <h3 
              className="font-medium mb-2 font-sans text-slate-500 uppercase tracking-wide"
              style={{ 
                fontSize: '12px',
                fontWeight: 400,
              }}
            >
              Company & Resources
            </h3>
            <ul className="space-y-2">
              {companyResourcesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-slate-800 transition-colors font-sans font-light cursor-pointer"
                    style={{ lineHeight: '1.45' }}
                    {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Branding Section: Logo, Tagline, Social Icons, Language Selector */}
        <div className="border-t border-slate-200 pt-4 mt-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Left: Logo & Tagline */}
            <div className="flex items-center gap-6 flex-1">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/images/ConversionIQAi_Logo.png"
                  alt="ConversionIQ Logo"
                  width={120}
                  height={30}
                  className="h-7 w-auto"
                />
              </div>
              {/* Tagline */}
              <p className="text-sm text-slate-600 font-sans max-w-md font-light" style={{ lineHeight: '1.4' }}>
                Powering exceptional digital customer experiences through autonomous AI-driven engagement across every channel.
              </p>
            </div>

            {/* Right: Social Icons & Language Selector */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Back to Top - Mobile Only */}
              <button
                onClick={scrollToTop}
                className="lg:hidden flex items-center gap-2 text-slate-600 hover:text-brand-blue transition-colors text-sm font-sans"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </button>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="#facebook"
                  className="text-slate-400 hover:text-slate-600 transition-colors text-xl"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#twitter"
                  className="text-slate-400 hover:text-slate-600 transition-colors text-xl"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#youtube"
                  className="text-slate-400 hover:text-slate-600 transition-colors text-xl"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#instagram"
                  className="text-slate-400 hover:text-slate-600 transition-colors text-xl"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#linkedin"
                  className="text-slate-400 hover:text-slate-600 transition-colors text-xl"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                {/* TikTok icon */}
                <a
                  href="#tiktok"
                  className="text-slate-400 hover:text-slate-600 transition-colors text-xl"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-slate-600" />
                <select className="text-slate-600 bg-transparent border-none focus:outline-none font-sans text-sm cursor-pointer">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Left: Legal Links */}
            <div className="flex flex-wrap items-center gap-3">
              {bottomLegalLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-600 hover:text-slate-800 transition-colors font-sans font-light cursor-pointer"
                    style={{ lineHeight: '1.45' }}
                  >
                    {link.label}
                  </a>
                  {index < bottomLegalLinks.length - 1 && (
                    <span className="text-slate-400 text-xs">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Right: Copyright */}
            <p className="text-xs text-slate-500 font-sans font-light" style={{ lineHeight: '1.45' }}>
              © 2026 ConversionIQ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
