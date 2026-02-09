import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SMS Node | Autonomous Two-Way SMS at Scale | ConversionIQ',
  description: 'Stop sending no-reply blasts. Our AI manages thousands of SMS replies simultaneously—qualifying leads, booking meetings, and closing sales.',
};

export default function SMSNodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

