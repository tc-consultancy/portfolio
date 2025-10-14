import CommonHero from "@/components/common/common-hero";
import StrategySection from "@/components/common/strategy-section";

export default function InfraOutsourcingServices() {
  const ownershipPoints = [
    {
      icon: <span className="text-3xl text-white">📊</span>,
      title: "Data that speaks",
      description: "Find data that speaks for itself with proven tools, methods and processes to ensure consistency with minimal risk.",
      color: "bg-pink-500 dark:bg-pink-600"
    },
    {
      icon: <span className="text-3xl text-white">🔓</span>,
      title: "More freedom",
      description: "Explore the best partnership products to add the right value to deliver market-leading solutions that meet your needs.",
      color: "bg-orange-500 dark:bg-orange-600"
    },
    {
      icon: <span className="text-3xl text-white">🎯</span>,
      title: "Business focus",
      description: "Everything we think and align, find and strategize is as per your own business objectives so that you can enjoy continuous improvement.",
      color: "bg-blue-500 dark:bg-blue-600"
    }
  ];

  return (
    <>
      <CommonHero
        subtleHeading="Infrastructure Outsourcing"
        heading="Trusted IT Infrastructure Outsourcing\nfor Rapid Response"
        subheading="Streamline your operations with automated IT infrastructure services designed to reduce support needs and enhance efficiency."
        buttontitle="Let's Talk"
      />

      {/* Managed Network Solutions Section */}
      <section className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 dark:from-purple-800 dark:via-purple-700 dark:to-pink-700 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Illustration */}
            <div className="flex justify-center items-end lg:justify-start">
              <div className="relative">
                <svg
                  className="w-full max-w-md h-auto"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Server Stack */}
                  <g opacity="0.9">
                    {/* Server 1 */}
                    <rect x="80" y="180" width="240" height="50" rx="8" fill="white" opacity="0.95" />
                    <circle cx="110" cy="205" r="8" fill="#a855f7" />
                    <circle cx="135" cy="205" r="8" fill="#a855f7" />
                    <circle cx="160" cy="205" r="8" fill="#a855f7" />
                    <rect x="200" y="195" width="100" height="8" rx="4" fill="#ec4899" opacity="0.6" />
                    <rect x="200" y="210" width="80" height="8" rx="4" fill="#ec4899" opacity="0.4" />

                    {/* Server 2 */}
                    <rect x="80" y="240" width="240" height="50" rx="8" fill="white" opacity="0.95" />
                    <circle cx="110" cy="265" r="8" fill="#a855f7" />
                    <circle cx="135" cy="265" r="8" fill="#a855f7" />
                    <circle cx="160" cy="265" r="8" fill="#a855f7" />
                    <rect x="200" y="255" width="100" height="8" rx="4" fill="#ec4899" opacity="0.6" />
                    <rect x="200" y="270" width="60" height="8" rx="4" fill="#ec4899" opacity="0.4" />

                    {/* Server 3 */}
                    <rect x="80" y="300" width="240" height="50" rx="8" fill="white" opacity="0.95" />
                    <circle cx="110" cy="325" r="8" fill="#a855f7" />
                    <circle cx="135" cy="325" r="8" fill="#a855f7" />
                    <circle cx="160" cy="325" r="8" fill="#a855f7" />
                    <rect x="200" y="315" width="100" height="8" rx="4" fill="#ec4899" opacity="0.6" />
                    <rect x="200" y="330" width="90" height="8" rx="4" fill="#ec4899" opacity="0.4" />
                  </g>

                  {/* Cloud */}
                  <g opacity="0.8">
                    <ellipse cx="250" cy="100" rx="60" ry="35" fill="white" opacity="0.9" />
                    <ellipse cx="220" cy="110" rx="45" ry="30" fill="white" opacity="0.9" />
                    <ellipse cx="280" cy="110" rx="45" ry="30" fill="white" opacity="0.9" />
                  </g>

                  {/* Gear */}
                  <g opacity="0.7">
                    <circle cx="120" cy="120" r="35" fill="white" opacity="0.8" />
                    <circle cx="120" cy="120" r="20" fill="#a855f7" />
                    <rect x="115" y="85" width="10" height="15" rx="2" fill="white" opacity="0.8" />
                    <rect x="115" y="140" width="10" height="15" rx="2" fill="white" opacity="0.8" />
                    <rect x="85" y="115" width="15" height="10" rx="2" fill="white" opacity="0.8" />
                    <rect x="140" y="115" width="15" height="10" rx="2" fill="white" opacity="0.8" />
                  </g>

                  {/* Globe */}
                  <g opacity="0.6">
                    <circle cx="80" cy="80" r="25" fill="white" opacity="0.7" />
                    <path d="M 80 55 Q 90 80 80 105" stroke="#a855f7" strokeWidth="2" fill="none" />
                    <path d="M 80 55 Q 70 80 80 105" stroke="#a855f7" strokeWidth="2" fill="none" />
                    <ellipse cx="80" cy="80" rx="25" ry="10" stroke="#a855f7" strokeWidth="2" fill="none" />
                  </g>

                  {/* Magnifying Glass */}
                  <g opacity="0.7">
                    <circle cx="320" cy="320" r="30" fill="white" opacity="0.8" stroke="#a855f7" strokeWidth="3" />
                    <line x1="342" y1="342" x2="365" y2="365" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right - Content */}
            <div className="text-white">
              <p className="font-semibold text-sm uppercase tracking-wide mb-4 opacity-90">
                SAFEGUARD VALUE TO QUALITY WITH
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                An effective TCO
              </h2>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                We empower you to take the right step and avail the best possible advantage of any opportunity. Now move into different markets with confidence and capture the best hike to your market standards.
              </p>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                Don’t stay stuck dealing with backlogs of your projects that need technology expertise. Talk to us to let us help you optimize your overall business strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
        <StrategySection
        topHeading="TO WIN THE EVER-CHANGING MARKETS"
        heading="Get greater ownership"
        description="No more complex and inefficient IT environments, you need an outsourcing partner who keeps it simple and easy. For that you need:"
        imageUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
        imageAlt="Business professionals in meeting"
        points={ownershipPoints}
      />

      {/* Outsourcing Capabilities Section */}
      <section className="w-full bg-gray-50 dark:bg-gray-900 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-purple-400 dark:text-purple-400 font-semibold text-sm uppercase tracking-wide mb-4">
              OUR IT INFRASTRUCTURE
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Outsourcing capabilities
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Left - Service desk outsourcing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-400 dark:bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl text-white">🎧</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Service desk outsourcing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                    Reduce risk through multi-site support and introduce remote or self-service capabilities to cut help desk cost...
                  </p>
                  <button className="text-purple-400 dark:text-purple-400 font-semibold hover:underline">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* Top Right - Image */}
            <div className="rounded-2xl overflow-hidden shadow-md row-span-2">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Customer service representative with headset"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle Left - Workplace outsourcing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-400 dark:bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl text-white">👥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Workplace outsourcing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Provide a more secure, stable environment that can reduce total cost of IT ownership up to 40 percent.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Left - Image */}
            <div className="rounded-2xl overflow-hidden shadow-md row-span-2">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Digital technology and network infrastructure"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right - Data center outsourcing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-orange-500 dark:bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl text-white">🗄️</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Data center outsourcing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                    Reduce complexity, improve utilization, mitigate risks associated with staff turnover and reduce data center o...
                  </p>
                  <button className="text-purple-400 dark:text-purple-400 font-semibold hover:underline">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Right - Network outsourcing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-500 dark:bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl text-white">🌐</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Network outsourcing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                    Establish a more secure and robust network infrastructure, minimize network downtime and reduce network operat...
                  </p>
                  <button className="text-purple-400 dark:text-purple-400 font-semibold hover:underline">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  )
}
