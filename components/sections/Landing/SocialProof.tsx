'use client';

import { motion } from 'framer-motion';
import { Terminal, Brain, Zap, Shield, MessageSquare, Users } from 'lucide-react';

const highlights = [
  {
    icon: MessageSquare,
    title: 'Chat-First Interface',
    description: 'Talk to Jarvis like a person. No menus, no forms — just describe what you need and Jarvis handles it.',
  },
  {
    icon: Brain,
    title: 'Persistent Memory',
    description: 'Unlike ChatGPT, Jarvis remembers everything. Your context compounds over time — agents get smarter daily.',
  },
  {
    icon: Zap,
    title: 'Autonomous Execution',
    description: 'Jarvis doesn\'t wait for instructions. He creates agents, delegates tasks, and reports back when done.',
  },
  {
    icon: Users,
    title: 'Multi-Agent Collaboration',
    description: 'Agents work together in the Hub. Trading agent checks data, research agent analyzes it, content agent writes about it.',
  },
  {
    icon: Shield,
    title: 'Your Data, Your Machine',
    description: 'Runs locally or on your VPS. No vendor lock-in, no data sharing. Works with Ollama for 100% offline operation.',
  },
  {
    icon: Terminal,
    title: '29+ AI Models',
    description: 'GPT-5, Claude Opus 4.6, Gemini 3, Llama 3.1 — pick the best model for each agent. Mix and match freely.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function SocialProof(): JSX.Element {
  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-medium mb-4 block"
          >
            WHY JARVIS OS
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Not another chatbot.{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              An operating system.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Jarvis is the brain. Agents are the hands. You&apos;re the boss.
          </p>
        </motion.div>

        {/* Early Access Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 font-medium">
              Now in Early Access — Be among the first
            </span>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {highlights.slice(0, 3).map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative bg-slate-800/50 rounded-2xl p-6 lg:p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {highlights.slice(3).map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative bg-slate-800/50 rounded-2xl p-6 lg:p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
