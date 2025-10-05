import { motion } from 'framer-motion'

interface FloatingCircleProps {
  size?: number
  color?: string
  opacity?: number
  className?: string
  delay?: number
}

export default function FloatingCircle({
  size = 64,
  color = 'from-purple-400 to-purple-600',
  opacity = 0.2,
  className = '',
  delay = 0,
}: FloatingCircleProps) {
  return (
    <motion.div
      className={`rounded-full bg-gradient-to-br ${color} ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  )
}
