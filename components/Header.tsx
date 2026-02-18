'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeaderProps {
  onSignupClick: () => void
}

export default function Header({ onSignupClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">JR</span>
            </div>
            <span className="text-xl font-bold text-foreground">Jaxson Reed</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/#pricing" className="text-foreground/70 hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="/#results" className="text-foreground/70 hover:text-accent transition-colors">
              Results
            </a>
            <a href="/#faq" className="text-foreground/70 hover:text-accent transition-colors">
              FAQ
            </a>
            <a href="/contact" className="text-foreground/70 hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <button
              onClick={onSignupClick}
              className="px-6 py-2 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-border"
          >
            <nav className="flex flex-col gap-4 pt-4">
              <a href="/#pricing" className="text-foreground/70 hover:text-accent transition-colors">
                Pricing
              </a>
              <a href="/#results" className="text-foreground/70 hover:text-accent transition-colors">
                Results
              </a>
              <a href="/#faq" className="text-foreground/70 hover:text-accent transition-colors">
                FAQ
              </a>
              <a href="/contact" className="text-foreground/70 hover:text-accent transition-colors">
                Contact
              </a>
              <button
                onClick={onSignupClick}
                className="w-full px-6 py-2 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-all"
              >
                Get Started
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
