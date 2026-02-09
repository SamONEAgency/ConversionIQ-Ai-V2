import { ComingSoon } from '@/components/ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P4 – SMS Node – ConversionIQ',
};

export default function SMSPage() {
  return <ComingSoon title="P4 – SMS Node" subtext="Full content coming soon." />;
}

