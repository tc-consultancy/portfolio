import { robo1 } from "@/assets";
import { FAQSection } from "@/components/sections/faq-section";
import CommonHero from "@/components/common/common-hero";

export default function QualityEngineer() {
    const qualityEngineerFaqs = [
        {
            question: "What types of QA testing services do you provide?",
            answer: "We provide comprehensive QA testing including functional testing, integration testing, system testing, sanity testing, and UAT (User Acceptance Testing). We also offer automated testing, performance testing, unit tests, and end-to-end QA services to ensure your software meets the highest quality standards."
        },
        {
            question: "How does automated testing improve software quality?",
            answer: "Automated testing provides consistent, repeatable test execution that catches bugs early and reduces human error. We design advanced automated QA tests that redefine testing procedures, establishing a no-compromise approach toward quality assurance. This results in faster test cycles, better coverage, and more reliable software releases."
        },
        {
            question: "What is your approach to performance testing?",
            answer: "We scrutinize your digital product's performance at various stages, scanning for hidden bugs and defects. Our performance testing ensures that your application's quality, speed, efficiency, and effectiveness remain intact under different load conditions, helping you deliver optimal user experiences."
        },
        {
            question: "Can you help with quality assurance for cloud and IoT applications?",
            answer: "Yes, we prioritize software quality assurance for digital products, cloud-based solutions, e-commerce applications, hyper-converged applications, and IoT setups. Our team has expertise in testing complex, distributed systems and ensuring they meet your quality standards across all platforms."
        },
        {
            question: "How do you ensure quick time-to-market without compromising quality?",
            answer: "We never take shortcuts. Our skilled QA engineers use the latest tools and technologies to maintain rigorous quality assurance processes while optimizing test cycles. We define end-to-end QA strategies, from test requirements to execution, ensuring faster time to market with consistently high quality across all components."
        }
    ];

    return (
        <>
            <CommonHero
                subtleHeading="QUALITY ENGINEER"
                heading="Comprehensive QA Testing\nWith Full Accountability"
                subheading="Enhanced traceability through functional, integration, system, sanity and UAT testing for superior software quality."
                buttontitle="Let's Talk"
            />


            {/* Bringing a change Section */}
            <section className="relative py-16 md:py-24 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 dark:from-purple-700 dark:via-pink-600 dark:to-pink-700 overflow-hidden">
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
                                MEET YOUR
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Quality standards
                            </h2>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                                We cover the spectrum of expertise needed for the quality standard you are looking for.</p>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                At TC Services, we meet your business challenges and opportunities with new approaches to testing and QA. By assuring quality needs for quicker test cycles and expanding the use of automation in testing efforts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Consistent Quality Section */}
            <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                       <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide mb-4">
                                AUTOMATED TESTING
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                For consistent quality
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-12">
                                Software quality assurance is always a priority when it comes to your digital products, cloud-based solutions, e-commerce applications, hyper converged applications & IoT setup.
                            </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                        
                            {/* Feature Cards */}
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: (
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                            </svg>
                                        ),
                                        title: "You need expertise",
                                        description: "Our team of skilled QA engineers with years of industry expertise on maintaining quality assurance process with the latest tools and technol...",
                                        linkText: "Read more",
                                        bgColor: "bg-orange-500"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                        ),
                                        title: "Quick time-to-market",
                                        description: "Faster time to market doesn't mean we take any short cuts, we are always driven by high quality of all the components involved in your produ...",
                                        linkText: "Read more",
                                        bgColor: "bg-cyan-500"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        ),
                                        title: "Validation and compliance",
                                        description: "We provide validation and software testing services for individual components of the products ensuring that your requirements meet customer ...",
                                        linkText: "Read more",
                                        bgColor: "bg-blue-500"
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center`}>
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-2">
                                                {feature.description}
                                            </p>
                                            <button className="text-pink-600 dark:text-pink-400 text-sm font-semibold hover:underline">
                                                {feature.linkText}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={robo1}
                                alt="Quality Assurance Testing"
                                className="w-full max-w-lg object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance Section */}
            <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-600 dark:from-purple-800 dark:via-purple-700 dark:to-pink-800 overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 border-2 border-white transform rotate-45"></div>
                    <div className="absolute top-32 right-32 w-48 h-48 border-2 border-white transform rotate-45"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="mb-12">
                        <p className="text-white/90 font-semibold text-sm uppercase tracking-wide mb-3">
                            WHY TC Services
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Quality Assurance?
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {[
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    title: "End to End QA",
                                    description: "We work with you to define end to end QA, ensure corresponding execution is always up to the mark. Right from defining the test requirements, test strategy, planning, and execution, we cover it all.",
                                    bgColor: "bg-orange-500"
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    title: "Automation",
                                    description: "We design advanced, automated quality assurance tests with focus on redefining QA testing procedures for our clients and with the purpose of establishing a no-compromise approach toward quality assurance.",
                                    bgColor: "bg-orange-500"
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    title: "Performance testing",
                                    description: "We scrutinize your digital product performance at various stages, we scan for hidden bugs and defects to ensure that the app's quality, speed, efficiency, and effectiveness are intact.",
                                    bgColor: "bg-orange-500"
                                },
                                {
                                    icon: (
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    title: "Unit tests",
                                    description: "We conduct detailed scrutiny of every individual unit of the code as our priority, in order to deliver optimized performance in the entire software.",
                                    bgColor: "bg-orange-500"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center`}>
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <FAQSection faqs={qualityEngineerFaqs} />

 {/* Bringing a change Section */}
            <section className="relative py-16 md:py-24 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 dark:from-purple-700 dark:via-pink-600 dark:to-pink-700 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                       

                        {/* left Content */}
                        <div className="order-1 md:order-2">
                        
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                                Accelerate your business through continuous quality assurance
                            </h2>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                             We will help you improve the overall quality of your digital products, that is efficient and effective across your digital transformation journey
                             </p></div>
                         {/* right Illustration */}
                        <div className="flex justify-center md:justify-start order-2 md:order-1">
                            <div className="relative w-full max-w-md">
                                <img
                                    src={robo1}
                                    alt="User Experience Illustration"
                                    className="w-full h-auto object-contain opacity-90"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
