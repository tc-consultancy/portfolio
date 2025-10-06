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
} from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: 'Banking & Financial Services',
    description: 'Compliance specialists, financial analysts, risk managers, and regulatory experts for banking and fintech operations',
    size: 'large',
    hasBlob: true,
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-trained administrators, patient coordinators, and medical billing specialists',
    size: 'small',
    hasBlob: false,
  },
  {
    icon: Store,
    title: 'Retail & E-commerce',
    description: 'Inventory analysts, customer service teams, supply chain coordinators, and merchandising experts',
    size: 'large',
    hasBlob: true,
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Production planners, quality control specialists, and operations managers',
    size: 'small',
    hasBlob: false,
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Software developers, product managers, QA engineers, and technical support teams',
    size: 'medium',
    hasBlob: true,
  },
  {
    icon: Truck,
    title: 'Transportation & Logistics',
    description: 'Fleet coordinators, route optimization specialists, and warehouse management teams',
    size: 'medium',
    hasBlob: false,
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'EdTech specialists, curriculum developers, and student support coordinators',
    size: 'small',
    hasBlob: true,
  },
  {
    icon: Film,
    title: 'Media & Entertainment',
    description: 'Content managers, digital marketing teams, and production coordinators',
    size: 'medium',
    hasBlob: false,
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
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Specialized Talent Across All Industries
        </motion.h2>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">
          {industries.map((industry, index) => {
            const sizeClasses = {
              small: 'md:col-span-1 lg:col-span-2 md:row-span-1',
              medium: 'md:col-span-2 lg:col-span-2 md:row-span-1',
              large: 'md:col-span-2 lg:col-span-3 md:row-span-2',
            }

            const iconSizes = {
              small: 'w-10 h-10',
              medium: 'w-12 h-12',
              large: 'w-16 h-16',
            }

            return (
              <motion.div
                key={index}
                className={`relative group cursor-pointer ${
                  sizeClasses[industry.size as keyof typeof sizeClasses]
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`relative h-full rounded-3xl overflow-hidden transition-all duration-300 ${
                    industry.hasBlob
                      ? 'bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-neutral-900'
                      : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800'
                  } group-hover:shadow-2xl`}
                >
                  {/* Blob Background */}
                  {industry.hasBlob && (
                    <div className="absolute inset-0 opacity-5">
                      <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                      >
                        <path
                          fill="#a855f7"
                          d="M47.1,-57.1C59.9,-49.3,68.4,-33.6,71.8,-16.6C75.2,0.4,73.5,18.7,65.4,33.3C57.3,47.9,42.8,58.8,26.3,64.5C9.8,70.2,-8.7,70.7,-25.5,65.8C-42.3,60.9,-57.4,50.6,-65.8,36.2C-74.2,21.8,-75.9,3.3,-72.8,-13.9C-69.7,-31.1,-61.8,-47,-48.9,-54.9C-36,-62.8,-18,-62.7,-0.5,-62.1C17,-61.5,34.3,-64.9,47.1,-57.1Z"
                          transform="translate(100 100)"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-purple-400/10 flex items-center justify-center group-hover:bg-purple-400/20 transition-all duration-300">
                        <industry.icon
                          className={`${
                            iconSizes[industry.size as keyof typeof iconSizes]
                          } text-purple-400 group-hover:text-purple-500 group-hover:rotate-12 transition-all duration-300`}
                        />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-purple-400 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {industry.title}
                      </h3>
                      
                      {/* Description - shows on larger cards */}
                      {industry.size === 'large' && (
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                          {industry.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
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
          <button className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Tell Us Your Industry
          </button>
        </motion.div>
      </div>
    </section>
  )
}
