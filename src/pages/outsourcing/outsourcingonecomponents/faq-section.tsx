import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How long does it take to find a candidate?',
    answer:
      'We typically provide 3-5 pre-vetted candidate profiles within 48 hours of your initial consultation. You can start interviewing immediately and have someone onboarded within a week.',
  },
  {
    question: 'What are your costs?',
    answer:
      "Zero upfront payment. No hidden charges. You only pay after 30 days of employment offer. Our transparent, all-inclusive pricing saves you an average of 40% compared to local hiring costs. Pay only when you're satisfied with your hire.",
  },
  {
    question: 'How do you handle contracts and compliance?',
    answer:
      'We handle all legal, tax, and compliance matters. Our team ensures full compliance with local labor laws, manages contracts, and takes care of all paperwork so you can focus on your business.',
  },
  {
    question: "What if the candidate isn't a good fit?",
    answer:
      "We offer a risk-free 2-week trial period. If you're not satisfied for any reason, the first two weeks are on us. We'll work with you to find a better match at no additional cost.",
  },
  {
    question: 'Can I scale my team up or down?',
    answer:
      'Absolutely! Our flexible engagement models allow you to scale your team based on your needs. There are no long-term lock-ins, and you can adjust team size as your project requirements change.',
  },
  {
    question: 'What makes your vetting process different?',
    answer:
      'Our rigorous 5-stage process ensures only the top 5% of candidates make it through. We assess technical skills, soft skills, communication abilities, cultural fit, and real-world problem-solving through trial projects.',
  },
  {
    question: 'Do you provide ongoing support after hiring?',
    answer:
      'Yes! Every client gets a dedicated success manager who serves as your single point of contact. We provide ongoing integration support, regular check-ins, and are available 24/7 to address any concerns.',
  },
  {
    question: 'Who owns the intellectual property?',
    answer:
      'You own 100% of all code, designs, and work product created by your team. This is clearly stated in our contracts with ironclad IP assignment clauses. All team members sign comprehensive NDAs before starting work.',
  },
  {
    question: "What if a developer quits or doesn't work out?",
    answer:
      "We offer a free replacement guarantee. If a team member leaves or performance issues arise, we'll find a qualified replacement within 2 weeks at no additional cost. Our 95% retention rate means this rarely happens.",
  },
  {
    question: 'How do I communicate and manage my remote team?',
    answer:
      'Your team uses YOUR tools - Slack, Jira, GitHub, or whatever you prefer. They attend your meetings, follow your processes, and communicate directly with you. No middleman. We only handle HR, payroll, and administrative tasks in the background.',
  },
  {
    question: 'Who is the employer of record?',
    answer:
      'We are the legal employer of record. You contract with us, and we employ the talent. This eliminates co-employment risks for you while ensuring full compliance with local labor laws. You get all the benefits of a dedicated team without the legal complexity.',
  },
  {
    question: 'How large is your talent pool?',
    answer:
      'We have a network of 5,000+ pre-vetted developers across 15+ countries in Latin America, Eastern Europe, and Asia. Our talent pool includes specialists in all major tech stacks, with an average of 8+ years of experience and fluent English proficiency.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Questions */}
          <div className="lg:col-span-7">
            {/* Headline */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-neutral-200 dark:border-neutral-800 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <span className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-purple-400 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400/10 flex items-center justify-center"
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-purple-400" />
                      ) : (
                        <Plus className="w-5 h-5 text-purple-400" />
                      )}
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Decorative Visual */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              className="sticky top-32"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Large Blob Shape */}
              <div className="relative w-full aspect-square">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full opacity-10"
                >
                  <path
                    fill="#a855f7"
                    d="M47.1,-57.1C59.9,-49.3,68.4,-33.6,71.8,-16.6C75.2,0.4,73.5,18.7,65.4,33.3C57.3,47.9,42.8,58.8,26.3,64.5C9.8,70.2,-8.7,70.7,-25.5,65.8C-42.3,60.9,-57.4,50.6,-65.8,36.2C-74.2,21.8,-75.9,3.3,-72.8,-13.9C-69.7,-31.1,-61.8,-47,-48.9,-54.9C-36,-62.8,-18,-62.7,-0.5,-62.1C17,-61.5,34.3,-64.9,47.1,-57.1Z"
                    transform="translate(100 100)"
                  />
                </svg>

                {/* Floating Question Marks */}
                <motion.div
                  className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-400/10 flex items-center justify-center"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="text-3xl font-bold text-purple-400">?</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-purple-400/10 flex items-center justify-center"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  <span className="text-4xl font-bold text-purple-400">?</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                  }}
                >
                  <span className="text-2xl font-bold text-purple-400">?</span>
                </motion.div>
              </div>

              {/* Info Box */}
              <div className="mt-8 bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-neutral-900 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  Still have questions?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Our team is here to help. Get in touch and we'll answer any questions you have.
                </p>
                <button className="w-full px-6 py-3 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
