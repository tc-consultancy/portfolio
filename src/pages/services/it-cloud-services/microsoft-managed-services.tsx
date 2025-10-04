import { robo1 } from "@/assets";
import { Button } from "@/components/ui/button";

export default function MicroSoftManagedServices() {
  return (
   <>
     {/* Hero Section */}
            <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-white dark:bg-gray-950 md:py-20 px-6 flex items-center">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                           MICROSOFT MANAGED SERVICES
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Microsoft  <br />Managed Services
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
                            Proactively manage business IT infrastructure with Terralogic's professional supervision.   
                        </p>

                        <Button className="mt-8 px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white shadow-lg">
                            Schedule a FREE Technology Consultation →
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
   </>
  )
}
