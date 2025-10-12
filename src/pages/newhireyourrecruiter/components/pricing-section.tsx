import { motion } from 'framer-motion'
import { Check, DollarSign, Clock } from 'lucide-react'

const tiers = [
  {
    name: 'Basic Plan',
    applicationsPerDay: '40–50 applications per day',
    applicationsPerWeek: '',
    price: '$199',
    period: '/month',
    features: [
      'ATS-optimized resumes',
      'Cover letters',
      '48-hour turnaround',
      'LinkedIn profile optimization',
      'Weekly progress reports',
      'Assigned common recruiter',
      'LinkedIn profile marketing tips',
      'Networking tips and cold email formatting',
      'Weekly meeting with Job Seekers',
      'Recruiter call trainings',
      'Priority support',
      'Industry Expert Resume Writers',
    ],
    popular: false,
  },
  {
    name: 'Pro Plan',
    applicationsPerDay: '20–25 applications per day',
    applicationsPerWeek: '200+ applications per week',
    price: '$199',
    period: '/month',
    features: [
      'ATS-optimized resumes',
      'Custom-tailored resumes for each job description',
      'Custom cover letters',
      '24-hour turnaround',
      'Weekly progress reports',
      'LinkedIn profile optimization',
      'Assigned common recruiter',
      'LinkedIn profile marketing tips',
      'Networking tips and cold email formatting',
      'Weekly meeting with Job Seekers',
      'Recruiter call trainings',
      'Priority support',
      'Industry Expert Resume Writers',
    ],
    popular: false,
  },
  {
    name: '💼 Professional Plan',
    applicationsPerDay: 'Up to 40 Customized applications/day',
    applicationsPerWeek: '200+ applications per week',
    price: '$299',
    period: '/month',
    features: [
      'ATS-optimized resumes',
      'Custom-tailored resumes for each job description',
      'Personalized cover letters',
      '<24-hour turnaround',
      'Priority support',
      'Unlimited revisions',
      'LinkedIn profile optimization',
      'Personal Recruiter',
      'AI agent as an assistant (coming soon)',
      'LinkedIn profile marketing tips',
      'Networking tips and cold email formatting',
      'Weekly meeting with Job Seekers',
      'Recruiter call trainings',
      'Priority support',
      'Industry Expert Resume Writers',
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
          className="text-center mb-8"
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
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                className={`relative h-full rounded-3xl p-6 md:p-8 ${tier.popular
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
                  <h3 className={`text-xl md:text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : ''}`}>
                    {tier.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-3">
                    <span className="text-3xl md:text-4xl font-bold">{tier.price}</span>
                    <span className={`text-base ${tier.popular ? 'text-white/80' : 'text-neutral-500 dark:text-neutral-400'}`}>
                      {tier.period}
                    </span>
                  </div>

                  {/* Applications */}
                  <div className={`mb-4 pb-4 border-b ${tier.popular ? 'border-white/20' : 'border-neutral-200 dark:border-neutral-800'}`}>
                    <p className={`text-sm font-semibold ${tier.popular ? 'text-white' : ''}`}>
                      {tier.applicationsPerDay}
                    </p>
                    {tier.applicationsPerWeek && (
                      <p className={`text-sm font-semibold ${tier.popular ? 'text-white/90' : 'text-neutral-700 dark:text-neutral-300'}`}>
                        {tier.applicationsPerWeek}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <p className={`text-xs font-semibold mb-3 ${tier.popular ? 'text-white' : 'text-neutral-700 dark:text-neutral-300'}`}>
                      Includes:
                    </p>
                    <ul className="space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-white' : 'text-purple-400'}`} />
                          <span className={`text-xs ${tier.popular ? 'text-white/90' : 'text-neutral-600 dark:text-neutral-400'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-all hover:scale-105 ${tier.popular
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
          className="mt-16 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
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
