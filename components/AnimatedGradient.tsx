'use client'

import { motion } from 'framer-motion'

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary animated gradient layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgb(255, 51, 102, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgb(255, 51, 102, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 20%, rgb(255, 51, 102, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgb(255, 51, 102, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary gradient layer with offset */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 80% 20%, rgb(255, 51, 102, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgb(255, 51, 102, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 70%, rgb(255, 51, 102, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgb(255, 51, 102, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Tertiary gradient layer for depth */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgb(255, 51, 102, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 30% 30%, rgb(255, 51, 102, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 70% 50%, rgb(255, 51, 102, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgb(255, 51, 102, 0.15) 0%, transparent 60%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  )
}
