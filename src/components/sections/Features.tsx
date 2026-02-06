'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Clock, Workflow, LineChart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Memory System',
    description: 'Never forget anything. Your AI second brain captures, organizes, and retrieves information instantly.'
  },
  {
    icon: Zap,
    title: 'Autonomous Execution',
    description: 'Set goals and watch your AI agents work 24/7. From research to execution, fully automated.'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Build complex multi-step workflows that run on autopilot. Connect any tool, any platform.'
  },
  {
    icon: Clock,
    title: 'Time Saving',
    description: 'Save 10+ hours per week. Delegate repetitive tasks to your AI workforce and focus on what matters.'
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Your data stays yours. Local-first architecture with end-to-end encryption for sensitive information.'
  },
  {
    icon: LineChart,
    title: 'Productivity Analytics',
    description: 'Track your AI usage, task completion rates, and time saved. Optimize your workflow continuously.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to
            <span className="text-emerald-400"> Scale Your Output</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A complete operating system for the AI age. One platform, infinite possibilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
