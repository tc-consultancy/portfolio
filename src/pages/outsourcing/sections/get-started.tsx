import { Button } from '@/components/ui/button'

const steps = [
    {
        id: 1,
        number: '1',
        title: 'Book a demo',
        description: "Book a demo with our global workforce consultants. We'll set you up with a free account ready to suit your team's needs.",
    },
    {
        id: 2,
        number: '2',
        title: 'Add your people',
        description: 'From new hires to your existing workforce, onboard effortlessly with our self-serve platform.',
    },
    {
        id: 3,
        number: '3',
        title: 'Dedicated onboarding',
        description: 'From navigating local laws to support for your team members, our dedicated team will help you get set up seamlessly.',
    },
]

export default function GetStarted() {
    return (
        <section className="w-full bg-neutral-50 dark:bg-neutral-900 py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-16">
                    Get started with Deel in three easy steps
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Steps */}
                    <div className="space-y-8">
                        {steps.map((step) => (
                            <div key={step.id} className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-purple-500 dark:bg-purple-600 flex items-center justify-center text-white font-bold">
                                        {step.number}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <Button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 px-6 py-6 rounded-full font-semibold mt-6">
                            Book a demo
                        </Button>
                    </div>

                    {/* Right - Illustration */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">
                            {/* Purple background shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 dark:bg-purple-700/30 rounded-3xl transform rotate-12"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400 dark:bg-purple-600/30 rounded-3xl transform -rotate-6"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-purple-200 dark:bg-purple-800/20 rounded-3xl"></div>

                            {/* Main card */}
                            <div className="relative z-10 bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl p-6 space-y-6">
                                {/* Dropdown fields */}
                                <div className="flex gap-2">
                                    <div className="flex-1 bg-neutral-100 dark:bg-neutral-700 rounded-lg px-3 py-2 text-xs text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
                                        <span>Country</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 bg-neutral-100 dark:bg-neutral-700 rounded-lg px-3 py-2 text-xs text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
                                        <span>Worker type</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 bg-neutral-100 dark:bg-neutral-700 rounded-lg px-3 py-2 text-xs text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
                                        <span>Job title</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Help icon */}
                                <div className="flex justify-end">
                                    <div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Team members */}
                                <div className="flex justify-center gap-3">
                                    <div className="relative">
                                        <img
                                            src="https://placehold.co/80x80/fbbf24/ffffff?text=👨"
                                            alt="Team member"
                                            className="w-16 h-16 rounded-full border-4 border-white dark:border-neutral-800"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-neutral-800 flex items-center justify-center text-white text-xs font-bold">
                                            ✓
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://placehold.co/80x80/ec4899/ffffff?text=👩"
                                            alt="Team member"
                                            className="w-16 h-16 rounded-full border-4 border-white dark:border-neutral-800"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-2 border-white dark:border-neutral-800 flex items-center justify-center text-white text-xs font-bold">
                                            —
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://placehold.co/80x80/3b82f6/ffffff?text=👨"
                                            alt="Team member"
                                            className="w-16 h-16 rounded-full border-4 border-white dark:border-neutral-800"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white dark:border-neutral-800 flex items-center justify-center">
                                            <img src="https://placehold.co/16x16/ffffff/ff0000?text=🇺🇸" alt="US flag" className="w-4 h-4 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://placehold.co/80x80/f59e0b/ffffff?text=👩"
                                            alt="Team member"
                                            className="w-16 h-16 rounded-full border-4 border-white dark:border-neutral-800"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full border-2 border-white dark:border-neutral-800 flex items-center justify-center text-white text-xs font-bold">
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
