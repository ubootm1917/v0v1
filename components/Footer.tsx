'use client'

import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold">JR</span>
              </div>
              <span className="font-bold text-lg">Jaxson Reed</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Elite fitness coaching for serious athletes.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/#pricing" className="hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#results" className="hover:text-accent transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-card hover:bg-accent/10 text-foreground hover:text-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card hover:bg-accent/10 text-foreground hover:text-accent transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-card hover:bg-accent/10 text-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@jaxsonreed.com"
                className="p-2 rounded-lg bg-card hover:bg-accent/10 text-foreground hover:text-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Jaxson Reed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
