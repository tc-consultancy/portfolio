import { robo1 } from "@/assets"
import { FAQSection } from "@/components/sections/faq-section"
import { Settings, Smartphone, RefreshCw, Database } from "lucide-react"
import CommonHero from '@/components/common/common-hero'

export default function EnterpriceAppDev() {
    const features = [
        {
            icon: Settings,
            bgColor: 'bg-purple-500 dark:bg-purple-600',
            title: 'Custom Enterprise Software Development',
            description: 'We deliver tailor-made enterprise solutions designed to fit seamlessly into your business ecosystem. Our comprehensive approach covers everything from initial design and development to deployment and ongoing support, ensuring your software perfectly complements your operations.'
        },
        {
            icon: Smartphone,
            bgColor: 'bg-orange-500 dark:bg-orange-600',
            title: 'Enterprise Mobile Solutions',
            description: 'Transform your enterprise operations with mobile applications that deliver efficiency and agility across all devices. Our solutions are built to be compatible, accessible, and scalable on smartphones, personal laptops, and tablets, empowering your workforce wherever they are.'
        },
        {
            icon: RefreshCw,
            bgColor: 'bg-teal-500 dark:bg-teal-600',
            title: 'Legacy Application Modernisation',
            description: 'Outdated software systems drain resources with high maintenance costs and limited value delivery. Partner with us to modernize your legacy applications, bringing renewed efficiency, agility, and innovation to your enterprise infrastructure.'
        },
        {
            icon: Database,
            bgColor: 'bg-blue-500 dark:bg-blue-600',
            title: 'Software Integration & Data Management',
            description: 'Optimize your total cost of ownership by seamlessly integrating new solutions into your existing application landscape. Our expertise in enterprise application integration and data management ensures smooth connectivity and efficient data flow across your systems.'
        }
    ]

    return (
        <>
            <CommonHero
                badge="Enterprise App Development"
                title="Transform Your Business with Expert Enterprise Solutions"
                description="Leverage 15 years of expertise in enterprise software development, API integration, legacy system modernization, and process automation."
                accentColor="purple-400"
            />

            {/* Bringing a change Section */}
            <section className="relative py-16 md:py-24 px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 dark:from-purple-700 dark:via-pink-600 dark:to-pink-700 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Illustration */}
                        <div className="flex justify-center md:justify-start order-2 md:order-1">
                            <div className="relative w-full max-w-md">
                                <img
                                    src={robo1}
                                    alt="User Experience Illustration"
                                    className="w-full h-auto object-contain opacity-90"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="order-1 md:order-2">
                            <p className="text-white/90 font-semibold text-sm uppercase tracking-wide mb-4">
                                IT'S ALL ABOUT
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                It's all about reducing  <br />the clutter and simplifying the process
                            </h2>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">Modern enterprise solutions are developed to consolidate multiple silos of a company’s business through a seamless interchange of information. These solutions enable enterprises to gain visibility over the entire business, that helps the management make informed decisions.</p>

                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Section */}
            <section className="py-20 max-w-6xl mx-auto">
                <div className="">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Left Image */}
                        <div className="flex min-w-sm max-w-sm justify-center">
                            <img
                                src={robo1}
                                alt="IoT/OT Security Illustration"
                                className="max-w-sm w-full object-contain"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                What do we do?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                We implement SaaS solutions as part of your cloud strategy and integrate them into your business using pre-built accelerators. You gain access to software from leading vendors, such as: Google, Microsoft, Netsuite, Oracle, Salesforce, SAP, and Workday
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How do we do it Section */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                        DESIGN TO TRANSFORM LIVES
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4">
                        How do we do it?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <FAQSection />
        </>
    )
}
