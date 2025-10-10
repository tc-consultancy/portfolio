import { motion } from 'framer-motion'
import { Calendar, UserCircle, Target, FileText, PenTool, Send } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: 'Schedule a Call',
    description: 'Book a convenient time to discuss your career goals and aspirations.',
  },
  {
    number: 2,
    icon: UserCircle,
    title: 'Tell Us About Yourself',
    description: 'Share your background, experience, and what you\'re looking for in your next role.',
  },
  {
    number: 3,
    icon: Target,
    title: 'Strategy Session',
    description: 'We develop a customized job search strategy tailored to your goals.',
  },
  {
    number: 4,
    icon: FileText,
    title: 'Submit Your Documents',
    description: 'Provide your current resume and any relevant career documents.',
  },
  {
    number: 5,
    icon: PenTool,
    title: 'We Craft Your Materials',
    description: 'Our experts create your professional resume and compelling cover letter.',
  },
  {
    number: 6,
    icon: Send,
    title: 'We Search and Apply',
    description: 'We actively search for opportunities and submit applications on your behalf.',
  },
]

export default function Roadmap() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            What We Do
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A clear, step-by-step process to land your dream job
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center gap-8 relative max-w-[1400px] mx-auto">
          {/* First Row Connecting Line */}
          <div className="hidden lg:block absolute top-[80px] left-[6%] right-[6%] h-0.5 border-t-2 border-dashed border-neutral-300 dark:border-neutral-700 pointer-events-none" style={{ width: 'calc(100% - 12%)' }} />
          
          {/* Second Row Connecting Line */}
          <div className="hidden lg:block absolute top-[calc(80px+350px)] left-[25%] right-[25%] h-0.5 border-t-2 border-dashed border-neutral-300 dark:border-neutral-700 pointer-events-none" style={{ width: 'calc(50% - 0%)' }} />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
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
            Every step is designed to maximize your chances of success
          </p>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}
