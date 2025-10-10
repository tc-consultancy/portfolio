import { motion } from 'framer-motion'
import { Code, DollarSign, Headphones, TrendingUp, Palette, Briefcase, Wrench, Heart } from 'lucide-react'

const roles = [
  {
    icon: Code,
    category: 'Technology & IT',
    roles: 'Full-Stack Developers | Backend Engineers | Frontend Developers | Mobile App Developers | QA Engineers | DevOps Engineers | Data Scientists | Machine Learning Engineers | Cloud Architects | Cybersecurity Specialists | Database Administrators | IT Support',
  },
  {
    icon: DollarSign,
    category: 'Finance & Accounting',
    roles: 'Accountants | Bookkeepers | Financial Analysts | Tax Specialists | Accounts Payable/Receivable | Payroll Specialists | Auditors | Controllers | CFO-level Executives',
  },
  {
    icon: Headphones,
    category: 'Customer Support',
    roles: 'Customer Service Representatives | Technical Support | Help Desk | Chat Support | Phone Support | Email Support | Customer Success Managers',
  },
  {
    icon: TrendingUp,
    category: 'Sales & Marketing',
    roles: 'Digital Marketing Specialists | SEO/SEM Experts | Content Marketers | Social Media Managers | Email Marketing | Sales Development Reps | Account Managers | Marketing Analysts',
  },
  {
    icon: Palette,
    category: 'Creative & Design',
    roles: 'Graphic Designers | UI/UX Designers | Video Editors | 3D Artists | Animators | Illustrators | Creative Directors',
  },
  {
    icon: Briefcase,
    category: 'Operations & Administration',
    roles: 'Virtual Assistants | Executive Assistants | Project Managers | Operations Managers | HR Specialists | Administrative Coordinators',
  },
  {
    icon: Wrench,
    category: 'Engineering',
    roles: 'Mechanical Engineers | Electrical Engineers | Civil Engineers | Chemical Engineers | Industrial Engineers | CAD Designers',
  },
  {
    icon: Heart,
    category: 'Healthcare Specific',
    roles: 'Medical Coders | Medical Transcriptionists | Healthcare Administrators | Pharmacy Technicians | Health Information Managers',
  },
]

export default function RolesGrid() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-950 dark:to-purple-950/20 py-20 overflow-hidden">
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
          <div className="inline-block px-4 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            ROLES WE FILL
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            From Entry-Level to C-Suite: We Source Talent at Every Level
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Comprehensive talent solutions across all functions and seniority levels
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative h-full bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all hover:-translate-y-1">
                {/* Header with Icon and Category */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 flex items-center justify-center group-hover:from-purple-400/30 group-hover:to-purple-600/30 transition-all">
                    <role.icon className="w-6 h-6 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                    {role.category}
                  </h3>
                </div>

                {/* Roles List */}
                <div className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {role.roles.split(' | ').map((r, idx) => (
                    <span key={idx}>
                      {r}
                      {idx < role.roles.split(' | ').length - 1 && (
                        <span className="text-purple-400 mx-2">|</span>
                      )}
                    </span>
                  ))}
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
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Need a role not listed here? We can source any position.
          </p>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Request Custom Role
          </button>
        </motion.div>
      </div>
    </section>
  )
}
