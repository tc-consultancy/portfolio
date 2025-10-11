import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: 'Transformed Our Economics Overnight',
    text: 'We were burning $180K monthly on our development team in Seattle. Within two months of partnering with [Company], we had an equally skilled team at $68K monthly. The $1.3M annual savings allowed us to invest in marketing and accelerate growth. Best business decision we made last year.',
    name: 'Jennifer Martinez',
    title: 'CFO, CloudTech Solutions',
    location: 'San Francisco, USA',
    highlight: '$1.3M annual savings',
    size: 'large',
  },
  {
    quote: 'Quality That Exceeded Our Standards',
    text: "I was honestly skeptical about outsourcing critical accounting functions. The team they provided wasn't just competent— they brought process improvements we hadn't considered. Our close process went from 15 days to 7 days, and accuracy actually improved. The £380K we're saving annually is reinvested in client acquisition.",
    name: 'David Thompson',
    title: 'Finance Director, Thompson & Associates',
    location: 'London, UK',
    highlight: '15 to 7 days close process',
    size: 'medium',
  },
  {
    quote: 'The Flexibility We Desperately Needed',
    text: 'As a seasonal business, the weekly payment model was perfect for us. We scaled from 10 support agents to 35 during the holidays, then back to 12 in January. No severance costs, no complicated contracts. Just flexibility when we needed it most. Our customer satisfaction scores have never been higher.',
    name: 'Emma Schneider',
    title: 'Operations Manager, Alpine Sports Retail',
    location: 'Zurich, Switzerland',
    highlight: 'Scaled 10 → 35 agents seamlessly',
    size: 'medium',
  },
  {
    quote: 'They Get Our Culture',
    text: "Finding engineers with fintech experience who could also understand our compliance requirements seemed impossible. The team sourced candidates who not only had the technical skills but understood regulatory frameworks. Two years later, our outsourced team feels like they've been with us from day one.",
    name: 'Rajesh Patel',
    title: 'CTO, PayStream Financial',
    location: 'Singapore',
    highlight: '2 years strong partnership',
    size: 'small',
  },
  {
    quote: 'Speed to Market Advantage',
    text: 'We needed to launch in three markets simultaneously but couldn\'t afford to hire locally in each region. They helped us build localized support teams for each market at a third of the cost. We launched on time, with 24/7 coverage, and maintained quality across all regions. Revenue is up 340% year-over-year.',
    name: 'Maria Rodriguez',
    title: 'CEO, GlobalEdu Platform',
    location: 'Madrid, Spain',
    highlight: '340% revenue growth',
    size: 'large',
  },
  {
    quote: 'Not Just Cost Savings—Strategic Value',
    text: "Yes, we save $2.1M annually. But the real value is having 24/7 development cycles. Our US team hands off to our India team every evening. We've essentially doubled our development velocity while cutting costs. Products that took 6 months now ship in 3.",
    name: 'Andrew Wilson',
    title: 'VP of Engineering, DataViz Analytics',
    location: 'Toronto, Canada',
    highlight: '2x development velocity',
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
              500+
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
