import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  // Service Details
  {
    category: 'Service Details',
    question: 'How does the application process work?',
    answer: 'After you sign up, we schedule a 15-minute call to understand your background and target roles. Then our expert writers create ATS-optimized resumes and custom cover letters for each job you want to apply to. We submit applications on your behalf and provide real-time tracking.',
  },
  {
    category: 'Service Details',
    question: 'What industries do you specialize in?',
    answer: 'We have expert writers across all major industries including Tech, Finance, Healthcare, Marketing, Engineering, Consulting, and more. Each writer has 8+ years of experience in their specific field.',
  },
  {
    category: 'Service Details',
    question: 'How many applications will you submit per week?',
    answer: 'It depends on your plan: Starter (25/week), Professional (50/week), or Executive (100/week). We focus on quality over quantity, ensuring each application is tailored and optimized.',
  },
  {
    category: 'Service Details',
    question: 'Do you guarantee interviews?',
    answer: 'We guarantee 5x more interview calls within 60 days compared to your current rate, or we continue working for free until you achieve this result.',
  },

  // Pricing & Plans
  {
    category: 'Pricing & Plans',
    question: 'Can I cancel anytime?',
    answer: 'Yes, all plans are month-to-month with no long-term commitment. You can cancel anytime with no penalties or fees.',
  },
  {
    category: 'Pricing & Plans',
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with our service for any reason, we\'ll provide a full refund.',
  },
  {
    category: 'Pricing & Plans',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and PayPal. All payments are processed securely through Stripe.',
  },

  // Process & Timeline
  {
    category: 'Process & Timeline',
    question: 'How quickly can you start applying to jobs?',
    answer: 'We can start submitting applications within 24 hours of your onboarding call. Most clients see their first applications go out the same day.',
  },
  {
    category: 'Process & Timeline',
    question: 'What is the turnaround time for each application?',
    answer: 'Starter plan: 48 hours, Professional plan: <24 hours, Executive plan: <12 hours. We prioritize speed without compromising quality.',
  },
  {
    category: 'Process & Timeline',
    question: 'How do I track my applications?',
    answer: 'You receive detailed weekly (or daily for Professional plan) progress reports showing all submitted applications, their status, and any responses received. We keep you updated every step of the way.',
  },

  // Quality & Results
  {
    category: 'Quality & Results',
    question: 'How do you optimize resumes for ATS systems?',
    answer: 'We use industry-standard ATS optimization techniques including keyword matching, proper formatting, strategic placement of skills, and quantified achievements that align with job descriptions.',
  },
  {
    category: 'Quality & Results',
    question: 'Can I review applications before they\'re submitted?',
    answer: 'Yes, for the first 3 applications we send them for your approval. Once you\'re comfortable with our quality, we can submit directly to save time.',
  },
  {
    category: 'Quality & Results',
    question: 'What if I need revisions?',
    answer: 'All plans include unlimited revisions. If you\'re not 100% satisfied with a resume or cover letter, we\'ll revise it until it meets your standards.',
  },
  {
    category: 'Quality & Results',
    question: 'Do you provide interview preparation?',
    answer: 'Professional and Executive plans include interview preparation support, including common questions, company research, and strategy sessions.',
  },

  // Technical Questions
  {
    category: 'Technical Questions',
    question: 'Will you use my email to apply?',
    answer: 'No, we use a professional application management system. You\'ll receive all responses directly to your email, and we forward any communications immediately.',
  },
  {
    category: 'Technical Questions',
    question: 'How do you handle confidential job searches?',
    answer: 'We maintain strict confidentiality. You can specify companies or industries to avoid, and we never share your information without explicit permission.',
  },
  {
    category: 'Technical Questions',
    question: 'What if I get an interview?',
    answer: 'Congratulations! We\'ll provide you with all application materials used, company research, and interview preparation support (on Professional/Executive plans).',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

  return (
    <section className="relative w-full bg-neutral-50 dark:bg-neutral-900 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Everything you need to know about our service
          </p>
        </motion.div>

        {/* FAQs by Category */}
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
              {category}
            </h3>

            <div className="space-y-4">
              {faqs
                .filter((faq) => faq.category === category)
                .map((faq, index) => {
                  const globalIndex = faqs.indexOf(faq)
                  const isOpen = openIndex === globalIndex

                  return (
                    <motion.div
                      key={globalIndex}
                      className="bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full p-6 flex items-center justify-between text-left"
                      >
                        <span className="text-lg font-semibold text-neutral-900 dark:text-white pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12 p-8 bg-white dark:bg-neutral-950 rounded-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
            Still have questions?
          </p>
          <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
