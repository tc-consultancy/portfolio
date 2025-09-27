"use client"
import WorldMap from "@/components/ui/world-map"
import { motion } from "framer-motion"

export default function WorldMapSection() {
  return (
    <section className="max-w-5xl mx-auto">
      <div className=" py-40  w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
            Our Global {" "}
            <span className="text-neutral-400">
              {" Reach".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            We are is proud to support job seekers across multiple countries — and
            we are growing every day.
          </p>
        </div>
        <WorldMap
          dots={[
            { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            { lat: 34.0522, lng: -118.2437 }, // Los Angeles
            { lat: -15.7975, lng: -47.8919 }, // Brasília
            { lat: 38.7223, lng: -9.1393 }, // Lisbon
            { lat: 51.5074, lng: -0.1278 }, // London
            { lat: 28.6139, lng: 77.209 }, // New Delhi
            { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            { lat: -1.2921, lng: 36.8219 }, // Nairobi
          ]}
        />
      </div>
    </section>

  )
}
