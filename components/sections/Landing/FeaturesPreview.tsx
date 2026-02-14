'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Bot, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  icon: typeof Bot;
  title: string;
  description: string;
  gradient: string;
  tag: string;
}

const features: Feature[] = [
  {
    icon: MessageSquare,
    title: 'Chat with Jarvis',
    description: 'Talk to Jarvis instantly — no setup, no agent creation. Ask questions, give tasks, brainstorm ideas. Jarvis is always online and ready.',
    gradient: 'from-emerald-500 to-cyan-500',
    tag: 'Always Available',
  },
  {
    icon: Bot,
    title: 'Agent Spawning',
    description: 'Say "Create a trading agent" and Jarvis builds it. Specialized agents for trading, research, content, DevOps — each with their own skills and memory.',
    gradient: 'from-purple-500 to-pink-500',
    tag: 'Autonomous',
  },
  {
    icon: Globe,
    title: 'Agent Hub',
    description: 'A group chat where all your agents collaborate. Jarvis orchestrates, agents report, and you see everything happening in real time.',
    gradient: 'from-orange-500 to-yellow-500',
    tag: 'Multi-Agent',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export function FeaturesPreview(): JSX.Element {
  return (
    <section className="py-20 md:py-32 bg-slate-950">
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
            HOW IT WORKS
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            One conversation.{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Infinite agents.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Talk to Jarvis. He creates and coordinates specialized agents to handle anything you throw at him.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-slate-900 rounded-2xl p-6 lg:p-8 border border-slate-800 hover:border-slate-700 transition-colors duration-300"
            >
              {/* Tag */}
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.gradient} text-white mb-4 opacity-80`}>
                {feature.tag}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
                <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative bg-slate-900/80 rounded-2xl border border-slate-800 p-8 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            
            <div className="relative">
              {/* Title */}
              <div className="text-center mb-8">
                <span className="text-xs text-slate-500 font-medium tracking-wider">ARCHITECTURE</span>
              </div>

              {/* User → Jarvis */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-2">
                    <span className="text-lg">👤</span>
                  </div>
                  <span className="text-xs text-slate-500">You</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-12 h-px bg-gradient-to-r from-slate-700 to-emerald-500" />
                  <span className="text-xs text-slate-500 px-2 whitespace-nowrap">&quot;Create a trading bot&quot;</span>
                  <div className="w-12 h-px bg-gradient-to-r from-emerald-500 to-slate-700" />
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-2 shadow-lg shadow-emerald-500/10">
                    <span className="text-lg">⚡</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold">Jarvis</span>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-slate-800" />
                <span className="text-xs text-slate-600">spawns & coordinates</span>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              {/* Agents Row */}
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {[
                  { icon: '💹', name: 'Trading', desc: 'Crypto analysis' },
                  { icon: '🔬', name: 'Research', desc: 'Web research' },
                  { icon: '✍️', name: 'Content', desc: 'Writing & social' },
                  { icon: '🛠️', name: 'DevOps', desc: 'Infrastructure' },
                ].map((agent) => (
                  <div key={agent.name} className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-1.5">
                      <span>{agent.icon}</span>
                    </div>
                    <span className="text-xs text-white font-medium block">{agent.name}</span>
                    <span className="text-[10px] text-slate-500">{agent.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Link to All Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/features">
            <motion.span
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
            >
              See all features
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
