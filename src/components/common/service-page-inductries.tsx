import { industries } from '@/constants/industries'

export default function ServicePageInductries() {
    return (
        <>
          {/* Industries We Serve Section */}
            <section className="py-20 px-4 ">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            From startups to known brands we have many stories to tell
                        </p>
                    </div>

                    {/* Industries Grid */}
                    <div className="bg-white shadow-lg dark:bg-black rounded-3xl p-12 max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {industries.map((industry, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl text-purple-600 dark:text-purple-400">{industry.icon}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {industry.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                </div>
            </section>
        </>
    )
}
