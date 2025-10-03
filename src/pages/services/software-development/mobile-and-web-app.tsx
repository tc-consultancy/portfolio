import { robo1 } from '@/assets'
import { Button } from '@/components/ui/button'
import { Zap, Server, Cloud, Palette } from 'lucide-react'

export default function MobileAndWebApp() {
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
                        {/* Agile for rapid delivery */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-orange-500 dark:bg-orange-600 flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Agile for rapid delivery
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    We have embedded DesOps and DevOps delivery model in our engineering culture. Higher degree of automation in development process reduces the stage gate barrier reduces implementation time thus enabling a faster time to market.
                                </p>
                            </div>
                        </div>

                        {/* Micro-services Architecture */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-teal-500 dark:bg-teal-600 flex items-center justify-center">
                                    <Server className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Micro-services Architecture
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Adopt faster innovation to lead the changing market dynamics through our microservice architecture services. We provide the tools developers need to build higher quality software products.
                                </p>
                            </div>
                        </div>

                        {/* Cloud Integration */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center">
                                    <Cloud className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    Cloud Integration
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Give a boost to your cloud first approach through our extensive capability of application development and cloud integration.
                                </p>
                            </div>
                        </div>

                        {/* UX UI Design */}
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-purple-500 dark:bg-purple-600 flex items-center justify-center">
                                    <Palette className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    UX UI Design
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    Engage the best pool of design talents from across the globe to kickstart the development of your futuristic product. We are a design driven company, who have made an impact on billion lives through design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
