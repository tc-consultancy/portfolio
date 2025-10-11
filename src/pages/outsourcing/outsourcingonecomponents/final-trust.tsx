import { motion } from 'framer-motion'
import { Shield, Lock, Award, Users } from 'lucide-react'

const credentials = [
  {
    icon: Shield,
    text: 'ISO 9001:2015 Certified',
  },
  {
    icon: Lock,
    text: 'GDPR Compliant',
  },
  {
    icon: Award,
    text: 'SOC 2 Type II Certified',
  },
  {
    icon: Users,
    text: 'Member of Industry Associations',
  },
]

export default function FinalTrust() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Join 200+ Companies Already Saving Millions
          </h2>
        </motion.div>

        {/* Logo Grid Placeholder */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div
              key={index}
              className="h-24 bg-neutral-100 dark:bg-neutral-900 rounded-2xl flex items-center justify-center border border-neutral-200 dark:border-neutral-800"
            >
              <span className="text-neutral-400 dark:text-neutral-600 text-sm font-medium">
                Client Logo
              </span>
            </div>
          ))}
        </motion.div>

        {/* Credentials */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center mb-4">
                <credential.icon className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                {credential.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
