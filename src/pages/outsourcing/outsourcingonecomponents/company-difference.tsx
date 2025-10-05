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
    <section className="relative w-full min-h-screen bg-gradient-to-b from-purple-50/5 to-white dark:from-purple-950/5 dark:to-neutral-950 flex items-center justify-center py-20 overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Companies Choose Us as Their Outsourcing Partner
        </motion.h2>

        {/* Square Container with Pentagon */}
        <div className="relative w-full flex items-center justify-center">
          <div className="relative h-[80vh] aspect-square max-w-4xl mx-auto">
            {/* Pentagon Border Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <motion.polygon
                points="50,10 90,40 75,85 25,85 10,40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-purple-400/30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
            </svg>

            {/* Central Circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-2xl flex items-center justify-center z-10"
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: 'spring' }}
            >
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-white mb-1">
                  Why
                </div>
                <div className="text-base md:text-lg font-bold text-white">
                  Choose Us
                </div>
              </div>
            </motion.div>

            {/* Differentiators - Positioned on Pentagon Points */}
            {differentiators.map((diff, index) => {
              // Pentagon points: top, top-right, bottom-right, bottom-left, top-left
              const positions = [
                { x: 50, y: 10 },  // top
                { x: 90, y: 40 },  // top-right
                { x: 75, y: 85 },  // bottom-right
                { x: 25, y: 85 },  // bottom-left
                { x: 10, y: 40 },  // top-left
              ]

              const pos = positions[index]

              return (
                <motion.div
                  key={index}
                  className="absolute w-44 md:w-52"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Connecting Line to Center */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: '200px',
                      height: '200px',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <motion.line
                      x1="100"
                      y1="100"
                      x2={100 + (50 - pos.x) * 2}
                      y2={100 + (50 - pos.y) * 2}
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
                    <div className="relative mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-xl flex items-center justify-center mb-3 group-hover:shadow-2xl transition-shadow duration-300">
                      <diff.icon className="w-7 h-7 md:w-9 md:h-9 text-white" />
                    </div>

                    {/* Content */}
                    <div className="text-center bg-white dark:bg-neutral-900 rounded-2xl p-3 md:p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-sm md:text-base font-bold text-neutral-900 dark:text-white mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2 leading-relaxed">
                        {diff.description}
                      </p>
                      <div className="inline-block px-2 py-1 bg-purple-400/10 rounded-full">
                        <span className="text-xs font-bold text-purple-400">
                          {diff.metric}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
