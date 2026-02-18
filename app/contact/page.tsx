'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import SignupModal from '@/components/SignupModal'
import ReasonsModal from '@/components/ReasonsModal'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [isReasonsOpen, setIsReasonsOpen] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }
  }

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim()

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/50 pt-32 pb-20">
        <div className="max-w-2xl mx-auto px-4 md:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact <span className="text-accent">Marcus</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-xl mx-auto mb-6">
              Have questions about our coaching programs? Reach out to our team. We respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setIsSignupOpen(true)}
                className="px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all"
              >
                Join Program
              </button>
              <button
                onClick={() => setIsReasonsOpen(true)}
                className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/20 transition-all"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/20 transition-all"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your fitness goals..."
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/20 transition-all resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={isFormValid ? { scale: 1.02 } : {}}
                  whileTap={isFormValid ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-4 rounded-lg font-semibold transition-all ${isFormValid
                      ? 'bg-accent text-background hover:bg-accent/90 cursor-pointer shadow-lg hover:shadow-accent/50'
                      : 'bg-white/10 text-foreground/50 cursor-not-allowed'
                    }`}
                >
                  Send Message
                </motion.button>

                <p className="text-xs text-foreground/60 text-center">
                  We'll get back to you as soon as possible.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center"
                >
                  <span className="text-3xl font-bold text-accent">✓</span>
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-foreground/70 mb-6">
                  Thanks for reaching out. Marcus will be in touch within 24 hours.
                </p>
                <Link
                  href="/"
                  className="inline-block px-8 py-3 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-all font-semibold"
                >
                  Back to Home
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <CTA />
      <Footer />

      {/* Modals */}
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <ReasonsModal isOpen={isReasonsOpen} onClose={() => setIsReasonsOpen(false)} />
    </>
  )
}
