import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { BlogPostContent } from '@/components/blog/BlogPostContent';
import { BlogComingSoon } from '@/components/blog/BlogComingSoon';
import { getBlogPost, blogPosts } from '@/lib/blog-posts';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className="pt-16">
        {post.content ? (
          <BlogPostContent post={post} />
        ) : (
          <BlogComingSoon post={post} />
        )}
      </div>
      <Footer />
    </main>
  );
}
