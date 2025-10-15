import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { ContactDialog } from '@/components/ContactDialog'

const countries = [
  { code: 'us', name: 'United States', savingsRate: 0.6, symbol: '$', flag: '🇺🇸' },
  { code: 'uk', name: 'United Kingdom', savingsRate: 0.6, symbol: '£', flag: '🇬🇧' },
  { code: 'germany', name: 'Germany', savingsRate: 0.6, symbol: '€', flag: '🇩🇪' },
  { code: 'switzerland', name: 'Switzerland', savingsRate: 0.6, symbol: 'CHF ', flag: '🇨🇭' },
  { code: 'canada', name: 'Canada', savingsRate: 0.6, symbol: 'CAD $', flag: '🇨🇦' },
  { code: 'australia', name: 'Australia', savingsRate: 0.6, symbol: 'AUD $', flag: '🇦🇺' },
  { code: 'singapore', name: 'Singapore', savingsRate: 0.6, symbol: 'SGD $', flag: '🇸🇬' },
  { code: 'hongkong', name: 'Hong Kong', savingsRate: 0.6, symbol: 'HKD $', flag: '🇭🇰' },
  { code: 'japan', name: 'Japan', savingsRate: 0.6, symbol: '¥', flag: '🇯🇵' },
  { code: 'china', name: 'China', savingsRate: 0.6, symbol: '¥', flag: '🇨🇳' },
]

export default function ROICalculator() {
  const [salary, setSalary] = useState(100000)
  const [displaySalary, setDisplaySalary] = useState(100000)
  const [selectedCountry, setSelectedCountry] = useState('us')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const currentCountry = countries.find((c) => c.code === selectedCountry) || countries[0]
  const savings = salary * currentCountry.savingsRate
  const annualSavings = savings
  const savingsPercentage = (savings / salary) * 100

  // Smooth number animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplaySalary(prev => {
        const diff = salary - prev
        if (Math.abs(diff) < 100) return salary
        return prev + diff * 0.1
      })
    }, 16)
    return () => clearInterval(interval)
  }, [salary])

  return (
    <section id="roi-calculator" className="relative w-full bg-neutral-900 dark:bg-neutral-950 py-20  overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-neutral-400">
            See how much you can save by outsourcing with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Circular Visualization */}
          <motion.div
            className="flex justify-center p-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80 over">
              {/* Background Circle */}
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                  className="text-neutral-800 dark:text-neutral-900 "
                />
                {/* Progress Circle */}
                <motion.circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: savingsPercentage / 100 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  style={{
                    strokeDasharray: 880,
                    strokeDashoffset: 880 * (1 - savingsPercentage / 100),
                    filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.5))',
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {currentCountry.symbol}{Math.round(displaySalary * currentCountry.savingsRate).toLocaleString()}
                </div>
                <div className="text-xl text-purple-400 font-semibold mb-1">
                  SAVED
                </div>
                <div className="text-sm text-neutral-400">ANNUALLY</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Slider and Details */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Country Selector */}
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">
                Select Country
              </label>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center justify-between hover:border-purple-400 transition-colors"
                >
                  <span className="text-white font-medium flex items-center gap-2">
                    <span className="text-xl">{currentCountry.flag}</span>
                    {currentCountry.name}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg overflow-hidden max-h-64 overflow-y-auto">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country.code)
                          setDropdownOpen(false)
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-purple-900/20 transition-colors ${selectedCountry === country.code
                          ? 'bg-purple-900/30 text-purple-400'
                          : 'text-white'
                          }`}
                      >
                        <div className="font-medium flex items-center gap-2">
                          <span className="text-xl">{country.flag}</span>
                          {country.name}
                        </div>
                        <div className="text-xs text-neutral-400">
                          60% savings
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Salary Input */}
            <div>
              <label className="block text-lg font-semibold text-white mb-2">
                Local Salary for This Position
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="50000"
                  max="200000"
                  step="5000"
                  value={salary}
                  onChange={e => setSalary(Number(e.target.value))}
                  className="w-full h-3 bg-neutral-800 rounded-full appearance-none cursor-pointer
                           [&::-webkit-slider-thumb]:appearance-none
                           [&::-webkit-slider-thumb]:w-8
                           [&::-webkit-slider-thumb]:h-8
                           [&::-webkit-slider-thumb]:rounded-full
                           [&::-webkit-slider-thumb]:bg-gradient-to-r
                           [&::-webkit-slider-thumb]:from-purple-400
                           [&::-webkit-slider-thumb]:to-purple-600
                           [&::-webkit-slider-thumb]:cursor-pointer
                           [&::-webkit-slider-thumb]:shadow-lg
                           [&::-webkit-slider-thumb]:hover:scale-110
                           [&::-webkit-slider-thumb]:transition-transform
                           [&::-moz-range-thumb]:w-8
                           [&::-moz-range-thumb]:h-8
                           [&::-moz-range-thumb]:rounded-full
                           [&::-moz-range-thumb]:bg-gradient-to-r
                           [&::-moz-range-thumb]:from-purple-400
                           [&::-moz-range-thumb]:to-purple-600
                           [&::-moz-range-thumb]:border-0
                           [&::-moz-range-thumb]:cursor-pointer
                           [&::-moz-range-thumb]:shadow-lg"
                  style={{
                    background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${((salary - 50000) / 150000) * 100
                      }%, #262626 ${((salary - 50000) / 150000) * 100}%, #262626 100%)`,
                  }}
                />
                <div className="flex justify-between text-sm text-neutral-400 mt-2">
                  <span>{currentCountry.symbol}50k</span>
                  <span className="text-xl font-bold text-white">
                    {currentCountry.symbol}{(salary / 1000).toFixed(0)}k
                  </span>
                  <span>{currentCountry.symbol}200k</span>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-4 bg-neutral-800/50 rounded-2xl p-6">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Local Cost (Annual)</span>
                <span className="text-xl font-bold text-white">
                  {currentCountry.symbol}{salary.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Our Cost (Annual)</span>
                <span className="text-xl font-bold text-white">
                  {currentCountry.symbol}{(salary * (1 - currentCountry.savingsRate)).toLocaleString()}
                </span>
              </div>
              <div className="h-px bg-neutral-700" />
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-semibold">Your Savings</span>
                <span className="text-2xl font-bold text-purple-400">
                  {currentCountry.symbol}{annualSavings.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Assumptions */}
            <div className="text-sm text-neutral-400 bg-neutral-800/30 rounded-xl p-4">
              <p className="mb-2">
                <strong className="text-white">Based on:</strong>
              </p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>60% average cost savings in {currentCountry.name}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Includes all overhead and benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>No hidden fees or additional costs</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <ContactDialog>
              <Button className="w-full bg-white text-purple-400 hover:bg-neutral-100 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started & Save Now
              </Button>
            </ContactDialog>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
