import { motion } from 'framer-motion'
import { Shield, Lock, FileCheck, MessageSquareCode, Database, CheckCircle } from 'lucide-react'

const securityFeatures = [
  {
    icon: Lock,
    title: 'Data Encryption & Compliance',
    description: 'End-to-end encryption with SOC 2, GDPR, and ISO 27001 compliance',
  },
  {
    icon: MessageSquareCode,
    title: 'Secure Communication Tools',
    description: 'Enterprise-grade encrypted channels for all team communications',
  },
  {
    icon: FileCheck,
    title: 'Regular Security Audits',
    description: 'Quarterly third-party security assessments and penetration testing',
  },
  {
    icon: Shield,
    title: 'Confidentiality Agreements',
    description: 'Comprehensive NDAs and IP protection for all team members',
  },
  {
    icon: Database,
    title: 'Backup & Disaster Recovery',
    description: '99.9% uptime guarantee with automated backups and failover systems',
  },
]

const certifications = [
  'SOC 2 Type II',
  'ISO 27001',
  'GDPR Compliant',
  'HIPAA Ready',
]

export default function SecurityTrust() {
  return (
    <section className="relative w-full bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-400/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-semibold text-purple-400">Enterprise-Grade Security</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Your Data is Safe With Us
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Bank-level security infrastructure protecting your intellectual property and sensitive data
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-purple-400 dark:hover:border-purple-400 hover:shadow-xl transition-all group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Certifications Card - Spans 2 columns on lg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="h-full bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">Certified & Compliant</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-white/90">
                  Trusted by Fortune 500 companies worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '256-bit', label: 'Encryption' },
            { value: '24/7', label: 'Monitoring' },
            { value: '0', label: 'Data Breaches' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Want to learn more about our security practices?
          </p>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Download Security Whitepaper
          </button>
        </motion.div>
      </div>
    </section>
  )
}
