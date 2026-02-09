'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

interface ComingSoonProps {
  title?: string;
  subtext?: string;
  showContact?: boolean;
}

export function ComingSoon({ 
  title = 'Coming Soon', 
  subtext = 'This page is coming soon.',
  showContact = false 
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#383299]">
          {title}
        </h1>
        {subtext && (
          <p className="text-lg md:text-xl text-slate-600 font-sans">
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Back to Homepage
            </Button>
          </Link>
          {showContact && (
            <a href="mailto:contact@conversioniq.ai">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

