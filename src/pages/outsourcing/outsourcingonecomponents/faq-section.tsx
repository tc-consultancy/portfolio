import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus, ChevronDown } from 'lucide-react'

const countries = [
  { code: 'india', name: 'India', timezone: 'IST' },
  { code: 'philippines', name: 'Philippines', timezone: 'PHT' },
  { code: 'vietnam', name: 'Vietnam', timezone: 'ICT' },
  { code: 'mexico', name: 'Mexico', timezone: 'CST/MST' },
  { code: 'colombia', name: 'Colombia', timezone: 'COT' },
  { code: 'poland', name: 'Poland', timezone: 'CET' },
]

const faqsByCountry: Record<string, Array<{ question: string; answer: string }>> = {
  india: [
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
      question: 'What happens with benefits and equipment?',
      answer:
        'We handle all benefits (health insurance, retirement contributions, etc.) in India. You can choose to provide equipment or we can include it in our monthly cost.',
    },
    {
      question: 'Can we hire the team member full-time later?',
      answer:
        "Yes, we offer a conversion option after 12 months of engagement. There's a one-time conversion fee equal to 2 months of billing.",
    },
  ],
  philippines: [
    {
      question: 'How quickly can we get started?',
      answer:
        'From our initial conversation to your first team member starting work typically takes 2-4 weeks. For urgent needs, we can accelerate to 1-2 weeks with our rapid-placement service.',
    },
    {
      question: 'What about time zone differences?',
      answer:
        'Philippine Time (PHT) is ideal for US West Coast overlap and APAC collaboration. We ensure candidates can work hours that match your team schedule.',
    },
    {
      question: 'How do you ensure quality?',
      answer:
        'We have a rigorous 5-stage vetting process: skills assessment, technical interviews, communication evaluation, background verification, and cultural fit analysis. Only 3% of applicants make it through.',
    },
    {
      question: 'What about English proficiency?',
      answer:
        'The Philippines has one of the highest English proficiency rates in Asia. All our candidates are fluent in English with neutral accents, making communication seamless.',
    },
    {
      question: 'Do you handle payroll and taxes?',
      answer:
        "Yes, completely. We're the employer of record, handling all payroll, taxes, benefits, and compliance with Philippine labor laws. You simply pay our invoice.",
    },
    {
      question: 'What happens with benefits and equipment?',
      answer:
        'We handle all benefits (PhilHealth, SSS, Pag-IBIG, etc.) in the Philippines. You can choose to provide equipment or we can include it in our monthly cost.',
    },
    {
      question: 'Can we scale up or down?',
      answer:
        'Absolutely. Add team members anytime with 2-4 week lead time. Scale down with just 2 weeks notice. No penalties or long-term commitments.',
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We serve 15+ industries with particular strength in customer service, BPO, healthcare, finance, and technology. Our recruiters have industry-specific expertise.',
    },
  ],
  vietnam: [
    {
      question: 'How quickly can we get started?',
      answer:
        'From our initial conversation to your first team member starting work typically takes 3-5 weeks. For urgent needs, we can accelerate to 2-3 weeks with our rapid-placement service.',
    },
    {
      question: 'What about time zone differences?',
      answer:
        'Indochina Time (ICT) provides excellent overlap with APAC markets and reasonable coverage for EU afternoons. We ensure candidates can work hours that match your team schedule.',
    },
    {
      question: 'How do you ensure quality?',
      answer:
        'We have a rigorous 5-stage vetting process: skills assessment, technical interviews, communication evaluation, background verification, and cultural fit analysis. Only 3% of applicants make it through.',
    },
    {
      question: 'What about English proficiency?',
      answer:
        'All our Vietnamese candidates are fluent in English. Many also speak additional languages like French, Chinese, or Japanese based on your requirements.',
    },
    {
      question: 'Do you handle payroll and taxes?',
      answer:
        "Yes, completely. We're the employer of record, handling all payroll, taxes, social insurance, and compliance with Vietnamese labor laws. You simply pay our invoice.",
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We serve 15+ industries with particular strength in software development, manufacturing, e-commerce, and engineering. Our recruiters have industry-specific expertise.',
    },
    {
      question: 'Can we scale up or down?',
      answer:
        'Absolutely. Add team members anytime with 3-5 week lead time. Scale down with just 2 weeks notice. No penalties or long-term commitments.',
    },
  ],
  mexico: [
    {
      question: 'How quickly can we get started?',
      answer:
        'From our initial conversation to your first team member starting work typically takes 2-4 weeks. For urgent needs, we can accelerate to 1-2 weeks with our rapid-placement service.',
    },
    {
      question: 'What about time zone differences?',
      answer:
        'Mexican time zones (CST/MST) align perfectly with US business hours, providing real-time collaboration with no time zone challenges.',
    },
    {
      question: 'How do you ensure quality?',
      answer:
        'We have a rigorous 5-stage vetting process: skills assessment, technical interviews, communication evaluation, background verification, and cultural fit analysis. Only 3% of applicants make it through.',
    },
    {
      question: 'What about language capabilities?',
      answer:
        'All our Mexican candidates are bilingual (English/Spanish). This is ideal for companies serving both English and Spanish-speaking markets.',
    },
    {
      question: 'Do you handle payroll and taxes?',
      answer:
        "Yes, completely. We're the employer of record, handling all payroll, taxes, IMSS, and compliance with Mexican labor laws. You simply pay our invoice.",
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We serve 15+ industries with particular strength in manufacturing, automotive, aerospace, technology, and customer service. Our recruiters have industry-specific expertise.',
    },
    {
      question: 'Can we scale up or down?',
      answer:
        'Absolutely. Add team members anytime with 2-4 week lead time. Scale down with just 2 weeks notice. No penalties or long-term commitments.',
    },
  ],
  colombia: [
    {
      question: 'How quickly can we get started?',
      answer:
        'From our initial conversation to your first team member starting work typically takes 2-4 weeks. For urgent needs, we can accelerate to 1-2 weeks with our rapid-placement service.',
    },
    {
      question: 'What about time zone differences?',
      answer:
        'Colombia Time (COT) aligns with US Eastern Time, providing perfect overlap for real-time collaboration with North American teams.',
    },
    {
      question: 'How do you ensure quality?',
      answer:
        'We have a rigorous 5-stage vetting process: skills assessment, technical interviews, communication evaluation, background verification, and cultural fit analysis. Only 3% of applicants make it through.',
    },
    {
      question: 'What about language capabilities?',
      answer:
        'All our Colombian candidates are bilingual (English/Spanish) with excellent communication skills, ideal for serving diverse markets.',
    },
    {
      question: 'Do you handle payroll and taxes?',
      answer:
        "Yes, completely. We're the employer of record, handling all payroll, taxes, social security, and compliance with Colombian labor laws. You simply pay our invoice.",
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We serve 15+ industries with particular strength in technology, BPO, finance, healthcare, and creative services. Our recruiters have industry-specific expertise.',
    },
    {
      question: 'Can we scale up or down?',
      answer:
        'Absolutely. Add team members anytime with 2-4 week lead time. Scale down with just 2 weeks notice. No penalties or long-term commitments.',
    },
  ],
  poland: [
    {
      question: 'How quickly can we get started?',
      answer:
        'From our initial conversation to your first team member starting work typically takes 3-5 weeks. For urgent needs, we can accelerate to 2-3 weeks with our rapid-placement service.',
    },
    {
      question: 'What about time zone differences?',
      answer:
        'Central European Time (CET) provides excellent overlap with European business hours and reasonable coverage for US East Coast mornings.',
    },
    {
      question: 'How do you ensure quality?',
      answer:
        'We have a rigorous 5-stage vetting process: skills assessment, technical interviews, communication evaluation, background verification, and cultural fit analysis. Only 3% of applicants make it through.',
    },
    {
      question: 'What about language capabilities?',
      answer:
        'All our Polish candidates are fluent in English. Many also speak German, French, or other European languages based on your requirements.',
    },
    {
      question: 'Do you handle payroll and taxes?',
      answer:
        "Yes, completely. We're the employer of record, handling all payroll, taxes, ZUS, and compliance with Polish and EU labor laws. You simply pay our invoice.",
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We serve 15+ industries with particular strength in software development, engineering, finance, gaming, and IT services. Our recruiters have industry-specific expertise.',
    },
    {
      question: 'Can we scale up or down?',
      answer:
        'Absolutely. Add team members anytime with 3-5 week lead time. Scale down with just 2 weeks notice. No penalties or long-term commitments.',
    },
  ],
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedCountry, setSelectedCountry] = useState('india')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const currentFaqs = faqsByCountry[selectedCountry]

  return (
    <section className="relative w-full bg-white dark:bg-neutral-950 py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Questions */}
          <div className="lg:col-span-7">
            {/* Headline */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>

            {/* Country Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                Select Country
              </label>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full md:w-64 px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg flex items-center justify-between hover:border-purple-400 transition-colors"
                >
                  <span className="text-neutral-900 dark:text-white font-medium">
                    {countries.find((c) => c.code === selectedCountry)?.name}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-600 dark:text-neutral-400 transition-transform ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute z-10 w-full md:w-64 mt-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg overflow-hidden">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country.code)
                          setDropdownOpen(false)
                          setOpenIndex(null)
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors ${
                          selectedCountry === country.code
                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                            : 'text-neutral-900 dark:text-white'
                        }`}
                      >
                        <div className="font-medium">{country.name}</div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                          {country.timezone}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {currentFaqs.map((faq, index) => (
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
