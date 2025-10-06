import { motion } from 'framer-motion'
import { Phone, MessageSquare, Send, BarChart } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Phone,
    title: 'Onboarding Call',
    description: '15-minute call to understand your background, goals, and target roles.',
  },
  {
    number: 2,
    icon: MessageSquare,
    title: 'Strategy Session',
    description: 'We create your personalized application strategy and timeline.',
  },
  {
    number: 3,
    icon: Send,
    title: 'Applications Start',
    description: 'First batch of applications submitted within 24 hours.',
  },
  {
    number: 4,
    icon: BarChart,
    title: 'Track & Optimize',
    description: 'Monitor results in real-time and adjust strategy for maximum impact.',
  },
]

export default function PostConversion() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Here's What Happens After You Join:
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Your journey to landing your dream job starts immediately
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[80px] left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-neutral-300 dark:border-neutral-700" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 relative z-10">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-purple-400/10 flex items-center justify-center mx-auto mb-4 mt-6">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white text-center mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Ready to get started? Your first applications can go out today.
          </p>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Begin Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}
