import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2, suffix = '' }: CounterProps) {
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const metrics = [
  // {
  //   value: 5,
  //   suffix: 'x',
  //   label: 'More interview calls',
  // },
  {
    value: 87,
    suffix: '%',
    label: 'Reduction in application time',
  },
  {
    value: 200,
    suffix: '+',
    label: 'Applications per week',
  },
  {
    value: 94,
    suffix: '%',
    label: 'Client satisfaction rate',
  },
  // {
  //   value: 24,
  //   suffix: 'hrs',
  //   label: 'Average turnaround',
  // },
]

export default function SuccessMetrics() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Join Thousands Who Got Their Dream Job Faster
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Real results from real job seekers
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-purple-400">
                <Counter end={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
