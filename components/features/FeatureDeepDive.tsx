'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Layers, Database, Network, MessageSquare, Bot, Globe, Users } from 'lucide-react';

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
  howItWorks?: { title: string; steps: Step[] };
  memoryLayers?: { title: string; layers: MemoryLayer[] };
  flowSteps?: { title: string; steps: { icon: React.ReactNode; label: string; description: string }[] };
}

const sections: DeepDiveData[] = [
  {
    position: 'image-right',
    badge: 'DIRECT CHAT',
    title: 'Talk to Jarvis Like a Person',
    titleHighlight: 'Like a Person',
    description: 'No agent creation needed. Open Jarvis OS and start chatting immediately. Jarvis is always online, always remembers you, and always ready to help.',
    bullets: [
      { text: 'WebSocket streaming — see responses type out in real time' },
      { text: 'Suggestion chips for quick actions and common tasks' },
      { text: 'Ask Jarvis to create agents, search the web, write code — anything' },
      { text: 'Works with any LLM: GPT-5, Claude, Gemini, or local Ollama' },
    ],
    howItWorks: {
      title: 'Chat Flow',
      steps: [
        { number: '01', label: 'Open', description: 'Click Jarvis in sidebar' },
        { number: '02', label: 'Chat', description: 'Type or use suggestions' },
        { number: '03', label: 'Stream', description: 'See real-time response' },
        { number: '04', label: 'Act', description: 'Jarvis executes tasks' },
      ],
    },
    highlight: {
      quote: 'Most AI tools make you create bots and configure settings before you can ask a single question. Jarvis is instant — open and talk.',
      label: '⚡ Zero friction',
    },
  },
  {
    position: 'image-left',
    badge: 'AGENT SPAWNING',
    title: 'Jarvis Creates Your AI Team',
    titleHighlight: 'AI Team',
    description: 'Tell Jarvis what you need and he creates the perfect agent. Trading bot? Research assistant? Content writer? Jarvis picks the template, model, and tools — then manages the agent for you.',
    bullets: [
      { text: 'Natural language: "Create a crypto trading agent" — done' },
      { text: '7 templates: Trading, Research, Content, DevOps, Support, Assistant, Custom' },
      { text: '29+ model options — different models for different agents' },
      { text: 'Each agent gets its own memory, tools, and personality' },
    ],
    flowSteps: {
      title: 'Agent Creation Pipeline',
      steps: [
        { icon: <MessageSquare className="w-4 h-4" />, label: 'Request', description: '"Create a trading agent"' },
        { icon: <Bot className="w-4 h-4" />, label: 'Configure', description: 'Template + model + tools' },
        { icon: <Users className="w-4 h-4" />, label: 'Deploy', description: 'Agent goes online' },
        { icon: <Globe className="w-4 h-4" />, label: 'Join Hub', description: 'Ready to collaborate' },
      ],
    },
    highlight: {
      quote: 'Specialized agents outperform general AI by 3-5x on domain tasks. Jarvis knows which agent type to create based on what you need.',
      label: '🤖 Why specialization matters',
    },
  },
  {
    position: 'image-right',
    badge: 'AGENT HUB',
    title: 'Multi-Agent Command Center',
    titleHighlight: 'Command Center',
    description: 'The Agent Hub is a group chat where Jarvis and all your agents collaborate. See who\'s online, watch tasks being delegated, and monitor everything from one screen.',
    bullets: [
      { text: 'Live sidebar shows all agents with real-time status' },
      { text: 'Jarvis orchestrates — assigns tasks to the right agent' },
      { text: 'You can message the group or talk to individual agents' },
      { text: 'Agents report progress and results back to the Hub' },
    ],
    howItWorks: {
      title: 'Hub Architecture',
      steps: [
        { number: '01', label: 'You', description: 'Give task to Jarvis' },
        { number: '02', label: 'Jarvis', description: 'Orchestrates & delegates' },
        { number: '03', label: 'Agents', description: 'Execute specialized work' },
        { number: '04', label: 'Hub', description: 'Results flow back' },
      ],
    },
    highlight: {
      quote: 'Think of it like a Slack workspace where every member is an AI specialist. Jarvis is the manager. You\'re the CEO.',
      label: '🌐 The bigger picture',
    },
  },
  {
    position: 'image-left',
    badge: 'PERSISTENT MEMORY',
    title: 'Total Recall, Zero Effort',
    titleHighlight: 'Total Recall',
    description: 'Traditional AI forgets everything after each session. Jarvis builds a comprehensive knowledge graph of your work, relationships, and preferences that compounds over time.',
    bullets: [
      { text: 'Remembers every conversation, decision, and context shift' },
      { text: 'SQLite FTS5 full-text search — find anything instantly' },
      { text: 'Learns your communication style and preferences' },
      { text: 'Encrypted local storage — your data never leaves your machine' },
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
                  <div className="w-10 h-10 rounded-full bg-[#00ff88]/10 flex items-center justify-center mx-auto mb-1 text-[#00ff88]">
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

  /* Visual placeholder — styled code/mock UI instead of missing images */
  const visualContent = (
    <div className="flex-1">
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1117] aspect-[4/3]">
        <FeatureVisual badge={data.badge} />
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
        {visualContent}
      </div>
    </motion.div>
  );
}

/* Mock UI visuals for each feature section */
function FeatureVisual({ badge }: { badge: string }) {
  if (badge === 'DIRECT CHAT') {
    return (
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
          <span className="text-lg">⚡</span>
          <span className="font-semibold text-sm text-white">Jarvis</span>
          <span className="ml-auto text-xs text-green-400">● Online</span>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex justify-end"><div className="bg-emerald-500/20 text-emerald-200 text-xs px-3 py-2 rounded-xl max-w-[70%]">What can you do?</div></div>
          <div className="flex justify-start"><div className="bg-white/5 text-slate-300 text-xs px-3 py-2 rounded-xl max-w-[80%]">I can create agents, search the web, write code, manage files, and automate workflows. What do you need?</div></div>
          <div className="flex justify-end"><div className="bg-emerald-500/20 text-emerald-200 text-xs px-3 py-2 rounded-xl max-w-[70%]">Create a crypto trading agent</div></div>
          <div className="flex justify-start"><div className="bg-white/5 text-slate-300 text-xs px-3 py-2 rounded-xl max-w-[80%]">🤖 Done! Trading agent &quot;crypto-trader&quot; is online with GPT-5.2. Check the Agent Hub.</div></div>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex-1 bg-white/5 rounded-lg px-3 py-2 text-xs text-slate-500">Message Jarvis...</div>
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs">↑</div>
        </div>
      </div>
    );
  }

  if (badge === 'AGENT SPAWNING') {
    return (
      <div className="p-6 h-full flex flex-col">
        <div className="text-xs text-slate-500 mb-4">Creating Agent...</div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
            <span>💹</span>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">crypto-trader</div>
              <div className="text-[10px] text-slate-400">Trading • GPT-5.2</div>
            </div>
            <span className="text-green-400 text-xs">● running</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
            <span>🔬</span>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">deep-researcher</div>
              <div className="text-[10px] text-slate-400">Research • Claude Sonnet 4.5</div>
            </div>
            <span className="text-green-400 text-xs">● running</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
            <span>✍️</span>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">content-writer</div>
              <div className="text-[10px] text-slate-400">Content • GPT-5 Mini</div>
            </div>
            <span className="text-green-400 text-xs">● running</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-emerald-500/30 animate-pulse">
            <span>🛠️</span>
            <div className="flex-1">
              <div className="text-sm font-medium text-emerald-400">devops-monitor</div>
              <div className="text-[10px] text-slate-400">DevOps • Llama 3.1 (local)</div>
            </div>
            <span className="text-yellow-400 text-xs">spawning...</span>
          </div>
        </div>
        <div className="mt-auto pt-4 text-center text-[10px] text-slate-500">4 agents active • 3 models in use</div>
      </div>
    );
  }

  if (badge === 'AGENT HUB') {
    return (
      <div className="h-full flex">
        <div className="w-[120px] bg-white/5 border-r border-white/10 p-3 space-y-2">
          <div className="text-[10px] text-slate-500 font-medium mb-2">ONLINE</div>
          <div className="flex items-center gap-2"><span className="text-xs">⚡</span><span className="text-[11px] text-white">Jarvis</span></div>
          <div className="flex items-center gap-2"><span className="text-xs">💹</span><span className="text-[11px] text-slate-300">Trader</span></div>
          <div className="flex items-center gap-2"><span className="text-xs">🔬</span><span className="text-[11px] text-slate-300">Research</span></div>
          <div className="flex items-center gap-2"><span className="text-xs">✍️</span><span className="text-[11px] text-slate-300">Writer</span></div>
        </div>
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex-1 space-y-3 text-xs">
            <div><span className="text-emerald-400 font-semibold">You:</span> <span className="text-slate-300">Analyze SOL/USDT and write a report</span></div>
            <div><span className="text-purple-400 font-semibold">Jarvis:</span> <span className="text-slate-300">On it. Delegating analysis to Trader, report to Writer.</span></div>
            <div><span className="text-yellow-400 font-semibold">Trader:</span> <span className="text-slate-300">SOL up 12% in 24h. RSI at 67. Support at $142.</span></div>
            <div><span className="text-blue-400 font-semibold">Research:</span> <span className="text-slate-300">Found 3 bullish catalysts: ETF news, upgrade, TVL growth.</span></div>
            <div><span className="text-pink-400 font-semibold">Writer:</span> <span className="text-slate-300">Report ready. "SOL Market Analysis — Feb 2026" ✅</span></div>
            <div><span className="text-purple-400 font-semibold">Jarvis:</span> <span className="text-slate-300">Done. Report saved. All agents completed their tasks.</span></div>
          </div>
          <div className="mt-2 flex gap-2">
            <div className="flex-1 bg-white/5 rounded px-2 py-1.5 text-[11px] text-slate-500">Message the group...</div>
          </div>
        </div>
      </div>
    );
  }

  if (badge === 'PERSISTENT MEMORY') {
    return (
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🧠</span>
          <span className="font-semibold text-sm text-white">Memory Search</span>
        </div>
        <div className="bg-white/5 rounded-lg px-3 py-2 mb-4 flex items-center gap-2">
          <span className="text-slate-500 text-xs">🔍</span>
          <span className="text-xs text-white">trading strategy SOL</span>
        </div>
        <div className="space-y-2 flex-1">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex justify-between mb-1"><span className="text-emerald-400 text-[10px]">Conversation</span><span className="text-[10px] text-slate-500">2 days ago</span></div>
            <div className="text-xs text-slate-300">Discussed SOL DCA strategy — buy at $135-140 support, take profit at $180...</div>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex justify-between mb-1"><span className="text-purple-400 text-[10px]">Agent Memory</span><span className="text-[10px] text-slate-500">1 week ago</span></div>
            <div className="text-xs text-slate-300">Trading agent learned: User prefers RSI &lt; 30 for entries, avoids leverage...</div>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="flex justify-between mb-1"><span className="text-blue-400 text-[10px]">Research</span><span className="text-[10px] text-slate-500">3 weeks ago</span></div>
            <div className="text-xs text-slate-300">SOL ecosystem analysis: DeFi TVL growing 40% MoM, top protocols...</div>
          </div>
        </div>
        <div className="mt-3 text-center text-[10px] text-slate-500">3 results found • 847 total memories</div>
      </div>
    );
  }

  return <div className="p-6 flex items-center justify-center h-full text-slate-500 text-sm">Feature preview</div>;
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
