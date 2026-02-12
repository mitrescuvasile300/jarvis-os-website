'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, RefreshCcw, Zap, Users } from 'lucide-react';

const trustBadges = [
  { icon: ShieldCheck, text: 'Secure Payment' },
  { icon: RefreshCcw, text: '30-Day Guarantee' },
  { icon: Zap, text: 'Instant Access' },
  { icon: Users, text: '1,000+ Users' },
];

export function FeaturesCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #1a1a2e 0%, #0a0a0f 100%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,255,136,0.15) 0%, transparent 70%)',
      }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-400">
              Automate
            </span>{' '}
            Your Workflow?
          </h2>

          <p className="text-xl text-slate-300 mb-8">
            Join 1,000+ developers who&apos;ve transformed their productivity with Jarvis OS
          </p>

          {/* Pricing */}
          <div className="mb-8">
            <span className="text-5xl md:text-6xl font-bold text-white">$29</span>
            <span className="text-lg text-slate-400 ml-2">one-time payment</span>
            <p className="text-sm text-slate-500 mt-2">Lifetime access • All future updates included</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/checkout"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0a0a0f] bg-[#00ff88] rounded-xl hover:bg-[#00e077] shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_50px_rgba(0,255,136,0.4)] transition-all duration-300"
            >
              Get Jarvis OS Now
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              View Demo
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
                <Icon className="w-4 h-4 text-[#00ff88]" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
