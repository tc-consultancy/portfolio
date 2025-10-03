import { robo1 } from '@/assets'
import { Button } from '@/components/ui/button'

export default function MobileAndWebApp() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-gray-50 dark:bg-gray-900 md:py-20 px-6 flex items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            MOBILE & WEB APP DEVELOPMENT
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                        Top Mobile and   <br />Web App Development Services
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl leading-relaxed">
                        Our Application development services allow you to build apps that provide unforgettable user experiences across all platforms.

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
    </>
  )
}
