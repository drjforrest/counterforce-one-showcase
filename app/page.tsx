import { CaseStudies } from '@/components/CaseStudies'
import { DatasetOverview } from '@/components/DatasetOverview'
import { Hero } from '@/components/Hero'
import { KeyFindings } from '@/components/KeyFindings'
import { Methodology } from '@/components/Methodology'
import { NextSteps } from '@/components/NextSteps'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-baby-powder to-slate-gray">
      <Hero />
      <DatasetOverview />
      <CaseStudies />
      <KeyFindings />
      <Methodology />
      <NextSteps />

      {/* Footer */}
      <footer className="bg-yankees-blue text-baby-powder py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Image
              src="/counterforce-logo-transparent.png"
              alt="Counterforce-One Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <h3 className="text-2xl font-bold text-baby-powder">Counterforce-One</h3>
          </div>
          <p className="text-slate-gray mb-4">Community Resilience to Health Misinformation among Gay, Bisexual, and Other Men who have Sex with Men (gbMSM) Using Reddit</p>
          <p className="text-sm text-slate-gray">
            Built with Next.js • Python • PostgreSQL • NetworkX
            <br />
            Generated: October 2025
          </p>
        </div>
      </footer>
    </main>
  )
}
