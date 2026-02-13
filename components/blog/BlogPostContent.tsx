"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-posts";
import ReactMarkdown from "react-markdown";

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-sm text-slate-500 mb-8"
        >
          <Link href="/blog" className="hover:text-emerald-400 transition flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            Blog
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400">{post.category}</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category & Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="text-slate-600 text-sm">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Gradient divider */}
          <div className={`h-1 w-20 bg-gradient-to-r ${post.gradient} rounded-full mb-12`} />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-emerald-400
            prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-em:text-slate-200
            prose-code:text-emerald-300 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
            prose-ul:text-slate-300 prose-ol:text-slate-300
            prose-li:mb-1
            prose-blockquote:border-emerald-500/50 prose-blockquote:text-slate-400
            prose-table:text-sm
            prose-th:text-slate-300 prose-th:border-slate-700 prose-th:px-4 prose-th:py-2
            prose-td:text-slate-400 prose-td:border-slate-800 prose-td:px-4 prose-td:py-2
          "
        >
          <ReactMarkdown>{post.content || ''}</ReactMarkdown>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl text-center"
        >
          <h3 className="text-xl font-bold text-white mb-3">
            Ready to build your AI workforce?
          </h3>
          <p className="text-slate-400 mb-6">
            Jarvis OS gives you persistent memory, agent orchestration, and autonomous execution — for a one-time payment of $29.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition"
          >
            Get Jarvis OS
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
