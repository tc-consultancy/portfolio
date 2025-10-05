import { motion } from 'framer-motion'
import { MessageSquare, Users, Video, Rocket } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Tell Us Your Needs',
    description: 'Brief us on the role, skills, and culture fit in a quick call.',
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
    description: 'We handle all the paperwork. Your new hire starts seamlessly.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/10 dark:from-neutral-950 dark:to-purple-950/5 py-20 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works in 4 Easy Steps
        </motion.h2>

        {/* Steps Container */}
        <div className="relative">
          {/* Curved Path SVG */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 1000 800"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 100 150 Q 300 100 500 200 T 900 150"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-purple-400/20"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            {/* Decorative dots along path */}
            <circle cx="100" cy="150" r="4" className="fill-purple-400/30" />
            <circle cx="300" cy="120" r="4" className="fill-purple-400/30" />
            <circle cx="500" cy="200" r="4" className="fill-purple-400/30" />
            <circle cx="700" cy="180" r="4" className="fill-purple-400/30" />
            <circle cx="900" cy="150" r="4" className="fill-purple-400/30" />
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={step.number}
                  className={`relative ${isEven ? 'lg:pr-12' : 'lg:pl-12 lg:mt-32'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Number Circle */}
                  <motion.div
                    className="relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-xl flex items-center justify-center mb-6 mx-auto lg:mx-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.3,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ rotate: 5 }}
                  >
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Content Container */}
                  <motion.div
                    className="rounded-3xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-8 shadow-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-purple-400/10 flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-purple-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Ready to get started?
          </p>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Start Hiring Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
