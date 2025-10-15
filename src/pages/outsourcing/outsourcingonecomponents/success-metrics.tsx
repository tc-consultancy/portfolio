import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Users, Award, Globe, MapPin, Wallet } from 'lucide-react'

const metrics = [
  {
    icon: Users,
    value: '50+',
    label: 'Successful Placements Globally',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: DollarSign,
    value: '60%',
    label: 'Average Cost Reduction',
    color: 'from-green-400 to-green-600',
  },

  {
    icon: Award,
    value: '94%',
    label: 'Client Retention Rate',
    color: 'from-pink-400 to-pink-600',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Candidate Success Rate',
    color: 'from-orange-400 to-orange-600',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Industries Served',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: MapPin,
    value: '12',
    label: 'Countries We Support',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    icon: Wallet,
    value: '$10M+',
    label: 'Total Client Savings to Date',
    color: 'from-emerald-400 to-emerald-600',
  },
]

export default function SuccessMetrics() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20 overflow-hidden">
      {/* Large Blob Backgrounds */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#a855f7"
            d="M47.1,-57.1C59.9,-49.3,68.4,-33.6,71.8,-16.6C75.2,0.4,73.5,18.7,65.4,33.3C57.3,47.9,42.8,58.8,26.3,64.5C9.8,70.2,-8.7,70.7,-25.5,65.8C-42.3,60.9,-57.4,50.6,-65.8,36.2C-74.2,21.8,-75.9,3.3,-72.8,-13.9C-69.7,-31.1,-61.8,-47,-48.9,-54.9C-36,-62.8,-18,-62.7,-0.5,-62.1C17,-61.5,34.3,-64.9,47.1,-57.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#a855f7"
            d="M39.5,-65.5C51.4,-58.1,61.4,-47.3,68.8,-34.8C76.2,-22.3,81,-8.2,80.3,5.7C79.6,19.6,73.4,33.3,64.3,44.8C55.2,56.3,43.2,65.6,29.7,71.2C16.2,76.8,1.2,78.7,-13.5,76.8C-28.2,74.9,-42.6,69.2,-54.8,60.1C-67,51,-77,38.5,-81.7,24.3C-86.4,10.1,-85.8,-5.8,-80.5,-19.9C-75.2,-34,-65.2,-46.3,-52.8,-53.5C-40.4,-60.7,-26.6,-62.8,-13.3,-64.2C0,-65.6,27.6,-72.9,39.5,-65.5Z"
            transform="translate(100 100)"
          />
        </svg>
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
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Real results from real partnerships
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-6 overflow-hidden hover:shadow-xl transition-all">
                {/* Small Blob Background */}
                <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                      fill="currentColor"
                      className="text-purple-400"
                      d="M47.1,-57.1C59.9,-49.3,68.4,-33.6,71.8,-16.6C75.2,0.4,73.5,18.7,65.4,33.3C57.3,47.9,42.8,58.8,26.3,64.5C9.8,70.2,-8.7,70.7,-25.5,65.8C-42.3,60.9,-57.4,50.6,-65.8,36.2C-74.2,21.8,-75.9,3.3,-72.8,-13.9C-69.7,-31.1,-61.8,-47,-48.9,-54.9C-36,-62.8,-18,-62.7,-0.5,-62.1C17,-61.5,34.3,-64.9,47.1,-57.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <metric.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <div className="relative text-4xl font-bold text-neutral-900 dark:text-white mb-2">
                  {metric.value}
                </div>

                {/* Label */}
                <p className="relative text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
