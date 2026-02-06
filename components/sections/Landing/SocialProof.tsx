'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Jarvis OS completely transformed how I work. I went from drowning in tabs to having a clear system that actually works.",
    author: "Sarah Chen",
    role: "Founder",
    company: "TechFlow",
    rating: 5,
  },
  {
    quote: "The AI memory feature alone is worth 10x the price. It's like having a second brain that never forgets.",
    author: "Marcus Rodriguez",
    role: "Senior Developer",
    company: "Stripe",
    rating: 5,
  },
  {
    quote: "I save at least 2 hours every day with the automation features. Best investment I've made for my productivity.",
    author: "Emily Watson",
    role: "Product Manager",
    company: "Notion",
    rating: 5,
  },
];

const companyLogos = [
  'Vercel', 'Stripe', 'Linear', 'Notion', 'Figma'
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function SocialProof(): JSX.Element {
  return (
    <section className="py-20 md:py-32 bg-slate-900">
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
            LOVED BY THOUSANDS
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Don&apos;t just take our word for it
          </h2>
          <p className="text-slate-400 text-lg">
            See what professionals are saying about Jarvis OS
          </p>
        </motion.div>

        {/* User Count Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-4 bg-slate-800/50 border border-slate-700 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 border-2 border-slate-900"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold">1,000+</p>
              <p className="text-slate-400 text-sm">Happy users</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="relative bg-slate-800/50 rounded-2xl p-6 lg:p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-emerald-500/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400" />
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm mb-6">
            Trusted by professionals at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companyLogos.map((company) => (
              <motion.div
                key={company}
                whileHover={{ scale: 1.05 }}
                className="text-slate-600 hover:text-slate-400 font-bold text-xl transition-colors cursor-default"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
