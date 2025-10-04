import { robo1 } from '@/assets'
import { FAQSection } from '@/components/sections/faq-section'
import { Button } from '@/components/ui/button'
import { Layers, Cpu, Briefcase, ShieldCheck } from 'lucide-react'

export default function CustomAppDev() {
    const features = [
        {
            icon: Layers,
            bgColor: 'bg-purple-500 dark:bg-purple-600',
            title: 'End to End Development Services',
            description: 'We deliver comprehensive application development services across multiple engagement models to support every phase of your IT systems lifecycle. From initial conceptualization through development, deployment, administration, maintenance, to continuous enhancement, we provide complete end-to-end solutions tailored to your needs.'
        },
        {
            icon: Cpu,
            bgColor: 'bg-orange-500 dark:bg-orange-600',
            title: 'Technical Superiority',
            description: 'Our expertise spans a diverse technology landscape, from cutting-edge cloud platforms like AWS and Azure to traditional legacy systems including IBM and HP mainframes. This versatility ensures we can work seamlessly with your existing infrastructure while driving innovation and modernization.'
        },
        {
            icon: Briefcase,
            bgColor: 'bg-teal-500 dark:bg-teal-600',
            title: 'Extensive Industry Knowledge',
            description: 'We deliver domain expertise and proven experience across all major industry verticals including Healthcare, Financial Services, Public Services, Consumer Services, Life Sciences, and Manufacturing. Our deep industry knowledge enables us to understand your unique challenges and deliver solutions that drive real business value.'
        },
        {
            icon: ShieldCheck,
            bgColor: 'bg-blue-500 dark:bg-blue-600',
            title: 'Quality Assured Practices',
            description: 'Our mature and robust quality assurance system is ISO9000 certified and assessed at CMMI Level 5. We support a variety of application lifecycle models and work to enhance and extend the quality practices of our customers, ensuring excellence in every deliverable.'
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-white dark:bg-gray-950 md:py-20 px-6 flex items-center">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            E COM
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Custom Application  <br />Development Services
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
                            Optimize cost and align your IT with your business outcomes through custom software.
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
                                Adding value to your business
                            </h2>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                                Enterprises are adopting the agile methodologies to cut cost on non-performing assets and activities. To thrive in the highly competitive market, and to outperform the competition, enterprises must get done with the traditional pre-configured solutions.  </p>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                Better UI design substantially uplifts the perception about the brand and has the potential to convert visitors into customers immediately. </p>
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
                                TC Consultancy offers a comprehensive range of custom application development services that enable enterprises to amplify the power of their IT infrastructure to support new capabilities and enhance the customer and partner experience.
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
