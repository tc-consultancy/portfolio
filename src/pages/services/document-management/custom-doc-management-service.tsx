import CommonHero from "@/components/common/common-hero";
import { robo1 } from "@/assets";
import { FAQSection } from "@/components/sections/faq-section";

export default function CustomDocManagementService() {
    const capabilities = [
        {
            title: "ClerkTrack",
            description: "ClerkTrack streamlines the County Clerk's Register of Deeds office by providing a centralized, intelligent data entry, integrated scanning and document archiving capabilities, report management, records search, document display and much more.",
            image: robo1,
            bgColor: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "CourtTrack",
            description: "CourtTrack is software designed exclusively for County Sheriffs to manage and track the Civil Division processes. CourtTrack stores and manages defendants' and plaintiff names, dockets, assigned, served, attempts, cash bonds and see much more.",
            image: robo1,
            bgColor: "bg-gray-50 dark:bg-gray-800"
        },
        {
            title: "RecCenter",
            description: "RecCenter manages all your Official Fees and Excursion department from one central location. Integrate modules like Facility Rental, Memberships, Leagues, Instructional Reports Center and more. These modules allow you to manage and share your entire department's capabilities and simplify your processes.",
            image: robo1,
            bgColor: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "DocLink",
            description: "DocLink is a custom software program developed by us that provides seamless integration between paper and electronic documents. It's a powerful document processing software. DocLink launches scans, index or search functionalities within the imaging software from your core business application.",
            image: robo1,
            bgColor: "bg-gray-50 dark:bg-gray-800"
        },
        {
            title: "CountyRecordingOnline",
            description: "CountyRecordingOnline.net, cron is a hosted web site that allows you to quickly and securely recording originals and imaged submissions with the ability to file the documents electronically through the mail. The program is designed to be flexible and easy to use. It manages the items the correct fees and then deposits into your bank account.",
            image: robo1,
            bgColor: "bg-gray-900 dark:bg-gray-950"
        },
        {
            title: "Custom Solutions",
            description: "Through a consultation approach we can create custom software applications that will automate and run your business policies. We have developed software solutions for state and private entities companies that manage a diverse set of data to process.",
            image: robo1,
            bgColor: "bg-blue-50 dark:bg-blue-900/20"
        }
    ];

    return (
        <>
            <CommonHero
                heading="Custom solutions for \n efficient and profitable institution"
                subheading="Our team of experts specialize in creating custom solutions tailored perfectly for your unique needs."
                buttontitle="Lets Talk"
                subtleHeading="Custom Document Management"
            />

            {/* Why Custom Software Section */}
            <section className="py-16 md:py-24 px-6 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div className="flex justify-center">
                            <img
                                src={robo1}
                                alt="Custom Software Illustration"
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                Why Custom software?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                                Let's face it. Sometimes businesses and governments require custom software that fits more than one need. At the same time, they don't want to pay for a bunch of features they will never use. Here we in house software development team dedicates to creating a custom document management system for your organization. We have developed <span className="text-pink-600 dark:text-pink-400 font-semibold">Custom Document Management Software</span> for a government.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-4">
                                Our offerings include custom software development services and programming solutions tailored for the needs of our clients. We have developed custom software for a wide range of crafted productivity applications, content management systems, process tools, databases and front-ends, and more. We can work with your team to create databases, websites and mobile apps that fit exactly what your team needs for custom document management software and document scanning service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Capabilities Section */}
            <section className="py-16 md:py-24 px-6 bg-white dark:bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                        Our Capabilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {capabilities.map((capability, index) => (
                            <div
                                key={index}
                                className={`${capability.bgColor} p-8 rounded-lg transition hover:shadow-lg`}
                            >
                                <div className="flex justify-center mb-6">
                                    <img
                                        src={capability.image}
                                        alt={capability.title}
                                        className="w-full max-w-xs h-32 object-contain"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {capability.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                                    {capability.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <FAQSection/>
        </>
    )
}
