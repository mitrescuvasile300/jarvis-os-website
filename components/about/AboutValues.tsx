"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "Autonomy First",
    description: "AI agents should work independently, not wait for constant human input."
  },
  {
    icon: Zap,
    title: "Speed Matters",
    description: "What takes hours manually should take minutes with agents."
  },
  {
    icon: Shield,
    title: "Privacy Default",
    description: "Your data stays yours. Local-first, always encrypted."
  },
  {
    icon: Users,
    title: "One Person Army",
    description: "Empowering individuals to achieve what used to require entire teams."
  },
];

export function AboutValues() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#06b6d4] bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we build
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a2e]/50 border border-[#2a2a4e] rounded-xl p-6 hover:border-[#00ff88]/30 transition-colors"
            >
              <value.icon className="w-10 h-10 text-[#00ff88] mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
