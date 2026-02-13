"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function PricingCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="bg-gradient-to-r from-[#00ff88]/10 via-[#06b6d4]/10 to-[#00ff88]/10 rounded-3xl p-12 border border-[#00ff88]/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#06b6d4] bg-clip-text text-transparent">
              AI Workforce?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building the future with Jarvis OS. 
            Start free, upgrade when you're ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/checkout"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00ff88] text-[#0a0a0f] font-semibold rounded-lg hover:bg-[#00e077] transition-colors"
            >
              Get Jarvis Pro — $29
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2a2a4e] text-white font-semibold rounded-lg hover:bg-[#3a3a5e] transition-colors"
            >
              Start Free
            </Link>
          </div>

          <p className="text-gray-500 mt-6 text-sm">
            14-day money-back guarantee • No credit card required for free plan
          </p>
        </div>
      </motion.div>
    </section>
  );
}
