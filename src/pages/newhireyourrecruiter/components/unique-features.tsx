import { motion } from 'framer-motion'
import { UserCheck, TrendingUp, Linkedin, Mail, Users, Phone, Bot, Headphones, RefreshCw } from 'lucide-react'

const uniqueFeatures = [
  {
    icon: UserCheck,
    title: 'Personal Interview Trainer',
    description: 'One-on-one coaching to help you ace every interview with confidence and professionalism.',
  },
  {
    icon: TrendingUp,
    title: 'Profile Marketing Strategy',
    description: 'Learn proven techniques to market yourself effectively and stand out to recruiters.',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Profile Marketing',
    description: 'Expert tips to optimize your LinkedIn presence and attract the right opportunities.',
  },
  {
    icon: Mail,
    title: 'Networking & Cold Email Tips',
    description: 'Master the art of professional networking and cold email outreach that gets responses.',
  },
  {
    icon: Users,
    title: 'Weekly Job Seeker Meetings',
    description: 'Regular check-ins to review progress, adjust strategy, and keep you motivated.',
  },
  {
    icon: Phone,
    title: 'Recruiter Call Training',
    description: 'Prepare for recruiter calls with scripts, tips, and practice sessions.',
  },
  {
    icon: Bot,
    title: 'AI Agent Assistant',
    description: 'Coming soon: AI-powered assistant to streamline your job search 24/7.',
  },
  {
    icon: Headphones,
    title: 'Priority Support',
    description: 'Get immediate help whenever you need it with dedicated priority assistance.',
  },
  {
    icon: RefreshCw,
    title: 'Unlimited Revisions',
    description: 'Perfect your resume and cover letters with as many revisions as you need.',
  },
]

export default function UniqueFeatures() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-950 dark:to-purple-950/20 py-20">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            What Makes Us Unique?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            We go beyond just applications — we transform your entire job search experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-neutral-200 dark:border-neutral-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center mb-5">
                <feature.icon className="w-8 h-8 text-purple-500 dark:text-purple-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {feature.description}
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
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Experience the difference of a truly comprehensive job search service
          </p>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Discover Your Advantage
          </button>
        </motion.div>
      </div>
    </section>
  )
}
