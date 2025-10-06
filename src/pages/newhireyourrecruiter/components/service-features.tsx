import { motion } from 'framer-motion'
import { Target, FileText, BarChart, Users, RefreshCw, Headphones } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'ATS Optimization',
    description: 'Keyword-optimized for each job description to ensure your resume passes automated screening systems.',
  },
  {
    icon: FileText,
    title: 'Custom Cover Letters',
    description: 'Personalized to company values and culture, demonstrating genuine interest and fit.',
  },
  {
    icon: BarChart,
    title: 'Application Tracking',
    description: 'Real-time status updates on all your applications with detailed analytics and insights.',
  },
  {
    icon: Users,
    title: 'Industry Expert Writers',
    description: 'Professionals from your field with deep understanding of industry-specific requirements.',
  },
  {
    icon: RefreshCw,
    title: 'Unlimited Revisions',
    description: 'Until you\'re 100% satisfied with every resume and cover letter we create for you.',
  },
  {
    icon: Headphones,
    title: 'Priority Support',
    description: 'Direct line to your application manager for questions, updates, and strategy discussions.',
  },
]

export default function ServiceFeatures() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Everything You Get in Our Service
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Comprehensive support for your job search success
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-purple-400/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-purple-400" />
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
      </div>
    </section>
  )
}
