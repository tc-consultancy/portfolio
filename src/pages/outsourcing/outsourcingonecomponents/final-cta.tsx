import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ContactDialog } from '@/components/ContactDialog';

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function FinalCTA() {
  return (
    <section
      id="contact-section"
      className="relative w-full bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 py-20  overflow-hidden"
    >
      {/* Curved Wave Divider at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-neutral-950"
          />
        </svg>
      </div>

      {/* Decorative Circles */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-300/30 blur-2xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-300/30 blur-2xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-purple-300/20 blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Floating Container */}
        <motion.div
          className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          {/* Headline */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Still Have Questions?
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Don't let uncertainty cost you another day of inflated labor costs. Schedule a free 30-minute consultation and see exactly how much you could save.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactDialog>
            <Button
              className="px-12 py-6 text-lg font-semibold bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 0 40px rgba(168, 85, 247, 0.4)',
              }}
            >
              Talk to an Expert
            </Button>
            </ContactDialog>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">Or reach us directly:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <a href="mailto:hello@yourcompany.com" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                📧 info@tcconsultancy.com
              </a>
              <span className="hidden md:inline text-neutral-400">|</span>
              <a href="tel:+1XXXXXXXXX" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                📞 +919908884033 (US)
              </a>
              <span className="hidden md:inline text-neutral-400">|</span>
              <a href="tel:+44XXXXXXXXXX" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                📞 +919908884033 (UK)
              </a>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                4.9/5
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Client Rating
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                <Counter end={500} />+
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Happy Clients
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                <Counter end={98} />%
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Success Rate
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            className="text-center text-sm text-neutral-500 dark:text-neutral-500 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            No credit card required • Free consultation • 2-week risk-free trial
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
