"use client"

import { useRef } from "react"
import DottedMap from "dotted-map"
import { getCurrentColorScheme } from "@/theme-manager";

interface MapProps {
  dots?: Array<{ lat: number; lng: number; label?: string }>
  lineColor?: string
}

export default function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const map = new DottedMap({ height: 100, grid: "diagonal" })

 const theme = getCurrentColorScheme()
console.log(theme)
  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === "dark" ? "#FFFFFF40" : "#00000040",
    shape: "circle",
    backgroundColor: theme === "dark" ? "" : "white",
  })

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  return (
    <div className="w-full aspect-[2/1]   rounded-lg  relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((pt, i) => (
          <g key={`dot-${i}`}>
            <circle cx={projectPoint(pt.lat, pt.lng).x} cy={projectPoint(pt.lat, pt.lng).y} r="2" fill={lineColor} />
            <circle
              cx={projectPoint(pt.lat, pt.lng).x}
              cy={projectPoint(pt.lat, pt.lng).y}
              r="2"
              fill={lineColor}
              opacity="0.5"
            >
              <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  )
}
