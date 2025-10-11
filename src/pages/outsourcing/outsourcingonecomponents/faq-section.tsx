import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly can we get started?',
    answer:
      'From our initial conversation to your first team member starting work typically takes 3-5 weeks. For urgent needs, we can accelerate to 2 weeks with our rapid-placement service.',
  },
  {
    question: "What if the candidate doesn't work out?",
    answer:
      "We offer free replacements within the first 90 days, no questions asked. However, our 98% success rate means replacements are rarely needed.",
  },
  {
    question: 'How do you ensure quality?',
    answer:
      'We have a rigorous 5-stage vetting process: skills assessment, technical interviews, communication evaluation, background verification, and cultural fit analysis. Only 3% of applicants make it through.',
  },
  {
    question: 'What about time zone differences?',
    answer:
      'Indian Standard Time (IST) overlaps with US evenings, EU afternoons, and APAC mornings. We ensure candidates can work hours that overlap with your team for real-time collaboration.',
  },
  {
    question: 'How do weekly payments work?',
    answer:
      'Every Friday, you receive an invoice for hours worked that week. Payment is due within 7 days. Simple, transparent, and cash-flow friendly.',
  },
  {
    question: 'What about data security and confidentiality?',
    answer:
      'All team members sign comprehensive NDAs. We comply with GDPR, HIPAA, SOC 2, and other relevant standards. We can work within your existing security protocols.',
  },
  {
    question: 'Do you handle payroll and taxes?',
    answer:
      "Yes, completely. We're the employer of record, handling all payroll, taxes, benefits, and compliance. You simply pay our invoice.",
  },
  {
    question: 'Can we scale up or down?',
    answer:
      'Absolutely. Add team members anytime with 3-5 week lead time. Scale down with just 2 weeks notice. No penalties or long-term commitments.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We serve 15+ industries with particular strength in technology, finance, healthcare, retail, and manufacturing. Our recruiters have industry-specific expertise.',
  },
  {
    question: 'What if we need specialized or niche skills?',
    answer:
      "Our network includes specialists across hundreds of skill areas. If we don't have someone immediately available, we can typically source niche talent within 4-6 weeks.",
  },
  {
    question: 'How do you handle different currencies?',
    answer:
      'We invoice in your local currency (USD, EUR, GBP, CAD, AUD, CHF, SGD, HKD, JPY, CNY) at locked rates to eliminate exchange rate fluctuations.',
  },
  {
    question: 'What happens with benefits and equipment?',
    answer:
      'We handle all benefits (health insurance, retirement contributions, etc.) in India. You can choose to provide equipment or we can include it in our monthly cost.',
  },
  {
    question: 'Can we hire the team member full-time later?',
    answer:
      "Yes, we offer a conversion option after 12 months of engagement. There's a one-time conversion fee equal to 2 months of billing.",
  },
  {
    question: 'What if we have compliance concerns?',
    answer:
      "We're experienced with GDPR, HIPAA, SOX, PCI-DSS, and industry specific regulations. We'll work with your legal team to ensure full compliance.",
  },
  {
    question: 'Do you support languages other than English?',
    answer:
      'Many of our candidates speak multiple languages including Spanish, French, German, Mandarin, Japanese, and Arabic. Specify language requirements upfront.',
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
