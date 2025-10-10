import { useEffect } from 'react'
import HeroSection from './components/hero-section'
import PainPoints from './components/pain-points'
import SolutionOverview from './components/solution-overview'
import HowItWorks from './components/how-it-works'
import ServiceFeatures from './components/service-features'
import SuccessMetrics from './components/success-metrics'
import SampleWork from './components/sample-work'
import ComparisonTable from './components/comparison-table'
import PricingSection from './components/pricing-section'
import Guarantees from './components/guarantees'
import SuccessStories from './components/success-stories'
import TeamSection from './components/team-section'
import UrgencySection from './components/urgency-section'
import FAQSection from './components/faq-section'
import FinalCTA from './components/final-cta'
import PostConversion from './components/post-conversion'
import Roadmap from './components/roadmap'

export default function NewHireYourRecruiter() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <PainPoints />
      {/* <SolutionOverview /> */}
      <HowItWorks />
      {/* <ServiceFeatures /> */}
      <SuccessMetrics />
      <SampleWork />
      <ComparisonTable />
      <PricingSection />
      <Guarantees />
      <SuccessStories />
      <TeamSection />
      <UrgencySection />
      <FAQSection />
      <FinalCTA />
      <PostConversion />
      <Roadmap />
    </div>
  )
}
