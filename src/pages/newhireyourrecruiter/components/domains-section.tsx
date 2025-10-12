import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'

const allDomains = [
  { name: 'Computer Science', clients: '151+ Clients' },
  { name: 'Information Systems', clients: '123+ Clients' },
  { name: 'Cloud Computing', clients: '161+ Clients' },
  { name: 'Artificial Intelligence', clients: '161+ Clients' },
  { name: 'Supply Chain', clients: '151+ Clients' },
  { name: 'Bio Informatics', clients: '123+ Clients' },
  { name: 'Bio Technology', clients: '151+ Clients' },
  { name: 'Environmental Science', clients: '151+ Clients' },
  { name: 'Project & Product Management', clients: '123+ Clients' },
  { name: 'SAP & ERP', clients: '157+ Clients' },
  { name: 'Networking & Infrastructure', clients: '151+ Clients' },
  { name: 'Quality Safety & Regulatory', clients: '151+ Clients' },
  { name: 'Healthcare & Clinical', clients: '123+ Clients' },
  { name: 'Biotechnology & Life Sciences', clients: '130+ Clients' },
  { name: 'CBRN & Sales Operations', clients: '161+ Clients' },
  { name: 'Environmental Health & Safety (EHS)', clients: '161+ Clients' },
  { name: 'Embedded Systems', clients: '123+ Clients' },
  { name: 'Electronic Health Records (EHR)', clients: '130+ Clients' },
  { name: 'Electrical Engineering', clients: '130+ Clients' },
  { name: 'Construction Management', clients: '161+ Clients' },
  { name: 'Computer Science Foundations', clients: '123+ Clients' },
  { name: 'Identity & Access Management (IAM)', clients: '157+ Clients' },
  { name: 'Clinical Research Operations', clients: '123+ Clients' },
  { name: 'Clinical Data Management & Analytics', clients: '157+ Clients' },
  { name: 'Active Directory / Identity Management', clients: '123+ Clients' },
  { name: 'Physical & RF Tech', clients: '130+ Clients' },
  { name: 'Financial Data & Analytics', clients: '161+ Clients' },
  { name: 'Embedded Systems & Firmware', clients: '161+ Clients' },
  { name: 'Electronic Health Records (EHR)', clients: '123+ Clients' },
  { name: 'Mechanical Engineering', clients: '123+ Clients' },
  { name: 'Generative AI', clients: '130+ Clients' },
  { name: 'UX/UI Design', clients: '161+ Clients' },
  { name: 'Data Analytics', clients: '123+ Clients' },
  { name: 'Healthcare Technology', clients: '157+ Clients' },
  { name: 'Data Engineering', clients: '151+ Clients' },
]

export default function DomainsSection() {
  const [showAll, setShowAll] = useState(false)
  const initialCount = 8
  const displayedDomains = showAll ? allDomains : allDomains.slice(0, initialCount)

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
          <div className="inline-block px-4 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            DOMAINS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Domains We Support
          </h2>
        </motion.div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedDomains.map((domain, index) => (
            <motion.div
              key={index}
              className="group bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-neutral-200 dark:border-neutral-800 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % initialCount) * 0.05 }}
            >
              <div className="flex items-start justify-between mb-4">
                {/* Icon Placeholder - using a simple geometric shape */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-purple-400 rounded-lg" />
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Domain Name */}
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
                {domain.name}
              </h3>

              {/* Clients Count
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {domain.clients}
              </p> */}
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              View More Domains
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showAll && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              Show Less
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
