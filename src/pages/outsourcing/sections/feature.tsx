import { Button } from '@/components/ui/button'

export default function Feature() {
    return (
        <>

            {/* Features Section */}
            <section className="relative w-full  dark:bg-neutral-900 px-6 py-16 md:py-24 pb-0">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-12 md:mb-16">
                        Do more in less time with fewer tools and platforms
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                            <div className="relative h-48 mb-6 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center">
                                <span className="text-neutral-400 dark:text-neutral-500 text-sm">Image Placeholder</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                Eliminate payroll delays and errors
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mb-6">
                                Run accurate global payroll in minutes. Our in-house team will handle tax deductions, filings, and more for you, saving you time.
                            </p>
                            <Button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 px-6 py-3 rounded-lg font-semibold">
                                Book a demo
                            </Button>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                            <div className="relative h-48 mb-6 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center">
                                <span className="text-neutral-400 dark:text-neutral-500 text-sm">Image Placeholder</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                Avoid costly fines
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mb-6">
                                From localizing documents and classifying workers to changes to local law alerts, our built-in compliance tools keep you updated.
                            </p>
                            <Button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 px-6 py-3 rounded-lg font-semibold">
                                Book a demo
                            </Button>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
                            <div className="relative h-48 mb-6 bg-neutral-100 dark:bg-neutral-700 rounded-xl flex items-center justify-center">
                                <span className="text-neutral-400 dark:text-neutral-500 text-sm">Image Placeholder</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                                Save time with a comprehensive HRIS
                            </h3>
                            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mb-6">
                                Consolidate and automate your global HR operations from worker information, time off, expenses, reporting, performance, and more.
                            </p>
                            <Button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 px-6 py-3 rounded-lg font-semibold">
                                Book a demo
                            </Button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
