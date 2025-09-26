export default function AboutUs() {
  const benefits = [
    "We handpick jobs based on your goals and background",
    "20-25 real-time applications sent every day", 
    "You receive progress updates and interview alerts"
  ];

  return (
    <section className="  py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-15 dark:opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-gray-700 dark:bg-gray-300 rounded-full"></div>
        <div className="absolute top-40 right-60 w-16 h-16 bg-gray-900 dark:bg-gray-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            {/* Main circular image */}
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-black/50 dark:border-gray-200 shadow-2xl">
                <img 
                  src="/api/placeholder/320/320"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Play button overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-white dark:bg-gray-200 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-l-[12px] border-l-green-600 dark:border-l-green-700 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>

              {/* Circular text around play button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-full border-2 border-black/50 dark:border-gray-200 flex items-center justify-center">
                  <svg className="w-24 h-24 absolute animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path id="circle" d="M 50,50 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0"/>
                    </defs>
                    <text className="text-xs fill-white dark:fill-gray-200 font-medium">
                      <textPath href="#circle" startOffset="0%">
                        WATCH OUR VIDEO • WATCH OUR VIDEO • 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Secondary circular image */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full overflow-hidden border-6 border-black/50 dark:border-gray-200 shadow-xl">
              <img 
                src="/api/placeholder/192/192"
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-black dark:text-gray-100">
            {/* Badge */}
            <div className="inline-block border-2 border-black dark:border-gray-200 rounded-full px-6 py-2 mb-6">
              <span className="text-black dark:text-gray-200 font-medium text-sm uppercase tracking-wide">
                ABOUT US
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Empowering Careers Through Personalized, Inclusive Job Applications
            </h2>

            {/* Description */}
            <p className="text-lg text-neutral-600 dark:text-gray-200 mb-8 leading-relaxed">
              This job application service takes the burden off job seekers by applying to relevant openings on their behalf — consistently 
              and strategically, so they can focus on preparing for interviews, not hunting for jobs.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-green-400 dark:bg-green-300 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-black dark:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 dark:text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-green-400 hover:bg-green-300 dark:bg-green-300 dark:hover:bg-green-200 text-green-900 dark:text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors duration-200 flex items-center">
              Know more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}