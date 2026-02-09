import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workflow Builder | Orchestrate Autonomous Journeys | ConversionIQ',
  description: 'Design, govern, and optimize multi-channel AI workflows with ConversionIQ\'s visual builder — no brittle logic trees, no code required.',
};

export default function WorkflowBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

