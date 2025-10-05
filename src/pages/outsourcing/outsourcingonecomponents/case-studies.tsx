import { motion, useMotionValue } from 'framer-motion'
import { useState } from 'react'

const caseStudies = [
  {
    clientName: 'TechCorp Inc.',
    clientLogo: 'TC',
    challenge:
      'A fintech startup needed a Senior React developer in 2 weeks to meet a launch deadline.',
    solution:
      'We delivered 4 pre-vetted candidates within 72 hours, each with 5+ years of React experience.',
    result:
      'Client hired a developer who became a team lead within 6 months. Project launched on time.',
    metrics: [
      { label: 'Time Saved', value: '85%' },
      { label: 'Cost Reduction', value: '40%' },
    ],
    quote:
      'The quality of candidates was exceptional. Our new hire integrated seamlessly and exceeded all expectations.',
    quoteName: 'Sarah Johnson',
    quoteTitle: 'CTO, TechCorp Inc.',
  },
  {
    clientName: 'DataFlow Systems',
    clientLogo: 'DF',
    challenge:
      'Needed to scale their data engineering team by 5 members within a month for a major project.',
    solution:
      'We provided a dedicated team of data engineers with expertise in Python, Spark, and AWS.',
    result:
      'Team delivered the project 2 weeks ahead of schedule with 98% code quality score.',
    metrics: [
      { label: 'Team Growth', value: '5x' },
      { label: 'Delivery Speed', value: '+30%' },
    ],
    quote:
      'Outstanding service. The team felt like an extension of our own from day one.',
    quoteName: 'Michael Chen',
    quoteTitle: 'VP Engineering, DataFlow',
  },
  {
    clientName: 'CloudNine Solutions',
    clientLogo: 'C9',
    challenge:
      'Required DevOps expertise to migrate legacy infrastructure to cloud-native architecture.',
    solution:
      'Matched them with 3 senior DevOps engineers specializing in Kubernetes and Terraform.',
    result:
      'Successfully migrated 50+ services with zero downtime. Reduced infrastructure costs by 45%.',
    metrics: [
      { label: 'Zero Downtime', value: '100%' },
      { label: 'Cost Savings', value: '45%' },
    ],
    quote:
      'The expertise and professionalism were top-notch. Best outsourcing experience we"ve had.',
    quoteName: 'Emily Rodriguez',
    quoteTitle: 'Head of Infrastructure',
  },
]

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)
  const x = useMotionValue(0)

  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20  overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Success Stories
        </motion.h2>
        <motion.p
          className="text-xl text-neutral-600 dark:text-neutral-400 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Real results from real partnerships
        </motion.p>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <motion.div
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
            style={{ x }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[90vw] md:w-[600px] snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-full bg-white dark:bg-neutral-900 rounded-3xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                    {/* Left: Logo/Image */}
                    <div className="md:col-span-2 bg-gradient-to-br from-purple-400 to-purple-600 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
                          <span className="text-5xl font-bold text-white">
                            {study.clientLogo}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {study.clientName}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:col-span-3 p-8 flex flex-col justify-between">
                      {/* Challenge, Solution, Result */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-bold text-purple-400 mb-2">
                            THE CHALLENGE
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-purple-400 mb-2">
                            OUR SOLUTION
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {study.solution}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-purple-400 mb-2">
                            THE RESULT
                          </h4>
                          <p className="text-neutral-700 dark:text-neutral-300">
                            {study.result}
                          </p>
                        </div>

                        {/* Metrics */}
                        <div className="flex gap-4">
                          {study.metrics.map((metric, idx) => (
                            <div
                              key={idx}
                              className="flex-1 p-4 rounded-2xl border-2 border-purple-400 text-center"
                            >
                              <div className="text-3xl font-bold text-purple-400 mb-1">
                                {metric.value}
                              </div>
                              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                        <div className="relative">
                          {/* Decorative Quotation Marks */}
                          <svg
                            className="absolute -top-2 -left-2 w-8 h-8 text-purple-400/20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                          </svg>
                          <p className="italic text-neutral-600 dark:text-neutral-400 mb-4 pl-6">
                            "{study.quote}"
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">
                            {study.quoteName.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-neutral-900 dark:text-white">
                              {study.quoteName}
                            </div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                              {study.quoteTitle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-purple-400 w-8'
                    : 'bg-neutral-300 dark:bg-neutral-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
