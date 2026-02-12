'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Clock, Shield } from 'lucide-react';

const floatingIcons = [
  { Icon: Brain, position: 'top-20 left-[10%]', delay: 0 },
  { Icon: Zap, position: 'top-32 right-[15%]', delay: 1.5 },
  { Icon: Clock, position: 'bottom-32 left-[20%]', delay: 3 },
  { Icon: Shield, position: 'bottom-20 right-[10%]', delay: 0.8 },
];

export function FeaturesHeader() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,255,136,0.2) 0%, transparent 60%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 40% at 70% 10%, rgba(168,85,247,0.1) 0%, transparent 50%)',
      }} />
      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, position, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${position} text-[#00ff88]/20 hidden lg:block`}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-sm font-medium tracking-wider mb-8">
            FEATURES
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Everything You Need to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-400">
            10x
          </span>{' '}
          Your Productivity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Jarvis OS combines AI agents, persistent memory, and autonomous execution
          into one powerful system that works while you sleep.
        </motion.p>
      </div>
    </section>
  );
}
