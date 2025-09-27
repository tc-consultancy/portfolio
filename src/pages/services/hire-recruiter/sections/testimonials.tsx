
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonial data
const testimonials = [
    {
        id: 1,
        name: "Sophia Lloyd",
        title: "CEO, XIO",
        content: "Excellent work guys. Redesign of the application really help me grow my business and revenue. I would like to work again with you in future sometime.",
        image: new URL('../../../assets/carousel/1.jpg', import.meta.url).href,
    },
    {
        id: 2,
        name: "Michael Chen",
        title: "CTO, TechCorp",
        content: "Outstanding service and attention to detail. The team delivered exactly what we needed and exceeded our expectations in every way possible.",
        image: new URL('../../../assets/carousel/2.jpg', import.meta.url).href,
    },
    {
        id: 3,
        name: "Sarah Johnson",
        title: "Marketing Director, BrandCo",
        content: "Professional, creative, and reliable. They transformed our digital presence and helped us achieve record-breaking growth this quarter.",
        image: new URL('../../../assets/carousel/3.jpg', import.meta.url).href,
    },
    {
        id: 4,
        name: "David Rodriguez",
        title: "Founder, StartupXYZ",
        content: "The best investment we made for our company. Their expertise and dedication made all the difference in our success story.",
        image: new URL('../../../assets/carousel/4.jpg', import.meta.url).href,
    },
    {
        id: 5,
        name: "Emily Watson",
        title: "VP Operations, GlobalTech",
        content: "Exceptional quality and innovative solutions. They understood our vision and brought it to life better than we imagined.",
        image: new URL('../../../assets/carousel/5.jpg', import.meta.url).href,
    },
    {
        id: 6,
        name: "James Wilson",
        title: "Head of Design, CreativeStudio",
        content: "Working with this team was a game-changer. Their creative approach and technical excellence delivered outstanding results.",
        image: new URL('../../../assets/carousel/6.jpg', import.meta.url).href,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-rotation every 4 seconds
    useEffect(() => {
        if (isAutoPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }, 4000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isAutoPlaying]);

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    // Navigation functions
    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };


    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-16 h-[620px]">
            <div className="max-w-6xl mx-auto px-4">
                {/* Profile Images Carousel */}
                <div
                    className="flex justify-center items-center mb-12 relative overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="relative w-full max-w-md h-32 flex items-center justify-center">
                        {/* Only 5 profile images in a sliding container */}
                        <div
                            className="flex items-center justify-center gap-6 profile-slide-container"
                            style={{
                                transform: `translateX(0px)`,
                            }}
                        >
                            {testimonials.map((testimonial, index) => {
                                // Calculate relative position from current index
                                let relativeIndex = index - currentIndex;

                                // Handle wrapping for circular display
                                if (relativeIndex > 2) {
                                    relativeIndex -= testimonials.length;
                                }
                                if (relativeIndex < -2) {
                                    relativeIndex += testimonials.length;
                                }

                                // Only show 5 images at a time (2 left + 1 center + 2 right)
                                // Show only if relativeIndex is between -2 and 2 (inclusive)
                                if (relativeIndex < -2 || relativeIndex > 2) return null;

                                const isActive = relativeIndex === 0;
                                const distance = Math.abs(relativeIndex);

                                // Calculate size and opacity based on distance from center
                                let sizeClass = '';
                                let opacityClass = '';
                                let scaleClass = '';
                                let zIndex = '';

                                if (isActive) {
                                    sizeClass = 'w-20 h-20 md:w-24 md:h-24';
                                    opacityClass = 'opacity-100';
                                    scaleClass = 'scale-100';
                                    zIndex = 'z-30';
                                } else if (distance === 1) {
                                    sizeClass = 'w-16 h-16 md:w-18 md:h-18';
                                    opacityClass = 'opacity-70';
                                    scaleClass = 'scale-90';
                                    zIndex = 'z-20';
                                } else if (distance === 2) {
                                    sizeClass = 'w-12 h-12 md:w-14 md:h-14';
                                    opacityClass = 'opacity-40';
                                    scaleClass = 'scale-75';
                                    zIndex = 'z-10';
                                }

                                return (
                                    <button
                                        key={`${testimonial.id}-${relativeIndex}`}
                                        onClick={() => goToTestimonial(index)}
                                        className={`
                      relative rounded-full overflow-hidden border-4 border-white shadow-lg
                      profile-image-smooth cursor-pointer
                      ${sizeClass} ${opacityClass} ${scaleClass} ${zIndex}
                      hover:shadow-xl
                      ${isActive ? 'ring-4 ring-blue-500/30 shadow-2xl profile-center' :
                                                distance === 1 ? 'profile-adjacent' : 'profile-far'}
                    `}
                                        style={{ order: relativeIndex + 2 }}
                                    >
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover transition-transform duration-500"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Testimonial Content */}
                <div className="text-center max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Opening Quote */}
                        <div className="absolute -top-4 -left-4 text-6xl md:text-8xl text-black dark:text-white font-serif leading-none">
                            "
                        </div>

                        {/* Testimonial Text */}
                        <blockquote
                            key={currentTestimonial.id}
                            className="text-lg text-black dark:text-white  md:text-xl lg:text-2xl  font-medium leading-relaxed mb-8 px-8 content-fade-in"
                        >
                            {currentTestimonial.content}
                        </blockquote>

                        {/* Closing Quote */}
                        <div className="absolute -bottom-8 -right-4 text-6xl md:text-8xl text-black dark:text-white  font-serif leading-none">
                            "
                        </div>
                    </div>

                    {/* Author Info */}
                    <div
                        key={`author-${currentTestimonial.id}`}
                        className="mt-8 content-fade-in"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white  mb-2">
                            {currentTestimonial.name}
                        </h3>
                        <p className="text-black dark:text-white  font-medium">
                            {currentTestimonial.title}
                        </p>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center mt-8 gap-6">
                    <button
                        onClick={goToPrevious}
                        className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-blue-600"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Pagination */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-tilt-neon font-medium text-gray-600">
                            {currentIndex + 1}/{testimonials.length}
                        </span>
                    </div>

                    <button
                        onClick={goToNext}
                        className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-blue-600"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center mt-6 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${index === currentIndex
                                    ? 'bg-purple-600 w-8'
                                    : 'bg-white hover:bg-gray-400'
                                }
              `}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Custom CSS for smooth sliding animations */}
            <style>{`
        @keyframes smoothSlide {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes profileSlide {
          0% {
            transform: translateX(0) scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: translateX(0) scale(1.05);
            opacity: 0.9;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        .profile-slide-container {
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .profile-image-smooth {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, opacity, filter;
        }

        .profile-image-smooth:hover {
          transform: scale(1.1) translateY(-2px);
          filter: brightness(1.1) saturate(1.1);
        }

        .content-fade-in {
          animation: smoothSlide 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Smooth scaling for different positions */
        .profile-center {
          transform: scale(1);
          filter: brightness(1.05);
          z-index: 30;
        }

        .profile-adjacent {
          transform: scale(0.9);
          filter: brightness(0.9);
          z-index: 20;
        }

        .profile-far {
          transform: scale(0.75);
          filter: brightness(0.8);
          z-index: 10;
        }

        .profile-edge {
          transform: scale(0.5);
          filter: brightness(0.7);
          z-index: 0;
        }
      `}</style>
        </section>
    );
}
