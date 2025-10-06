import { motion } from 'framer-motion'
import { MessageSquare, Users, Video, Rocket } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Tell Us Your Needs',
    description: 'Share your industry requirements, skills needed, and company culture in a quick call.',
  },
  {
    number: 2,
    icon: Users,
    title: 'We Handpick Your Matches',
    description: 'Within 48 hours, we send you 3-5 perfectly vetted candidate profiles.',
  },
  {
    number: 3,
    icon: Video,
    title: 'Interview & Select',
    description: 'Conduct interviews directly. Only hire who you love.',
  },
  {
    number: 4,
    icon: Rocket,
    title: 'Onboard & Integrate',
    description: 'We handle all paperwork, equipment setup, and access provisioning. Your new hire starts Day 1 with everything ready.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Simple, fast, effective
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative group">
                {/* Number */}
                <div className="absolute -left-6 -top-6 w-16 h-16 rounded-2xl z-10 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Card */}
                <div className="relative bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 pt-10 hover:shadow-xl transition-shadow">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-purple-400/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-purple-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Start Hiring Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
