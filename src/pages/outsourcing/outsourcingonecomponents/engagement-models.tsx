import { motion } from 'framer-motion'
import { Users, Target, Layers, UserPlus } from 'lucide-react'

const models = [
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Full team working exclusively on your projects',
    features: ['100% dedicated', 'Long-term partnership', 'Full control'],
    position: 'top',
  },
  {
    icon: Target,
    title: 'Project-Based',
    description: 'Fixed-scope projects with defined deliverables',
    features: ['Clear milestones', 'Fixed pricing', 'Defined timeline'],
    position: 'right',
  },
  {
    icon: Layers,
    title: 'Hybrid Model',
    description: 'Mix of dedicated and project resources',
    features: ['Flexible scaling', 'Best of both worlds', 'Adaptive approach'],
    position: 'bottom',
  },
  {
    icon: UserPlus,
    title: 'Staff Augmentation',
    description: 'Individual professionals to complement your team',
    features: ['Quick onboarding', 'Seamless integration', 'Skill-specific'],
    position: 'left',
  },
]

export default function EngagementModels() {
  const positions = {
    top: 'top-0 left-1/2 -translate-x-1/2',
    right: 'top-1/2 right-0 -translate-y-1/2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2',
    left: 'top-1/2 left-0 -translate-y-1/2',
  }

  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Choose the Model That Fits Your Needs
        </motion.h2>

        {/* Diamond Layout Container */}
        <div className="relative h-[700px] md:h-[800px] max-w-4xl mx-auto">
          {/* Central Element */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-2xl flex items-center justify-center z-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                Flexible
              </div>
            </div>
          </motion.div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {models.map((_, index) => {
              const angle = (index * 90) * (Math.PI / 180)
              const radius = 300
              const x1 = 50
              const y1 = 50
              const x2 = 50 + Math.cos(angle) * 40
              const y2 = 50 + Math.sin(angle) * 40

              return (
                <motion.line
                  key={index}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="text-purple-400/30"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              )
            })}
          </svg>

          {/* Models */}
          {models.map((model, index) => {
            const angle = (index * 90) * (Math.PI / 180)
            const radius = 300
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  className="w-64 md:w-72 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-6 group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:shadow-xl transition-shadow duration-300">
                    <model.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white text-center mb-3">
                    {model.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center mb-4">
                    {model.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <button className="text-sm font-semibold text-purple-400 hover:text-purple-500 transition-colors duration-300 flex items-center gap-2 mx-auto">
                      Learn More
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Which model is right for you? Talk to an expert
          </p>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
