import { Button } from '../ui/button'
import { robo1 } from '@/assets'
type commonHeroType = {
    subtleHeading: string,
    heading: string,
    subheading: string,
    buttontitle: string
}
export default function CommonHero({ subtleHeading, subheading, heading, buttontitle }: commonHeroType) {
    const headingLines = heading.split('\\n');
    
    return (
        <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-white dark:bg-gray-950 md:py-20 px-4 flex items-center">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                    <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                        {subtleHeading}
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                        {headingLines.map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < headingLines.length - 1 && <br />}
                            </span>
                        ))}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
                        {subheading}</p>
                    <Button className="mt-8 px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white shadow-lg">
                        {buttontitle} →
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
    )
}
