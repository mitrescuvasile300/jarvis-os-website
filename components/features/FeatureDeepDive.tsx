'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Layers, Database, Network, Inbox, Cpu, GitBranch, CheckCircle } from 'lucide-react';

interface Bullet {
  text: string;
}

interface Step {
  number: string;
  label: string;
  description: string;
}

interface MemoryLayer {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface Highlight {
  quote: string;
  label: string;
}

interface DeepDiveData {
  position: 'image-right' | 'image-left';
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  bullets: Bullet[];
  highlight: Highlight;
  image: string;
  howItWorks?: { title: string; steps: Step[] };
  memoryLayers?: { title: string; layers: MemoryLayer[] };
  flowSteps?: { title: string; steps: { icon: React.ReactNode; label: string; description: string }[] };
}

const sections: DeepDiveData[] = [
  {
    position: 'image-right',
    badge: 'AI AGENTS',
    title: 'Your Personal Army of Specialists',
    titleHighlight: 'Personal Army',
    description: 'Stop context-switching. Deploy specialized agents that master individual domains—coding, writing, research, communication—and collaborate seamlessly.',
    bullets: [
      { text: 'Create agents with specific personalities, skills, and knowledge bases' },
      { text: 'Agents communicate with each other to complete complex tasks' },
      { text: 'Train agents on your workflow and watch them improve daily' },
      { text: 'Pre-built templates for common roles: DevOps, Content, Research, Support' },
    ],
    howItWorks: {
      title: 'How Agent Orchestration Works',
      steps: [
        { number: '01', label: 'Define', description: 'Create agent with role, skills, and knowledge' },
        { number: '02', label: 'Assign', description: 'Route tasks based on agent expertise' },
        { number: '03', label: 'Execute', description: 'Agents work autonomously or collaborate' },
        { number: '04', label: 'Learn', description: 'Feedback loop improves performance' },
      ],
    },
    highlight: {
      quote: 'Specialized agents outperform generalist AI by 3-5x on domain-specific tasks — because they stay focused.',
      label: '⚡ Why it matters',
    },
    image: '/feature-agents.webp',
  },
  {
    position: 'image-left',
    badge: 'PERSISTENT MEMORY',
    title: 'Total Recall, Zero Effort',
    titleHighlight: 'Total Recall',
    description: 'Traditional AI forgets everything after each session. Jarvis builds a comprehensive knowledge graph of your work, relationships, and preferences that compounds over time.',
    bullets: [
      { text: 'Remembers every conversation, decision, and context shift' },
      { text: 'Semantic search finds relevant information instantly' },
      { text: 'Learns your communication style and preferences' },
      { text: 'End-to-end encryption keeps your data secure' },
    ],
    memoryLayers: {
      title: 'Memory Architecture',
      layers: [
        { name: 'Short-term', description: 'Current session context', icon: <Clock className="w-4 h-4" /> },
        { name: 'Working', description: 'Recent interactions & tasks', icon: <Layers className="w-4 h-4" /> },
        { name: 'Long-term', description: 'Permanent knowledge graph', icon: <Database className="w-4 h-4" /> },
        { name: 'Semantic', description: 'Meaning & relationships', icon: <Network className="w-4 h-4" /> },
      ],
    },
    highlight: {
      quote: 'Unlike ChatGPT, Jarvis remembers everything. Your context compounds over time — agents get smarter the more you use them.',
      label: '🧠 The difference',
    },
    image: '/feature-memory.webp',
  },
  {
    position: 'image-right',
    badge: 'AUTONOMOUS EXECUTION',
    title: 'Set It. Forget It. Profit.',
    titleHighlight: 'Forget It',
    description: 'True automation means you don\'t have to think about it. Jarvis handles complex workflows end-to-end, making intelligent decisions without constant hand-holding.',
    bullets: [
      { text: 'Multi-step workflows execute without intervention' },
      { text: 'Intelligent branching handles edge cases automatically' },
      { text: 'Scheduled tasks run reliably at any hour' },
      { text: 'Smart notifications only when human input is truly needed' },
    ],
    flowSteps: {
      title: 'Execution Pipeline',
      steps: [
        { icon: <Inbox className="w-4 h-4" />, label: 'Trigger', description: 'Event, schedule, or manual' },
        { icon: <Cpu className="w-4 h-4" />, label: 'Process', description: 'AI analyzes and decides' },
        { icon: <GitBranch className="w-4 h-4" />, label: 'Branch', description: 'Handle edge cases' },
        { icon: <CheckCircle className="w-4 h-4" />, label: 'Complete', description: 'Execute and log' },
      ],
    },
    highlight: {
      quote: 'Set up a workflow once and walk away. Jarvis handles multi-step tasks end-to-end, only pinging you when a human decision is truly needed.',
      label: '🚀 True automation',
    },
    image: '/feature-execution.webp',
  },
];

function HighlightText({ text, highlight }: { text: string; highlight: string }) {
  const parts = text.split(highlight);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-400">
        {highlight}
      </span>
      {parts[1]}
    </>
  );
}

function DeepDiveSection({ data, index }: { data: DeepDiveData; index: number }) {
  const isImageLeft = data.position === 'image-left';

  const textContent = (
    <div className="flex-1 space-y-6">
      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-sm font-medium tracking-wider">
        {data.badge}
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2]">
        <HighlightText text={data.title} highlight={data.titleHighlight} />
      </h2>

      <p className="text-lg text-slate-300 leading-relaxed">{data.description}</p>

      <ul className="space-y-3">
        {data.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#00ff88] mt-0.5 shrink-0" />
            <span className="text-slate-300">{b.text}</span>
          </li>
        ))}
      </ul>

      {/* How it works / diagram */}
      {data.howItWorks && (
        <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-4">{data.howItWorks.title}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.howItWorks.steps.map((s) => (
              <div key={s.number} className="text-center">
                <div className="text-[#00ff88] font-mono text-sm mb-1">{s.number}</div>
                <div className="font-semibold text-sm mb-1">{s.label}</div>
                <div className="text-xs text-slate-400">{s.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.memoryLayers && (
        <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-4">{data.memoryLayers.title}</h4>
          <div className="space-y-3">
            {data.memoryLayers.layers.map((l, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className="text-[#a855f7]">{l.icon}</div>
                <div>
                  <div className="font-medium text-sm">{l.name}</div>
                  <div className="text-xs text-slate-400">{l.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.flowSteps && (
        <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-4">{data.flowSteps.title}</h4>
          <div className="flex items-center gap-2 overflow-x-auto">
            {data.flowSteps.steps.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="text-center min-w-[80px]">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6]/20 flex items-center justify-center mx-auto mb-1 text-[#3b82f6]">
                    {s.icon}
                  </div>
                  <div className="font-medium text-xs">{s.label}</div>
                  <div className="text-[10px] text-slate-400">{s.description}</div>
                </div>
                {i < data.flowSteps!.steps.length - 1 && (
                  <div className="w-8 h-px bg-white/20 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Highlight */}
      <div className="mt-6 p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
        <div className="text-xs font-medium text-emerald-400 mb-2">{data.highlight.label}</div>
        <p className="text-slate-300 leading-relaxed">{data.highlight.quote}</p>
      </div>
    </div>
  );

  const imageContent = (
    <div className="flex-1">
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/2]">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-16 md:py-24"
    >
      <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
        {textContent}
        {imageContent}
      </div>
    </motion.div>
  );
}

export function FeatureDeepDive() {
  return (
    <section className="py-20" style={{
      background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((s, i) => (
          <DeepDiveSection key={s.badge} data={s} index={i} />
        ))}
      </div>
    </section>
  );
}
