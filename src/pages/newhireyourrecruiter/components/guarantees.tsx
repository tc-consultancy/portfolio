import { motion } from 'framer-motion'
import { Shield, TrendingUp, Heart } from 'lucide-react'

const guarantees = [
  {
    icon: Shield,
    title: '30-Day Money-Back Guarantee',
    description: 'Not satisfied with our service? Get a full refund within the first 30 days, no questions asked.',
  },
  {
    icon: TrendingUp,
    title: '5x Interview Guarantee',
    description: 'We guarantee 5x more interview calls within 60 days, or we work for free until you do.',
  },
  {
    icon: Heart,
    title: '100% Satisfaction Promise',
    description: 'Unlimited revisions on all resumes and cover letters until you\'re completely satisfied.',
  },
]

export default function Guarantees() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Zero Risk, Maximum Results
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            We stand behind our service with industry-leading guarantees
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-neutral-900 rounded-2xl p-8 border-2 border-purple-400/20 hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-purple-400 flex items-center justify-center mb-6">
                <guarantee.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {guarantee.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
