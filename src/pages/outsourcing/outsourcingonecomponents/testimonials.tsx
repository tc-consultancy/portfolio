import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: 'Transformed Our Business Operations',
    text: "Working with TC Consulting Services has been transformative for our business. The team they provided integrated seamlessly into our operations, bringing expertise we couldn't find locally. We're now operating more efficiently than ever, and the cost savings have allowed us to invest in expansion. Best decision we made this year.",
    name: 'Ritesh Kumar Patel',
    title: 'CEO, Kavya Foods Inc.',
    location: 'California, USA',
    highlight: '$129K annual savings',
    size: 'medium',
  },
  {
    quote: 'Outstanding Service & Results',
    text: "Outstanding service from TC Consulting Services from day one. Our guest satisfaction scores have never been higher, and we saved over $250k annually. The team feels like an extension of our own staff, not outsourced help. They understand hospitality and deliver exceptional results consistently.",
    name: 'Perry Mehta',
    title: 'CEO, Ptosh Hotels',
    location: 'Florida, USA',
    highlight: '$259K annual savings',
    size: 'medium',
  },
  {
    quote: 'Technical Excellence & HR Support',
    text: "TC Consulting Services delivered exactly what we needed when we needed it. The technical team is top-notch, and the HR support has been invaluable for our growth. We went from struggling to hire to having a robust pipeline of qualified candidates. Highly professional and results-driven.",
    name: 'Nadeem dilbar',
    title: 'CEO, Sierra Tech Solutions',
    location: 'Texas, USA',
    highlight: '$200K annual savings',
    size: 'medium',
  },
  {
    quote: 'Quality That Exceeded Expectations',
    text: "The quality of talent from TC Consulting Services exceeded our expectations. We completed multiple client projects ahead of schedule and under budget. The team adapted quickly to our processes and client needs. This partnership has allowed us to take on bigger projects with confidence.",
    name: 'Dilbar',
    title: 'CEO, Dilbar Digital Agency',
    location: 'New York, USA',
    highlight: '$144K annual savings',
    size: 'small',
  },
  {
    quote: 'Family Business Transformation',
    text: "TC Consulting Services transformed our family business completely. We're now competitive with larger chains while maintaining our personal touch. The savings have been incredible, but more importantly, our guests are happier and our bookings are up. We couldn't have done this without their expertise.",
    name: 'Anjita Patel',
    title: 'Owner, Heart of Wildwood Motel',
    location: 'New Jersey, USA',
    highlight: '$108K annual savings',
    size: 'large',
  },
  {
    quote: 'Professionalism & Expertise',
    text: "TC Consulting Services brought professionalism and expertise we never had before. Our guests notice the difference, and our bottom line shows it. Best decision we made.",
    name: 'Sanjay Patel',
    title: 'Owner, Royal Court Motel',
    location: 'USA',
    highlight: '$111K annual savings',
    size: 'medium',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-950 dark:to-purple-950/20 py-20 overflow-hidden">
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Real results from real partnerships across the globe
          </p>
        </motion.div>

        {/* Minimalistic Slider */}
        <div className="relative max-w-3xl mx-auto">
          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-400/10 hover:bg-purple-400 flex items-center justify-center transition-all group"
          >
            <ChevronLeft className="w-5 h-5 text-purple-400 group-hover:text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-400/10 hover:bg-purple-400 flex items-center justify-center transition-all group"
          >
            <ChevronRight className="w-5 h-5 text-purple-400 group-hover:text-white" />
          </button>

          {/* Card - Fixed Height */}
          <div className="relative h-[450px] md:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-10 overflow-hidden"
              >
                {/* Decorative Tilted Box - Different for each testimonial */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 opacity-5 transition-all duration-500`}
                  style={{
                    background: `linear-gradient(135deg, ${['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#6366f1'][currentIndex % 6]
                      }, ${['#a855f7', '#f472b6', '#fbbf24', '#34d399', '#60a5fa', '#818cf8'][currentIndex % 6]
                      })`,
                    transform: `rotate(${15 + currentIndex * 5}deg)`,
                    borderRadius: '20px',
                  }}
                />

                {/* Another decorative element */}
                <div
                  className={`absolute -bottom-10 -left-10 w-32 h-32 opacity-5 transition-all duration-500`}
                  style={{
                    background: `linear-gradient(135deg, ${['#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#6366f1', '#8b5cf6'][currentIndex % 6]
                      }, ${['#f472b6', '#fbbf24', '#34d399', '#60a5fa', '#818cf8', '#a855f7'][currentIndex % 6]
                      })`,
                    transform: `rotate(${-20 - currentIndex * 5}deg)`,
                    borderRadius: '20px',
                  }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <Quote className="w-10 h-10 text-purple-400/20 mb-6" />

                  <span className="inline-block px-3 py-1 rounded-full bg-purple-400/10 text-purple-600 dark:text-purple-400 text-xs font-medium mb-4 w-fit">
                    {testimonials[currentIndex].highlight}
                  </span>

                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                    "{testimonials[currentIndex].quote}"
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 flex-1">
                    {testimonials[currentIndex].text}
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center text-white text-sm font-semibold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-white text-sm">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {testimonials[currentIndex].title} • {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${index === currentIndex ? 'w-6 bg-purple-400' : 'w-1.5 bg-neutral-300 dark:bg-neutral-700'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              50+
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Happy Clients
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              4.9/5
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Average Rating
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              94%
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Retention Rate
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              12+
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Countries Served
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
