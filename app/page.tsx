'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import Results from '@/components/Results'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import SignupModal from '@/components/SignupModal'
import ReasonsModal from '@/components/ReasonsModal'

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isReasonsOpen, setIsReasonsOpen] = useState(false)

  return (
    <>
      <Header onSignupClick={() => setIsModalOpen(true)} />
      <main>
        <Hero onSignupClick={() => setIsModalOpen(true)} />

        <SocialProof />
        <Pricing onSignupClick={() => setIsModalOpen(true)} />
        <Results />

        <FAQ />
        <CTA onLearnMore={() => setIsReasonsOpen(true)} />
      </main>
      <Footer />
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ReasonsModal isOpen={isReasonsOpen} onClose={() => setIsReasonsOpen(false)} />
    </>
  )
}
