import { motion } from 'framer-motion'
import { FileX, Clock, FileEdit, AlertTriangle, Users } from 'lucide-react'

const painPoints = [
  {
    icon: Clock,
    text: 'Spending 20+ hours weekly on applications',
  },
  {
    icon: FileEdit,
    text: 'Customizing resumes for each job',
  },
  {
    icon: FileX,
    text: 'Writing unique cover letters',
  },
  {
    icon: AlertTriangle,
    text: 'Getting rejected by ATS systems',
  },
  {
    icon: Users,
    text: 'No time for networking & interview prep',
  },
]

export default function PainPoints() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20 overflow-hidden">
      {/* Large Circular Blob Shape on Left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#a855f7"
            d="M39.5,-65.5C51.4,-58.1,61.4,-47.3,68.8,-34.8C76.2,-22.3,81,-8.2,80.3,5.7C79.6,19.6,73.4,33.3,64.3,44.8C55.2,56.3,43.2,65.6,29.7,71.2C16.2,76.8,1.2,78.7,-13.5,76.8C-28.2,74.9,-42.6,69.2,-54.8,60.1C-67,51,-77,38.5,-81.7,24.3C-86.4,10.1,-85.8,-5.8,-80.5,-19.9C-75.2,-34,-65.2,-46.3,-52.8,-53.5C-40.4,-60.7,-26.6,-62.8,-13.3,-64.2C0,-65.6,27.6,-72.9,39.5,-65.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tired of the Job Application Black Hole?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Pain Points */}
          <div className="space-y-3 relative">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex z-50 relative items-start gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Icon Circle */}
                <motion.div
                  className="flex-shrink-0 w-20 h-20 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <point.icon className="w-10 h-10 text-purple-400" />
                </motion.div>

                {/* Text */}
                <div className="flex-1 pt-4">
                  <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-medium">
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Connecting Dotted Line */}
            <div className="absolute left-[40px] top-[100px] h-[calc(100%-150px)] w-0.5 border-l-2 border-dashed border-neutral-300 dark:border-neutral-700 hidden lg:block" />
          </div>

          {/* Right: Promise Statement */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
                What if you could skip the grind and{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">go straight to interviews?</span>
                  {/* Decorative Curved Underline */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-purple-400"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 Q50,0 100,5 T200,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                </span>
              </p>

              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                We handle all the tedious application work while you focus on what matters: networking, preparing for interviews, and landing your dream job.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                    ATS-optimized applications
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                    Expert-written content
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                    24-hour turnaround
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
