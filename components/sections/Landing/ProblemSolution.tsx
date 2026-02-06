'use client';

import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const problems = [
  'Context switching kills your focus',
  'Ideas get lost across 10+ apps',
  'Manual repetitive tasks drain energy',
  'No unified view of your work',
];

const solutions = [
  'One system for everything',
  'AI remembers and connects your ideas',
  'Automate the boring stuff',
  'Complete visibility and control',
];

export function ProblemSolution(): JSX.Element {
  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Sound familiar?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Developers waste 40% of their time on context switching
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Problem Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500/50 to-transparent rounded-full" />
            
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">The Problem</h3>
            </motion.div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"
                >
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-slate-300">{problem}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 bg-red-500/5 border border-red-500/10 rounded-xl"
            >
              <p className="text-red-300 text-sm font-medium">
                Result: You&apos;re busy all day but feel like you got nothing done.
              </p>
            </motion.div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/50 to-transparent rounded-full" />
            
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">The Solution</h3>
            </motion.div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-slate-300">{solution}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl"
            >
              <p className="text-emerald-300 text-sm font-medium">
                Result: Jarvis OS centralizes everything so you can focus on what matters.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
