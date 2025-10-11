import { motion } from 'framer-motion'
import { Calendar, FileText, Check, Shield } from 'lucide-react'

export default function FinalCTAGuarantee() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
            Start Saving Today
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Two simple ways to get started
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* CTA 1 - Spans 2 rows */}
          <motion.div
            className="lg:row-span-2 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full flex flex-col">
              <Calendar className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Free Consultation</h3>
              <p className="text-white/90 mb-6">
                30-min call • Custom analysis • No obligations
              </p>
              <div className="mt-auto">
                <button className="w-full py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-neutral-100 transition-all shadow-lg">
                  Schedule Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA 2 */}
          <motion.div
            className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FileText className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">
              Instant Quote
            </h3>
            <p className="text-white/90 text-sm mb-4">
              2-min form • 24hr response • Exact savings
            </p>
            <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-neutral-100 transition-all">
              Get Quote
            </button>
          </motion.div>

          {/* Guarantee */}
          <motion.div
            className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 text-white hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Shield className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-3">
              90-Day Guarantee
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span className="text-sm text-white/90">No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span className="text-sm text-white/90">Pay weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span className="text-sm text-white/90">Free replacement</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-white" />
                <span className="text-sm text-white/90">Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          ✓ Trusted by 200+ Companies  •  ✓ A+ BBB Rating  •  ✓ ISO Certified
        </motion.p>
      </div>
    </section>
  )
}
