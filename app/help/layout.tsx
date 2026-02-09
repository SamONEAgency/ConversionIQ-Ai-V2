import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center | ConversionIQ',
  description: 'Setup guides, integration docs, and video tutorials for every ConversionIQ product.',
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

