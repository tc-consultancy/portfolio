import { motion, useInView } from 'framer-motion'
import { FileSearch, Code, MessageCircle, Heart, CheckCircle } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

const stages = [
  {
    icon: FileSearch,
    title: 'Profile Screening',
    description: 'Initial qualifications check',
    percentage: 100,
  },
  {
    icon: Code,
    title: 'Technical Assessment',
    description: 'Role-specific skills testing',
    percentage: 80,
  },
  {
    icon: MessageCircle,
    title: 'Soft Skills Evaluation',
    description: 'Communication and problem-solving',
    percentage: 40,
  },
  {
    icon: Heart,
    title: 'Cultural Fit Analysis',
    description: 'Alignment with client values',
    percentage: 15,
  },
  {
    icon: CheckCircle,
    title: 'Trial Project',
    description: 'Real-world task performance',
    percentage: 5,
  },
]

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function VettingProcess() {
  const progressRef = useRef(null)
  const isInView = useInView(progressRef, { once: true })

  return (
    <section className="relative w-full bg-neutral-900 dark:bg-neutral-950 py-20 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Only the Top 5% Make It Through Our Vetting
          </h2>
          <p className="text-xl text-neutral-400">
            Our rigorous 5-stage process ensures exceptional quality
          </p>
        </motion.div>

        {/* Stages Container */}
        <div className="relative">
          {/* Stages */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Stage Circle */}
                <motion.div
                  className="relative z-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-2xl flex items-center justify-center mx-auto mb-6 group cursor-pointer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    type: 'spring',
                  }}
                >
                  <stage.icon className="w-12 h-12 md:w-14 md:h-14 text-white" />
                  
                  {/* Hover Tooltip */}
                  <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-48 p-3 bg-white dark:bg-neutral-800 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <p className="text-sm text-neutral-900 dark:text-white font-semibold mb-1">
                      {stage.title}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white text-center mb-2">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-400 text-center">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar Container */}
          <div className="relative h-20 mb-8" ref={progressRef}>
            {/* Background Bar */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-5 bg-neutral-800 dark:bg-neutral-900 rounded-full overflow-hidden">
              {/* Animated Progress Bar */}
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-full relative"
                initial={{ width: '0%' }}
                animate={isInView ? { width: '100%' } : { width: '0%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </motion.div>
            </div>

            {/* Percentage Labels */}
            <div className="absolute top-full mt-4 w-full flex justify-between px-4">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-purple-400">
                    <Counter end={stage.percentage} />%
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Engagement Metrics */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter end={10000} />+
              </div>
              <div className="text-neutral-400">Candidates Screened</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter end={500} />+
              </div>
              <div className="text-neutral-400">Successful Placements</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter end={98} />%
              </div>
              <div className="text-neutral-400">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
