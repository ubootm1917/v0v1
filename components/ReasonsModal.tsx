'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle } from 'lucide-react'

interface ReasonsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ReasonsModal({ isOpen, onClose }: ReasonsModalProps) {
  const reasons = [
    {
      title: 'Expert Coaching',
      description: 'Get personalized guidance from certified fitness professionals with years of experience',
      icon: '💪',
    },
    {
      title: 'Proven Results',
      description: 'Join thousands of members who have transformed their bodies and built lasting healthy habits',
      icon: '📈',
    },
    {
      title: 'Community Support',
      description: 'Be part of an inspiring community that motivates and supports your fitness journey',
      icon: '🤝',
    },
    {
      title: 'Custom Programs',
      description: 'Receive workout and nutrition plans tailored to your specific goals and fitness level',
      icon: '🎯',
    },
    {
      title: 'Lifetime Access',
      description: 'Keep all your program materials and updates forever with one-time or recurring membership',
      icon: '⏰',
    },
    {
      title: '24/7 Support',
      description: 'Get answers to your questions anytime with our responsive support team',
      icon: '📞',
    },
  ]

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
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-background border border-white/10 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-b from-background via-background to-transparent border-b border-white/10 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-1">Why Join Our Program?</h2>
                  <p className="text-foreground/70 text-sm">Discover the benefits that make us different</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {reasons.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group p-5 rounded-xl border border-white/10 hover:border-accent/30 bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <div className="flex gap-4">
                        <div className="text-3xl flex-shrink-0">{reason.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base md:text-lg mb-2 group-hover:text-accent transition-colors">
                            {reason.title}
                          </h3>
                          <p className="text-foreground/70 text-sm leading-relaxed">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-8 border-t border-white/10 text-center"
                >
                  <p className="text-foreground/70 mb-4">
                    Ready to start your transformation?
                  </p>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all"
                  >
                    Get Started Today
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
