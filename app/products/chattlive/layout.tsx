import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P2 – ChattiLive Overview – ConversionIQ',
  description: 'One AI Brain manages Web-Chat, SMS, WhatsApp, Messenger & Social. Predicts intent, anticipates behavior, and drives revenue 24/7.',
  openGraph: {
    title: 'ChattiLive | Autonomous Customer Engagement Platform',
    description: 'One AI brain orchestrates Web-Chat, SMS, WhatsApp, Messenger & Social with predictive intelligence and autonomous execution.',
    type: 'website',
  },
};

export default function ChattliveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
