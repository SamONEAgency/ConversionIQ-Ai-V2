import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webinars | ConversionIQ Live & On-Demand Sessions',
  description: 'Watch live and on-demand webinars on autonomous engagement, AI governance, and revenue acceleration with ConversionIQ.',
};

export default function WebinarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

