import { Metadata } from 'next';
import { PricingHero } from '@/components/pricing/PricingHero';
import { PricingCards } from '@/components/pricing/PricingCards';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { PricingCTA } from '@/components/pricing/PricingCTA';

export const metadata: Metadata = {
  title: 'Pricing - Jarvis OS',
  description: 'Simple, transparent pricing. One-time payment, lifetime access. No subscriptions.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <PricingHero />
      <PricingCards />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
}
