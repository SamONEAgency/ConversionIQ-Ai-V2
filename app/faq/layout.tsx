import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | ConversionIQ - Autonomous AI Sales Platform Questions Answered',
  description: 'Everything you need to know about deploying autonomous AI sales agents. Security, implementation, data privacy, and scaling your revenue engine.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

