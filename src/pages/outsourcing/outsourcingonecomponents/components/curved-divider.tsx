interface CurvedDividerProps {
  position?: 'top' | 'bottom'
  color?: string
  className?: string
}

export default function CurvedDivider({
  position = 'top',
  color = 'currentColor',
  className = '',
}: CurvedDividerProps) {
  return (
    <div
      className={`absolute ${
        position === 'top' ? 'top-0' : 'bottom-0'
      } left-0 w-full overflow-hidden leading-none ${className}`}
    >
      <svg
        className={`relative block w-full h-12 md:h-16 ${
          position === 'bottom' ? 'rotate-180' : ''
        }`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          style={{ fill: color }}
        />
      </svg>
    </div>
  )
}
