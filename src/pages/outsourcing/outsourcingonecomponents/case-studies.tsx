import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Users, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    company: 'Kavya Foods Inc.',
    industry: 'Food & Hospitality',
    teamSize: 8,
    roles: [
      'Revenue Manager',
      'Web Developer',
      'Inventory Management',
      'Offshore Manager',
      'Digital Marketing Services',
      'Accounting Services',
    ],
    challenge:
      'A growing food service company struggling with high operational costs and difficulty finding specialized talent across multiple departments. Manual processes were slowing growth.',
    solution:
      'We assembled a dedicated 8-person team spanning revenue management, digital operations, and financial services. Implemented streamlined processes and provided ongoing support.',
    results: [
      'Reduced annual operational costs from $216,000 to $86,400',
      'Automated inventory and accounting processes',
      'Increased revenue visibility by 60%',
      'Improved online presence and customer engagement',
    ],
    beforeCost: 216000,
    afterCost: 86400,
    savings: 129600,
    savingsPercent: 60,
    testimonial:
      "TC Consulting Services integrated seamlessly into our operations. We're now operating more efficiently than ever, and the cost savings have allowed us to invest in expansion.",
    testimonialAuthor: 'Operations Director',
    testimonialCompany: 'Kavya Foods Inc.',
  },
  {
    company: 'Ptosh Hotel',
    industry: 'Hospitality',
    teamSize: 12,
    roles: [
      'Revenue Manager',
      'Guest Service Representative',
      'Inventory Management',
      'Offshore Manager',
      'Digital Marketing Services',
      'Accounting Services',
    ],
    challenge:
      'A boutique hotel chain needed to scale operations across multiple properties while managing rising labor costs. Guest satisfaction was declining due to understaffing.',
    solution:
      'Deployed a 12-person team covering guest services, revenue optimization, and back-office operations. Provided 24/7 support across all time zones.',
    results: [
      'Reduced annual costs from $432,000 to $172,800',
      'Improved guest satisfaction scores by 35%',
      'Increased direct bookings by 45%',
      'Streamlined multi-property management',
    ],
    beforeCost: 432000,
    afterCost: 172800,
    savings: 259200,
    savingsPercent: 60,
    testimonial:
      'Outstanding service from TC Consulting Services. Our guest satisfaction scores have never been higher, and we saved over $250k annually. The team feels like an extension of our own.',
    testimonialAuthor: 'General Manager',
    testimonialCompany: 'Ptosh Hotel',
  },
  {
    company: 'Saira Enterprises',
    industry: 'Technology & IT Services',
    teamSize: 10,
    roles: [
      'Software Engineers',
      'Product Development Support',
      'HR Services',
      'HR Candidates',
      'Staffing Services',
    ],
    challenge:
      'A fast-growing IT services company needed end-to-end product development support and HR infrastructure to scale rapidly without compromising quality.',
    solution:
      'Provided a 10-person team combining technical expertise and HR operations. Established complete recruitment and development pipelines.',
    results: [
      'Saved $200,000 annually on operational costs',
      'Delivered 3 major product releases on schedule',
      'Built scalable HR infrastructure',
      'Reduced time-to-hire by 50%',
    ],
    beforeCost: 350000,
    afterCost: 150000,
    savings: 200000,
    savingsPercent: 57,
    testimonial:
      'They delivered exactly what we needed. The technical team is top-notch, and the HR support has been invaluable for our growth.',
    testimonialAuthor: 'CEO',
    testimonialCompany: 'Saira Enterprises',
  },
  {
    company: 'Rivonix LLC',
    industry: 'Technology',
    teamSize: 5,
    roles: [
      'Software Engineers',
      'Web Developers',
      'Digital Marketing Services',
    ],
    challenge:
      'A software company needed to expand their development team quickly for a major client project while keeping costs under control.',
    solution:
      'Assembled a 5-person technical team with full-stack capabilities and digital marketing support. Integrated directly with existing workflows.',
    results: [
      'Reduced costs from $240,000 to $96,000 annually',
      'Delivered project 3 weeks ahead of schedule',
      'Increased development velocity by 60%',
      'Expanded service offerings',
    ],
    beforeCost: 240000,
    afterCost: 96000,
    savings: 144000,
    savingsPercent: 60,
    testimonial:
      'The quality of talent exceeded our expectations. We completed our project ahead of schedule and under budget. Highly recommend.',
    testimonialAuthor: 'CTO',
    testimonialCompany: 'Rivonix LLC',
  },
  {
    company: 'Heart Wildwood Motel, New Jersey',
    industry: 'Hospitality',
    teamSize: 7,
    roles: [
      'Revenue Manager',
      'Inventory Management',
      'Offshore Manager',
      'Digital Marketing Services',
      'Accounting Services',
    ],
    challenge:
      'A family-owned motel struggling with seasonal staffing challenges and outdated management systems. Revenue was declining year-over-year.',
    solution:
      'Deployed a 7-person team to modernize operations, implement revenue management strategies, and establish digital presence.',
    results: [
      'Reduced annual costs from $180,000 to $72,000',
      'Increased occupancy rates by 28%',
      'Modernized booking and payment systems',
      'Improved online reviews from 3.2 to 4.7 stars',
    ],
    beforeCost: 180000,
    afterCost: 72000,
    savings: 108000,
    savingsPercent: 60,
    testimonial:
      "TC Consulting Services transformed our business. We're now competitive with larger chains while maintaining our family-owned charm. The savings have been incredible.",
    testimonialAuthor: 'Owner',
    testimonialCompany: 'Heart Wildwood Motel',
  },
  {
    company: 'Royal Court Motel',
    industry: 'Hospitality',
    teamSize: 6,
    roles: [
      'Guest Service Representative',
      'Revenue Manager',
      'Web Developer',
      'Digital Marketing Services',
      'Accounting Services',
    ],
    challenge:
      'An independent motel facing fierce competition from chain hotels and struggling with online visibility. Guest communication and booking management were inefficient.',
    solution:
      'Implemented a 6-person team focused on guest experience, digital transformation, and financial optimization. Built custom booking system and enhanced online presence.',
    results: [
      'Reduced annual costs from $195,000 to $84,000',
      'Increased direct bookings by 52%',
      'Improved response time to guest inquiries by 75%',
      'Boosted revenue per available room by 31%',
    ],
    beforeCost: 195000,
    afterCost: 84000,
    savings: 111000,
    savingsPercent: 57,
    testimonial:
      'TC Consulting Services brought professionalism and expertise we never had before. Our guests notice the difference, and our bottom line shows it. Best decision we made.',
    testimonialAuthor: 'Sanjay Patel',
    testimonialCompany: 'Royal Court Motel',
  },
]

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const activeCase = caseStudies[activeIndex]

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-950 dark:to-purple-950/20 py-20  overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Success Stories That Speak for Themselves
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Just a few examples of how we've transformed businesses across industries
          </p>
        </motion.div>

        {/* Main Case Study Card */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 ">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {activeCase.company}
                  </h3>
                  <p className="text-purple-100">{activeCase.industry}</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-white font-bold text-sm">{activeCase.teamSize} Team Members</span>
                </div>
              </div>
            </div>

            {/* Content - Compact Grid Layout */}
            <div className="p-6 ">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="text-red-500">⚠️</span>
                      Challenge
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {activeCase.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                      <span className="text-blue-500">💡</span>
                      Solution
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {activeCase.solution}
                    </p>
                  </div>

                  {/* Roles */}
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white mb-2">
                      Team Composition
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCase.roles.slice(0, 4).map((role, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                        >
                          {role}
                        </span>
                      ))}
                      {activeCase.roles.length > 4 && (
                        <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-xs font-medium">
                          +{activeCase.roles.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Cost Savings */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20 rounded-2xl p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">Before</div>
                        <div className="text-xl font-bold text-neutral-900 dark:text-white">
                          ${(activeCase.beforeCost / 1000).toFixed(0)}k
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">After</div>
                        <div className="text-xl font-bold text-green-600 dark:text-green-400">
                          ${(activeCase.afterCost / 1000).toFixed(0)}k
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-purple-200 dark:border-purple-800 text-center">
                      <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-1">
                        Annual Savings
                      </div>
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                        ${(activeCase.savings / 1000).toFixed(0)}k
                      </div>
                      <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-1">
                        {activeCase.savingsPercent}% reduction
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      Results
                    </h4>
                    <div className="space-y-2">
                      {activeCase.results.slice(0, 3).map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-700 dark:text-neutral-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial - Full Width */}
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl pt-6 px-6 pb-2">
                <div className="flex items-start gap-3">
                  <div className="text-3xl text-purple-400 leading-none">"</div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 italic mb-3">
                      {activeCase.testimonial}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-sm text-neutral-900 dark:text-white">
                        {activeCase.testimonialAuthor}
                      </div>
                      <span className="text-neutral-400">•</span>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
                        {activeCase.testimonialCompany}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-900 dark:text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white dark:bg-neutral-800 shadow-xl flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-neutral-900 dark:text-white" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setActiveIndex(index)
              }}
              className={`transition-all duration-300 ${index === activeIndex
                ? 'w-12 h-3 bg-purple-400 rounded-full'
                : 'w-3 h-3 bg-neutral-300 dark:bg-neutral-700 rounded-full hover:bg-purple-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
