
import {  Instagram, Linkedin, Mail } from 'lucide-react'
import { ContactDialog } from '@/components/ContactDialog'
import { motion } from 'framer-motion'
import { scaleFromZero } from '@/variants/scale'
import { slideDown, slideRight, slideUp } from '@/variants/slides'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_40%,rgba(124,58,237,0.1),rgba(255,255,255,0.8))] dark:bg-[radial-gradient(80%_80%_at_50%_40%,rgba(124,58,237,0.25),rgba(0,0,0,0.8))]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/90 to-transparent dark:from-black/90 dark:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-black dark:to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 p-20 sm:py-24 md:py-28 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex mt-16 items-center gap-2 rounded-full border border-gray-300 dark:border-white/10 bg-gray-100/80 dark:bg-white/5 px-3 py-1 text-xs font-medium text-gray-700 dark:text-white/70 backdrop-blur">
            Advancing AI Technology
            <span className="h-1 w-1 rounded-full bg-fuchsia-400" />
          </span>

          <motion.h1 
          initial="hidden" animate="show"
          variants={scaleFromZero()}
          className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="text-gray-900 dark:text-white">Elevating Enterprises with </span>
            <span className="mt-2 ml-4 bg-gradient-to-br leading-[1.2] from-fuchsia-600 via-violet-600 to-fuchsia-700 dark:from-fuchsia-400 dark:via-violet-400 dark:to-fuchsia-500 bg-clip-text text-transparent">
              Cutting-Edge Technology, Staffing, and Outsourcing Excellence
            </span>

          </motion.h1>

          <motion.p
           initial="hidden" animate="show"
           variants={slideUp()}
          className="mx-auto mt-6 max-w-2xl text-base text-gray-600 dark:text-white/70 sm:text-lg">
            Trusted by leading enterprises worldwide to deliver scalable software solutions, strategic talent acquisition, and secure outsourcing services that drive operational excellence and accelerate digital transformation.
          </motion.p>

          <motion.div 
          initial="hidden" animate="show"
          variants={slideUp()}
          className="mt-10 flex items-center justify-center gap-4">
            <ContactDialog>
              <button className="inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-white/90 px-6 py-3 text-sm font-semibold text-white dark:text-black shadow-md transition hover:bg-gray-800 dark:hover:bg-white">
                Start your Journey
              </button>
            </ContactDialog>
          </motion.div>

          <motion.div
          initial="hidden" animate="show"
          variants={slideRight()} className="mx-auto mt-10 h-1 w-16 rounded bg-gray-400 dark:bg-white/70" />

          <div className="mt-6 flex items-center justify-center gap-4 text-gray-600 dark:text-white/70">
            <a href="#linkedin" aria-label="LinkedIn" className="rounded-full border border-gray-300 dark:border-white/10 p-2 transition hover:border-gray-400 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#github" aria-label="GitHub" className="rounded-full border border-gray-300 dark:border-white/10 p-2 transition hover:border-gray-400 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#email" aria-label="Email" className="rounded-full border border-gray-300 dark:border-white/10 p-2 transition hover:border-gray-400 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
