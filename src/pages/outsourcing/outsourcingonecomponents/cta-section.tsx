import { motion } from 'framer-motion'
import { Calendar, FileText, ArrowRight } from 'lucide-react'
import { ContactDialog } from '@/components/ContactDialog'

export default function CTASection() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
            Ready to Reduce Costs by 60%?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">Choose your path to savings</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 border-2 border-purple-400 dark:border-purple-600 hover:shadow-lg transition-all"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-400 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Free Consultation
              </h3>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• 30-minute call to discuss your needs</li>
              <li>• Custom cost savings analysis</li>
              <li>• No pressure, no obligations</li>
            </ul>

            <ContactDialog>
              <button className="w-full py-3 bg-purple-400 text-white font-semibold rounded-lg hover:bg-purple-500 transition-all flex items-center justify-center gap-2">
                Schedule Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </ContactDialog>
          </motion.div>

          <motion.div
            className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Instant Quote
              </h3>
            </div>

            <ul className="space-y-2 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
              <li>• Fill out 2-minute form</li>
              <li>• Receive quote within 24 hours</li>
              <li>• See exact potential savings</li>
            </ul>

            <ContactDialog>
              <button className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center justify-center gap-2">
                Get Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </ContactDialog>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center text-sm text-neutral-600 dark:text-neutral-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          ✓ Trusted by 200+ Companies  •  ✓ A+ BBB Rating
        </motion.div>
      </div>
    </section>
  )
}
