import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'



const stories = [
  {
    candidateName: 'Bala Krishna Reddy Chinna',
    role: 'Data Scientist',
    company: '',
    before: 'Spent 6 months applying to 100+ jobs with only 3 interviews',
    after: 'Landed role at top tech company within 8 weeks',
    metrics: '15 interviews • 4 offers • $180K salary',
    quote: 'I was ready to give up on my job search. This service completely turned things around. The quality of applications was night and day compared to what I was doing.',
    photoPlaceholder: 'from-blue-100 to-blue-200',
  },
  {
    candidateName: 'Pooja Vundyala',
    role: 'UX Designer',
    company: '',
    before: 'Generic portfolio and resume getting ignored',
    after: 'Multiple offers from top tech companies',
    metrics: '22 interviews • 6 offers • 65% salary increase',
    quote: 'The custom cover letters made all the difference. Companies actually responded and wanted to talk to me. Best investment in my career.',
    photoPlaceholder: 'from-pink-100 to-pink-200',
  },
  {
    candidateName: 'Lakshmi prasanna peddi',
    role: 'Engineering Manager',
    company: '',
    before: 'Too busy with current job to apply effectively',
    after: 'Transitioned to dream role without stress',
    metrics: '18 interviews • 5 offers • $220K total comp',
    quote: 'As a working professional, I didn\'t have time to customize applications. They handled everything while I focused on interview prep. Game changer.',
    photoPlaceholder: 'from-green-100 to-green-200',
  },
]

export default function SuccessStories() {
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
            Real Candidates, Real Results
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            See how we helped job seekers land their dream roles
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Photo */}
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${story.photoPlaceholder} mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-3xl font-bold text-neutral-600">
                  {story.candidateName.charAt(0)}
                </span>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {story.candidateName}
                </h3>
                <p className="text-purple-400 font-semibold text-sm">
                  {story.role} 
                  {/* at {story.company} */}
                </p>
              </div>

              {/* Before */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
                  BEFORE
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {story.before}
                </p>
              </div>

              {/* After */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  AFTER
                </div>
                <p className="text-sm text-neutral-900 dark:text-white font-semibold">
                  {story.after}
                </p>
              </div>

              {/* Metrics */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 text-center">
                  {story.metrics}
                </p>
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="w-6 h-6 text-purple-400/30 absolute -top-2 -left-2" />
                <p className="text-sm italic text-neutral-600 dark:text-neutral-400 pl-4">
                  "{story.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
