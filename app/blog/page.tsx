import { Metadata } from 'next';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogCTA } from '@/components/blog/BlogCTA';

export const metadata: Metadata = {
  title: 'Blog - Jarvis OS',
  description: 'Insights, tutorials, and updates from the future of AI workforce.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <BlogHero />
      <BlogGrid />
      <BlogCTA />
    </main>
  );
}
