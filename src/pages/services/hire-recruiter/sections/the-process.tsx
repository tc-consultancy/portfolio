
export default function TheProcess() {
    const steps = [
        {
            number: "01",
            title: "Fill In The Required Form",
            description: "Filling in our application form is the gateway"
        },
        {
            number: "02",
            title: "Submit All Your Documents",
            description: "Submitting all require documents promptly"
        },
        {
            number: "03",
            title: "We Start Applying For You",
            description: "Succeed in the competitive world of job search"
        }
    ];

    return (
        <section className="bg-green-200 dark:bg-green-800 py-16 px-4 sm:px-6 lg:px-8 rounded-4xl">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block border-2 border-green-600 dark:border-green-400 rounded-full px-6 py-2 mb-6">
                        <span className="text-green-700 dark:text-green-300 font-medium text-sm uppercase tracking-wide">
                            PROCESS
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Your Job Hunt Starts Here
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Let us simplify your search — from form to first interview, we handle the hustle
                        so you do not have to.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            {/* Step Circle */}
                            <div className="relative mb-6">
                                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-70 lg:h-70 rounded-full border-[12px] border-green-500 dark:border-green-400 bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-6">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-500 dark:bg-green-400 rounded-full flex items-center justify-center">
                                        <span className="text-white dark:text-gray-900 font-bold text-lg leading-5">{step.number}<br /> <span className="font-normal">Step</span> </span>

                                    </div>

                                    {/* Step Content */}
                                    <div className="text-center mt-5">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm px-2 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
