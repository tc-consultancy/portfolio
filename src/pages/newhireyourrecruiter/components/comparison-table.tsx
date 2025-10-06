import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const features = [
  { text: 'ATS-optimized resumes', ourService: true, others: false },
  { text: 'Custom cover letters for each job', ourService: true, others: false },
  { text: '<24 hour turnaround', ourService: true, others: false },
  { text: '50+ applications per week', ourService: true, others: false },
  { text: 'Industry expert writers', ourService: true, others: false },
  { text: 'Application tracking dashboard', ourService: true, others: false },
  { text: 'Unlimited revisions', ourService: true, others: false },
  { text: 'Priority support', ourService: true, others: false },
  { text: 'Interview preparation', ourService: true, others: false },
  { text: 'Money-back guarantee', ourService: true, others: false },
]

export default function ComparisonTable() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-white dark:bg-neutral-950" />
        <div className="w-1/2 bg-neutral-100 dark:bg-neutral-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
            Why Outperform DIY Applications?
          </h2>
        </motion.div>

        {/* Comparison Containers */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Our Service */}
          <motion.div
            className="w-full lg:w-[48%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            style={{
              boxShadow: '0 0 60px rgba(168, 85, 247, 0.3)',
            }}
          >
            <div className="bg-white dark:bg-neutral-950 rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-purple-400 h-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  Our Service
                </h3>
                <p className="text-purple-400 font-semibold">
                  Professional Application Management
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full">
                  <span className="text-2xl">⭐</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    4.9/5 Rating
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DIY/Traditional Services */}
          <motion.div
            className="w-full lg:w-[48%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 md:p-10 shadow-2xl h-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                  DIY / Traditional Services
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 font-semibold">
                  Time-Consuming Manual Process
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neutral-300 dark:bg-neutral-700 flex items-center justify-center flex-shrink-0">
                      <X className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <span className="text-neutral-500 dark:text-neutral-500 line-through">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-300 dark:border-neutral-700 text-center">
                <p className="text-neutral-500 dark:text-neutral-400 font-semibold">
                  20+ hours weekly spent on applications
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
