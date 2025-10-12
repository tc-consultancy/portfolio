import { robo1 } from '@/assets'
import { FAQSection } from '@/components/sections/faq-section'
import { Palette, ShoppingCart, Plug, Store } from 'lucide-react'
import CommonHero from '@/components/common/common-hero'

export default function ECOM() {
    const features = [
        {
            icon: Palette,
            bgColor: 'bg-purple-500 dark:bg-purple-600',
            title: 'Design First Approach',
            description: 'If you build a beautiful product, your customers will speak for you. With market flooded with E-commerce platforms, digital experience has become a key differentiator. Our unmatched design capability helps you build eye-pleasing online shopping platforms that engage users, nudge them for an action and convert them into a sale.'
        },
        {
            icon: ShoppingCart,
            bgColor: 'bg-orange-500 dark:bg-orange-600',
            title: 'E-commerce Website and Application Development',
            description: 'While better UX enables seamless navigation through the product, slick coding and quick deployment give you the advantage of quick time to market. We provide high security and data privacy, increased speed and efficiency, payment gateway integration and powerful inventory management system.'
        },
        {
            icon: Store,
            bgColor: 'bg-teal-500 dark:bg-teal-600',
            title: 'B2C & B2B Marketplaces',
            description: 'We have expertise in developing sophisticated B2B & B2C online marketplaces. Enriched with essential features like a shopping list, reporting, shipping & logistics management, order management, payment management, etc, we craft robust B2B & B2C storefronts for clients.'
        },
        {
            icon: Plug,
            bgColor: 'bg-blue-500 dark:bg-blue-600',
            title: 'API Integration',
            description: 'Our developers can integrate third-party APIs like PayPal, FedEx, QuickBooks, Google Analytics API, etc that provide ease of performing various operations on your eCommerce website. We ensure to integrate third-party APIs with utter proficiency.'
        }
    ]

    return (
        <>
            <CommonHero
                badge="E-Commerce Development"
                title="Build Next-Gen Online Stores That Drive Sales"
                description="Transform your e-commerce vision into reality with comprehensive development services covering strategy, design, integrations, and migrations."
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
                                Bringing consumer <br />& tech together
                            </h2>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                                Online shopping is a trend that is not going to slow up in near future. This domain offers a great opportunity for disruption in terms of proving digital experience to users. With CAGR of almost 70%, this is the time for you to get done with the traditional E-commerce platforms and adopt the next wave of modernisation.  </p>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                The core objective of every E-commerce business should be to attract maximum customers, and ensure conversion to a sale. This requires a well though strategy, intuitive app design, a robust coding and an integrated support. </p>
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
                                TC Consultancy offers a full-suite of E-commerce development services, including strategy, research, design, integrations, migrations and development of next-gen online stores. We also provide ongoing 24x7 support and maintenance, to help keep your site open for business and able to generate revenue at all times.
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
