'use client';

import { motion } from 'framer-motion';
import { Sparkles, Terminal, Brain, Zap, Shield, Clock } from 'lucide-react';

const highlights = [
  {
    icon: Terminal,
    title: 'One Command Install',
    description: 'Get your AI OS running in under 60 seconds. Works on macOS, Linux, and Windows.',
  },
  {
    icon: Brain,
    title: 'Persistent Memory',
    description: 'Unlike ChatGPT, Jarvis remembers everything. Your context compounds over time.',
  },
  {
    icon: Zap,
    title: 'Autonomous Execution',
    description: 'Set tasks and walk away. Jarvis handles multi-step workflows end-to-end.',
  },
  {
    icon: Shield,
    title: 'Your Data, Your Machine',
    description: 'Runs locally or on your cloud. No vendor lock-in, no data sharing.',
  },
  {
    icon: Clock,
    title: 'Save 10+ Hours/Week',
    description: 'Automate the boring stuff. Focus on high-impact work that matters.',
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
            Your AI, your rules
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Not another SaaS subscription. Jarvis OS installs on your machine and works for you — 24/7, with full autonomy.
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
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {highlights.slice(3).map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative bg-slate-800/50 rounded-2xl p-6 lg:p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-colors flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
