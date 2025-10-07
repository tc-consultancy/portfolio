import { robo1 } from "@/assets";
import { FAQSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DataEngineer() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const features = [
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
            ),
            title: "Analyzing data sets",
            shortDescription: "Every organization collects a wide variety of data and only by asking the right questions and assessing data in combination with complementary information will yield actionable results.",
            fullDescription: "Every organization collects a wide variety of data and only by asking the right questions and assessing data in combination with complementary information will yield actionable results. Our data scientists help you understand patterns, trends, and insights that drive strategic business decisions.",
            bgColor: "bg-orange-500"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
            ),
            title: "Internet of things",
            shortDescription: "Make the data flow from the stream of data meant for connected devices, to process for value-added operational analytics. This is how we optimize the supply chain of asset management.",
            fullDescription: "Make the data flow from the stream of data meant for connected devices, to process for value-added operational analytics. This is how we optimize the supply chain of asset management. We enable real-time monitoring and predictive maintenance for IoT ecosystems.",
            bgColor: "bg-cyan-500"
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
            ),
            title: "Machine Vision",
            shortDescription: "Make the data flow from the stream of data meant for connected devices, to process for value-added operational analytics. This is how we optimize the supply chain of asset management.",
            fullDescription: "Make the data flow from the stream of data meant for connected devices, to process for value-added operational analytics. This is how we optimize the supply chain of asset management. Our machine vision solutions enable automated quality control and intelligent image processing.",
            bgColor: "bg-blue-500"
        }
    ];

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const analysisItems = [
        {
            title: "Sentiment Analysis",
            description: "At Terralogic, we use Text Data Analytics to understand the most varied responses to a product experience so that the organization can take measures to redress the situation.",
            image: robo1
        },
        {
            title: "Predictive Analysis",
            description: "Using historical data also yields results that can be used to predict future growth and development. Predictive analysis can be done on the basis of the company and industry-centric data alike.",
            image: robo1
        }
    ];

    return (
        <>

            {/* Hero Section */}
            <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-gray-50 dark:bg-gray-900 md:py-20 px-6 flex items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            DATA Engineer
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Driving Business  <br />  Growth with Data Science
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl leading-relaxed">
                            At TC IT Services, we mine data, treat and repeat the process until it yields results.
                        </p>
                        <Button className="mt-8 px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white shadow-lg">
                            Lets Talk →
                        </Button>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center">
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
                                What you need is to build
                            </p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Resilient data science roadmaps
                            </h2>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                                At Terralogic, we build data science road maps to aid different organizations in solving their unique problems.
                            </p>
                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                We are industry competent with the process of harnessing data-driven insights for initiating new businesses, advising strategic changes, or accessing new markets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* For Consistent Quality Section */}
            <section className="py-16 md:py-24 px-6 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide mb-4">
                        DO YOU KNOW
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                        Need to go data-driven?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-12">
                        We practice supervised learning towards substantial data monitoring, that watches over all the means to identify vulnerable operations and take needful preventative measures in real-time. We put into use a wide variety of machine learning algorithms like Linear Regression, Regression tree, R-programming, and dispersion analysis to provide actionable business insights.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>

                            {/* Feature Cards */}
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center`}>
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                                {expandedIndex === index ? feature.fullDescription : feature.shortDescription}
                                                {" "}
                                                <button
                                                    onClick={() => toggleExpand(index)}
                                                    className="text-pink-600 dark:text-pink-400 text-sm font-semibold hover:underline inline"
                                                >
                                                    {expandedIndex === index ? "Show less" : "See more"}
                                                </button>
                                            </p>
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


            <div>
                <section className="pt-16 pb-32 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 dark:from-purple-800 dark:via-purple-900 dark:to-pink-800">
                    <div className="max-w-6xl mx-auto space-y-6 items-center">
                        <div className='max-w-3xl'>
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">Data Analysis Services</h3>
                            <p className="text-base md:text-xl text-white/70 mb-6 leading-tight">We leverage advanced analytics to transform your data into actionable insights</p>
                        </div>
                    </div>
                </section>
                <div className='grid grid-cols-1 gap-8 max-w-5xl mx-auto bg-white dark:bg-neutral-900 p-12 -mt-24 rounded-xl'>
                    {analysisItems.map((item, idx) => (
                        <div key={idx} className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                            {idx % 2 === 0 ? (
                                <>
                                    <div>
                                        <div className='border-l-4 border-pink-600 pl-4 mb-4'>
                                            <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className='text-gray-600 dark:text-gray-300 text-base leading-relaxed'>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className='w-full max-w-md object-contain rounded-lg'
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='flex justify-center order-2 md:order-1'>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className='w-full max-w-md object-contain rounded-lg'
                                        />
                                    </div>
                                    <div className='order-1 md:order-2'>
                                        <div className='border-l-4 border-pink-600 pl-4 mb-4'>
                                            <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className='text-gray-600 dark:text-gray-300 text-base leading-relaxed'>
                                            {item.description}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <FAQSection/>


        </>
    )
}
