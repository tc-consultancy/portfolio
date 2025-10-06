import { motion } from 'framer-motion'

const team = [
  {
    name: 'Sarah Johnson',
    specialization: 'Tech & Engineering',
    expertise: 'Former Google recruiter with 10+ years placing software engineers and technical leads.',
    photoPlaceholder: 'from-blue-100 to-blue-200',
  },
  {
    name: 'Michael Chen',
    specialization: 'Finance & Consulting',
    expertise: 'Ex-McKinsey consultant specializing in finance, consulting, and executive roles.',
    photoPlaceholder: 'from-green-100 to-green-200',
  },
  {
    name: 'Emily Rodriguez',
    specialization: 'Marketing & Creative',
    expertise: 'Award-winning marketer with expertise in brand, digital, and creative positions.',
    photoPlaceholder: 'from-pink-100 to-pink-200',
  },
  {
    name: 'David Thompson',
    specialization: 'Healthcare & Life Sciences',
    expertise: 'Healthcare executive recruiter with deep industry knowledge and connections.',
    photoPlaceholder: 'from-purple-100 to-purple-200',
  },
]

export default function TeamSection() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Your Dedicated Application Experts
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-16">
            Average 8+ years experience in talent acquisition
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Photo */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.photoPlaceholder} mx-auto mb-4 flex items-center justify-center`}>
                <span className="text-3xl font-bold text-neutral-600">
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white text-center mb-2">
                {member.name}
              </h3>

              {/* Specialization */}
              <p className="text-sm text-purple-400 font-semibold text-center mb-3">
                {member.specialization}
              </p>

              {/* Expertise */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center leading-relaxed">
                {member.expertise}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
