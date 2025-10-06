import { motion } from 'framer-motion'
import { FileText, Wand2, Send, Target } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Share Your Target Jobs & Background',
    description: 'Tell us about your career goals, target roles, and experience in a quick 15-minute call.',
  },
  {
    number: 2,
    icon: Wand2,
    title: 'We Craft ATS-Friendly Custom Resumes & Cover Letters',
    description: 'Our expert writers create tailored, keyword-optimized documents for each application.',
  },
  {
    number: 3,
    icon: Send,
    title: 'We Apply to Jobs & Track Applications',
    description: 'We submit applications on your behalf and provide real-time tracking of all submissions.',
  },
  {
    number: 4,
    icon: Target,
    title: 'You Get Interviews & Focus on Preparation',
    description: 'Receive interview requests and focus your energy on preparation and networking.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20">
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

        {/* Timeline Text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            ⚡ Start receiving applications within 24 hours
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Start Hiring Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
