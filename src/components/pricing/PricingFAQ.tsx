"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What's included in the Pro plan?",
    answer: "The Pro plan includes unlimited AI agents, unlimited tasks, advanced memory capabilities, priority support, all future updates, and API access. It's a one-time payment of $29 for lifetime access."
  },
  {
    question: "Is there a subscription fee?",
    answer: "No. Jarvis OS is a one-time purchase. Pay once, use forever. No monthly fees, no hidden charges."
  },
  {
    question: "Can I upgrade from Starter to Pro later?",
    answer: "Yes! You can start with the free Starter plan and upgrade to Pro at any time. Your data and agents will transfer seamlessly."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and cryptocurrency (BTC, ETH, SOL). Enterprise plans also support wire transfers."
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with Jarvis OS for any reason, contact us for a full refund."
  },
];

export function PricingFAQ() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#06b6d4] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1a2e]/50 border border-[#2a2a4e] rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
