'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need gym experience to get started?',
    answer:
      'Not at all! I work with people of all fitness levels. We start where you are and progress at your pace.',
  },
  {
    question: 'What does the 7-day free trial include?',
    answer:
      'Full access to your customized workout plan, nutrition guidelines, one consultation call, and progress tracking. No credit card required.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. No long-term contracts or hidden fees. You can cancel your subscription anytime.',
  },
  {
    question: 'How often will we communicate?',
    answer:
      'Depending on your plan, you\'ll have weekly or bi-weekly video calls. Plus, you can message me anytime with questions.',
  },
  {
    question: 'Do you provide meal plans?',
    answer:
      'Yes! All plans include nutrition guidance. Premium and Elite plans include detailed meal prep guidance and custom meal planning.',
  },
  {
    question: 'What results can I expect?',
    answer:
      'Most clients see noticeable changes within 4-6 weeks. Average fat loss is 35 lbs in the first 6 months, but results vary based on consistency.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-foreground/70 text-lg">
            Everything you need to know about getting started.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-card p-6 text-left hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={20} className="text-accent" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-card p-6 text-foreground/70 leading-relaxed border-l-2 border-accent">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
