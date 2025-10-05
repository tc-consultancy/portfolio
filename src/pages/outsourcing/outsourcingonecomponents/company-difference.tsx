import { motion } from 'framer-motion'
import { Target, Zap, Users, DollarSign, UserCheck } from 'lucide-react'

const differentiators = [
  {
    icon: Target,
    title: 'Outcome-Focused Teams',
    description: "We don't just fill seats; we deliver measurable results",
    metric: '60% hire rate',
    position: 'top',
  },
  {
    icon: Zap,
    title: 'Flexible Engagement Models',
    description: 'Scale up/down as needed - no long-term lock-ins',
    metric: '95% retention',
    position: 'top-right',
  },
  {
    icon: Users,
    title: 'Cultural Integration',
    description: 'Teams that understand and embody your company values',
    metric: '98% satisfaction',
    position: 'bottom-right',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'All-inclusive pricing with no hidden costs',
    metric: '40% cost savings',
    position: 'bottom-left',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Success Manager',
    description: 'Your single point of contact for seamless coordination',
    metric: '24/7 support',
    position: 'left',
  },
]

export default function CompanyDifference() {
  return (
    <section className="relative w-full bg-gradient-to-b from-purple-50/5 to-white dark:from-purple-950/5 dark:to-neutral-950 py-20 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Companies Choose Us as Their Outsourcing Partner
        </motion.h2>

        {/* Pentagon Layout Container */}
        <div className="relative h-[700px] md:h-[800px] lg:h-[900px] max-w-6xl mx-auto">
          {/* Central Circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-2xl flex items-center justify-center z-10"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: 'spring' }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                Why
              </div>
              <div className="text-lg md:text-xl font-bold text-white">
                Choose Us
              </div>
            </div>
          </motion.div>

          {/* Differentiators */}
          {differentiators.map((diff, index) => {
            const angle = (index * 72 - 90) * (Math.PI / 180)
            const radius = 280 // Smaller radius to fit on screen
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <motion.div
                key={index}
                className="absolute w-52 md:w-56 lg:w-60"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Connecting Line */}
                <svg
                  className="absolute top-1/2 left-1/2 pointer-events-none"
                  style={{
                    width: `${radius}px`,
                    height: '2px',
                    transform: `translate(-50%, -50%) rotate(${index * 72 - 90
                      }deg)`,
                    transformOrigin: 'left center',
                  }}
                >
                  <motion.line
                    x1="0"
                    y1="1"
                    x2={radius}
                    y2="1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="text-purple-400/30"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </svg>

                {/* Differentiator Card */}
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    },
                  }}
                >
                  {/* Circle with Icon */}
                  <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-xl flex items-center justify-center mb-3 group-hover:shadow-2xl transition-shadow duration-300">
                    <diff.icon className="w-9 h-9 md:w-11 md:h-11 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center bg-white dark:bg-neutral-900 rounded-2xl p-4 md:p-5 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 mb-2 leading-relaxed">
                      {diff.description}
                    </p>
                    <div className="inline-block px-3 py-1.5 bg-purple-400/10 rounded-full">
                      <span className="text-xs font-bold text-purple-400">
                        {diff.metric}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute top-10 right-10 w-16 h-16 rounded-full bg-purple-400/10"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-12 h-12 rounded-full bg-purple-400/10"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
