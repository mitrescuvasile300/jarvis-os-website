import { Metadata } from 'next';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { PricingHero } from '@/components/pricing/PricingHero';
import { PricingCards } from '@/components/pricing/PricingCards';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { PricingCTA } from '@/components/pricing/PricingCTA';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing. One-time payment of $29, lifetime access. No subscriptions.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className="pt-16">
        <PricingHero />
        <PricingCards />
        <PricingFAQ />
        <PricingCTA />
      </div>
      <Footer />
    </main>
  );
}
