import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

type Service = {
  title: string
  description: string
  icon: string
}

const SERVICES: Service[] = [
  {
    title: 'Software Development',
    description:
      'Full‑cycle web, mobile and platform engineering focused on reliability and scale.',
    icon: '💻',
  },
  {
    title: 'Data Analytics',
    description:
      'From pipelines to dashboards—turn raw data into decisions and measurable ROI.',
    icon: '📊',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Modernize infra with IaC, container platforms, cost governance and SRE practices.',
    icon: '☁️',
  },
  {
    title: 'Cybersecurity',
    description:
      'Threat modeling, zero‑trust architectures, continuous monitoring and incident response.',
    icon: '🛡️',
  },
  {
    title: 'AI & Automation',
    description:
      'RAG systems, copilots and workflow automation to accelerate business operations.',
    icon: '🤖',
  },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Number of horizontal steps equals number of cards minus one
  const steps = Math.max(SERVICES.length - 1, 1)

  // Track scroll progress across the whole tall section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Pixel-precise scroll: 400px card + 32px gap per step
  const CARD_PX = 400
  // Corresponds to `gap-8` in Tailwind (2rem = 32px)
  const GAP_PX = 32 
  const STEP_PX = CARD_PX + GAP_PX
  // Animate the horizontal scroll, completing at 80% of the scroll duration
  const translateX = useTransform(scrollYProgress, [0, 0.8], [0, -STEP_PX * steps])
  const x = useSpring(translateX, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // --- Final "full screen" animation ---
  // Start the final animation a bit later to make it feel snappier
  const finalAnimationStart = 0.8
  const finalAnimationEnd = 1.0

  // Fade out the title and other cards as we approach the end
  const titleOpacity = useTransform(scrollYProgress, [finalAnimationStart - 0.1, finalAnimationStart], [1, 0])
  const otherCardsOpacity = useTransform(scrollYProgress, [finalAnimationStart - 0.05, finalAnimationStart], [1, 0])

  // The last card scales up to cover the screen. We use a spring to make it feel natural.
  const scaleLastRaw = useTransform(scrollYProgress, [finalAnimationStart, finalAnimationEnd], [1, 15])
  const scaleLast = useSpring(scaleLastRaw, { stiffness: 100, damping: 20, restDelta: 0.001 })
  const radiusLast = useTransform(scrollYProgress, [finalAnimationStart, finalAnimationEnd], [16, 0])
  const lastCardBg = useTransform(scrollYProgress, [finalAnimationStart, finalAnimationEnd], ['#18181b', '#000000'])
  const lastCardContentOpacity = useTransform(scrollYProgress, [finalAnimationStart, finalAnimationStart + 0.1], [1, 0])
  const backdropFade = useTransform(scrollYProgress, [finalAnimationStart - 0.1, 1], [0, 0.6])

  const cards = useMemo(() => SERVICES, [])

  return (
    <section
      ref={containerRef}
      className="relative bg-white text-white"
      style={{ height: `${100 + steps * 50}vh` }} // Pinned for 50vh per card step
    >
      {/* Sticky viewport that stays while we scroll through the whole sequence */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 " />
          <motion.div style={{ opacity: backdropFade }} className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative mx-auto h-screen  px-4">
          {/* Title overlay (doesn't consume layout width) */}
          <motion.div
            style={{ opacity: titleOpacity }}
            className="pointer-events-none absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 md:block"
          >
            <h2 className="text-6xl font-extrabold text-black ml-16 leading-tight">
              <span className="block">What we</span>
              <span className="block">offer</span>
            </h2>
          </motion.div>

          {/* Horizontal track: fixed 400px cards, 32px gaps, left padding ~30% */}
          <div
            className="absolute inset-0 flex z-10 items-center overflow-hidden"
            style={{ paddingLeft: `calc(50% - ${CARD_PX / 2}px)` }}
          >
            <motion.ul
              className="flex gap-8 will-change-transform"
              style={{ x: x, width: `${cards.length * STEP_PX}px` }}
            >
              {cards.map((card, index) => {
                const isLast = index === cards.length - 1
                return (
                  <motion.li
                    key={card.title}
                    className="h-[400px] w-[400px] shrink-0 rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-xl"
                    style={
                      isLast
                        ? { scale: scaleLast, borderRadius: radiusLast as any, backgroundColor: lastCardBg }
                        : { opacity: otherCardsOpacity }
                    }
                  >
                    <motion.div style={isLast ? { opacity: lastCardContentOpacity } : undefined}>
                      <div className="mb-5 flex justify-center">
                        <div className="text-6xl">{card.icon}</div>
                      </div>
                      <div className="mt-auto">
                        <h3 className="mb-4 text-4xl font-medium leading-tight">{card.title}</h3>
                        <p className="text-sm text-white/70">{card.description}</p>
                      </div>
                    </motion.div>
                  </motion.li>
                )
              })}
            </motion.ul>
          </div>
        </div>
      </div>
      {/*
        To have content scroll after this section, add it below the <Services /> component.
        For example, in your main page file:

        <Services />
        <div className="flex h-screen items-center justify-center bg-black text-4xl font-bold text-white">Section 1</div>
        <div className="flex h-screen items-center justify-center bg-neutral-950 text-4xl font-bold text-white">Section 2</div>
        <div className="flex h-screen items-center justify-center bg-black text-4xl font-bold text-white">Section 3</div>
        <div className="flex h-screen items-center justify-center bg-neutral-950 text-4xl font-bold text-white">Section 4</div>
        <div className="flex h-screen items-center justify-center bg-black text-4xl font-bold text-white">Section 5</div>
      */}
    </section>
  )
}
