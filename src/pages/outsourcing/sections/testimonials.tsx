import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const allTestimonials = [
    {
        id: 1,
        name: 'Jeremy C.',
        rating: 5,
        comment: 'The best payroll solution, period. We love it.',
    },
    {
        id: 2,
        name: 'Kendall S.',
        rating: 5,
        comment: 'Simply the best platform for global teams.',
    },
    {
        id: 3,
        name: 'Suzette S.',
        rating: 5,
        comment: 'I love the money transfer feature. With Deel, everything is seamless.',
    },
    {
        id: 4,
        name: 'Jose Martin L.',
        rating: 5,
        comment: 'An indispensable tool for global payroll management.',
    },
    {
        id: 5,
        name: 'Sarah M.',
        rating: 5,
        comment: 'Incredible support and seamless integration with our systems.',
    },
    {
        id: 6,
        name: 'David K.',
        rating: 5,
        comment: 'Game changer for our international hiring process.',
    },
    {
        id: 7,
        name: 'Lisa P.',
        rating: 5,
        comment: 'The compliance features alone are worth it. Highly recommend.',
    },
    {
        id: 8,
        name: 'Michael R.',
        rating: 5,
        comment: 'Best decision we made for managing our global team.',
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const testimonialsPerPage = 4

    const handlePrevious = () => {
        setCurrentIndex((prev) => 
            prev === 0 ? Math.max(0, allTestimonials.length - testimonialsPerPage) : Math.max(0, prev - testimonialsPerPage)
        )
    }

    const handleNext = () => {
        setCurrentIndex((prev) => 
            prev + testimonialsPerPage >= allTestimonials.length ? 0 : prev + testimonialsPerPage
        )
    }

    const visibleTestimonials = allTestimonials.slice(currentIndex, currentIndex + testimonialsPerPage)
    return (
        <section className="relative w-full bg-neutral-900 dark:bg-neutral-900">
            {/* Top Curve */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-[60px] md:h-[100px]"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 Q300,0 600,60 T1200,60 L1200,0 L0,0 Z"
                        className="fill-white dark:fill-neutral-950"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative pt-24 md:pt-60 pb-16 md:pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Featured Testimonial Card */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="bg-purple-300 dark:bg-purple-800/30 rounded-3xl p-4 md:px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                {/* Video/Image */}
                                <div className="relative">
                                    <img
                                        src="https://placehold.co/400x300/8b5cf6/white?text=Video"
                                        alt="Testimonial video"
                                        className="w-full h-auto rounded-2xl"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-neutral-900 border-b-8 border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                                        Revolut
                                    </h3>
                                    <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
                                        "Thanks to Deel, we get to hire local talent in any country where we want to expand long before we set up the entity there. Effectively, this gives us a head start."
                                    </p>
                                    <p className="text-xs text-neutral-700 dark:text-neutral-400 uppercase tracking-wide">
                                        LIAM BEERE, HR MANAGER AT REVOLUT
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reviews Section */}
                    <div className="space-y-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <img
                                        src="https://placehold.co/24x24/666/white?text=G"
                                        alt="Google"
                                        className="w-6 h-6 rounded"
                                    />
                                    <h3 className="text-xl font-bold text-white">Excellent global payroll</h3>
                                </div>
                                <p className="text-sm text-neutral-400">4.8/5 based on 10,143+ reviews</p>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handlePrevious}
                                    className="rounded-full bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleNext}
                                    className="rounded-full bg-neutral-800 border-neutral-700 text-white hover:bg-neutral-700"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Testimonial Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {visibleTestimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="bg-neutral-800 dark:bg-neutral-800 rounded-xl p-6 space-y-4"
                                >
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 text-yellow-400 fill-current"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-sm text-neutral-300 leading-relaxed">
                                        {testimonial.comment}
                                    </p>
                                    <p className="text-xs font-semibold text-white">{testimonial.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
