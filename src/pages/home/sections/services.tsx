import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type Service = {
  title: string
  description: string
  icon: string
  link: string
}

const SERVICES: Service[] = [
  {
    title: 'Out Sourcing Services',
    description:
      'Extend your capabilities with managed delivery for apps, data, and cloud. We handle execution—roadmaps, sprints, Quality Analysis, and SRE—so you focus on strategy while we ship secure, scalable solutions aligned to your standards, budgets, and timelines.',
    icon: '🌐',
    link: '/services/outsourcing',
  },
 
  {
    title: 'Hire Recruiter',
    description:
      'Build high‑performing teams faster with embedded recruiters who understand your domain, culture, and timelines. From sourcing to closing, we streamline hiring with data‑driven pipelines, robust screening, and transparent reporting tailored to your growth stage.',
    icon: '🧑‍💼',
    link: '/services/hire-recruiter',
  },
  {
    title: 'AI Integration',
    description:
      'Embed intelligent capabilities into your products and workflows—chatbots, copilots, and RAG systems—backed by secure data pipelines, governance, and monitoring so teams move faster while maintaining trust, compliance, and measurable business outcomes.',
    icon: '🤖',
    link: '/services/agents',
  },
   {
    title: 'Software',
    description:
      'Software development involves creating, testing, and maintaining applications through coding, collaboration, and problem-solving. It drives innovation, enhances user experiences, and helps businesses adapt quickly by leveraging modern, scalable, and secure technologies.',
    icon: '💻',
    link: 'services/mobile-web-application',
  },
  {
    title: 'IT Staffing Solutions',
    description:
      'Scale engineering capacity on demand with vetted talent across frontend, backend, cloud, QA, and DevOps. Flexible engagement models, clear SLAs, and collaborative delivery ensure velocity, accountability, and seamless integration with your teams.',
    icon: '🧑‍💻',
    link: '/services/it-staffing',
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

  // Pixel-precise scroll: 400px card + 32px gap per step (desktop)
  const CARD_PX = 400
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
    <>
      {/* Mobile: stacked simple cards with lightweight animations */}
      <section className="block md:hidden bg-white">
        <div className="mx-auto max-w-screen-md px-4 py-12">
          <h2 className="mb-8 text-3xl font-extrabold text-zinc-900">What we offer</h2>
          <ul className="flex flex-col gap-4">
            {cards.map((card) => (
              <motion.li
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="text-3xl">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-zinc-900">{card.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-zinc-600 mb-4">{card.description}</p>
                <Link
                  to={card.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Desktop: original horizontal sequence and scale finale */}
      <section
        ref={containerRef}
        className="relative hidden md:block bg-white text-white"
        style={{ height: `${100 + steps * 50}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 " />
            <motion.div style={{ opacity: backdropFade }} className="absolute inset-0 bg-black/80" />
          </div>

          <div className="relative mx-auto h-screen  px-4">
            <motion.div
              style={{ opacity: titleOpacity }}
              className="pointer-events-none absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 md:block"
            >
              <h2 className="text-5xl xl:text-6xl font-extrabold text-black ml-16 leading-tight">
                <span className="block">What we</span>
                <span className="block">offer</span>
              </h2>
            </motion.div>

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
                        <div className="mt-auto flex flex-col h-full">
                          <h3 className="mb-4 text-3xl font-medium leading-tight">{card.title}</h3>
                          <p className="text-sm text-white/70 mb-6 flex-grow">{card.description}</p>
                          <Link
                            to={card.link}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-zinc-100 transition-colors group w-full"
                          >
                            Explore {card.title}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
