"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-posts";

export function BlogComingSoon({ post }: { post: BlogPost }) {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-8">
            <span className="text-2xl">✍️</span>
          </div>
          
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20">
            {post.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            {post.title}
          </h1>
          
          <p className="text-lg text-slate-400 mb-4">
            {post.excerpt}
          </p>
          
          <p className="text-slate-500 mb-8">
            This article is coming soon. Join our waitlist to get notified when it&apos;s published.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Link href="/" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg transition border border-slate-700">
              Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
