import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function ROICalculator() {
  const [salary, setSalary] = useState(100000)
  const [displaySalary, setDisplaySalary] = useState(100000)
  
  const savings = salary * 0.4
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
    <section className="relative w-full bg-neutral-900 dark:bg-neutral-950 py-20  overflow-hidden">
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
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80">
              {/* Background Circle */}
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="20"
                  className="text-neutral-800 dark:text-neutral-900"
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
                    filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))',
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
                  ${Math.round(displaySalary * 0.4).toLocaleString()}
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
                    background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${
                      ((salary - 50000) / 150000) * 100
                    }%, #262626 ${((salary - 50000) / 150000) * 100}%, #262626 100%)`,
                  }}
                />
                <div className="flex justify-between text-sm text-neutral-400 mt-2">
                  <span>$50k</span>
                  <span className="text-xl font-bold text-white">
                    ${(salary / 1000).toFixed(0)}k
                  </span>
                  <span>$200k</span>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-4 bg-neutral-800/50 rounded-2xl p-6">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Local Cost (Annual)</span>
                <span className="text-xl font-bold text-white">
                  ${salary.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Our Cost (Annual)</span>
                <span className="text-xl font-bold text-white">
                  ${(salary * 0.6).toLocaleString()}
                </span>
              </div>
              <div className="h-px bg-neutral-700" />
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-semibold">Your Savings</span>
                <span className="text-2xl font-bold text-purple-400">
                  ${annualSavings.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Assumptions */}
            <div className="text-sm text-neutral-400 bg-neutral-800/30 rounded-xl p-4">
              <p className="mb-2">
                <strong className="text-white">Based on:</strong>
              </p>
              <ul className="space-y-1 list-disc list-inside">
                <li>40% average cost savings</li>
                <li>Includes all overhead and benefits</li>
                <li>No hidden fees or additional costs</li>
              </ul>
            </div>

            {/* CTA */}
            <Button className="w-full bg-white text-purple-400 hover:bg-neutral-100 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started & Save Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
