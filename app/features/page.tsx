import { FeaturesHeader } from '@/components/features/FeaturesHeader';
import { FeatureGrid } from '@/components/features/FeatureGrid';
import { FeatureDeepDive } from '@/components/features/FeatureDeepDive';
import { ComparisonTable } from '@/components/features/ComparisonTable';
import { Integrations } from '@/components/features/Integrations';
import { FeaturesCTA } from '@/components/features/FeaturesCTA';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export const metadata = {
  title: 'Features — Jarvis OS',
  description: 'Everything you need to 10x your productivity. AI agents, persistent memory, autonomous execution, and more.',
};

export default function FeaturesPage() {
  return (
    <main className="bg-[#0a0a0f] text-white">
      <Navbar />
      <FeaturesHeader />
      <FeatureGrid />
      <FeatureDeepDive />
      <ComparisonTable />
      <Integrations />
      <FeaturesCTA />
      <Footer />
    </main>
  );
}
