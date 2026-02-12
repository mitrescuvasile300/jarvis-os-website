'use client';

import { motion } from 'framer-motion';

interface Integration {
  name: string;
  description: string;
}

interface Category {
  name: string;
  items: Integration[];
}

const categories: Category[] = [
  {
    name: 'AI Providers',
    items: [
      { name: 'OpenClaw', description: 'Native integration' },
      { name: 'Claude', description: "Anthropic's AI" },
      { name: 'GPT-4', description: 'OpenAI models' },
      { name: 'Gemini', description: "Google's AI" },
    ],
  },
  {
    name: 'Communication',
    items: [
      { name: 'Discord', description: 'Bot integration' },
      { name: 'Telegram', description: 'Bot integration' },
      { name: 'Slack', description: 'Coming soon' },
      { name: 'Email', description: 'SMTP/IMAP' },
    ],
  },
];

export function Integrations() {
  return (
    <section className="py-24 md:py-32" style={{
      background: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-sm font-medium tracking-wider mb-4">
            INTEGRATIONS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Connects to Everything You Use
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Jarvis OS works with your existing tools and AI providers
          </p>
        </div>

        {categories.map((cat, ci) => (
          <div key={cat.name} className="mb-12">
            <p className="text-sm text-slate-500 uppercase tracking-wider mb-6">{cat.name}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (ci * 4 + i) * 0.05 }}
                  className="w-full aspect-square max-w-[96px] mx-auto rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center hover:border-[#00ff88]/30 hover:bg-white/10 transition-all duration-300 group cursor-default"
                  title={item.description}
                >
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-2 text-slate-400 group-hover:text-white transition-colors">
                    <span className="text-lg font-bold">{item.name[0]}</span>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-slate-500 text-center mt-8">
          Plus 50+ more integrations via webhooks and APIs
        </p>
      </div>
    </section>
  );
}
