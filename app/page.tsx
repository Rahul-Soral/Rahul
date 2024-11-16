"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import { getDistanceFromLots } from "@/utils/calculateDistance"

export default function Home() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
  const [distance, setDistance] = useState("Unknown")

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = [position.coords.latitude, position.coords.longitude] as [number, number]
          setUserLocation(coords)
          setDistance(getDistanceFromLots(coords, [25.2138, 75.8648]))
        },
        (error) => console.error("Error getting user location:", error)
      )
    }
  }, [])

  return (
    <div className="min-h-screen bg-teal-300 text-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Projects />
        <Skills />
        <Contact distance={distance} />
      </main>
    </div>
  )
}
