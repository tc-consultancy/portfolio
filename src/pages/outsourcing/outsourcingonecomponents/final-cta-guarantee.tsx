import { motion } from 'framer-motion'
import { Calendar, FileText, ArrowRight, Check, Shield } from 'lucide-react'

const guarantees = [
  'No setup fees or deposits',
  'Pay weekly, cancel anytime',
  'Free replacement guarantee',
  'All paperwork handled',
]

export default function FinalCTAGuarantee() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
            Ready to Reduce Costs by 60%?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Start risk-free with our 90-day guarantee
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Guarantee Card - Spans 1 column */}
          <motion.div
            className="lg:col-span-1 bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-400 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                90-Day Guarantee
              </h3>
            </div>

            <div className="space-y-2">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {guarantee}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-purple-600 dark:text-purple-400 font-medium mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              The only risk is not trying.
            </p>
          </motion.div>

          {/* CTA Cards - Span 2 columns */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* Path 1 */}
            <motion.div
              className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 border-2 border-purple-400 dark:border-purple-600 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-400 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Free Consultation
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Most Popular</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  30-min call to discuss needs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Custom savings analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  No pressure or obligations
                </li>
              </ul>

              <button className="w-full py-3 bg-purple-400 text-white font-semibold rounded-lg hover:bg-purple-500 transition-all flex items-center justify-center gap-2">
                Schedule Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Path 2 */}
            <motion.div
              className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    Instant Quote
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick & Easy</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  2-minute online form
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  Quote within 24 hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  See exact savings potential
                </li>
              </ul>

              <button className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center justify-center gap-2">
                Get Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Trust Bar */}
        <motion.div
          className="mt-8 text-center text-sm text-neutral-600 dark:text-neutral-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          ✓ Trusted by 200+ Companies  •  ✓ A+ BBB Rating  •  ✓ ISO Certified
        </motion.div>
      </div>
    </section>
  )
}
