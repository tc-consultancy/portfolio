import { ContactDialog } from '@/components/ContactDialog'
import { motion } from 'framer-motion'
import { RefreshCw, DollarSign, Calendar, CheckCircle, Shield, Headphones } from 'lucide-react'

const guarantees = [
  {
    icon: RefreshCw,
    title: 'Free Replacement Guarantee',
    description: "If any team member doesn't meet your expectations within the first 90 days, we'll replace them at no additional cost. No questions asked.",
  },
  {
    icon: DollarSign,
    title: 'Zero Upfront Fees',
    description: 'No setup charges, processing fees, or hidden costs. You only pay for the resources you use, when you use them.',
  },
  {
    icon: Calendar,
    title: 'Weekly Payment Flexibility',
    description: 'Pay weekly for maximum cash flow flexibility. No long-term contracts or commitments required.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Match Promise',
    description: 'We only present candidates who meet 100% of your requirements. No compromises on skills, experience, or cultural fit.',
  },
  {
    icon: Shield,
    title: 'Complete Compliance Coverage',
    description: "We handle all paperwork, legal compliance, payroll taxes, and regulatory requirements. You're fully protected.",
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated account manager and support team available around the clock to address any concerns immediately.',
  },
]

export default function OurGuarantee() {
  return (
    <section className="relative w-full bg-gradient-to-b from-purple-50/50 to-white dark:from-purple-950/10 dark:to-neutral-950 py-20">
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
            Your Success Is Our Only Metric
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            We back our service with industry-leading guarantees
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-neutral-200 dark:border-neutral-800">
                {/* Icon with gradient background */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {guarantee.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {guarantee.description}
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
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Ready to experience risk-free outsourcing?
          </p>
                    <ContactDialog>
          
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Start Your Risk-Free Trial
          </button>
                    </ContactDialog>
          
        </motion.div>
      </div>
    </section>
  )
}
