'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import AnimatedGradient from './AnimatedGradient'

interface HeroProps {
  onSignupClick: () => void
}

export default function Hero({ onSignupClick }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-background/80 overflow-hidden py-20 md:py-0">
      {/* Animated gradient background */}
      <AnimatedGradient />

      {/* Static accent orbs for layering */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" style={{ opacity: 0.3 }}></div>
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <Zap size={16} className="text-accent" />
            <span className="text-sm font-semibold text-accent">Limited Time Offer</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Body.
            <span className="gradient-text"> Own Your Future.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Elite fitness coaching from Jaxson Reed. Personalized training programs that deliver real results. Join hundreds of athletes who've transformed their physiques.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              onClick={onSignupClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50"
            >
              Start Free Consultation
              <ArrowRight size={20} />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all">
              Watch Demo
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-24 grid grid-cols-3 gap-4 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">1000+</div>
            <p className="text-sm text-foreground/70">Transformations</p>
          </div>
          <div className="glass-card p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">98%</div>
            <p className="text-sm text-foreground/70">Success Rate</p>
          </div>
          <div className="glass-card p-4 md:p-6 text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-2">24/7</div>
            <p className="text-sm text-foreground/70">Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
