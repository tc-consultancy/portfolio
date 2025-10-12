import { ContactDialog } from '@/components/ContactDialog'
import { motion } from 'framer-motion'
import { FileText, Users, FileCheck, Play } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Share Your Requirements',
    description: 'Simply provide us with your job description, required skills, cultural values, and any specific expectations. No lengthy forms or complicated processes.',
  },
  {
    number: 2,
    icon: Users,
    title: 'We Find Your Perfect Match',
    description: 'Our expert recruiters tap into India\'s vast talent pool to source candidates who meet 100% of your requirements. We don\'t compromise on quality.',
  },
  {
    number: 3,
    icon: FileCheck,
    title: 'We Handle All Paperwork',
    description: 'From contracts to compliance, payroll to benefits administration—we manage everything so you can focus on your business.',
  },
  {
    number: 4,
    icon: Play,
    title: 'Start Working (Pay Weekly)',
    description: 'Your new team member starts immediately. Pay weekly with no long-term commitments. Not satisfied? Free replacement guaranteed.',
  },
]

export default function SolutionRoadmap() {
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
          <div className="inline-block px-4 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            THE SOLUTION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Your Complete Outsourcing Partner: From Job Description to Day One
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Our Unique Process
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-[80px] left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-neutral-300 dark:border-neutral-700" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 relative z-10">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-purple-400/10 flex items-center justify-center mx-auto mb-4 mt-6">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white text-center mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
                  {step.description}
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
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Start building your dream team today with zero risk
          </p>
          <ContactDialog>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Get Started Now
          </button>
          </ContactDialog>
        </motion.div>
      </div>
    </section>
  )
}
