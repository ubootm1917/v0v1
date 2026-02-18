'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Software Engineer',
    image: '🏋️',
    content: 'Lost 40 lbs in 6 months. The personalized program changed my life.',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Manager',
    image: '💪',
    content: 'Finally built the physique I always wanted. Jaxson\'s coaching is incredible.',
    rating: 5,
  },
  {
    name: 'Mike Chen',
    role: 'Entrepreneur',
    image: '🥇',
    content: 'Best investment in myself. Transformed my body in 4 months.',
    rating: 5,
  },
]

export default function SocialProof() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Real transformations from real people who trusted Jaxson Reed coaching.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/90 mb-6 leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center gap-4">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
