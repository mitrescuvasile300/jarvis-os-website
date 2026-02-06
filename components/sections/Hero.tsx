'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Jarvis OS
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 mb-8"
        >
          AI Operating System for Ambitious People
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-emerald-500 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg"
        >
          Get Started — $29
        </motion.button>
      </div>
    </section>
  );
}
