import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Mail, BookOpen } from 'lucide-react'

const blogPosts = [
  {
    icon: Linkedin,
    category: 'LinkedIn Tips',
    title: 'Master LinkedIn: 10 Proven Strategies to Get Noticed by Recruiters',
    description: 'Learn how to optimize your LinkedIn profile, engage with content, and build a network that opens doors to your dream job.',
    readTime: '5 min read',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: Mail,
    category: 'Networking Guide',
    title: 'Cold Email Templates That Actually Get Responses',
    description: 'Discover the art of crafting compelling cold emails that hiring managers can\'t ignore. Includes proven templates and examples.',
    readTime: '7 min read',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    icon: BookOpen,
    category: 'Job Search Guide',
    title: 'The Ultimate Job Search Checklist: From Resume to Offer Letter',
    description: 'A comprehensive step-by-step guide covering everything from resume optimization to salary negotiation strategies.',
    readTime: '10 min read',
    gradient: 'from-pink-500 to-pink-700',
  },
]

export default function BlogSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-950 dark:to-purple-950/20 py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            RESOURCES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Job Search Guides & Tips
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Expert insights to accelerate your career journey
          </p>
        </motion.div>

        {/* Blog Cards - Jumbled Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className={`group relative ${
                index === 1 ? 'lg:mt-12' : index === 2 ? 'lg:mt-6' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-neutral-200 dark:border-neutral-800">
                {/* Image Placeholder with Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-semibold">
                    {post.readTime}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <post.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  {/* Decorative Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-400/10 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-3">
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Guide
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
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
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            View All Resources
          </button>
        </motion.div>
      </div>
    </section>
  )
}
