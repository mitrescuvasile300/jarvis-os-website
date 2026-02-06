'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Your Brain is for Ideas.
          <br />
          <span className="text-emerald-400">Not for Remembering.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
        >
          The complete AI-powered operating system that transforms scattered thoughts into autonomous execution.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold px-8 py-6 text-lg"
          >
            Get Jarvis OS — $29
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg"
          >
            Watch Demo
          </Button>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-slate-400"
        >
          One-time payment. Instant access. 30-day guarantee.
        </motion.p>
      </div>
    </section>
  );
}
