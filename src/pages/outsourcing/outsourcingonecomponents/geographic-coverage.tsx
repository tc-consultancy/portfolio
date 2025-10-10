import { motion } from 'framer-motion'
import { TrendingDown } from 'lucide-react'

const markets = [
  {
    country: 'United States',
    flag: '🇺🇸',
    avgSalary: '$110,000 - $180,000',
    ourCost: '$40,000 - $70,000',
    savings: '60-65%',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    avgSalary: '£40,000 - £75,000',
    ourCost: '£15,000 - £30,000',
    savings: '58-62%',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    avgSalary: '€50,000 - €85,000',
    ourCost: '€18,000 - €35,000',
    savings: '60-64%',
  },
  {
    country: 'Switzerland',
    flag: '🇨🇭',
    avgSalary: 'CHF 85,000 - CHF 140,000',
    ourCost: 'CHF 32,000 - CHF 55,000',
    savings: '60-62%',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    avgSalary: 'CAD $65,000 - CAD $120,000',
    ourCost: 'CAD $25,000 - CAD $48,000',
    savings: '58-62%',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    avgSalary: 'AUD $75,000 - AUD $130,000',
    ourCost: 'AUD $28,000 - AUD $52,000',
    savings: '60-63%',
  },
  {
    country: 'Singapore',
    flag: '🇸🇬',
    avgSalary: 'SGD $60,000 - SGD $110,000',
    ourCost: 'SGD $23,000 - SGD $44,000',
    savings: '58-62%',
  },
  {
    country: 'Hong Kong',
    flag: '🇭🇰',
    avgSalary: 'HKD $400,000 - HKD $750,000',
    ourCost: 'HKD $155,000 - HKD $295,000',
    savings: '60-61%',
  },
  {
    country: 'Japan',
    flag: '🇯🇵',
    avgSalary: '¥5.5M - ¥10M',
    ourCost: '¥2.1M - ¥4M',
    savings: '60-62%',
  },
  {
    country: 'China',
    flag: '🇨🇳',
    avgSalary: '¥200,000 - ¥400,000',
    ourCost: '¥75,000 - ¥160,000',
    savings: '58-62%',
  },
]

export default function GeographicCoverage() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-950 dark:to-purple-950/20 py-20 overflow-hidden">
      {/* Blob Decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#a855f7"
            d="M44.3,-76.7C57.1,-68.1,67.4,-54.9,74.7,-40.1C82,-25.3,86.3,-8.9,84.9,6.9C83.5,22.7,76.4,37.9,66.8,50.3C57.2,62.7,45.1,72.3,31.2,77.8C17.3,83.3,1.6,84.7,-14.3,83.3C-30.2,81.9,-46.3,77.7,-59.8,69.1C-73.3,60.5,-84.2,47.5,-88.7,32.8C-93.2,18.1,-91.3,1.7,-86.8,-13.3C-82.3,-28.3,-75.2,-41.9,-64.8,-52.8C-54.4,-63.7,-40.7,-71.9,-26.3,-79.3C-11.9,-86.7,3.1,-93.3,18.7,-92.5C34.3,-91.7,50.5,-83.5,44.3,-76.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-80 h-80 opacity-5">
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
          <div className="inline-block px-4 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            GEOGRAPHIC COVERAGE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Supporting Companies in High-Cost Markets Worldwide
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Significant cost savings across all major markets
          </p>
        </motion.div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {markets.map((market, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="relative bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all overflow-hidden">
                {/* Small Blob */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-5">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                      fill="#a855f7"
                      d="M47.1,-57.1C59.9,-49.3,68.4,-33.6,71.8,-16.6C75.2,0.4,73.5,18.7,65.4,33.3C57.3,47.9,42.8,58.8,26.3,64.5C9.8,70.2,-8.7,70.7,-25.5,65.8C-42.3,60.9,-57.4,50.6,-65.8,36.2C-74.2,21.8,-75.9,3.3,-72.8,-13.9C-69.7,-31.1,-61.8,-47,-48.9,-54.9C-36,-62.8,-18,-62.7,-0.5,-62.1C17,-61.5,34.3,-64.9,47.1,-57.1Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                {/* Country Header */}
                <div className="relative flex items-center gap-3 mb-4">
                  <span className="text-4xl">{market.flag}</span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {market.country}
                  </h3>
                </div>

                {/* Salary Comparison */}
                <div className="relative space-y-3">
                  {/* Average Salary */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Average Salary:
                    </span>
                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {market.avgSalary}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dashed border-neutral-300 dark:border-neutral-700" />

                  {/* Our Cost */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Our Cost:
                    </span>
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                      {market.ourCost}
                    </span>
                  </div>

                  {/* Savings Badge */}
                  <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white">
                      <TrendingDown className="w-4 h-4" />
                      <span className="text-sm font-bold">Your Savings: {market.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            * Savings based on average professional salaries. Actual savings may vary by role and experience level.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
