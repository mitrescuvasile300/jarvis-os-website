import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutStory } from '@/components/about/AboutStory';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutTeam } from '@/components/about/AboutTeam';
import { AboutCTA } from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About - Jarvis OS',
  description: 'Building the operating system for AI agents. Our mission is to democratize AI workforce creation.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}
