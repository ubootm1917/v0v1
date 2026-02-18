'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, Award } from 'lucide-react'

const stats = [
  {
    icon: Users,
    label: 'Active Clients',
    value: '500+',
    description: 'Athletes transforming daily',
  },
  {
    icon: TrendingUp,
    label: 'Avg Fat Loss',
    value: '35 lbs',
    description: 'In first 6 months',
  },
  {
    icon: Clock,
    label: 'Time Commitment',
    value: '4-6 hrs',
    description: 'Per week only',
  },
  {
    icon: Award,
    label: 'Satisfaction',
    value: '99%',
    description: 'Client retention',
  },
]

export default function Results() {
  return (
    <section id="results" className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Real numbers backed by our clients' transformations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <h3 className="font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-foreground/60">{stat.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 glass-card p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">The Jaxson Reed Method</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
            <div>
              <div className="text-accent font-bold text-lg mb-2">1. Assessment</div>
              <p className="text-foreground/70">
                Deep analysis of your body composition, goals, and lifestyle to create a personalized strategy.
              </p>
            </div>
            <div>
              <div className="text-accent font-bold text-lg mb-2">2. Custom Plan</div>
              <p className="text-foreground/70">
                Tailored workout programs and nutrition plans designed specifically for your unique physiology.
              </p>
            </div>
            <div>
              <div className="text-accent font-bold text-lg mb-2">3. Accountability</div>
              <p className="text-foreground/70">
                Regular check-ins, progress tracking, and adjustments to ensure you stay on track.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
