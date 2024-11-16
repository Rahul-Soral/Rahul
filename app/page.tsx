"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { getDistanceFromLots } from "@/utils/calculateDistance";
import { motion } from "framer-motion";
import Experience from "@/components/Experience";
import { IOptions, Engine, RecursivePartial } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function Home() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  const particlesOptions: RecursivePartial<IOptions> = {
    particles: {
      number: { value: 5 },
      color: { value: ["#34d399", "#3b82f6", "#f59e0b", "#36cbc6", "#a62ccd"] },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 150, random: true },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      detectsOn: "canvas", // Valid value
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 2 },
      },
    },
    fullScreen: false,
  };
  

  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [distance, setDistance] = useState("Unknown");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = [
            position.coords.latitude,
            position.coords.longitude,
          ] as [number, number];
          setUserLocation(coords);
          setDistance(getDistanceFromLots(coords, [25.2138, 75.8648]));
        },
        (error) => console.error("Error getting user location:", error)
      );
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={particlesOptions}
      />

      {/* Moving Blurred Background Elements */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className={`absolute w-${index % 2 === 0 ? "72" : "96"} h-${
              index % 2 === 0 ? "72" : "96"
            } bg-gradient-to-r ${
              index % 3 === 0
                ? "from-teal-400 via-purple-500 to-pink-500"
                : index % 3 === 1
                ? "from-yellow-400 via-red-500 to-purple-600"
                : "from-blue-400 via-green-500 to-yellow-500"
            } rounded-full filter blur-3xl opacity-30`}
            animate={{
              x: [
                Math.random() * 200 - 100,
                Math.random() * 300 - 150,
                Math.random() * 400 - 200,
                0,
              ],
              y: [
                Math.random() * 300 - 150,
                Math.random() * 400 - 200,
                Math.random() * 200 - 100,
                0,
              ],
            }}
            transition={{
              duration: 15 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="min-h-screen text-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {/* About Section */}
           

          {/* Sections */}
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact distance={distance} />
        </main>
      </div>
    </div>
  );
}
