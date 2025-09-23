import { LenisProvider } from '../../components/LenisProvider'
import Hero from './sections/hero'
import Industries from './sections/industries'
import Services from './sections/services'
import RevealCoverSection from './sections/reveal-cover-section'
import ExpandingPanelsSection from './sections/expanding-panels'

export default function Home() {
  return (
    // LenisProvider will handle smooth scrolling for the entire page.
    <LenisProvider>
      <main>
        {/* <ThemeSelector/> */}
        <Hero />
        <Industries />
        <Services />
      <RevealCoverSection/>
      <ExpandingPanelsSection/>
       
        <div className="flex h-screen mt-20 z-50 items-center justify-center bg-neutral-950 text-4xl font-bold text-white">
          
        </div>
        
      </main>
    </LenisProvider>
  )
}
