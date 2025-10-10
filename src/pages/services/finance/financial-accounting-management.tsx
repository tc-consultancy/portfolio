import { robo1 } from "@/assets";
import { Button } from "@/components/ui/button";

export default function FinancialAccountingManagement() {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
            ),
            title: "Bookkeeping and accounting",
            subtitle: "Professional Services",
            features: [
                "Accounts payable and receivable",
                "General ledger maintenance",
                "Bank reconciliation",
                "Financial statement preparation",
                "Payroll processing services"
            ]
        },
        {
            icon: (
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
            ),
            title: "Tax Compliance &",
            subtitle: "Representation",
            features: [
                "Tax planning",
                "Tax preparation",
                "IRS representation",
                "State tax compliance",
                "International tax services"
            ]
        },
        {
            icon: (
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
            ),
            title: "Payroll Services",
            features: [
                "Payroll processing and administration",
                "Tax filing and compliance",
                "Direct deposit setup",
                "Employee benefits management",
                "Year-end reporting and W-2 preparation"
            ]
        }
    ];

    const benefits = [
        {
            icon: (
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Accuracy and compliance",
            description: "Our experienced professionals ensure your financial records are accurate and compliant with all relevant regulations, reducing the risk of errors and penalties."
        },
        {
            icon: (
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
            ),
            title: "Time and cost savings",
            description: "Outsourcing your financial management allows you to focus on core business activities while we handle the complexities of accounting and compliance efficiently."
        },
        {
            icon: (
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
            ),
            title: "Scalable solutions",
            description: "Our services grow with your business, providing flexible solutions that adapt to your changing needs without the overhead of hiring additional staff."
        },
        {
            icon: (
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
            ),
            title: "Expert financial insights",
            description: "Gain access to professional financial analysis and strategic advice that helps you make informed business decisions and optimize your financial performance."
        },
        {
            icon: (
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
            ),
            title: "Enhanced data security",
            description: "We implement robust security measures and best practices to protect your sensitive financial information from unauthorized access and data breaches."
        },
        {
            icon: (
                <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
            ),
            title: "Improved cash flow",
            description: "Through better financial tracking and management, we help you optimize cash flow, improve collections, and maintain healthy working capital for business growth."
        }
    ];

    const clients = [
        { name: "Client 1", logo: robo1 },
        { name: "Client 2", logo: robo1 },
        { name: "Client 3", logo: robo1 },
        { name: "Client 4", logo: robo1 }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen w-full pt-28 md:pt-0 bg-white dark:bg-gray-950 md:py-20 px-6 flex items-center">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide mb-2">
                            FINANCE | STAFFING | OUTSOURCING
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight mb-6">
                            Revamp your  Financial <br />
                            & Accounting Management
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                            Streamline your financial operations with our comprehensive accounting and management services. Let us handle the complexity while you focus on growing your business.
                        </p>
                        <Button className="px-8 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white shadow-lg">
                            Get started →
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

            {/* Our Services Section */}
            <section className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Our services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition"
                            >
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                    {service.title}
                                </h3>
                                {service.subtitle && (
                                    <p className="text-purple-600 dark:text-purple-400 font-semibold text-base mb-4">
                                        {service.subtitle}
                                    </p>
                                )}
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300 text-base">
                                            <span className="text-purple-600 mt-1">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 md:py-24 px-6 bg-white dark:bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Benefits of our services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Clients we love to work with
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center p-6 bg-white dark:bg-gray-800 rounded-lg"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-24 h-24 object-contain grayscale hover:grayscale-0 transition"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outsource to Grow Section */}
            <section className="py-16 md:py-24 px-6 bg-white dark:bg-gray-950">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Outsource to Grow
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                        Ready to streamline your financial operations?
                    </p>
                    <Button className="px-8 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white shadow-lg">
                        Contact us
                    </Button>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                        New on our blog
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Featured Blog Post */}
                        <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden">
                            <img
                                src={robo1}
                                alt="Blog post"
                                className="w-full h-48 object-cover opacity-80"
                            />
                            <div className="p-6">
                                <span className="text-blue-400 text-xs font-semibold uppercase">BLOG</span>
                                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                                    Financial best practices for growing businesses
                                </h3>
                                <p className="text-gray-300 text-base mb-4">
                                    Discover essential financial management strategies to scale your business effectively.
                                </p>
                            </div>
                        </div>

                        {/* Blog List */}
                        <div className="space-y-4">
                            {[
                                {
                                    title: "How to optimize your cash flow management",
                                    date: "March 15, 2024"
                                },
                                {
                                    title: "Understanding tax compliance for small businesses",
                                    date: "March 10, 2024"
                                }
                            ].map((post, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition"
                                >
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400 text-base">{post.date}</p>
                                    <Button className="mt-4 px-4 py-2 text-base rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white">
                                        Read more →
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
