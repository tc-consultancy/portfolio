import { motion } from 'framer-motion'
import { Target, Zap, Shield } from 'lucide-react'

export default function OneHireChallenge() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Side - Visual Element */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-400/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-8 text-center">
                <Target className="w-16 h-16 text-white mx-auto mb-4" />
                <div className="text-5xl font-bold text-white mb-2">1</div>
                <p className="text-white/90 font-semibold">Hire Challenge</p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <p className="text-white/80 text-sm">Quality Match</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              The One-Hire Challenge
            </h2>
            <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-4">
              Skeptical? Good. You should be.
            </p>

            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              We're not asking you to outsource your entire department. Give us ONE shot with your hardest-to-fill role.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-purple-50 dark:bg-white/5 rounded-lg p-3">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-neutral-900 dark:text-white text-sm">Lightning-fast hiring process</span>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 dark:bg-white/5 rounded-lg p-3">
                <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                <span className="text-neutral-900 dark:text-white text-sm">Free replacement guarantee</span>
              </div>
            </div>

            <p className="text-lg text-neutral-900 dark:text-white font-semibold mb-2">
              That one hire becomes two. Then five. Then your entire remote team.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm italic mb-6">
              Because quality speaks louder than promises.
            </p>

            <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all">
              Take the Challenge
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
