"use client";

import { motion } from "framer-motion";

export function AboutStory() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              From One Developer to{" "}
              <span className="text-[#00ff88]">Global Movement</span>
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Jarvis OS started as a simple question: What if one person could build and manage an entire AI workforce?
              </p>
              <p>
                In 2026, AI models became capable enough to handle complex tasks autonomously. But the tools to orchestrate them didn't exist.
              </p>
              <p>
                We built Jarvis OS to fill that gap. A complete operating system for AI agents — with memory, autonomy, and coordination built-in.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "10+", label: "AI Agent Types" },
              { number: "$29", label: "One-time Price" },
              { number: "∞", label: "Possibilities" },
              { number: "0", label: "Subscriptions" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a2e]/50 border border-[#2a2a4e] rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-[#00ff88] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
