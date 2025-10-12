import { ContactDialog } from '@/components/ContactDialog'
import { motion } from 'framer-motion'
import { Check, X, DollarSign, Shield, Clock } from 'lucide-react'

export default function PricingSection() {
    return (
        <section className="relative w-full bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-950 dark:to-purple-950/20 py-20 md:py-32 overflow-hidden">
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
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        No upfront costs. Pay only when you're satisfied.
                    </p>
                </motion.div>

                {/* Main Pricing Card */}
                <motion.div
                    className="max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                                <Shield className="w-4 h-4" />
                                <span className="text-sm font-semibold">Risk-Free Model</span>
                            </div>

                            {/* Main Message */}
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                Zero Upfront Payment
                            </h3>
                            <p className="text-xl text-white/90 mb-8">
                                Pay only after 30 days of employment offer. No hidden charges, no surprises.
                            </p>

                            {/* Key Points */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <DollarSign className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold mb-1">No Upfront Costs</div>
                                        <div className="text-sm text-white/80">Start hiring with zero financial risk</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold mb-1">Pay After 30 Days</div>
                                        <div className="text-sm text-white/80">Evaluate performance before paying</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold mb-1">No Hidden Fees</div>
                                        <div className="text-sm text-white/80">All-inclusive transparent pricing</div>
                                    </div>
                                </div>
                            </div>

                            {/* Savings Highlight */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <div className="text-sm text-white/80 mb-1">Average Savings</div>
                                        <div className="text-4xl font-bold">60%</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-white/80 mb-1">Compared to local hiring</div>
                                        <div className="text-lg font-semibold">All-inclusive pricing</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Comparison Grid */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Traditional Model */}
                        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                                    <X className="w-6 h-6 text-neutral-400" />
                                </div>
                                <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Traditional Agencies</h4>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'Upfront placement fees',
                                    'Hidden recruitment costs',
                                    'Long-term contracts',
                                    'Pay before evaluation',
                                    'Additional overhead charges',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-neutral-600 dark:text-neutral-400">
                                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Model */}
                        <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-neutral-900 rounded-2xl p-6 border-2 border-purple-400">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-400 flex items-center justify-center">
                                    <Check className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Our Model</h4>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'Zero upfront payment',
                                    'Transparent all-inclusive pricing',
                                    'Flexible, no lock-ins',
                                    'Pay after 30-day evaluation',
                                    'No hidden fees ever',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-neutral-900 dark:text-white font-medium">
                                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                        Ready to start hiring with zero risk?
                    </p>
                     <ContactDialog>
                    <button className="px-8 py-4 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        Get Your Custom Quote
                    </button>
                     </ContactDialog>
                </motion.div>
            </div>
        </section>
    )
}
