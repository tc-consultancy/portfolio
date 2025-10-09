import { robo1 } from "@/assets";
import { FAQSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";

export default function Devops() {
    return (
        <>

            {/* Hero Section */}
            <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-gray-50 dark:bg-gray-900 md:py-20 px-4 flex items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            DEV OPS
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Make your deploy <br /> workloads easy
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl leading-relaxed">
                            We deploy code in hours between lines of business, development, and IT frameworks. Helping you deliver powerful software at the pace of business.
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
            
            {/* Partner Section */}
            <section className="py-20 max-w-6xl mx-auto px-4">
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
                               Different in DevOps
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                As technology is continuously evolving, it has become imperative for a business to have speed and agility. The current market scenario has caused a massive shift in the whole IT and software delivery system. With the implementation of devops culture, business can look at improving time to market by almost 90%.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                DevOps is a set of practices that combines software and IT operations. It aims to shorten the system development life cycle and provide continuous delivery with high software quality.
                            </p>

                        </div>
                    </div>
                </div>
            </section>

            {/* What is DevOps Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content - What is DevOps */}
                        <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-lg shadow-sm">
                            <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide mb-4">
                                THUS THE BIRTH OF DEVOPS
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                What is Devops?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                                A set of processes and practices which combines the software development and IT operations team together by devops service providers. The primary aim of Devops is to shorten the development life cycle and improve the quality of the softwares/products on a continuous basis.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center z-10 md:mt-24 items-start">
                            <img
                                src={robo1}
                                alt="DevOps Developer"
                                className="w-full max-w-md object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why DevOps Section */}
            <section className="relative py-20 -mt-32 bg-gradient-to-br from-purple-600 via-pink-500 to-pink-600 dark:from-purple-800 dark:via-pink-700 dark:to-pink-800 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2  ">
                        {/* Left Content */}
                        <div className="text-white">
                            <p className="font-semibold text-sm uppercase tracking-wide mb-4 opacity-90">
                                BUILD FASTER AND BETTER
                            </p>
                            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
                                Why DevOps?
                            </h2>

                            {/* Feature Cards */}
                            <div className="space-y-6  h-full">
                                {/* Consistent Quality Card */}
                                <div className="bg-white  dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                Consistent Quality
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300  leading-relaxed">
                                                Using practices of continuous release and deployment, continuous testing, and continuous monitoring enables companies to continuously deliver quality software to the users.
                                            </p>
                                        </div>
                                    </div>
                                <div className="h-px my-8 w-full bg-neutral-300"/>

                                     <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                CI/CD Pipelines
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                Automated continuous integration and deployment pipelines streamline the development process and reduce time to market.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            
                            </div>
                        </div>

                        {/* Right Content - Real Time Monitoring Card */}
                        <div className="flex justify-center ">
                            <div className="bg-white dark:bg-gray-900 p-8 mt-36 rounded-lg shadow-lg max-w-md w-full">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            Real Time Monitoring
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300  leading-relaxed">
                                            We carry forth an integrated set of DevOps tools for monitoring that has the power to improve visibility and productivity of your product development process and deliver.
                                        </p>
                                    </div>
                                </div>
                                <div className="h-px my-8 w-full bg-neutral-300"/>
                                  <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                            Resilient Systems
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300  leading-relaxed">
                                            Make the move towards continuous delivery that underpins continuous delivery and much of the DevOps movement, when done properly, goes a long way to enhance your security and system resiliency.
                                                                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FAQSection/>

        </>
    )
}
