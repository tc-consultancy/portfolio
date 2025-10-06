import { motion } from 'framer-motion'
import { Users, Shield, Headphones } from 'lucide-react'

const operations = [
  {
    icon: Users,
    title: 'Your Team, Your Way',
    points: [
      'Use your tools (Slack, Jira, GitHub)',
      'Your processes, your meetings',
      'Direct communication, no middleman',
      'Full control over daily work',
    ],
  },
  {
    icon: Headphones,
    title: 'We Handle the Rest',
    points: [
      'HR, payroll, and benefits',
      'Legal, compliance, and contracts',
      'Equipment and onboarding',
      'Administrative tasks',
    ],
  },
  {
    icon: Shield,
    title: '100% Protected',
    points: [
      'You own all intellectual property',
      'Ironclad NDAs with every member',
      'Free replacement guarantee',
      'No co-employment risk',
    ],
  },
]

export default function HowWeOperate() {
  return (
    <section className="relative w-full bg-gradient-to-b from-purple-50/30 to-white dark:from-purple-950/10 dark:to-neutral-950 py-20 md:py-32">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            How We Operate
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            You focus on building. We handle everything else.
          </p>
        </motion.div>

        {/* Operations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {operations.map((operation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-white dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-xl transition-all">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-purple-400/10 flex items-center justify-center mb-6">
                  <operation.icon className="w-8 h-8 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  {operation.title}
                </h3>

                {/* Points */}
                <ul className="space-y-3">
                  {operation.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-neutral-600 dark:text-neutral-400">
            Questions about our operations?{' '}
            <a href="#faq-section" className="text-purple-400 hover:text-purple-500 font-semibold">
              Check our FAQ
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
