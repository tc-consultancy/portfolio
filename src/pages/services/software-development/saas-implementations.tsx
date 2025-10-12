import { robo1 } from '@/assets'
import { FAQSection } from '@/components/sections/faq-section'
import { Package, Users, UserCheck, Cloud } from 'lucide-react'
import CommonHero from '@/components/common/common-hero'

const features = [
    {
        icon: Package,
        bgColor: 'bg-orange-500 dark:bg-orange-600',
        title: 'Enterprise Resource Planning',
        description: 'We deliver comprehensive operating model, business process, and technology design and implementation services to support the adoption of cloud-based ERP solutions. Our expertise spans SAP, Oracle Cloud, NetSuite, and Workday financial and supply chain systems, ensuring seamless integration with your business operations.'
    },
    {
        icon: Users,
        bgColor: 'bg-teal-500 dark:bg-teal-600',
        title: 'Customer Relationship Management',
        description: 'Transform your customer engagement with our operating model and technology design and implementation services. We specialize in deploying off-premise CRM solutions that enhance customer interactions, streamline sales processes, and drive business growth through data-driven insights.'
    },
    {
        icon: UserCheck,
        bgColor: 'bg-blue-500 dark:bg-blue-600',
        title: 'Human Resources Transformation',
        description: 'Revolutionize your human capital management with our business model and technology design and implementation services. We support the adoption of leading cloud HR technologies including Workday, SAP, and Oracle Cloud, enabling efficient workforce management and employee experience enhancement.'
    },
    {
        icon: Cloud,
        bgColor: 'bg-purple-500 dark:bg-purple-600',
        title: 'Other SaaS Domains',
        description: 'Our expertise extends across a wide spectrum of enterprise cloud applications. We provide business process and technology design and implementation services for e-commerce platforms, content management systems, billing solutions, and more, tailored to meet your specific functional requirements.'
    }
]

export default function SaasImplimentations() {
    return (
        <>
            <CommonHero
                badge="SaaS Development"
                title="Build Robust, Scalable SaaS Applications"
                description="Make your product more configurable and scalable with our comprehensive SaaS development and implementation capabilities."
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
                                It's all about sophisticated  products and robust infrastructure
                            </h2>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                                SaaS solutions offer pay-as-you-go model for software, with anytime, anywhere access from any device. SaaS solutions are an ideal replacement for high-value, low-complexity applications hosted on premise. </p>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                A SaaS solution requires no investment in infrastructure. IT resources can be redeployed to core business functions, while maintenance and updates are factored-in. You benefit from:</p>
                            <ul>
                                <li>• Secure, scalable, reliable and always available IT</li>
                                <li>• Cost-effective IT services</li>
                                <li>• Rapid time-to-value and increased user adoption</li>
                            </ul>
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
                                We implement SaaS solutions as part of your cloud strategy and integrate them into your business using pre-built accelerators. You gain access to software from leading vendors, such as: Google, Microsoft, Netsuite, Oracle, Salesforce, SAP, and Workday.
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
