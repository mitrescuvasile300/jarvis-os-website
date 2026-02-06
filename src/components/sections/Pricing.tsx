'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for trying out Jarvis OS',
    features: [
      '1 AI agent',
      '100 tasks/month',
      'Basic integrations',
      'Community support',
      '7-day data retention'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'one-time',
    description: 'Best for professionals and small teams',
    features: [
      'Unlimited AI agents',
      'Unlimited tasks',
      'All integrations',
      'Priority support',
      'Unlimited data retention',
      'Custom workflows',
      'API access',
      'Team collaboration'
    ],
    cta: 'Get Jarvis OS Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with advanced needs',
    features: [
      'Everything in Pro',
      'Dedicated infrastructure',
      'SSO & advanced security',
      'Custom AI training',
      'SLA guarantee',
      'Dedicated account manager',
      'On-premise deployment',
      'White-label options'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent
            <span className="text-emerald-400"> Pricing</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            One-time payment for lifetime access. No subscriptions, no hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                plan.popular 
                  ? 'bg-emerald-500/10 border-2 border-emerald-500' 
                  : 'bg-slate-800/50 border border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-slate-400">/{plan.period}</span>
                  )}
                </div>
                <p className="text-slate-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg" 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
