import { robo1 } from "@/assets";
import { Button } from "@/components/ui/button";

export default function ProfessionalConsulting() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-white dark:bg-gray-950 md:py-20 px-4 flex items-center">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            CONSULTING
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Smarter competitive advantage  <br />to reach your goals
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
                            Leverage the best of technology to make smarter technology decisions while on the rise continuously.
                        </p>

                        <Button className="mt-8 px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white shadow-lg">
                            Let's Talk →
                        </Button>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={robo1}
                            alt="AI Bot Illustration"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>
            {/* Managed Network Solutions Section */}
            <section className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 dark:from-purple-800 dark:via-purple-700 dark:to-pink-700 py-16 md:py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Illustration */}
                        <div className="flex justify-center lg:justify-start">
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
        </>
    )
}
