'use client';

import { motion } from 'framer-motion';
import { Bot, Brain, PlayCircle, GitMerge, HeartPulse, PiggyBank, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  iconColor: string;
  accentGradient: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

const features: Feature[] = [
  {
    icon: Bot,
    iconColor: '#00ff88',
    accentGradient: 'from-[#00ff88]/20 to-cyan-500/20',
    title: 'AI Agents',
    tagline: 'Deploy specialized agents for every task',
    description: 'Create purpose-built agents that handle specific workflows autonomously. Each agent learns your preferences and improves over time.',
    highlights: ['Task-specific specialization', 'Learning from feedback', 'Collaborative agent teams'],
  },
  {
    icon: Brain,
    iconColor: '#a855f7',
    accentGradient: 'from-purple-500/20 to-pink-500/20',
    title: 'Persistent Memory',
    tagline: 'Never lose context across sessions',
    description: 'Your AI remembers everything—conversations, decisions, preferences, and patterns. Context persists forever, not just within sessions.',
    highlights: ['Cross-session recall', 'Semantic understanding', 'Encrypted storage'],
  },
  {
    icon: PlayCircle,
    iconColor: '#3b82f6',
    accentGradient: 'from-blue-500/20 to-indigo-500/20',
    title: 'Autonomous Execution',
    tagline: 'Works 24/7 without supervision',
    description: 'Set it and forget it. Your agents execute complex multi-step workflows around the clock, handling edge cases and exceptions automatically.',
    highlights: ['Zero supervision required', 'Intelligent error handling', 'Background processing'],
  },
  {
    icon: GitMerge,
    iconColor: '#06b6d4',
    accentGradient: 'from-cyan-500/20 to-teal-500/20',
    title: 'Multi-Model Routing',
    tagline: 'Always use the best AI for the job',
    description: 'Automatically routes tasks to Claude, GPT, Gemini, or local models based on the task type, complexity, and cost optimization goals.',
    highlights: ['Automatic model selection', 'Fallback chains', 'Best-in-class results'],
  },
  {
    icon: HeartPulse,
    iconColor: '#ec4899',
    accentGradient: 'from-pink-500/20 to-rose-500/20',
    title: 'Self-Healing',
    tagline: 'Automatically recovers from failures',
    description: 'When things go wrong, Jarvis diagnoses the issue, retries with different strategies, and escalates only when human input is truly needed.',
    highlights: ['Auto-retry logic', 'Error pattern learning', 'Smart escalation'],
  },
  {
    icon: PiggyBank,
    iconColor: '#eab308',
    accentGradient: 'from-yellow-500/20 to-orange-500/20',
    title: 'Cost Optimization',
    tagline: 'Save 60% on AI costs with smart routing',
    description: 'Intelligent model selection and caching means you never overpay. Use expensive models only when necessary, local models when possible.',
    highlights: ['Smart caching layer', 'Cost-aware routing', 'Usage analytics'],
  },
];

export function FeatureGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-sm font-medium tracking-wider mb-4">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Six Superpowers in One Template
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Each feature designed to eliminate friction and maximize output
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 lg:p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-[#00ff88]/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${f.accentGradient}`}
              >
                <f.icon className="w-7 h-7" style={{ color: f.iconColor }} />
              </div>

              <h3 className="text-xl font-bold mb-1">{f.title}</h3>
              <p className="text-sm text-slate-400 mb-3">{f.tagline}</p>
              <p className="text-base text-slate-300 leading-relaxed mb-4">{f.description}</p>

              <ul className="space-y-2">
                {f.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: f.iconColor }} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
