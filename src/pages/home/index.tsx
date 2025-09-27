import { LenisProvider } from '../../components/LenisProvider'
import Hero from './sections/hero'
import Industries from './sections/industries'
import Services from './sections/services'
import RevealCoverSection from './sections/reveal-cover-section'
import ExpandingPanelsSection from './sections/expanding-panels'
import LastButNotLeast from './sections/lastbut-not-least'

export default function Home() {
  return (
    // LenisProvider will handle smooth scrolling for the entire page.
    <LenisProvider>
        <Hero />
        <Industries />
        <Services />
        <RevealCoverSection />
        <ExpandingPanelsSection />
        <LastButNotLeast />
    </LenisProvider>
  )
}
