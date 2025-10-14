import { motion } from 'framer-motion'
import { FileText, Users, Video, Rocket, BarChart } from 'lucide-react'

const phases = [
  {
    week: 'Week 1',
    icon: FileText,
    title: 'Requirements Gathering',
    color: 'from-blue-400 to-blue-600',
    steps: [
      'Day 1-2: Initial consultation call to understand your needs',
      'Day 3-4: Detailed job description and requirements documentation',
      'Day 5-7: Talent pool identification and preliminary screening',
    ],
  },
  {
    week: 'Week 2-3',
    icon: Users,
    title: 'Candidate Sourcing',
    color: 'from-purple-400 to-purple-600',
    steps: [
      'Tap into our network of 10,000+ pre-vetted professionals',
      'Technical skills assessments and aptitude tests',
      'Initial interviews and background verification',
      'English communication evaluation',
    ],
  },
  {
    week: 'Week 3-4',
    icon: Video,
    title: 'Client Interviews',
    color: 'from-pink-400 to-pink-600',
    steps: [
      'Present 3-5 qualified candidates with detailed profiles',
      'Coordinate interview schedules across time zones',
      'Technical assessment rounds if required',
      'Cultural fit evaluation',
    ],
  },
  {
    week: 'Week 4-5',
    icon: Rocket,
    title: 'Onboarding',
    color: 'from-orange-400 to-orange-600',
    steps: [
      'Paperwork completion (we handle everything)',
      'Equipment and access provisioning',
      'Team introductions and orientation',
      'Project briefings and knowledge transfer',
    ],
  },
  {
    week: 'Week 5+',
    icon: BarChart,
    title: 'Ongoing Management',
    color: 'from-green-400 to-green-600',
    steps: [
      'Regular performance monitoring',
      'Weekly payment processing',
      'Continuous support and issue resolution',
      'Quarterly performance review',
    ],
  },
]

export default function ProcessTransparency() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Complete Transparency: How We Work
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A detailed timeline of our proven process
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[31px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-400   via-orange-400 to-green-400 hidden md:block" />

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <phase.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    {/* Week Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                      {phase.week}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                      {phase.title}
                    </h3>

                    {/* Steps */}
                    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
                      <ul className="space-y-3">
                        {phase.steps.map((step, stepIndex) => (
                          <motion.li
                            key={stepIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 + stepIndex * 0.05 }}
                          >
                            {/* Bullet */}
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${phase.color} mt-2 flex-shrink-0`} />
                            
                            {/* Step Text */}
                            <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                              {step}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note
        <motion.div
          className="text-center mt-16 p-6 bg-purple-50 dark:bg-purple-950/20 rounded-2xl border border-purple-200 dark:border-purple-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-neutral-700 dark:text-neutral-300 font-medium">
            💡 <span className="font-bold">Average Time to Hire:</span> 35 days from initial consultation to team member start date
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}
