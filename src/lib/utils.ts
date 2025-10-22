import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const handleWhatsAppClick = () => {
  window.open('https://api.whatsapp.com/send?phone=919908884033', '_blank')
}
