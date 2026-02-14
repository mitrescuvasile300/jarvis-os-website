'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Bot, Globe, Brain, GitMerge, PiggyBank, LucideIcon } from 'lucide-react';

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
    icon: MessageSquare,
    iconColor: '#00ff88',
    accentGradient: 'from-[#00ff88]/20 to-cyan-500/20',
    title: 'Direct Jarvis Chat',
    tagline: 'Talk to your AI — no setup needed',
    description: 'Jarvis is always available. Open the dashboard and start chatting. Ask questions, give tasks, brainstorm. WebSocket streaming with real-time responses.',
    highlights: ['Instant availability — no agent creation needed', 'Suggestion chips for quick actions', 'Real-time streaming with typing indicator'],
  },
  {
    icon: Bot,
    iconColor: '#a855f7',
    accentGradient: 'from-purple-500/20 to-pink-500/20',
    title: 'Autonomous Agent Spawning',
    tagline: 'Jarvis creates agents for you',
    description: 'Say "Create a trading agent" and Jarvis builds it — choosing the right template, model, and tools. Each agent is specialized for its domain.',
    highlights: ['Natural language agent creation', '7 built-in templates (Trading, Research, Content...)', 'Agents appear in Hub automatically'],
  },
  {
    icon: Globe,
    iconColor: '#3b82f6',
    accentGradient: 'from-blue-500/20 to-indigo-500/20',
    title: 'Agent Hub',
    tagline: 'Group chat for all your agents',
    description: 'See all agents in one place. Jarvis orchestrates, agents report progress, and you watch the collaboration happen in real time.',
    highlights: ['Live participant sidebar with status', 'Multi-agent group conversations', 'Jarvis as autonomous orchestrator'],
  },
  {
    icon: Brain,
    iconColor: '#ec4899',
    accentGradient: 'from-pink-500/20 to-rose-500/20',
    title: 'Persistent Memory',
    tagline: 'Never lose context again',
    description: 'Jarvis remembers every conversation, decision, and preference across sessions. 4-layer memory system with semantic search and SQLite FTS5.',
    highlights: ['Short-term, working, long-term & semantic layers', 'Full-text search across all memories', 'Context compounds over time'],
  },
  {
    icon: GitMerge,
    iconColor: '#06b6d4',
    accentGradient: 'from-cyan-500/20 to-teal-500/20',
    title: '29+ AI Models',
    tagline: 'Pick the best model for each agent',
    description: 'GPT-5.2, Claude Opus 4.6, Gemini 3 Pro, Llama 3.1 — use any model from OpenAI, Anthropic, Google, or Ollama. Mix and match per agent.',
    highlights: ['Multi-provider support built-in', 'Different models for different agents', 'Ollama for 100% free local AI'],
  },
  {
    icon: PiggyBank,
    iconColor: '#eab308',
    accentGradient: 'from-yellow-500/20 to-orange-500/20',
    title: 'Self-Hosted & Private',
    tagline: 'Your machine. Your data. Your rules.',
    description: 'Runs on your laptop or VPS via Docker. No data sent to third parties. One-command install, 30-second builds, zero dependencies.',
    highlights: ['Docker Compose — one command setup', 'Works offline with Ollama', '$29 one-time — no subscriptions ever'],
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
            Six Superpowers in One System
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Everything Jarvis can do — from direct chat to autonomous multi-agent orchestration
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
