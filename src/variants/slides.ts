import type { Variants, Easing } from 'framer-motion'

export const slideUp = (
  offset: number = 32,
  durationSeconds: number = 0.45,
  ease: Easing = 'easeInOut'
): Variants => ({
  hidden: { y: offset },
  show: { y: 0, transition: { duration: durationSeconds, ease } },
})

export const slideDown = (
  offset: number = 32,
  durationSeconds: number = 0.45,
  ease: Easing = 'easeInOut'
): Variants => ({
  hidden: { y: -offset },
  show: { y: 0, transition: { duration: durationSeconds, ease } },
})

export const slideLeft = (
  offset: number = 32,
  durationSeconds: number = 0.45,
  ease: Easing = 'easeInOut'
): Variants => ({
  hidden: { x: offset },
  show: { x: 0, transition: { duration: durationSeconds, ease } },
})

export const slideRight = (
  offset: number = 32,
  durationSeconds: number = 0.45,
  ease: Easing = 'easeInOut'
): Variants => ({
  hidden: { x: -offset },
  show: { x: 0, transition: { duration: durationSeconds, ease } },
})


