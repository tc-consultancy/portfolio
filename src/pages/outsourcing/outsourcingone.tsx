import { useEffect, useState } from 'react'
import HeroSection from './outsourcingonecomponents/hero-section'
import TrustBar from './outsourcingonecomponents/trust-bar'
import ProblemPromise from './outsourcingonecomponents/problem-promise'
import HowItWorks from './outsourcingonecomponents/how-it-works'
import VettingProcess from './outsourcingonecomponents/vetting-process'
import RolesGrid from './outsourcingonecomponents/roles-grid'
import CompanyDifference from './outsourcingonecomponents/company-difference'
import ComparisonTable from './outsourcingonecomponents/comparison-table'
import CaseStudies from './outsourcingonecomponents/case-studies'
import TalentMatcher from './outsourcingonecomponents/talent-matcher'
import ROICalculator from './outsourcingonecomponents/roi-calculator'
import EngagementModels from './outsourcingonecomponents/engagement-models'
import FAQSection from './outsourcingonecomponents/faq-section'
import FinalCTA from './outsourcingonecomponents/final-cta'
import Support from './sections/support'
import SecurityTrust from './outsourcingonecomponents/security-trust'
import { heromp4 } from '@/assets'
import VideoModal from '@/components/video-modal'
import PricingSection from './outsourcingonecomponents/pricing-section'

export default function Outsourcingone() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="w-full overflow-x-hidden">
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoSrc={heromp4}
      />
      <HeroSection onClick={() => setIsVideoModalOpen(true)} />
      <TrustBar />
      <ProblemPromise />
      <CompanyDifference />
      <HowItWorks />
      <VettingProcess />
      <RolesGrid />
      <TalentMatcher />
      <CaseStudies />
      <ComparisonTable />
      <EngagementModels />
      <PricingSection />
      <ROICalculator />
      <SecurityTrust />
      <Support />
      <FAQSection />
      <FinalCTA />
    </div>
  )
}
