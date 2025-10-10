import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection({ onClick }: { onClick: () => void }) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }


  return (
    <section className="relative min-h-screen  w-full pt-28 md:pt-54 pb-16 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Large Blob Shape Background */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#a855f7"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.1,87.1C-23,86.6,-37.9,82.6,-51.4,74.8C-64.9,67,-76.9,55.4,-83.8,41.2C-90.7,27,-92.5,10.2,-89.8,-5.3C-87.1,-20.8,-79.9,-35,-69.8,-46.8C-59.7,-58.6,-46.7,-68,-32.8,-74.8C-18.9,-81.6,-4.1,-85.8,9.5,-84.3C23.1,-82.8,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* Floating Circles */}
      <motion.div
        className="absolute top-40 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-40 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 opacity-15"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 opacity-10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end jus">
          {/* Left Content - 60% */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-neutral-900 dark:text-white">
              Expand Beyond Borders  {' '}
              <span className="text-purple-400"> <br className='hidden md:block' /> — Build </span> Your Global Workforce Effortlessly
            </h1>

            <p className="text-xl md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Connect with exceptional Indian talent across 15+ industries. Zero upfront fees. Weekly payments. Free replacements
              guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Schedule Free Consultation
              </Button>
              <button
                onClick={onClick}
                className="group flex items-center justify-center gap-2 text-lg font-semibold text-neutral-900 dark:text-white hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300"
              >
                Calculate Your Savings
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  No
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Processing Frees
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  15+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Countries
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  95%
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Client Retention
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  500+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  Successfukk Placements
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image - 40% */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/20 dark:to-purple-800/20 shadow-2xl overflow-hidden">
                {/* Placeholder for hero image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-purple-400/20 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Hero Image Placeholder
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-purple-400/10 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dotted Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>
    </section>
  )
}
