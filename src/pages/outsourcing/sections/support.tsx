import { Button } from '@/components/ui/button'

const stats = [
    {
        id: 1,
        value: '91%',
        description: 'of customer issues resolved at first contact with live chat',
    },
    {
        id: 2,
        value: '1hr',
        description: 'to resolve most customer issues',
    },
    {
        id: 3,
        value: '93%',
        description: "Enterprise customers' satisfaction",
    },
    {
        id: 4,
        value: '6min',
        description: "to resolve most EOR and contractors' issues",
    },
]

export default function Support() {
    return (
        <section className="w-full bg-white dark:bg-neutral-950 py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="relative">
                        <div className="relative">
                            <img
                                src="https://placehold.co/600x400/e5e7eb/374151?text=Support+Team"
                                alt="Customer support representative"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                            {/* Chat Bubble Overlay */}
                            <div className="absolute bottom-8 left-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-4 max-w-xs">
                                <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
                                    How can I advise you today?
                                </p>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                    Deel In-House Payroll Expert
                                </p>
                            </div>
                            {/* Chat Icon */}
                            <div className="absolute bottom-8 right-8 bg-white dark:bg-neutral-800 rounded-full p-4 shadow-xl">
                                <svg
                                    className="w-6 h-6 text-neutral-900 dark:text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                            </div>
                            {/* Purple accent */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400 dark:bg-purple-600 rounded-tl-2xl opacity-20"></div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
                            Fast 24/7 support that keeps your business moving
                        </h2>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="border-l-4 border-neutral-200 dark:border-white pl-4 space-y-2"
                                >
                                    <div className="text-4xl md:text-4xl font-bold text-neutral-700 dark:text-white">
                                        {stat.value}
                                    </div>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 px-6 py-6 rounded-full font-semibold">
                            Book a demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
