import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ContactDialog } from '@/components/ContactDialog'

type Panel = {
  id: number
  bg: string
  content: React.ReactNode
}

const panels: Panel[] = [
  {
    id: 0,
    bg: 'bg-black',
    content: (
      <div className="mx-auto max-w-xl px-6 py-8 text-white/80 md:px-10">
        <h2 className="font-['Cormorant_Garamond'] tracking-tight text-5xl font-semibold leading-14 text-white/90 md:text-6xl">
          Why <span className="text-white italic text-7xl">Choose</span>
          <br /> Us?
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70 md:text-base">
          We specialize in delivering custom software and app development solutions tailored to your business needs. From intuitive mobile and web apps to scalable enterprise software, we combine cutting‑edge technology with UI/UX design to create innovative, user‑focused experiences.
        </p>
        <div className="mt-8 flex gap-4">
          <ContactDialog>
            <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">Book a Demo</Button>
          </ContactDialog>
                   <ContactDialog>

            <Button variant="secondary">Contact Us</Button>
            </ContactDialog>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    bg: 'bg-blue-700',
    content: (
      <div className="mx-auto flex max-w-xl flex-col px-6 py-8 text-white md:px-10">
        <h2 className="font-['Cormorant_Garamond'] tracking-tight  text-6xl font-extrabold leading-14 md:text-7xl">
          Your
          <br /> <span className="text-8xl leading-18">Success</span>
          <br /> Is Our
          <br /> Mission..
        </h2>
        <p className="mt-6 max-w-md text-white/90">
          Your Dreams, Our Technology. Let's build an empire out of your company.
        </p>
                  <ContactDialog>

          <Button className="bg-white max-w-fit mt-4 text-black hover:bg-white/90">Talk To Us</Button>
                 </ContactDialog>

      </div>
    ),
  },
  {
    id: 2,
    bg: 'bg-black',
    content: (
      <div className="mx-auto max-w-xl px-6 py-8 text-white md:px-10">
        <h2 className="font-['Cormorant_Garamond'] tracking-tight  text-5xl font-extrabold leading-15 md:text-7xl">
          Are You
          <br /> Ready?
          <br /> Let's <span className="text-violet-500 text-7xl">Work</span>
          <br /> Together...
        </h2>
        <div className="mt-10 px-24  text-end">
          <ContactDialog>

            <Button className="bg-violet-600 ml-auto text-white hover:bg-violet-600/90">Contact Us</Button>
          </ContactDialog>
          
        </div>
      </div>
    ),
  },
]

export default function ExpandingPanelsSection() {
  const [active, setActive] = React.useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) {
      return
    }

    const { left, width } = containerRef.current.getBoundingClientRect()
    const x = e.clientX - left

    const panelIndex = Math.floor((x / width) * panels.length)
    const newActive = Math.max(0, Math.min(panelIndex, panels.length - 1))

    if (newActive !== active) {
      setActive(newActive)
    }
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    setActive(null)
  }

  const getTargetBasis = (index: number): string => {
    if (isMobile) return '33.3333%'
    if (active === null) return '33.3333%'
    return index === active ? '75%' : '12.5%'
  }

  const getTargetOpacity = (index: number): number => {
    if (isMobile) return 1
    if (active === null) return 1
    return index === active ? 1 : 0.2
  }

  const getTargetScale = (index: number): number => {
    if (isMobile) return 1
    if (active === null) return 1
    return index === active ? 1.05 : 0.4
  }

  if (isMobile) {
    return (
      <section className="relative bg-black">
        <div className="flex flex-col">
          {panels.map((panel) => (
            <div
              key={panel.id}
              className={`${panel.bg} relative flex min-h-[60vh] items-center justify-center overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 pointer-events-none" />
              <div className="relative z-10 w-full max-w-xl px-4">
                {panel.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  // Desktop: Animated expanding panels
  return (
    <section className="relative bg-black">
      <div className="mx-auto h-screen">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="sticky top-0 flex h-screen"
        >
          {panels.map((panel, index) => (
            <motion.div
              key={panel.id}
              className={`${panel.bg} relative flex h-full items-center justify-center overflow-hidden`}
              animate={{ flexBasis: getTargetBasis(index) }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              style={{ flexBasis: '33.3333%' }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/5 pointer-events-none" />
              <motion.div
                className="relative z-10 w-[36rem]"
                animate={{ scale: getTargetScale(index), opacity: getTargetOpacity(index) }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                {panel.content}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
