

export default function Comparision() {
    return (
        <>
            {/* Comparison Section */}
            <section className="relative w-full bg-neutral-50 dark:bg-neutral-900 px-6 py-16 md:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Without Deel */}
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-6 text-center">
                                <span className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 inline-block rounded">Without Deel</span>
                            </h3>

                            {/* Image Placeholder */}
                            <div className="relative h-48 mb-6 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center">
                                <span className="text-neutral-400 dark:text-neutral-500 text-sm">Image Placeholder</span>
                            </div>

                            {/* Pain points */}
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Missing out on top talent because global hiring is too complex alone.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Less productivity and more frustration with slow onboarding and inaccurate payroll.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Paying expensive fines and combating legal headaches from compliance risks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* With Deel */}
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-6 text-center">
                                <span className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 inline-block rounded">With Deel</span>
                            </h3>

                            {/* Image Placeholder */}
                            <div className="relative h-48 mb-6 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center">
                                <span className="text-neutral-400 dark:text-neutral-500 text-sm">Image Placeholder</span>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Instant hiring in 150+ countries—no local entity needed.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        Effortless onboarding with localized contracts, payroll, and benefits handled for you.
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                        100% compliance with built-in tax and legal protection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
