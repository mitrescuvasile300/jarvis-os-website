"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out Jarvis OS",
    features: [
      { text: "1 AI Agent", included: true },
      { text: "100 tasks/month", included: true },
      { text: "Basic memory", included: true },
      { text: "Community support", included: true },
      { text: "Unlimited agents", included: false },
      { text: "Priority support", included: false },
    ],
    cta: { label: "Get Started Free", href: "#waitlist" },
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "one-time",
    description: "Everything you need to supercharge productivity",
    badge: "Most Popular",
    features: [
      { text: "Unlimited AI Agents", included: true },
      { text: "Unlimited tasks", included: true },
      { text: "Advanced memory", included: true },
      { text: "Priority support", included: true },
      { text: "All future updates", included: true },
      { text: "API access", included: true },
    ],
    cta: { label: "Get Jarvis Pro — $29", href: "/pricing#checkout" },
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and organizations",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated support", included: true },
      { text: "SLA guarantee", included: true },
      { text: "On-premise option", included: true },
      { text: "Custom training", included: true },
    ],
    cta: { label: "Contact Sales", href: "mailto:contact@jarvis-os.com" },
    highlight: false,
  },
];

export function PricingCards() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.highlight
                  ? "bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] border-2 border-[#00ff88]"
                  : "bg-[#1a1a2e]/50 border border-[#2a2a4e]"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00ff88] text-[#0a0a0f] text-sm font-semibold rounded-full">
                  {tier.badge}
                </span>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && (
                    <span className="text-gray-400">/{tier.period}</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.highlight
                    ? "bg-[#00ff88] text-[#0a0a0f] hover:bg-[#00e077]"
                    : "bg-[#2a2a4e] text-white hover:bg-[#3a3a5e]"
                }`}
              >
                {tier.cta.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 mt-12"
        >
          All plans include a 14-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
