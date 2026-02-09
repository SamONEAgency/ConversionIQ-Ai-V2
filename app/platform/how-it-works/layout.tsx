import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | ConversionIQ Autonomous Revenue Engine',
  description: 'See how ConversionIQ\'s virtual C-Suite of AI agents identifies, engages, and converts prospects across web, SMS, social, and WhatsApp with enterprise-grade governance.',
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

