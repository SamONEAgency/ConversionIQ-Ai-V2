import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dotti DeepLink™ | Real-Time Identity & Prospect Enrichment | ConversionIQ',
  description: 'Turn anonymous clicks into known personas. Bridge site traffic with thousands of verified financial and demographic data points in milliseconds.',
};

export default function DottiDeepLinkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

