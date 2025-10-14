import CommonHero from "@/components/common/common-hero";
import StrategySection from "@/components/common/strategy-section";

export default function ProfessionalConsulting() {
    const strategyPoints = [
        {
            icon: <span className="text-3xl text-white">🎯</span>,
            title: "Tailored strategies",
            description: "Everything is unique to your business to propel your business ahead as per market trends.",
            color: "bg-pink-500 dark:bg-pink-600"
        },
        {
            icon: <span className="text-3xl text-white">📊</span>,
            title: "Transparent results",
            description: "A continuous process of measuring, reporting and improving along the way.",
            color: "bg-orange-500 dark:bg-orange-600"
        },
        {
            icon: <span className="text-3xl text-white">🔄</span>,
            title: "Old to new",
            description: "Traditional enterprise system installation to trending approaches, anything you need to drive in the growth direction.",
            color: "bg-teal-500 dark:bg-teal-600"
        }
    ];

    return (
        <>
            <CommonHero
                subtleHeading="Professional Consulting"
                heading="Gain Smarter Competitive Advantage\nto Reach Your Goals"
                subheading="Leverage cutting-edge technology to make informed decisions and drive continuous growth for your business."
                buttontitle="Let's Talk"
            />
               {/* Managed Network Solutions Section */}
            <section className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 dark:from-purple-800 dark:via-purple-700 dark:to-pink-700 py-16 md:py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Illustration */}
                        <div className="flex justify-center items-end lg:justify-start">
                            <div className="relative">
                                <svg
                                    className="w-full max-w-md h-auto"
                                    viewBox="0 0 400 400"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Server Stack */}
                                    <g opacity="0.9">
                                        {/* Server 1 */}
                                        <rect x="80" y="180" width="240" height="50" rx="8" fill="white" opacity="0.95" />
                                        <circle cx="110" cy="205" r="8" fill="#a855f7" />
                                        <circle cx="135" cy="205" r="8" fill="#a855f7" />
                                        <circle cx="160" cy="205" r="8" fill="#a855f7" />
                                        <rect x="200" y="195" width="100" height="8" rx="4" fill="#ec4899" opacity="0.6" />
                                        <rect x="200" y="210" width="80" height="8" rx="4" fill="#ec4899" opacity="0.4" />

                                        {/* Server 2 */}
                                        <rect x="80" y="240" width="240" height="50" rx="8" fill="white" opacity="0.95" />
                                        <circle cx="110" cy="265" r="8" fill="#a855f7" />
                                        <circle cx="135" cy="265" r="8" fill="#a855f7" />
                                        <circle cx="160" cy="265" r="8" fill="#a855f7" />
                                        <rect x="200" y="255" width="100" height="8" rx="4" fill="#ec4899" opacity="0.6" />
                                        <rect x="200" y="270" width="60" height="8" rx="4" fill="#ec4899" opacity="0.4" />

                                        {/* Server 3 */}
                                        <rect x="80" y="300" width="240" height="50" rx="8" fill="white" opacity="0.95" />
                                        <circle cx="110" cy="325" r="8" fill="#a855f7" />
                                        <circle cx="135" cy="325" r="8" fill="#a855f7" />
                                        <circle cx="160" cy="325" r="8" fill="#a855f7" />
                                        <rect x="200" y="315" width="100" height="8" rx="4" fill="#ec4899" opacity="0.6" />
                                        <rect x="200" y="330" width="90" height="8" rx="4" fill="#ec4899" opacity="0.4" />
                                    </g>

                                    {/* Cloud */}
                                    <g opacity="0.8">
                                        <ellipse cx="250" cy="100" rx="60" ry="35" fill="white" opacity="0.9" />
                                        <ellipse cx="220" cy="110" rx="45" ry="30" fill="white" opacity="0.9" />
                                        <ellipse cx="280" cy="110" rx="45" ry="30" fill="white" opacity="0.9" />
                                    </g>

                                    {/* Gear */}
                                    <g opacity="0.7">
                                        <circle cx="120" cy="120" r="35" fill="white" opacity="0.8" />
                                        <circle cx="120" cy="120" r="20" fill="#a855f7" />
                                        <rect x="115" y="85" width="10" height="15" rx="2" fill="white" opacity="0.8" />
                                        <rect x="115" y="140" width="10" height="15" rx="2" fill="white" opacity="0.8" />
                                        <rect x="85" y="115" width="15" height="10" rx="2" fill="white" opacity="0.8" />
                                        <rect x="140" y="115" width="15" height="10" rx="2" fill="white" opacity="0.8" />
                                    </g>

                                    {/* Globe */}
                                    <g opacity="0.6">
                                        <circle cx="80" cy="80" r="25" fill="white" opacity="0.7" />
                                        <path d="M 80 55 Q 90 80 80 105" stroke="#a855f7" strokeWidth="2" fill="none" />
                                        <path d="M 80 55 Q 70 80 80 105" stroke="#a855f7" strokeWidth="2" fill="none" />
                                        <ellipse cx="80" cy="80" rx="25" ry="10" stroke="#a855f7" strokeWidth="2" fill="none" />
                                    </g>

                                    {/* Magnifying Glass */}
                                    <g opacity="0.7">
                                        <circle cx="320" cy="320" r="30" fill="white" opacity="0.8" stroke="#a855f7" strokeWidth="3" />
                                        <line x1="342" y1="342" x2="365" y2="365" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="text-white">
                            <p className="font-semibold text-sm uppercase tracking-wide mb-4 opacity-90">
                                WHAT YOU NEED IS A
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                A clear strategic roadmap
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed opacity-90">
                                We empower you to take the right step and avail the best possible advantage of any opportunity. Now move into different markets with confidence and capture the best hike to your market standards.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed opacity-90">
                                Don’t stay stuck dealing with backlogs of your projects that need technology expertise. Talk to us to let us help you optimize your overall business strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
               <StrategySection
                topHeading="GET YOUR NEEDS ALIGNED WITH"
                heading="The perfect tactic and strategy Comes with"
                description="Tell us your pain points and goals and we will align a strategy to reach your objective. We guide you as an IT partner and consult to meet your business needs."
                imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                imageAlt="Team collaboration with puzzle pieces"
                points={strategyPoints}
            />

            {/* Why You Need Professional IT Consulting Section */}
            <section className="w-full bg-purple-50 dark:bg-gray-900 py-16 md:py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide mb-4">
                                HERE IS WHY YOU NEED
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                                An professional IT consulting
                            </h2>

                            {/* Service Cards */}
                            <div className="space-y-6">
                                {/* Experience with skill */}
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-purple-600 dark:bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl text-white">👥</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                Experience with skill
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                A winning team of IT specialists with experience in your industry, and can align systems with your business goals efficiently.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* On time delivery */}
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl text-white">🎯</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                On time delivery
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                Partner with a professional IT consulting firm that can complete projects on time, and correctly. Rely on our experts from conception to int...
                                                <button className="text-pink-600 dark:text-pink-400 font-semibold ml-1">
                                                    Read more
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Whenever you need */}
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-yellow-500 dark:bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl text-white">☕</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                Whenever you need
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                                We provide a combination of flexible, effective, and highly trained specialists to give you a competitive advantage whenever you need it.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="rounded-2xl overflow-hidden mt-auto shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                                alt="Professional IT Consulting Team"
                                className="w-full h-full object-cover "
                            />
                        </div>
                    </div>
                </div>
            </section>
         

         

        </>
    )
}
