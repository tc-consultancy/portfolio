
import {
  Building2,
  ShoppingCart,
  Stethoscope,
  ShieldCheck,
  Factory,
  GraduationCap,
  Plane,
  Banknote,
  Car,
  Cpu,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { slideDown, slideUp } from '@/variants/slides'

const industries = [
  { title: 'Enterprise', icon: Building2, color: 'text-violet-400', description: 'Unlocking scalable growth with next-gen ERP solutions and workflow automation.' },
  { title: 'E‑commerce', icon: ShoppingCart, color: 'text-fuchsia-400', description: 'Crafting immersive digital storefronts and seamless real-time inventory systems.' },
  { title: 'Healthcare', icon: Stethoscope, color: 'text-emerald-400', description: 'Engineering HIPAA-compliant systems for secure, streamlined patient care.' },
  { title: 'Security', icon: ShieldCheck, color: 'text-cyan-400', description: 'Building ironclad security architectures with proactive monitoring and access control.' },
  { title: 'Manufacturing', icon: Factory, color: 'text-amber-400', description: 'Driving smart factory innovation with optimized production and quality control.' },
  { title: 'Education', icon: GraduationCap, color: 'text-sky-400', description: 'Revolutionizing learning experiences with scalable LMS and student management.' },
  { title: 'Aviation', icon: Plane, color: 'text-indigo-400', description: 'Elevating aviation safety and efficiency with advanced operational workflows.' },
  { title: 'Fintech', icon: Banknote, color: 'text-lime-400', description: 'Simplifying finance with secure payment solutions and streamlined compliance.' },
  { title: 'Automotive', icon: Car, color: 'text-blue-400', description: 'Powering the future of mobility with telematics and optimized dealer operations.' },
  { title: 'AI & ML', icon: Cpu, color: 'text-pink-400', description: 'Deploying intelligent systems with cutting-edge data pipelines and responsible AI.' },
]

export default function Industries() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-black py-20 text-gray-900 dark:text-white sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(124,58,237,0.08),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(100%_100%_at_50%_0%,rgba(124,58,237,0.18),rgba(10,10,10,0.9))]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">

            <p className='md:overflow-hidden'>
              <motion.span
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={slideUp(50, 0.5, 'easeInOut')}
                className="inline-block  bg-gradient-to-br from-violet-600 via-fuchsia-600 to-violet-700 dark:from-violet-400 dark:via-fuchsia-400 dark:to-violet-500 bg-clip-text text-transparent">
                Industries We
              </motion.span>
            </p>
            <p className='md:overflow-hidden'>
              <motion.span
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={slideDown(60, 0.5, 'easeInOut')}
                className="inline-block bg-gradient-to-br from-violet-600 via-fuchsia-600 to-violet-700 dark:from-violet-400 dark:via-fuchsia-400 dark:to-violet-500 bg-clip-text text-transparent">
                Empower.
              </motion.span>
            </p>

          </h2>
          <p className="mt-8 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Built for your domain. Tuned for real‑world outcomes.
          </p>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-white/70">
            We provide expert consultancy and tailored solutions for each industry's unique operating model. Our mission is to help you innovate faster, enhance security, and scale with confidence.
          </p>
        </div>

        <motion.ul
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
          }}
        >
          {industries.map((item) => (
            <li
              key={item.title}
              className="group rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-100/80 dark:bg-white/5 p-6 hover:border-gray-400 dark:hover:border-white/20 hover:bg-gray-200/80 dark:hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-white/5 ring-1 ring-gray-200 dark:ring-white/10">
                  {(() => {
                    const Icon = item.icon
                    return <Icon className={`h-6 w-6 ${item.color}`} />
                  })()}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-white/60">Solutions</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600 dark:text-white/70">{item.description}</p>
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center rounded-full border border-gray-300 dark:border-white/20 px-3 py-1 text-xs font-medium text-gray-700 dark:text-white/80 transition hover:border-gray-400 dark:hover:border-white/40 hover:text-gray-900 dark:hover:text-white">
                  Explore
                </button>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
