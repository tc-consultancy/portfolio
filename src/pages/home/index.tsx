import { ThemeSelector } from '@/components/ui/ThemeSelector'
import { LenisProvider } from '../../components/LenisProvider'
import Hero from './sections/hero'
import Industries from './sections/industries'
import Services from './sections/services'
import RevealCoverSection from './sections/reveal-cover-section'

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
        {/* <div className="flex bg-white h-screen items-center justify-center  text-4xl font-bold text-white">
          Section 1
        </div>
        <div className="flex h-screen items-center justify-center bg-neutral-950 text-4xl font-bold text-white">Section 2</div>
        <div className="flex h-screen items-center justify-center bg-black text-4xl font-bold text-white">Section 3</div>
        <div className="flex h-screen items-center justify-center bg-neutral-950 text-4xl font-bold text-white">Section 4</div>
        <div className="flex h-screen items-center justify-center bg-black text-4xl font-bold text-white">Section 5</div> */}
      </main>
    </LenisProvider>
  )
}
