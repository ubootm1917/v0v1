'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CTAProps {
  onLearnMore?: () => void
}

export default function CTA({ onLearnMore }: CTAProps) {
  return (
    <section className="w-full bg-gradient-to-b from-background/50 to-background py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Physique?
          </h2>
          <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Join our exclusive coaching program and start your journey to athletic excellence. Limited spots available.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50"
            >
              View Programs
              <ArrowRight size={20} />
            </Link>
            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
            >
              Learn More
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
