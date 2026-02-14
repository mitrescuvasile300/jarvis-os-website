'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare, Bot, Globe } from 'lucide-react';
import Link from 'next/link';

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const gridAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0.1, 0.3, 0.1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={gridAnimation}
          initial="initial"
          animate="animate"
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-sm text-emerald-400 font-medium">
            Now in Early Access — $29 one-time
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Meet{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Jarvis
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-2 text-slate-300 font-semibold">
            Your Autonomous AI Brain
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Talk to Jarvis. He creates agents, delegates tasks, and gets things done —
          <span className="text-emerald-400 font-medium"> autonomously</span>.
          <span className="block mt-2 text-slate-500">
            Like having a CTO, assistant, and entire dev team in one.
          </span>
        </motion.p>

        {/* Architecture Preview — Mini Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-sm">
            {/* You */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-slate-500 text-xs">You</span>
            </div>
            
            {/* Arrow */}
            <div className="flex-1 max-w-[40px] h-px bg-gradient-to-r from-slate-700 to-emerald-500/50" />
            
            {/* Jarvis */}
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                animate={pulseAnimation.animate}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-500/20"
              >
                <span className="text-xl sm:text-2xl">⚡</span>
              </motion.div>
              <span className="text-emerald-400 text-xs font-semibold">Jarvis</span>
            </div>
            
            {/* Arrow */}
            <div className="flex-1 max-w-[40px] h-px bg-gradient-to-r from-emerald-500/50 to-slate-700" />
            
            {/* Agents */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex gap-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs">💹</div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs">🔬</div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs">✍️</div>
              </div>
              <span className="text-slate-500 text-xs">Agents</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/pricing">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-emerald-500/25"
            >
              Get Started — $29
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          <Link href="/features">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-slate-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg border border-slate-700 hover:border-slate-600 transition-all duration-200"
            >
              See How It Works
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <span>✓ No subscription</span>
            <span>✓ Runs on your machine</span>
            <span>✓ 29+ AI models</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
