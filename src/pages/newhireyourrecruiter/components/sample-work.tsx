import { ContactDialog } from '@/components/ContactDialog'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'


const caseStudies = [
  {
    candidateName: 'Prudhvi jinka',
    role: 'Senior Product Manager',
    problem: 'Applied to 40+ jobs over 3 months with only 2 interviews',
    solution: 'ATS-optimized resume with quantified achievements and custom cover letters',
    result: '8 interviews in 2 weeks, landed role at Fortune 500 company',
    photoPlaceholder: 'from-purple-100 to-purple-200',
  },
  {
    candidateName: 'Rohan Varma bandari',
    role: 'Software Engineer',
    problem: 'Generic resume getting auto-rejected by ATS systems',
    solution: 'Keyword-optimized technical resume highlighting relevant tech stack',
    result: '12 interviews in 3 weeks, 3 offers, 40% salary increase',
    photoPlaceholder: 'from-blue-100 to-blue-200',
  },
  {
    candidateName: 'Saikumar Reddy barda',
    role: 'Marketing Director',
    problem: 'Spending 25+ hours weekly on applications with poor results',
    solution: 'Professional application service handling 200+ applications monthly',
    result: '15 interviews in 4 weeks, dream role at tech startup',
    photoPlaceholder: 'from-pink-100 to-pink-200',
  },
]

export default function SampleWork() {
  return (
    <section className="relative w-full bg-neutral-50 dark:bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            See the Difference for Yourself
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Real candidates, real transformations
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-neutral-950 rounded-2xl p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Candidate Photo Placeholder */}
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${study.photoPlaceholder} mx-auto mb-6 flex items-center justify-center`}>
                <span className="text-4xl font-bold text-neutral-600">
                  {study.candidateName.charAt(0)}
                </span>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                  {study.candidateName}
                </h3>
                <p className="text-purple-400 font-semibold">
                  {study.role}
                </p>
              </div>

              {/* Before Section */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
                  BEFORE
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {study.problem}
                </p>
              </div>

              {/* Solution Section */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
                  OUR SOLUTION
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {study.solution}
                </p>
              </div>

              {/* After Section */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">
                      RESULT
                    </div>
                    <p className="text-neutral-900 dark:text-white font-semibold text-sm">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactDialog>
            <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Get Your Success Story
            </button>
          </ContactDialog>
        </motion.div>
      </div>
    </section>
  )
}
