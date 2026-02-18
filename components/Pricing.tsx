'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingProps {
  onSignupClick: () => void
}

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for beginners',
    features: [
      'Weekly video calls',
      'Custom workout plans',
      'Nutrition guidance',
      'Email support',
      'Progress tracking',
    ],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$199',
    period: '/month',
    description: 'Most popular choice',
    features: [
      'Bi-weekly video calls',
      'Custom workout plans',
      'Meal prep guidance',
      'Priority support',
      'Progress tracking',
      'Form check videos',
      'Supplement recommendations',
    ],
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$299',
    period: '/month',
    description: 'For serious athletes',
    features: [
      'Weekly video calls',
      'Custom workout plans',
      'Full meal planning',
      '24/7 support',
      'Advanced tracking',
      'Form analysis',
      'Supplement protocol',
      'Recovery optimization',
    ],
    highlighted: false,
  },
]

export default function Pricing({ onSignupClick }: PricingProps) {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. All plans include a 7-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? 'glass-card border-2 border-accent scale-105'
                  : 'glass-card'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block px-4 py-1 bg-accent text-background rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/60 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">{plan.price}</span>
                <span className="text-foreground/60">{plan.period}</span>
              </div>

              <button
                onClick={onSignupClick}
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.highlighted
                    ? 'bg-accent text-background hover:bg-accent/90'
                    : 'border-2 border-accent text-accent hover:bg-accent/10'
                }`}
              >
                Get Started
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check size={20} className="text-accent flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
