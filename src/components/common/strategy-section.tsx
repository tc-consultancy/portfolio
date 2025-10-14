import type { JSX } from "react";

interface StrategyPoint {
    icon: JSX.Element;
    title: string;
    description: string;
    color: string;
}

interface StrategySectionProps {
    topHeading: string;
    heading: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    points: StrategyPoint[];
}

export default function StrategySection({
    topHeading,
    heading,
    description,
    imageUrl,
    imageAlt,
    points
}: StrategySectionProps) {
    return (
        <section className="w-full bg-white dark:bg-gray-950 py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide mb-4">
                        {topHeading}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        {heading}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Content - Strategy Items */}
                    <div className="space-y-8">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className={`w-16 h-16 ${point.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                    {point.icon}
                                </div>
                                <div className={index < points.length - 1 ? "border-b border-gray-200 dark:border-gray-700 pb-6" : ""}>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                        {point.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
