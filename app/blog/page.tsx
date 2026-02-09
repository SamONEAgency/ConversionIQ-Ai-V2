import { ComingSoon } from '@/components/ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P12 – Blog – ConversionIQ',
};

export default function BlogPage() {
  return <ComingSoon title="P12 – Blog" subtext="Full content coming soon." />;
}

