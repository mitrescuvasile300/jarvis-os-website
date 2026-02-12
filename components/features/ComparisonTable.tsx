'use client';

import { motion } from 'framer-motion';

interface CellData {
  value: string;
  status: 'excellent' | 'medium' | 'poor';
}

interface Row {
  feature: string;
  jarvis: CellData;
  assistants: CellData;
  chatbots: CellData;
}

const rows: Row[] = [
  {
    feature: 'Persistent Memory',
    jarvis: { value: 'Unlimited', status: 'excellent' },
    assistants: { value: 'None', status: 'poor' },
    chatbots: { value: 'Session only', status: 'medium' },
  },
  {
    feature: 'Autonomous Execution',
    jarvis: { value: '24/7 Background', status: 'excellent' },
    assistants: { value: 'Command only', status: 'poor' },
    chatbots: { value: 'Requires prompts', status: 'medium' },
  },
  {
    feature: 'Multi-Model Routing',
    jarvis: { value: 'Auto-optimized', status: 'excellent' },
    assistants: { value: 'Single model', status: 'poor' },
    chatbots: { value: 'Manual switch', status: 'medium' },
  },
  {
    feature: 'Custom Agents',
    jarvis: { value: 'Unlimited', status: 'excellent' },
    assistants: { value: 'None', status: 'poor' },
    chatbots: { value: 'Limited GPTs', status: 'medium' },
  },
  {
    feature: 'Self-Healing',
    jarvis: { value: 'Built-in', status: 'excellent' },
    assistants: { value: 'None', status: 'poor' },
    chatbots: { value: 'None', status: 'poor' },
  },
  {
    feature: 'Local/Private',
    jarvis: { value: 'Full support', status: 'excellent' },
    assistants: { value: 'Cloud only', status: 'poor' },
    chatbots: { value: 'Cloud only', status: 'poor' },
  },
  {
    feature: 'Cost',
    jarvis: { value: '$29 lifetime', status: 'excellent' },
    assistants: { value: 'Free (limited)', status: 'medium' },
    chatbots: { value: '$20/month', status: 'medium' },
  },
];

const statusClass: Record<string, string> = {
  excellent: 'text-[#00ff88] font-semibold',
  medium: 'text-yellow-400',
  poor: 'text-slate-500 line-through',
};

export function ComparisonTable() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0f] relative">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,255,136,0.05) 0%, transparent 70%)',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-sm font-medium tracking-wider mb-4">
            COMPARISON
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Jarvis OS Wins</h2>
          <p className="text-lg text-slate-400">See how Jarvis stacks up against alternatives</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-4 px-6 text-left font-semibold text-slate-300 w-[30%]">Feature</th>
                <th className="py-4 px-6 text-left font-semibold bg-[#00ff88]/5 w-[25%]">
                  <div className="flex items-center gap-2">
                    Jarvis OS
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#00ff88]/20 text-[#00ff88]">$29 once</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-left font-semibold text-slate-300 w-[22.5%]">Siri/Alexa</th>
                <th className="py-4 px-6 text-left font-semibold text-slate-300 w-[22.5%]">ChatGPT/Claude</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 text-slate-300">{row.feature}</td>
                  <td className={`py-4 px-6 bg-[#00ff88]/5 ${statusClass[row.jarvis.status]}`}>{row.jarvis.value}</td>
                  <td className={`py-4 px-6 ${statusClass[row.assistants.status]}`}>{row.assistants.value}</td>
                  <td className={`py-4 px-6 ${statusClass[row.chatbots.status]}`}>{row.chatbots.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-sm text-slate-500 text-center mt-6">
          * Based on default features. Actual capabilities may vary with configuration.
        </p>
      </div>
    </section>
  );
}
