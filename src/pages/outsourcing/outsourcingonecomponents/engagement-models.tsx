import { img_outsourcing } from '@/assets'
import { ContactDialog } from '@/components/ContactDialog'
import { motion } from 'framer-motion'
import { Users, Target, Layers, UserPlus } from 'lucide-react'

const models = [
  {
    icon: Users,
    title: 'Dedicated Team',
    description: 'Full team working exclusively on your projects',
    features: ['100% dedicated', 'Long-term partnership', 'Full control'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Target,
    title: 'Project-Based',
    description: 'Fixed-scope projects with defined deliverables',
    features: ['Clear milestones', 'Fixed pricing', 'Defined timeline'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Layers,
    title: 'Hybrid Model',
    description: 'Mix of dedicated and project resources',
    features: ['Flexible scaling', 'Best of both worlds', 'Adaptive approach'],
    color: 'from-pink-400 to-pink-600',
  },
  {
    icon: UserPlus,
    title: 'Staff Augmentation',
    description: 'Individual professionals to complement your team',
    features: ['Quick onboarding', 'Seamless integration', 'Skill-specific'],
    color: 'from-indigo-400 to-indigo-600',
  },
]

export default function EngagementModels() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-950 dark:to-purple-950/20 py-20  overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Choose the Model That Fits Your Needs
        </motion.h2>

        {/* Bento Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6  auto-rows-fr md:auto-rows-min">
            {/* Card 1 - Large Left */}
            <motion.div
              className="md:col-span-7 md:row-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-60 rounded-3xl mb-4 flex items-center justify-center"  >
                <img src={img_outsourcing} alt="image" className=' h-full w-full object-cover' />
              </div>
              <motion.div
                className="flex-1 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    {(() => {
                      const Icon = models[0].icon
                      return <Icon className="w-10 h-10 text-white" />
                    })()}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{models[0].title}</h3>
                  <p className="text-lg text-white/90 mb-6">{models[0].description}</p>
                  <div className="space-y-3">
                    {models[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2 - Top Right */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                className="h-full bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-xl border border-neutral-200 dark:border-neutral-800 group cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${models[1].color} flex items-center justify-center mb-2`}>
                  {(() => {
                    const Icon = models[1].icon
                    return <Icon className="w-8 h-8 text-white" />
                  })()}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{models[1].title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{models[1].description}</p>
                <div className="space-y-2">
                  {models[1].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Card 3 - Middle Right */}
            <motion.div
              className="md:col-span-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-gradient-to-br from-pink-500 to-pink-700 rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                    {(() => {
                      const Icon = models[2].icon
                      return <Icon className="w-8 h-8 text-white" />
                    })()}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{models[2].title}</h3>
                  <p className="text-sm text-white/90 mb-2">{models[2].description}</p>
                  <div className="space-y-2">
                    {models[2].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-white/90">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 4 - Bottom Full Width */}
            <motion.div
              className="md:col-span-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-800 group cursor-pointer"
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${models[3].color} flex items-center justify-center flex-shrink-0`}>
                    {(() => {
                      const Icon = models[3].icon
                      return <Icon className="w-10 h-10 text-white" />
                    })()}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">{models[3].title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">{models[3].description}</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    {models[3].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-400" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Which model is right for you? Talk to an expert
          </p>
           <ContactDialog>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </button>
           </ContactDialog>
        </motion.div>
      </div>
    </section>
  )
}
