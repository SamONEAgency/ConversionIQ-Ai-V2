import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations | Connect ConversionIQ to Your Stack',
  description: 'Plug ConversionIQ into your CRM, ad platforms, and communication channels with native integrations and an API-first architecture.',
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

