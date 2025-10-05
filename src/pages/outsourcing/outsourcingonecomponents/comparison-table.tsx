import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const features = [
  'Dedicated Account Manager',
  'Risk-Free Trial Period (2 weeks)',
  '48-Hour Candidate Matching',
  'Cultural Fit Assessment',
  'Transparent Pricing',
  'Ongoing Integration Support',
  'Top 5% Talent Only',
]

export default function ComparisonTable() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 left-0 w-1/2 bg-white dark:bg-neutral-950" />
        <div className="absolute inset-0 right-0 w-1/2 bg-neutral-100 dark:bg-neutral-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us Over Others
        </motion.h2>

        {/* Comparison Containers */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* US Container */}
          <motion.div
            className="relative z-20 w-full lg:w-[48%] bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-purple-400"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            style={{
              boxShadow: '0 0 60px rgba(168, 85, 247, 0.3)',
            }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mb-4">
                <span className="text-2xl font-bold text-white">US</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Premium Outsourcing Partner
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg font-semibold text-neutral-900 dark:text-white pt-0.5">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Badge */}
            <div className="mt-8 text-center">
              <div className="inline-block px-6 py-2 bg-purple-400/10 rounded-full">
                <span className="text-sm font-bold text-purple-400">
                  ⭐ 4.9/5 Rating
                </span>
              </div>
            </div>
          </motion.div>

          {/* OTHERS Container */}
          <motion.div
            className="relative z-10 w-full lg:w-[48%] bg-neutral-100 dark:bg-neutral-800 rounded-3xl p-8 md:p-10 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-neutral-300 dark:bg-neutral-700 rounded-full mb-4">
                <span className="text-2xl font-bold text-neutral-600 dark:text-neutral-400">
                  OTHERS
                </span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                Typical Outsourcing Providers
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center">
                    {index < 2 ? (
                      <div className="w-3 h-3 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                    ) : (
                      <X className="w-5 h-5 text-neutral-400 dark:text-neutral-600" strokeWidth={2} />
                    )}
                  </div>
                  <span className="text-lg text-neutral-500 dark:text-neutral-500 pt-0.5">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Badge */}
            <div className="mt-8 text-center">
              <div className="inline-block px-6 py-2 bg-neutral-300 dark:bg-neutral-700 rounded-full">
                <span className="text-sm font-bold text-neutral-500 dark:text-neutral-500">
                  ⭐ 3.5/5 Average
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Experience the difference with a partner who truly cares about your success
          </p>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}
