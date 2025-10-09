import { robo1 } from "@/assets";
import { FAQSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";

export default function EmbeddedSDE() {

    return (
        <>

            {/* Hero Section */}
            <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-gray-50 dark:bg-gray-900 md:py-20 px-4 flex items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            EMBEDDED SERVICES
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Embedded Software  <br /> Development Services
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl leading-relaxed">
                            We make new-age software meet hardware through smart embedded design and integration services.
                        </p>
                        <Button className="mt-8 px-4 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white shadow-lg">
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
                                DevOps throughout product life cycle
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                Today, embedded software is at the heart of the functioning of all smart devices, and we understand that the need to keep up with rapid changes in technology is at the heart of your organizational goals.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                Our aim is to work with your goals to provide you with top-notch embedding engineering services just like you need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <div>
                <section className="pt-16 pb-32 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 dark:from-purple-800 dark:via-purple-900 dark:to-pink-800">
                    <div className="max-w-6xl mx-auto space-y-6 items-center">
                        <div className='max-w-3xl'>
                            <h3 className="text-3xl md:text-4xl font-bold text-white  leading-tight mb-6">High Performance Embedded Software</h3>
                            <p className="text-base md:text-xl  text-white/70 mb-6 leading-tight">We work closely with your operations, so that we can help you reduce operating costs, while improving product delivery turnaround time</p>
                        </div>
                    </div>
                </section>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-white dark:bg-neutral-900 p-12 -mt-24 rounded-xl'>
                    {[
                        {
                            icon: (
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                                </svg>
                            ),
                            title: "SW/FW Development",
                            description: "You approach us and we define the architecture of the software or firmware. Next, embedded systems that run on any Linux based platform are ...",
                            linkText: "Read more"
                        },
                        {
                            icon: (
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                                </svg>
                            ),
                            title: "Platform development",
                            description: "We look into the development of middleware and integration of 3rd party applications for automotive dashboard entertainment. These systems h...",
                            linkText: "Read more"
                        },
                        {
                            icon: (
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                </svg>
                            ),
                            title: "Yocto-based Linux",
                            description: "Your need for embedding is fulfilled, independent of the architecture of the hardware. We take care to ensure that Linux distributions are e...",
                            linkText: "Read more"
                        },
                        {
                            icon: (
                                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            ),
                            title: "Integration & testing",
                            description: "First we embed, then we test! You deserve the best return on your investment and it is our promise to give you the best results of our embed...",
                            linkText: "Read more"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className='bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-sm hover:shadow-md transition'>
                            <div className='flex items-start gap-4 mb-4'>
                                <div className='flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center'>
                                    {item.icon}
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                                    {item.title}
                                </h3>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3'>
                                {item.description}
                            </p>
                            <button className='text-pink-600 dark:text-pink-400 text-sm font-semibold hover:underline'>
                                {item.linkText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
              {/* Partner Section */}
            <section className="py-20 max-w-6xl mx-auto px-4">
                <div className="">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                     

                        {/* Right Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                DevOps throughout product life cycle
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                Today, embedded software is at the heart of the functioning of all smart devices, and we understand that the need to keep up with rapid changes in technology is at the heart of your organizational goals.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                Our aim is to work with your goals to provide you with top-notch embedding engineering services just like you need.
                            </p>
                        </div>

                           {/* Left Image */}
                        <div className="flex min-w-sm max-w-sm justify-center">
                            <img
                                src={robo1}
                                alt="IoT/OT Security Illustration"
                                className="max-w-sm w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection/>



        </>
    )
}
