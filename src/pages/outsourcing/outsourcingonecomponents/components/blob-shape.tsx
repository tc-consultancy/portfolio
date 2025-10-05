import { motion } from 'framer-motion'

interface BlobShapeProps {
  size?: number
  color?: string
  opacity?: number
  className?: string
  animate?: boolean
}

export default function BlobShape({
  size = 200,
  color = '#a855f7',
  opacity = 0.1,
  className = '',
  animate = true,
}: BlobShapeProps) {
  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={
        animate
          ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }
          : undefined
      }
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ opacity }}
      >
        <path
          fill={color}
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.1,87.1C-23,86.6,-37.9,82.6,-51.4,74.8C-64.9,67,-76.9,55.4,-83.8,41.2C-90.7,27,-92.5,10.2,-89.8,-5.3C-87.1,-20.8,-79.9,-35,-69.8,-46.8C-59.7,-58.6,-46.7,-68,-32.8,-74.8C-18.9,-81.6,-4.1,-85.8,9.5,-84.3C23.1,-82.8,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  )
}
