import { robo1 } from '@/assets'
import { FAQSection } from '@/components/sections/faq-section'
import { Button } from '@/components/ui/button'
import { Zap, Server, Cloud, Palette } from 'lucide-react'

const features = [
    {
        icon: Zap,
        bgColor: 'bg-orange-500 dark:bg-orange-600',
        title: 'Agile for rapid delivery',
        description: 'We have embedded DesOps and DevOps delivery model in our engineering culture. Higher degree of automation in development process reduces the stage gate barrier reduces implementation time thus enabling a faster time to market.'
    },
    {
        icon: Server,
        bgColor: 'bg-teal-500 dark:bg-teal-600',
        title: 'Micro-services Architecture',
        description: 'Adopt faster innovation to lead the changing market dynamics through our microservice architecture services. We provide the tools developers need to build higher quality software products.'
    },
    {
        icon: Cloud,
        bgColor: 'bg-blue-500 dark:bg-blue-600',
        title: 'Cloud Integration',
        description: 'Give a boost to your cloud first approach through our extensive capability of application development and cloud integration.'
    },
    {
        icon: Palette,
        bgColor: 'bg-purple-500 dark:bg-purple-600',
        title: 'UX UI Design',
        description: 'Engage the best pool of design talents from across the globe to kickstart the development of your futuristic product. We are a design driven company, who have made an impact on billion lives through design.'
    }
]

export default function CloudImplimentations() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-white dark:bg-gray-950 md:py-20 px-6 flex items-center">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            MOBILE & WEB APP DEVELOPMENT
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Top Mobile and<br />Web App Development Services
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
                            Our application development services empower you to create apps that deliver exceptional user experiences across all platforms.
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

            {/* Bringing a change Section */}
            <section className="relative py-16 md:py-24 px-6 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 dark:from-purple-700 dark:via-pink-600 dark:to-pink-700 overflow-hidden">
                <div className="max-w-7xl mx-auto">
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
                                Bringing a change<br />to user's life
                            </h2>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                                With the evolution of users and their needs, the new breed of applications must be smart and intelligent, and a step ahead of the user's requirements. However, awesome digital products don't suddenly appear out of nowhere. It involves a well scripted strategy to deliver meaningful values to users and a robust framework to translate the thoughts into a usable product.
                            </p>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                As an application development company, we build products that solve problems, charm users, and get your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Section */}
            <section className="py-20 max-w-7xl mx-auto">
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
                                We build Android ,iOS and Web apps for every industry. Our end to end capability right from design to development of products gives us an edge to develop cutting edge digital products that are future ready and simplifies business complexities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How do we do it Section */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
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
