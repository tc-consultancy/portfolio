import { robo1 } from "@/assets";
import ServiceCard from "./components/ServiceCard";
import CommonHero from "@/components/common/common-hero";
import { FAQSection } from "@/components/sections/faq-section";

export default function DataAndAnalytics() {
    const services = [
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
            ),
            title: "Data strategy & consulting",
            description: "Our expert consultants work closely with you to develop a comprehensive data strategy, helping you unlock full potential of your data assets."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
            ),
            title: "Data mining & Machine learning",
            description: "Leverage the power of advanced data mining techniques and machine learning algorithms to extract hidden patterns and uncover valuable insights."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
            ),
            title: "Data insights & Predictive modelling",
            description: "Gain valuable insights into customer behavior, market trends, and future outcomes with our proactive decisions and drive sustainable business growth."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
            ),
            title: "Diagnostic & Descriptive analytics",
            description: "Understand the root causes of business challenges and gain a comprehensive view of your operations."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
            ),
            title: "Predictive & Prescriptive analysis",
            description: "Our advanced analytics technology will help you predict future outcomes and prescribe optimal actions."
        }
    ];

    const valueProps = [
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Data-driven decision making"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            ),
            title: "Enhanced operational efficiency"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
            ),
            title: "Risk mitigation"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
            ),
            title: "Forecasting & Planning"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            ),
            title: "Competitive advantage"
        }
    ];

    const dataAnalyticsFaqs = [
        {
            question: "What is data analytics and why is it important for my business?",
            answer: "Data analytics is the process of exploring, analyzing, and interpreting vast amounts of data to uncover meaningful insights and drive informed decision-making. By applying advanced statistical techniques, data mining algorithms, and visualization tools, businesses gain deeper understanding of operations, customer behavior, and market trends, enabling data-driven decisions that lead to competitive advantage."
        },
        {
            question: "What data analytics services do you offer?",
            answer: "We offer comprehensive services including Data Strategy & Consulting, Data Mining & Machine Learning, Data Insights & Predictive Modelling, Diagnostic & Descriptive Analytics, and Predictive & Prescriptive Analysis. Our expert consultants work closely with you to develop strategies that unlock the full potential of your data assets."
        },
        {
            question: "How does predictive analytics help my business?",
            answer: "Our predictive and prescriptive analysis uses advanced analytics technology to help you predict future outcomes and prescribe optimal actions. This enables proactive decision-making, sustainable business growth, and the ability to gain valuable insights into customer behavior, market trends, and future outcomes before they happen."
        },
        {
            question: "What value does data analytics bring to my organization?",
            answer: "Data analytics empowers your business through data-driven decision making, enhanced operational efficiency, risk mitigation, improved forecasting and planning, and competitive advantage. By transforming complex data into actionable insights, you can make informed strategic decisions that drive growth and success."
        },
        {
            question: "How do you help with data mining and machine learning?",
            answer: "We leverage the power of advanced data mining techniques and machine learning algorithms to extract hidden patterns and uncover valuable insights from your data. This helps you understand root causes of business challenges, gain comprehensive views of operations, and identify opportunities that might otherwise remain hidden in your data."
        }
    ];

    return (
        <>
            <CommonHero
                heading="Transform Data Into \n Actionable Business Intelligence"
                subheading="Unlock strategic insights and drive informed decisions with our comprehensive data analytics services that turn complex data into meaningful business outcomes."
                buttontitle="Get Started"
                subtleHeading="DATA ANALYTICS"
            />

            {/* Services We Offer Section */}
            <section className="py-16 md:py-24 px-6 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                        Services We Offer
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* What is Data Analytics Section */}
            <section className="py-16 md:py-24 px-6 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                What is Data Analytics?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                                Data analytics is the process of exploring, analyzing, and interpreting vast amounts of data to uncover meaningful insights and drive informed decision-making. By applying advanced statistical techniques, data mining algorithms, and visualization tools, businesses can gain a deeper understanding of their operations, customer behavior, and market trends.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-start lg:justify-start">
                            <img
                                src={robo1}
                                alt="Data Analytics Illustration"
                                className="w-full max-w-md object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Value We Offer Section */}
            <section className="relative py-16 md:py-24 px-6 bg-purple-400 dark:bg-purple-500 overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="mb-12">
                        <p className="text-white/80 text-sm font-semibold uppercase tracking-wide mb-2">
                            The value we offer
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                            Empower Your Business
                        </h2>
                        <p className="text-white/90 text-base md:text-lg max-w-3xl">
                            Unlock strategic insights, drive informed decisions, and achieve sustainable growth with our data analytics services.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {valueProps.map((prop, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        {prop.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {prop.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={dataAnalyticsFaqs} />
        </>
    );
}
