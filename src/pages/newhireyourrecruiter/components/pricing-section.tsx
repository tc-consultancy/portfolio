import { motion } from 'framer-motion'
import { Check, Shield, DollarSign, Clock } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    applicationsPerWeek: 25,
    price: '$199',
    period: '/month',
    features: [
      'Up to 25 applications/week',
      'ATS-optimized resumes',
      'Custom cover letters',
      '48-hour turnaround',
      'Email support',
      'Weekly progress reports',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    applicationsPerWeek: 50,
    price: '$299',
    period: '/month',
    features: [
      'Up to 50 applications/week',
      'ATS-optimized resumes',
      'Custom cover letters',
      '<24-hour turnaround',
      'Priority support',
      'Daily progress updates',
      'Interview preparation',
      'Unlimited revisions',
      'LinkedIn optimization',
    ],
    popular: true,
  },
]

export default function PricingSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-950 dark:to-purple-950/20 py-20 md:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />

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
            Choose Your Application Power Plan
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            All plans include our satisfaction guarantee
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-400 text-white px-4 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              <div
                className={`relative h-full rounded-3xl p-8 md:p-12 ${tier.popular
                  ? 'bg-gradient-to-br from-purple-500 to-purple-700 text-white border-2 border-purple-400 shadow-2xl scale-105'
                  : 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xl'
                  }`}
              >
                {/* Background decoration for featured card */}
                {tier.popular && (
                  <>
                    <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  </>
                )}

                <div className="relative z-10">
                  {/* Plan Name */}
                  <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : ''}`}>
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold">{tier.price}</span>
                    <span className={`text-lg ${tier.popular ? 'text-white/80' : 'text-neutral-500 dark:text-neutral-400'}`}>
                      {tier.period}
                    </span>
                  </div>

                  {/* Applications */}
                  <div className={`mb-6 pb-6 border-b ${tier.popular ? 'border-white/20' : 'border-neutral-200 dark:border-neutral-800'}`}>
                    <p className={`text-lg font-semibold ${tier.popular ? 'text-white' : ''}`}>
                      {tier.applicationsPerWeek} applications/week
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-white' : 'text-purple-400'}`} />
                        <span className={tier.popular ? 'text-white/90' : 'text-neutral-600 dark:text-neutral-400'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-full font-semibold transition-all hover:scale-105 ${tier.popular
                      ? 'bg-white text-purple-600 hover:bg-neutral-100'
                      : 'bg-purple-400 text-white hover:bg-purple-500'
                      }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Points */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-4">
            <div className="w-10 h-10 rounded-lg bg-purple-400/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-sm font-semibold text-neutral-900 dark:text-white">
              Money-back guarantee
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-4">
            <div className="w-10 h-10 rounded-lg bg-purple-400/20 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-sm font-semibold text-neutral-900 dark:text-white">
              Cancel anytime
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-4">
            <div className="w-10 h-10 rounded-lg bg-purple-400/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-sm font-semibold text-neutral-900 dark:text-white">
              Start within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
