'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'

interface SignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setIsSubmitted(false)
      onClose()
    }, 3000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="glass-card rounded-2xl p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-accent/10 rounded-lg transition-colors"
              >
                <X size={20} className="text-foreground" />
              </button>

              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Start Your Free Trial</h2>
                  <p className="text-foreground/70 mb-8">
                    No credit card required. Get instant access to your personalized fitness plan.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 text-foreground placeholder:text-foreground/40"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 text-foreground placeholder:text-foreground/40"
                      />
                    </div>

                    <div>
                      <label htmlFor="fitness" className="block text-sm font-semibold mb-2">
                        Fitness Level
                      </label>
                      <select
                        id="fitness"
                        required
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 text-foreground"
                      >
                        <option value="">Select your level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all flex items-center justify-center gap-2 mt-6"
                    >
                      Start Free Trial
                      <ArrowRight size={18} />
                    </button>
                  </form>

                  <p className="text-xs text-foreground/50 text-center mt-4">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Welcome!</h3>
                  <p className="text-foreground/70 mb-6">
                    Check your email for your free trial access. Your journey starts now.
                  </p>
                  <button
                    onClick={onClose}
                    className="w-full py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
