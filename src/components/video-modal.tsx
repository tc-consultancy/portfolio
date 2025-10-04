import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    videoSrc: string
}

export default function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play()
        }
    }, [isOpen])

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 p-1  rounded-3xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                    aria-label="Close video"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Video Container */}
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-black">
                    <video
                        ref={videoRef}
                        className="w-full h-full"
                        controls
                        controlsList="nodownload"
                        preload="metadata"
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}
