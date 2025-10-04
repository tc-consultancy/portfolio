import { robo1 } from "@/assets";
import { Button } from "@/components/ui/button";

const services = [
    {
        id: 1,
        icon: '🖥️',
        title: 'Network operation center',
        description: 'Your business depends on the performance and reliability of your network. We help you to focus on your business and monitor and manage your...',
        color: 'bg-pink-500 dark:bg-pink-600',
    },
    {
        id: 2,
        icon: '⚙️',
        title: 'ERP Integration',
        description: 'To recover lost effectiveness, businesses need to integrate ERP solutions to balance real-time vs. batch integration. We employ multiple ERP...',
        color: 'bg-orange-500 dark:bg-orange-600',
    },
    {
        id: 3,
        icon: '📊',
        title: 'Project Accounting',
        description: 'Opt for a proper view of the cost and revenue of every project. Our expense management or project accounting services can help you do just t...',
        color: 'bg-blue-500 dark:bg-blue-600',
    },
    {
        id: 4,
        icon: '🔧',
        title: 'Tools Migrations Service',
        description: 'Our data or tools migration includes mapping fields between the two tools, deciding data import, and figuring out what to do with the data w...',
        color: 'bg-teal-500 dark:bg-teal-600',
    },
]

export default function ManagedServices() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-white dark:bg-gray-950 md:py-20 px-6 flex items-center">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            MANAGED SERVICES
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Manage your IT  <br />with an industry expert
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
                            For years, our customers have relied on Terralogic to manage their IT infrastructure. We proactively monitor and manage networks and data to ensure our customers delight.
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

            {/* IT Service Management Section */}
            <section className="w-full bg-purple-50 dark:bg-gray-900 py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide mb-4">
                            BE AWAY FROM IT CHALLENGES WITH
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                            Terralogic's IT service management
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* First Row - Card with Image */}
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                                <div className={`w-16 h-16 ${services[0].color} rounded-full flex items-center justify-center text-3xl mb-6`}>
                                    {services[0].icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {services[0].title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    {services[0].description}
                                </p>
                                <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
                                    Read more
                                </button>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="https://placehold.co/600x400/e5e7eb/374151?text=Team+Meeting"
                                    alt="IT Service Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Second Row - Two Cards */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <div className={`w-16 h-16 ${services[1].color} rounded-full flex items-center justify-center text-3xl mb-6`}>
                                {services[1].icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {services[1].title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                {services[1].description}
                            </p>
                            <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
                                Read more
                            </button>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                            <div className={`w-16 h-16 ${services[2].color} rounded-full flex items-center justify-center text-3xl mb-6`}>
                                {services[2].icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {services[2].title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                {services[2].description}
                            </p>
                            <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
                                Read more
                            </button>
                        </div>

                        {/* Third Row - Image with Card */}
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="https://placehold.co/600x400/e5e7eb/374151?text=Business+Meeting"
                                    alt="Business Consultation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                                <div className={`w-16 h-16 ${services[3].color} rounded-full flex items-center justify-center text-3xl mb-6`}>
                                    {services[3].icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {services[3].title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    {services[3].description}
                                </p>
                                <button className="text-pink-600 dark:text-pink-400 font-semibold hover:underline">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* State of the Art IT Infrastructure Section */}
            <section className="w-full bg-white dark:bg-gray-950 py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Image */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://placehold.co/600x400/e5e7eb/374151?text=IT+Infrastructure"
                                alt="IT Infrastructure Team"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right - Content */}
                        <div>
                            <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide mb-4">
                                HOW DO WE IMPROVE QUALITY OF LIFE, HOW DO WE DO IT?
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                A state of the art IT infrastructure
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                                Right from desktop virtualization, application virtualization, remote access, email migrations, server virtualization, cloud migrations, data center, and more for your company. From start-ups to the largest of commerce, Terralogic supports all company sizes and verticals with experience in healthcare, finance, education, non-profit, utilities, and construction, allowing organizations to secure data, cut costs, improve business outcomes, and maximize the benefits of managed IT services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Managed Network Solutions Section */}
            <section className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 dark:from-purple-800 dark:via-purple-700 dark:to-pink-700 py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
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
                                OUR GOAL IS TO BRING VALUE-ADDED BUSINESS OUTCOMES
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                By engineering managed network solutions
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed opacity-90">
                                That is secure, reliable, and scalable, continuously monitoring the health of your IT infrastructure. For years now, businesses have turned to Terralogic to manage their IT infrastructure. Terralogic continuously monitors the health of its infrastructure and supports end-users' needs. Our experts recommend the right IT-managed support services tools to solve security issues. Rely on us to monitor and manage your network components like routers, switches, servers, and storage systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
