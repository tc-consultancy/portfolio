import { motion } from 'framer-motion'
import { Target, FileText, Zap, Users, Briefcase } from 'lucide-react'
import { ContactDialog } from '@/components/ContactDialog'

const pillars = [
  {
    icon: Target,
    title: 'ATS-Optimized Resumes',
    description: 'Beat the algorithm every time with keyword-optimized resumes tailored to each job description.',
  },
  {
    icon: FileText,
    title: 'Custom Cover Letters',
    description: 'Tailored to each company\'s culture and values, making you stand out from generic applications.',
  },
  {
    icon: Zap,
    title: 'Rapid Application',
    description: '<24 hour turnaround from job posting to submitted application, ensuring you\'re first in line.',
  },
  {
    icon: Users,
    title: 'Expert Writers',
    description: 'Industry-specific professionals with years of experience in talent acquisition and recruiting.',
  },
  {
    icon: Briefcase,
    title: 'You Focus on Interviews',
    description: 'We handle the paperwork while you network, prepare, and ace your interviews.',
  },
]

export default function SolutionOverview() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20">
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
            Your Personal Job Application Team
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Professional application services that get results
          </p>
        </motion.div>

        {/* Solution Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-purple-400/10 flex items-center justify-center mb-4">
                <pillar.icon className="w-7 h-7 text-purple-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <ContactDialog>
            <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Get Started Today
            </button>
          </ContactDialog>
        </motion.div>
      </div>
    </section>
  )
}
