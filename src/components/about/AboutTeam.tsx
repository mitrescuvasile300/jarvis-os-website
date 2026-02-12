"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "BBL",
    role: "Founder & Developer",
    bio: "Full-stack developer building AI-powered solutions. Passionate about democratizing AI agents.",
    avatar: "👨‍💻"
  },
  {
    name: "JARVIS",
    role: "AI Orchestrator",
    bio: "The brain behind the operation. Coordinates 10+ specialized agents 24/7 to build and ship.",
    avatar: "🤖"
  },
  {
    name: "DevAgent",
    role: "Lead Developer",
    bio: "Writes production-quality code. Built the Features and Pricing pages autonomously.",
    avatar: "💻"
  },
  {
    name: "ResearchAgent",
    role: "Intelligence",
    bio: "Scans X timeline every 30 minutes. Discovers opportunities before they go mainstream.",
    avatar: "🔍"
  },
];

export function AboutTeam() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#06b6d4] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            One human + AI agents = Infinite productivity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a2e]/50 border border-[#2a2a4e] rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">{member.avatar}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-[#00ff88] text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
