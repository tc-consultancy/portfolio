import { motion } from 'framer-motion'
import { Calendar, Download, FileSearch } from 'lucide-react'

const secondaryOptions = [
  {
    icon: Calendar,
    title: 'Schedule Free Consultation',
    description: '15-minute call to discuss your goals',
  },
  {
    icon: Download,
    title: 'Download Sample Resume',
    description: 'See our ATS-optimized format',
  },
  {
    icon: FileSearch,
    title: 'View Success Stories',
    description: 'Read detailed case studies',
  },
]

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-purple-500 to-purple-700 py-20 md:py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Job Search?
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of successful job seekers who landed their dream roles with our help
          </p>

          <motion.button
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start My Applications Now
          </motion.button>

          <p className="text-sm text-white/70 mt-4">
            ✓ No credit card required • ✓ Cancel anytime • ✓ 30-day money-back guarantee
          </p>
        </motion.div>

        {/* Secondary Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryOptions.map((option, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <option.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {option.title}
              </h3>

              <p className="text-sm text-white/80">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span className="font-semibold">5,000+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold">87% Success Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
