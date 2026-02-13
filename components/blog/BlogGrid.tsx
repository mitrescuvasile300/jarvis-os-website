"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "building-ai-workforce",
    title: "How I Built a 10-Agent AI Workforce",
    excerpt: "From zero to fully autonomous team in 30 days. The architecture, the costs, and the results.",
    category: "Tutorial",
    readTime: "8 min read",
    date: "Feb 12, 2026",
    gradient: "from-[#00ff88] to-[#06b6d4]",
  },
  {
    slug: "token-efficiency",
    title: "Cut AI Costs by 60% with This Simple Trick",
    excerpt: "Why pay $3/M tokens when shell scripts do the same for free? A practical guide to token optimization.",
    category: "Optimization",
    readTime: "5 min read",
    date: "Feb 10, 2026",
    gradient: "from-[#a855f7] to-[#ec4899]",
  },
  {
    slug: "openclaw-security",
    title: "17% of OpenClaw Skills are Malicious. Here's How to Stay Safe",
    excerpt: "Security audit findings and best practices for installing third-party AI skills safely.",
    category: "Security",
    readTime: "6 min read",
    date: "Feb 8, 2026",
    gradient: "from-[#f97316] to-[#eab308]",
  },
  {
    slug: "funding-rate-arbitrage",
    title: "30% APR with AI: My Funding Rate Arbitrage Setup",
    excerpt: "How I used OpenClaw agents to automate crypto funding rate arbitrage and generated 30% returns in 20 days.",
    category: "Case Study",
    readTime: "10 min read",
    date: "Feb 5, 2026",
    gradient: "from-[#3b82f6] to-[#06b6d4]",
  },
  {
    slug: "memory-ledger",
    title: "Why Your AI Agents Forget Everything (And How to Fix It)",
    excerpt: "The importance of persistent memory and how Memory Ledger Protocol gives agents long-term context.",
    category: "Architecture",
    readTime: "7 min read",
    date: "Feb 3, 2026",
    gradient: "from-[#10b981] to-[#00ff88]",
  },
  {
    slug: "future-of-coding",
    title: "Elon Says AI Will Bypass Coding by 2026. Is He Right?",
    excerpt: "Analyzing the prediction that AI will generate binaries directly from prompts and what it means for developers.",
    category: "Opinion",
    readTime: "6 min read",
    date: "Feb 1, 2026",
    gradient: "from-[#8b5cf6] to-[#a855f7]",
  },
];

export function BlogGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
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
                    Read <ArrowRight className="w-4 h-4" />
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
