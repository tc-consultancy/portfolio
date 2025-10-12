import { Button } from '../ui/button'
import { robo1 } from '@/assets'
import { motion } from 'framer-motion'
type commonHeroType = {
    subtleHeading: string,
    heading: string,
    subheading: string,
    buttontitle: string
}
export default function CommonHero({ subtleHeading, subheading, heading, buttontitle }: commonHeroType) {
    const headingLines = heading.split('\\n');

    return (
        <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-white dark:bg-gray-950 md:py-20 px-4 flex items-center overflow-hidden">
            {/* Large Blob Shape Background */}
            <motion.div
                className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-10"
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                        fill="#a855f7"
                        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.1,87.1C-23,86.6,-37.9,82.6,-51.4,74.8C-64.9,67,-76.9,55.4,-83.8,41.2C-90.7,27,-92.5,10.2,-89.8,-5.3C-87.1,-20.8,-79.9,-35,-69.8,-46.8C-59.7,-58.6,-46.7,-68,-32.8,-74.8C-18.9,-81.6,-4.1,-85.8,9.5,-84.3C23.1,-82.8,30.6,-83.6,44.7,-76.4Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </motion.div>

            {/* Floating Circles */}
            <motion.div
                className="absolute top-40 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-20"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-40 right-32 w-24 h-24 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 opacity-15"
                animate={{
                    y: [0, 25, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />

            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wide">
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
                    <Button className="mt-8 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white shadow-lg">
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
