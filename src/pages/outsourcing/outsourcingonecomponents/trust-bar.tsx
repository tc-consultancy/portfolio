import { motion } from 'framer-motion'

const logos = [
  { name: 'Company 1', size: 'large' },
  { name: 'Company 2', size: 'medium' },
  { name: 'Company 3', size: 'large' },
  { name: 'Company 4', size: 'small' },
  { name: 'Company 5', size: 'medium' },
  { name: 'Company 6', size: 'large' },
  { name: 'Company 7', size: 'medium' },
  { name: 'Company 8', size: 'small' },
]

export default function TrustBar() {
  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-16 overflow-hidden">
      {/* Curved Wave Divider at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-neutral-50 dark:fill-neutral-900"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-8">
        {/* Small Centered Text */}
        <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-12">
          Trusted by
        </p>

        {/* Logo Platforms Container */}
        <div className="relative h-32">
          <motion.div
            className="flex gap-8 absolute"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, index) => {
              const sizeClasses = {
                small: 'w-24 h-16',
                medium: 'w-32 h-20',
                large: 'w-40 h-24',
              }
              
              const verticalOffset = {
                small: 'translate-y-4',
                medium: 'translate-y-0',
                large: 'translate-y-2',
              }

              return (
                <motion.div
                  key={`${logo.name}-${index}`}
                  className={`${sizeClasses[logo.size as keyof typeof sizeClasses]} ${
                    verticalOffset[logo.size as keyof typeof verticalOffset]
                  } flex-shrink-0`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-full h-full rounded-2xl bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center group cursor-pointer"
                    whileHover={{ y: -4 }}
                  >
                    {/* Logo Placeholder */}
                    <div className="text-center p-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 group-hover:text-purple-400 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {logo.name}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
