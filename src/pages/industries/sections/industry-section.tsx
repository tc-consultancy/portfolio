interface Industry {
  id: string
  title: string
  subtitle: string
  description: string
}

interface IndustrySectionProps {
  industry: Industry
  index: number
}

export function IndustrySection({ industry, index }: IndustrySectionProps) {
  const isEven = index % 2 === 0

  return (
    <section id={industry.id} className="scroll-mt-24">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
        {/* Image Wrapper */}
          <div className="aspect-[9/11] h-96  rounded-full bg-neutral-400 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-6xl mb-4">🏢</div>
              <p className="text-lg font-medium">{industry.title}</p>
              <p className="text-sm opacity-80">Image Coming Soon</p>
            </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {industry.title}
            </h2>
            <h3 className="text-xl md:text-2xl text-purple-400 font-semibold mb-6">
              {industry.subtitle}
            </h3>
          </div>
          
          <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed text-lg">
            {industry.description}
          </p>

          {/* <div className="pt-4">
            <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-medium">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}