import { Users, DollarSign, Briefcase, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Platform() {
    return (
        <section className="relative w-full bg-neutral-900 dark:bg-neutral-900">
            {/* Custom Asymmetric Curve - More curved on left */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-[80px] md:h-[120px]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C150,80 300,100 600,60 C900,20 1050,40 1200,50 L1200,0 L0,0 Z"
                        className="fill-white dark:fill-neutral-950"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative pt-32 md:pt-60 pb-16 md:pb-60 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left - Image + Heading + Button */}
                        <div className="space-y-8">
                            <div className="w-full max-w-[280px]">
                                <img
                                    src="https://placehold.co/280x200/8b5cf6/white?text=Platform"
                                    alt="Platform illustration"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                    An all-in-one platform for global workforces
                                </h2>
                                <Button className="bg-white text-neutral-900 hover:bg-neutral-100 px-6 py-3 rounded-full font-semibold">
                                    Book a demo
                                </Button>
                            </div>
                        </div>

                        {/* Right - Features Grid 2x2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Hire */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-white" />
                                    <h3 className="text-lg font-bold text-white">Hire</h3>
                                </div>
                                <p className="text-sm text-neutral-300 leading-relaxed">
                                    Expand into new markets without the hassle of local entities. Deel's EOR and contractor solutions let you onboard top talent from 150+ countries, all while staying compliant.
                                </p>
                            </div>

                            {/* Pay */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-white" />
                                    <h3 className="text-lg font-bold text-white">Pay</h3>
                                </div>
                                <p className="text-sm text-neutral-300 leading-relaxed">
                                    Consolidate payroll for employees and contractors in one platform. Ensure accurate, on-time payments with built-in tax, benefits, and compliance coverage in 100+ countries.
                                </p>
                            </div>

                            {/* Manage */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-white" />
                                    <h3 className="text-lg font-bold text-white">Manage</h3>
                                </div>
                                <p className="text-sm text-neutral-300 leading-relaxed">
                                    With every tool for onboarding, time off, expenses, and more in one place and localized based on worker type and location, you'll cut costs and get more data visibility.
                                </p>
                            </div>

                            {/* Engage */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                    <h3 className="text-lg font-bold text-white">Engage</h3>
                                </div>
                                <p className="text-sm text-neutral-300 leading-relaxed">
                                    Foster a connected culture and drive productivity with our talent management system. Empower teams with 1:1 meetings, career roadmaps, training courses, surveys, and more.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Separator Line */}
                    <div className="mt-16 mb-12 border-t border-neutral-800"></div>

                    {/* Save on costs section */}
                    <div className="space-y-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Save on costs and admin time
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {/* 150 hrs */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <img
                                        src="https://placehold.co/80x80/8b5cf6/white?text=⏱️"
                                        alt="Clock icon"
                                        className="w-16 h-16 rounded-full"
                                    />
                                </div>
                                <div>
                                    <div className="text-5xl md:text-6xl font-bold text-purple-400">150</div>
                                    <div className="text-3xl md:text-4xl font-bold text-purple-400">hrs</div>
                                    <p className="text-sm text-neutral-300 mt-2">saved on hiring compliance</p>
                                </div>
                            </div>

                            {/* 52% */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <img
                                        src="https://placehold.co/80x80/8b5cf6/white?text=💰"
                                        alt="Coins icon"
                                        className="w-16 h-16 rounded-full"
                                    />
                                </div>
                                <div>
                                    <div className="text-5xl md:text-6xl font-bold text-purple-400">52%</div>
                                    <p className="text-sm text-neutral-300 mt-2">saving in fees</p>
                                </div>
                            </div>

                            {/* $500K */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <img
                                        src="https://placehold.co/80x80/8b5cf6/white?text=💵"
                                        alt="Money icon"
                                        className="w-16 h-16 rounded-full"
                                    />
                                </div>
                                <div>
                                    <div className="text-5xl md:text-6xl font-bold text-purple-400">$500K</div>
                                    <p className="text-sm text-neutral-300 mt-2">saved yearly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-[80px] md:h-[120px]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C150,80 300,100 600,60 C900,20 1050,40 1200,50 L1200,120 L0,120 Z"
                        className="fill-white dark:fill-neutral-950"
                    />
                </svg>
            </div>
        </section>
    )
}
