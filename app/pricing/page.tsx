import { ComingSoon } from '@/components/ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P11 – Pricing – ConversionIQ',
};

export default function PricingPage() {
  return <ComingSoon title="P11 – Pricing" subtext="Full content coming soon." showContact />;
}
