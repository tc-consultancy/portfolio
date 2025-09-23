import type { Variants, Easing } from 'framer-motion'

export const scaleIn = (
  fromScale: number = 0.9,
  durationSeconds: number = 0.35,
  ease: Easing = 'easeOut'
): Variants => ({
  hidden: { scale: fromScale, opacity: 0 },
  show: { scale: 1,  transition: { duration: durationSeconds, ease } },
})

export const scaleOut = (
  toScale: number = 0.9,
  durationSeconds: number = 0.35,
  ease: Easing = 'easeIn'
): Variants => ({
  hidden: { scale: 1,  },
  show: { scale: toScale, transition: { duration: durationSeconds, ease } },
})

export const scaleFromZero = (
  durationSeconds: number = 0.45,
  ease: Easing = 'easeOut'
): Variants => ({
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: durationSeconds, ease } },
})


