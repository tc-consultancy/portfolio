import { ContactDialog } from '@/components/ContactDialog'
import { motion } from 'framer-motion'
import {
  Building2,
  Heart,
  GraduationCap,
  Cpu,
  Store,
  Factory,
  Truck,
  Film,
  Shield,
  Radio,
  ShoppingBag,
  Zap,
  Plane,
  Database,
} from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: 'Banking & Financial Services',
    description: 'Compliance analysts, risk managers, financial analysts, loan processors, investment researchers',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Software developers, QA engineers, DevOps specialists, cloud architects, data scientists',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Medical coders, billing specialists, health informatics, telemedicine support, claims processors',
  },
  {
    icon: Store,
    title: 'Retail',
    description: 'E-commerce managers, inventory analysts, customer service, merchandising coordinators',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Supply chain analysts, quality control, production planners, CAD designers, procurement specialists',
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Claims processors, underwriters, actuarial support, policy administrators, risk assessors',
  },
  {
    icon: Film,
    title: 'Media & Entertainment',
    description: 'Content creators, video editors, graphic designers, animation specialists, social media managers',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Curriculum developers, online tutors, educational content writers, administrative support',
  },
  {
    icon: Heart,
    title: 'Life Sciences',
    description: 'Research associates, clinical data managers, regulatory affairs, pharmacovigilance specialists',
  },
  {
    icon: Radio,
    title: 'Communications',
    description: 'Technical writers, customer support, network analysts, telecommunications specialists',
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Goods',
    description: 'Product managers, brand analysts, market researchers, supply chain coordinators',
  },
  {
    icon: Zap,
    title: 'Energy & Utilities',
    description: 'Engineering support, data analysts, project coordinators, GIS specialists',
  },
  {
    icon: Truck,
    title: 'Transportation & Logistics',
    description: 'Route optimization analysts, freight coordinators, fleet managers, logistics planners',
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    description: 'Reservation agents, travel coordinators, revenue analysts, customer experience specialists',
  },
  {
    icon: Database,
    title: 'Information Services',
    description: 'Data entry specialists, research analysts, content moderators, information architects',
  },
]

export default function IndustriesGrid() {
  return (
    <section
      id="industries-section"
      className="relative w-full bg-white dark:bg-neutral-950 py-20 overflow-hidden"
    >
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
            INDUSTRIES WE SERVE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Trusted Across 15+ Global Industries
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            From banking to technology, we provide specialized talent across every major industry
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative h-full bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-purple-400/10 flex items-center justify-center mb-4 group-hover:bg-purple-400/20 transition-all">
                  <industry.icon className="w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Don't see your industry? We serve all sectors.
          </p>
           <ContactDialog>
          <button className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Tell Us Your Industry
          </button>
           </ContactDialog>
        </motion.div>
      </div>
    </section>
  )
}
