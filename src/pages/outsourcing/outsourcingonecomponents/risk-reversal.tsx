import { motion } from 'framer-motion'
import { Check, Shield } from 'lucide-react'

const guarantees = [
  'No setup fees or deposits',
  'Pay only for hours worked (weekly)',
  'Free replacement if not satisfied',
  'Cancel anytime with 2 weeks notice',
  'No long-term contracts',
  'All paperwork handled by us',
]

export default function RiskReversal() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            90-Day Risk-Free Guarantee
          </h2>
        </motion.div>

        <motion.div
          className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
            <div className="w-12 h-12 rounded-xl bg-purple-400 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <p className="text-lg font-semibold text-neutral-900 dark:text-white">
              Try any team member for 90 days completely risk-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              >
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">{guarantee}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-neutral-200 dark:border-neutral-800">
            <p className="text-neutral-900 dark:text-white font-semibold mb-1">
              You literally cannot lose.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Either you get exceptional talent at 60% savings, or you get a free replacement. <span className="text-purple-600 dark:text-purple-400 font-medium">The only risk is not trying.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
