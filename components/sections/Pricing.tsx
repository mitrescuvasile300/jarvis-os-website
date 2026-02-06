'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { CheckoutButton } from '@/components/CheckoutButton';

const plans = [
  { name: 'Free', price: '$0', features: ['1 AI Agent', '100 Tasks', 'Basic Support'] },
  { name: 'Pro', price: '$29', popular: true, features: ['Unlimited Agents', 'Unlimited Tasks', 'Priority Support', 'API Access'] },
];

export function Pricing() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl ${plan.popular ? 'bg-emerald-500/20 border-2 border-emerald-500' : 'bg-slate-800'}`}
            >
              {plan.popular && <span className="bg-emerald-500 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">Popular</span>}
              <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
              <div className="text-4xl font-bold my-4">{plan.price}</div>
              <ul className="space-y-3 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.popular ? (
                <CheckoutButton />
              ) : (
                <button className="w-full py-3 rounded-lg font-bold bg-slate-700 hover:bg-slate-600 transition">
                  Get Started
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
