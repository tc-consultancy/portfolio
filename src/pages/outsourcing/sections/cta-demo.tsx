import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function CtaDemo({isVideoModalOpen, setIsVideoModalOpen}: any) {
    return (
        <section id="pricing-section" className="w-full bg-neutral-50 dark:bg-neutral-900 py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-purple-300 via-purple-200 to-purple-300 dark:from-purple-900/40 dark:via-purple-800/30 dark:to-purple-900/40 rounded-3xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16">
                        {/* Left - Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
                                Start free — pay only after successful hire
                            </h2>
                            <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                No upfront costs, no hidden fees. Access our global talent network and comprehensive outsourcing platform at zero cost. You only pay when you successfully hire and onboard your ideal candidate. Get started today with our all-in-one platform that simplifies hiring, payroll, compliance, and team management across 150+ countries.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 px-6 py-6 rounded-full font-semibold">
                                    Book a demo
                                </Button>
                                <Button
                                    onClick={() => setIsVideoModalOpen(true)}
                                    variant="outline"
                                    className="border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white hover:bg-neutral-900/10 dark:hover:bg-white/10 px-6 py-6 rounded-full font-semibold flex items-center gap-2"
                                >
                                    <Play className="w-4 h-4 fill-current" />
                                    See it in action
                                </Button>
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://placehold.co/600x400/8b5cf6/ffffff?text=Platform+Dashboard"
                                    alt="Platform dashboard"
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Decorative circle */}
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-400 dark:bg-purple-600/50 rounded-full blur-2xl"></div>
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-500 dark:bg-purple-700/50 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
