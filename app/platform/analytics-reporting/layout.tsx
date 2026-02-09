import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics & Reporting | Conversation-Level Revenue Visibility | ConversionIQ',
  description: 'Attribute pipeline, revenue, and savings directly to autonomous agents with ConversionIQ\'s analytics and reporting suite.',
};

export default function AnalyticsReportingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

