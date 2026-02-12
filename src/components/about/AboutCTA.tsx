"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f0f1a]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join the{" "}
          <span className="bg-gradient-to-r from-[#00ff88] to-[#06b6d4] bg-clip-text text-transparent">
            Revolution
          </span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Be part of the movement that's redefining what's possible with AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00ff88] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#00e077] transition-colors"
          >
            Get Started — $29
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2a2a4e] text-white font-semibold rounded-lg hover:bg-[#3a3a5e] transition-colors"
          >
            Explore Features
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
