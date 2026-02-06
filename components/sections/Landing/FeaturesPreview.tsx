'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Feature {
  icon: typeof Brain;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: 'AI Memory',
    description: 'Never forget anything. Your AI remembers every conversation, idea, and decision — instantly searchable and always connected.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Smart Automation',
    description: 'Build powerful automations without code. Let AI handle the repetitive work while you focus on high-impact tasks.',
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    icon: Clock,
    title: 'Time Saving',
    description: 'Save 10+ hours every week. Users report getting back an entire workday just from reduced context switching.',
    gradient: 'from-orange-500 to-yellow-500',
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
            POWERFUL FEATURES
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              10x your output
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Jarvis OS combines AI memory, automation, and intelligent workflows into one powerful system.
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
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-6`}>
                <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                  <feature.icon className={`w-7 h-7 bg-gradient-to-br ${feature.gradient} bg-clip-text`} style={{ color: 'transparent', background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`, WebkitBackgroundClip: 'text' }} />
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
