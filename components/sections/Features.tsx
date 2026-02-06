'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Clock, Shield } from 'lucide-react';

const features = [
  { icon: Brain, title: 'AI Memory', desc: 'Never forget anything' },
  { icon: Zap, title: 'Automation', desc: 'Work 24/7 on autopilot' },
  { icon: Clock, title: 'Time Saving', desc: 'Save 10+ hours weekly' },
  { icon: Shield, title: 'Privacy', desc: 'Your data stays yours' },
];

export function Features() {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-slate-900 rounded-lg text-center"
            >
              <f.icon className="w-10 h-10 mx-auto mb-4 text-emerald-400" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
