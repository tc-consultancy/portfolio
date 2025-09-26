import HireRecruiterHero from './sections/hero'
import TheProcess from './sections/the-process'
import WhyUs from './sections/why-us'
import AboutUs from './sections/about-us'

export default function HireRecruiter() {
  return (
    <main className="w-full">
      <HireRecruiterHero />
      <div className='p-8'>
 <TheProcess />
      </div>
     
      <AboutUs />
      <div className='p-8'>
      <WhyUs />
      </div>
    </main>
  )
}
