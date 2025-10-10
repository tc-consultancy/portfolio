import { motion } from 'framer-motion'
import { Users, GraduationCap, Globe, Clock, Cpu, DollarSign, Heart } from 'lucide-react'

const advantages = [
  {
    icon: Users,
    title: "World's Largest English-Speaking Workforce",
    description: '1.3 billion people with 125+ million English speakers provide unmatched talent depth across all skill levels and industries.',
  },
  {
    icon: GraduationCap,
    title: 'Exceptional Education System',
    description: '2.6 million STEM graduates annually from 1,000+ engineering colleges including prestigious IITs, NITs, and management institutes.',
  },
  {
    icon: Globe,
    title: 'Proven Global Experience',
    description: 'Indian professionals power major global companies: Google, Microsoft, IBM, Accenture. They understand international business culture and work standards.',
  },
  {
    icon: Clock,
    title: 'Time Zone Advantage',
    description: 'Overlap with US evenings/mornings, EU afternoons, and APAC mornings enables round-the-clock productivity and faster project turnaround.',
  },
  {
    icon: Cpu,
    title: 'Technology Excellence',
    description: "India is the world's IT services leader with deep expertise in cutting-edge technologies: AI, cloud computing, data science, cybersecurity, and blockchain.",
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency Without Compromise',
    description: 'Lower cost of living means exceptional talent at 40-70% lower costs while maintaining or exceeding quality standards.',
  },
  {
    icon: Heart,
    title: 'Cultural Adaptability',
    description: 'Long history of working with global clients means Indian professionals adapt seamlessly to different work cultures, communication styles, and business practices.',
  },
]

export default function WhyIndia() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Why Indian Talent? The Strategic Advantage
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Key advantages that make India the world's leading talent destination
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-purple-400 dark:hover:border-purple-400 transition-all">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-purple-400/10 flex items-center justify-center mb-4 group-hover:bg-purple-400/20 transition-all">
                  <advantage.icon className="w-7 h-7 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
