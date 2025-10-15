import { useEffect } from 'react'
import HeroSection from './components/hero-section'
import PainPoints from './components/pain-points'

import SuccessMetrics from './components/success-metrics'
import SampleWork from './components/sample-work'
import PricingSection from './components/pricing-section'
import SuccessStories from './components/success-stories'
import BlogSection from './components/blog-section'
import FAQSection from './components/faq-section'
import FinalCTA from './components/final-cta'
import Roadmap from './components/roadmap'
import UniqueFeatures from './components/unique-features'
import DomainsSection from './components/domains-section'

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
      <Roadmap />
      <UniqueFeatures />
      <DomainsSection />
      {/* <HowItWorks /> */}
      {/* <ServiceFeatures /> */}
      <SuccessMetrics />
      <SampleWork />
      {/* <ComparisonTable /> */}
      <PricingSection />
      {/* <Guarantees /> */}
      <SuccessStories />
      {/* <TeamSection /> */}
      {/* <BlogSection /> */}
      <FAQSection />
      <FinalCTA />
      {/* <PostConversion /> */}
    </div>
  )
}
