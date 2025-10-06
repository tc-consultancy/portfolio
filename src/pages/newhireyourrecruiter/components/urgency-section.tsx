import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function UrgencySection() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Decorations */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Clock className="w-8 h-8 text-white" />
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Limited Spots Available - High Demand Service
            </h2>

            {/* Reasoning */}
            <p className="text-xl text-white/90 mb-6">
              Each client gets dedicated writer attention to ensure quality applications
            </p>

            {/* Spots Indicator */}
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 mb-8">
              <p className="text-2xl font-bold mb-1">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  12 Spots
                </motion.span>
              </p>
              <p className="text-sm text-white/80">
                Remaining this month
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-all hover:scale-105 shadow-lg">
                Secure My Spot Now
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20">
                Join Waitlist
              </button>
            </div>

            {/* Trust Badge */}
            <p className="text-sm text-white/70 mt-6">
              ⚡ Start receiving applications within 24 hours of signup
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
