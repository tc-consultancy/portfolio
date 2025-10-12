import { robo1 } from "@/assets";
import ServiceCard from "./components/ServiceCard";
import SectionContainer from "@/components/common/section-container";
import CommonHero from "@/components/common/common-hero";

export default function DataEngineering() {
    const services = [
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
            ),
            title: "Data integration",
            description: "Effortlessly connect and synchronize data from various sources, enabling a unified and holistic view of your organization's information landscape."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            ),
            title: "Data warehousing",
            description: "Build a secure and reliable data warehousing solution that empowers you to efficiently store, manage, and retrieve large volumes of data."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
            ),
            title: "Data modeling",
            description: "Craft comprehensive data models that capture the essence of your business processes, providing a solid foundation for data analysis, reporting, and decision-making."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
            ),
            title: "Data Transformation & Cleansing",
            description: "Improve data quality by transforming and cleansing your data, ensuring accuracy, consistency, and integrity for more reliable insights and outcomes."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            ),
            title: "Data architecture design",
            description: "Design a robust and scalable data architecture that aligns with your unique business needs, enabling seamless data integration, storage, and retrieval."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
            ),
            title: "Cloud data engineering",
            description: "Leverage the flexibility and scalability of cloud platforms to architect and optimize data pipelines, enabling agile data processing and analytics."
        }
    ];

    const valueProps = [
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
            ),
            title: "Enhanced data agility"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            ),
            title: "Improved data quality"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
            ),
            title: "Actionable insights"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Data security & assurance"
        }
    ];

    const sectionData = [
        {
            "title": "Customised solutions",
            "description": "Our data engineering services are specifically created to handle the particular data difficulties you face. We collaborate closely with you to comprehend your unique needs and provide specialised solutions that improve performance, streamline data processes, and generate useful insights.",
            "imgDirection": "right"
        },
        {
            "title": "Cutting edge technologies",
            "description": "Our expert team leverages cutting-edge tools and frameworks like Apache Spark, Hadoop, and cloud solutions to deliver robust data engineering solutions. Empowering your business with scalable infrastructure, real-time processing, and advanced analytics.",
            "imgDirection": "left"
        },
        {
            "title": "Data quality & governance",
            "description": "At Terralogic, we prioritize accurate and compliant data. Our data engineering services focus on data quality and governance, implementing robust checks, validation processes, and cleansing techniques for data integrity.",
            "imgDirection": "right"
        },
        {
            "title": "Scalability & performance",
            "description": "We architect robust and scalable data solutions that can handle increasing data demands, ensuring uninterrupted data processing and analysis. By leveraging cutting-edge technologies and best practices, we optimize your data pipelines, storage systems, and processing frameworks for maximum efficiency and speed.",
            "imgDirection": "left"
        }
    ]

    return (
        <>
            <CommonHero
                heading="Build Robust Data Pipelines \n For Scalable Analytics"
                subheading="Transform raw data into structured insights with our comprehensive data engineering services that bridge unprocessed data and actionable business intelligence."
                buttontitle="Get Started"
                subtleHeading="DATA ENGINEERING"
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

            {/* What is Data Engineering Section */}
            <section className="py-16 md:py-24 px-6 dark:bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                What is data engineering?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                                Data engineering bridges unprocessed data and insights. We convert complex sources into structured formats, enabling quick analysis and business intelligence. Our cutting-edge tech handles large-scale data processing and management.
                            </p>
                        </div>

                        <div className="flex justify-start lg:justify-start">
                            <img
                                src={robo1}
                                alt="Data Engineering Illustration"
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
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Driving Data-Enabled Success
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            {/* Why Choose Us Section */}
            <div className='py-12 px-4 md:px-6'>
                <h3 className="text-3xl md:text-4xl max-w-6xl mx-auto px-4 md:px-6 font-bold text-neutral-900 dark:text-white mb-12 leading-tight">Why choose us?</h3>
                <SectionContainer data={sectionData} />
            </div>

            {/* Industries Section */}
            <section className="relative py-16 md:py-24 px-6 bg-purple-400 dark:bg-purple-500 overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
                        The industries we've worked for
                    </h2>

                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {[
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    title: "Financial"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    title: "Healthcare"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                        </svg>
                                    ),
                                    title: "Insurance"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    title: "Legal"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                    ),
                                    title: "Education"
                                },
                                {
                                    icon: (
                                        <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                    ),
                                    title: "Accounting"
                                }
                            ].map((industry, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-3">
                                        {industry.icon}
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                                        {industry.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
