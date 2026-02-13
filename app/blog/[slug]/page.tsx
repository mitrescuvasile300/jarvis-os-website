import { Metadata } from 'next';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'This article is coming soon. Join the Jarvis OS waitlist to get notified.',
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <div className="pt-16">
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl">✍️</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              This article is coming soon
            </h1>
            <p className="text-lg text-slate-400 mb-8">
              We&apos;re working on this piece right now. Check back soon or join our waitlist to get notified when it&apos;s published.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition">
                Back to Blog
              </Link>
              <Link href="/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg transition border border-slate-700">
                Home
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
