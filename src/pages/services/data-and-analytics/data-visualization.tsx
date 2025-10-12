import { robo1 } from "@/assets";
import ServiceCard from "./components/ServiceCard";
import CommonHero from "@/components/common/common-hero";

export default function DataVisualization() {
    const services = [
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            ),
            title: "Dashboard optimization",
            description: "Analytical dashboards tell a more complete story than simply displaying raw data and are limitless in the breadth of data they can communicate in a single visual. Transforming data into information that is easily consumable and immediately actionable."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Tableau to Power BI Migration",
            description: "Making data analytics accessible to everyone by delivering a low-code to no-code experience for all aspects of data analysis. Visually showcase complex datasets, and identify relations and trends."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
            ),
            title: "Power BI Services",
            description: "Unify diverse data sources into immersive and interactive insights. Terralogic offers visually compelling data visualizations, transforming raw data into coherent narratives, and empowering decision making. Experience the power of data visualization with us."
        },
        {
            icon: (
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
            ),
            title: "Report Development",
            description: "We transform complex data into clear, impactful reports that drive informed decision making. Our team delivers visually stunning and interactive reports tailored to your business needs, unlocking the true value of your data."
        }
    ];

    const valueProps = [
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
            ),
            title: "Interactive Exploratory Analysis"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Visualize Trends and Patterns"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                </svg>
            ),
            title: "Customized Dashboards and Reports"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
            ),
            title: "Collaborative Data Exploration"
        },
        {
            icon: (
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
            ),
            title: "Real-time Data Visualization"
        }
    ];

    return (
        <>
            <CommonHero
                heading="Transform Complex Data Into \n Visual Stories That Drive Action"
                subheading="Unlock meaningful patterns and communicate insights with clarity through our innovative data visualization services that turn raw data into compelling visual narratives."
                buttontitle="Get Started"
                subtleHeading="DATA VISUALIZATION"
            />

            {/* Services We Offer Section */}
            <section className="py-16 md:py-24 px-6 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                        Services We Offer
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            {/* The Value We Offer Section */}
            <section className="relative py-16 md:py-24 px-6 bg-purple-400 dark:bg-purple-500 overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                            The value we offer
                        </h2>
                        <p className="text-white/90 text-base md:text-lg max-w-3xl">
                            With the help of our innovative data visualization services, you can maximize the potential of your data and discover insightful patterns that will help you achieve your goals.
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
                                <h3 className="text-sm md:text-base font-bold text-white">
                                    {prop.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Is Data Visualization Section */}
            <section className="py-16 md:py-24 px-6 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                What Is Data Visualization?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                                Data visualization services offer a dynamic and visually compelling way to analyze and present data, enabling you to uncover meaningful patterns, identify trends, and communicate insights with clarity. Transform your data into actionable visual narratives that drive better decision-making and propel your business forward.
                            </p>
                        </div>

                        <div className="flex justify-start lg:justify-start">
                            <img
                                src={robo1}
                                alt="Data Visualization Illustration"
                                className="w-full max-w-md object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Visualization Section */}
            <section className="relative py-16 md:py-24 px-6 bg-purple-400 dark:bg-purple-500 overflow-hidden">
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
                        Types of Visualization we offer
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {[
                            { icon: (<svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>), title: "Temporal" },
                            { icon: (<svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zm2 2V5h1v1h-1zM13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3zm2 2v-1h1v1h-1z" clipRule="evenodd" /></svg>), title: "Hierarchical" },
                            { icon: (<svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>), title: "Network" },
                            { icon: (<svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" /><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" /><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" /></svg>), title: "Geospatial" },
                            { icon: (<svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" /></svg>), title: "Multidimensional" }
                        ].map((type, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">{type.icon}</div>
                                <h3 className="text-base md:text-lg font-bold text-white">{type.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-24 px-6 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                        Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: (<svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>), title: "Infographics and Data Storytelling", description: "Our team of skilled data visualization experts combines analytical prowess with design finesse to create compelling visual narratives that effectively communicate your data insights." },
                            { icon: (<svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>), title: "Tailored Solutions for Your Business", description: "We understand that every business has unique data visualization needs. We offer customized solutions that align with your specific goals, ensuring that you get the most meaningful and impactful visualizations for your data." },
                            { icon: (<svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>), title: "Scalable and Flexible Solutions", description: "Whether you have a small dataset or a massive data repository, our visualization solutions are scalable and adaptable to accommodate your evolving needs. We ensure that your visualizations can handle growing data volumes while maintaining performance and usability." }
                        ].map((reason, index) => (
                            <div key={index} className="dark:bg-gray-800 p-8 rounded-lg hover:shadow-md transition">
                                <div className="mb-4">{reason.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{reason.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
