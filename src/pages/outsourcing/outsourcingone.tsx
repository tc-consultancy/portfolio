import { useEffect, useState } from 'react'
import HeroSection from './outsourcingonecomponents/hero-section'
import ProblemPromise from './outsourcingonecomponents/problem-promise'
import SolutionRoadmap from './outsourcingonecomponents/solution-roadmap'
import VettingProcess from './outsourcingonecomponents/vetting-process'
import CompanyDifference from './outsourcingonecomponents/company-difference'
import CaseStudies from './outsourcingonecomponents/case-studies'
import ROICalculator from './outsourcingonecomponents/roi-calculator'
import EngagementModels from './outsourcingonecomponents/engagement-models'
import FAQSection from './outsourcingonecomponents/faq-section'
import FinalCTA from './outsourcingonecomponents/final-cta'
import SecurityTrust from './outsourcingonecomponents/security-trust'
import { heromp4 } from '@/assets'
import VideoModal from '@/components/video-modal'
import PricingSection from './outsourcingonecomponents/pricing-section'
import IndustriesGrid from './outsourcingonecomponents/industries-grid'
import RolesGrid from './outsourcingonecomponents/roles-grid'
import SuccessMetrics from './outsourcingonecomponents/success-metrics'
import GeographicCoverage from './outsourcingonecomponents/geographic-coverage'
import WhyIndia from './outsourcingonecomponents/why-india'
import OurGuarantee from './outsourcingonecomponents/our-guarantee'
import ProcessTransparency from './outsourcingonecomponents/process-transparency'
import Testimonials from './outsourcingonecomponents/testimonials'
import FinalCTAGuarantee from './outsourcingonecomponents/final-cta-guarantee'
import FinalTrust from './outsourcingonecomponents/final-trust'
import OneHireChallenge from './outsourcingonecomponents/one-hire-challenge'

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
      <HeroSection />
      {/* <TrustBar /> */}
      <ProblemPromise />
      <SolutionRoadmap />
      <CompanyDifference />
      {/* <HowItWorks /> */}
      <VettingProcess />
      <IndustriesGrid />
      <RolesGrid />
      <CaseStudies />
      <SuccessMetrics />
      <GeographicCoverage />
      <WhyIndia />
      <ProcessTransparency />
      {/* <TalentMatcher /> */}
      <Testimonials />
      <OurGuarantee />
      {/* <ComparisonTable /> */}
      <EngagementModels />
      <PricingSection />
      <ROICalculator />
      <OneHireChallenge />
      <FinalCTAGuarantee />
      {/* <FinalTrust /> */}
      <SecurityTrust />
      {/* <Support /> */}
      <FAQSection />
      <FinalCTA />
    </div>
  )
}
