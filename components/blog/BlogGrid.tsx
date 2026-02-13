"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export function BlogGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#1a1a2e]/50 border border-[#2a2a4e] rounded-xl overflow-hidden hover:border-[#00ff88]/30 transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#2a2a4e] text-[#00ff88] text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  {!post.content && (
                    <span className="px-2 py-0.5 bg-slate-800 text-slate-500 text-xs rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00ff88] transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-[#00ff88] text-sm font-medium hover:gap-2 transition-all"
                  >
                    {post.content ? 'Read' : 'Preview'} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
