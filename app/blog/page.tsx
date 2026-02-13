import { Metadata } from 'next';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogCTA } from '@/components/blog/BlogCTA';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on AI agents, automation, and building your personal AI operating system.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className="pt-16">
        <BlogHero />
        <BlogGrid />
        <BlogCTA />
      </div>
      <Footer />
    </main>
  );
}
