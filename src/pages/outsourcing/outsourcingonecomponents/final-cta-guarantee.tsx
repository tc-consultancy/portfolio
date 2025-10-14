import { motion } from 'framer-motion'
import { Check, Shield, Calendar, FileText, ArrowRight } from 'lucide-react'
import { ContactDialog } from '@/components/ContactDialog'

export default function FinalCTAGuarantee() {
  const guarantees = [
    'No setup fees or deposits',
    'Pay only for hours worked (weekly)',
    'Free replacement if not satisfied',
    'Cancel anytime with 2 weeks notice',
    'No long-term contracts',
    'All paperwork handled by us',
  ]

  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-2">
            Start Risk-Free: Our 90-Day Guarantee
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Ready to Reduce Costs by 60%? Let's Talk.
          </p>
        </motion.div>

        {/* Guarantee Box */}
        <motion.div
          className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 mb-8"
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
              Either you get exceptional talent at 60% savings, or you get a free replacement.{' '}
              <span className="text-purple-400 font-medium">The only risk is not trying.</span>
            </p>
          </div>
        </motion.div>

        {/* Two-Path CTA */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
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

        {/* Trust Badges */}
       
      </div>
    </section>
  )
}
