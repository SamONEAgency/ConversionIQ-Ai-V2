import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Stories | ConversionIQ',
  description: 'See how brands deploy ConversionIQ to automate engagement and convert pipeline — with measurable results.',
};

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

