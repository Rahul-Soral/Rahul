'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Mail, ExternalLink, Phone, MapPin, Download, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button, Menu as MuiMenu, MenuItem } from "@mui/material"

type Skill = {
  name: string
  level: number
}

type Project = {
  title: string
  description: string
  image: string
  link: string
}

export default function Portfolio() {
  const [loading, setLoading] = useState<boolean>(true)
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => setUserLocation([position.coords.latitude, position.coords.longitude]),
        (error) => console.error("Error getting user location:", error)
      )
    }
  }, [])


  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills, projects, and contact information, built with Next.js and Tailwind CSS.",
      image: "/project.png",
      link: "https://myportfolio.com",
    },
    {
      title: "E-commerce Platform",
      description: "An e-commerce website featuring product listings, shopping cart functionality, and payment integration using Stripe.",
      image: "/project.png",
      link: "https://myecommerceplatform.com",
    },
    {
      title: "Voting dApp",
      description: "A decentralized voting application built on the Ethereum blockchain using smart contracts for secure and transparent voting.",
      image: "/project.png",
      link: "https://myvotingdapp.com",
    },
    {
      title: "Library Management System",
      description: "A web-based application for managing library books, users, and fine systems, developed with React and Firebase.",
      image: "/project.png",
      link: "https://mylibrarysystem.com",
    },
    {
      title: "Air Pollution Analyzer",
      description: "A web app to analyze and visualize air pollution data using public APIs, built with Next.js and Chart.js.",
      image: "/project.png",
      link: "https://mypollutionanalyzer.com",
    },
  ]

  const skills: Skill[] = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 95 },
  ]

  const navItems: string[] = ["About", "Projects", "Skills", "Contact"]

  const lotsRajasthanCoords: [number, number] = [25.2138,  75.8648]

  const getDistanceFromLots = (): string => {
    if (!userLocation) return "Unknown"
    const [lat1, lon1] = userLocation
    const [lat2, lon2] = lotsRajasthanCoords
    const R = 6371
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c
    return `${Math.round(distance)} km`
  }

  const deg2rad = (deg: number): number => deg * (Math.PI / 180)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="min-h-screen bg-teal-300 text-gray-900">
      {/* Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-teal-700 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-6xl font-bold text-white"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
              transition={{ duration: 1.5, times: [0, 0.5, 1] }}
            >
              Rahul Soral
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 text-gray-900 shadow-md">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <Link className="flex items-center justify-center" href="#">
      <span className="font-bold text-2xl">Rahul Soral</span>
    </Link>
    <nav className="hidden md:flex gap-6">
      {navItems.map((item) => (
        <Link
          key={item}
          className="text-sm font-medium hover:text-teal-600 transition-colors"
          href={`#${item.toLowerCase()}`}
        >
          {item}
        </Link>
      ))}
      <a
        href="https://drive.google.com/file/d/1rMXPGb4kMmMDDm7LfTCr7zuj4D1S1edq/view?usp=sharing"
        className="ml-4 text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white transition-all px-4 py-2 rounded-md border inline-flex items-center"
        download="Rahul_Soral_Resume.pdf" target='blank'
      >
        <Download className="mr-2 h-4 w-4" /> Download Resume
      </a>
    </nav>
    <div className="md:hidden">
      <Button
        variant="outlined"
        size="small"
        className="text-teal-600 border-teal-600"
        onClick={handleClick}
      >
        <Menu className="h-[1.2rem] w-[1.2rem]" />
      </Button>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: 'rgb(240 253 250)', 
            border: '1px solid rgb(125 211 252)', 
          },
        }}
      >
        {navItems.map((item) => (
          <MenuItem key={item} onClick={handleClose} className="text-teal-800 hover:bg-teal-200">
            <Link href={`#${item.toLowerCase()}`}>{item}</Link>
          </MenuItem>
        ))}
        <MenuItem onClick={handleClose} className="text-teal-800 hover:bg-teal-200">
          <a href="https://drive.google.com/file/d/1rMXPGb4kMmMDDm7LfTCr7zuj4D1S1edq/view?usp=sharing" download="Rahul_Soral_Resume.pdf" className="flex items-center">
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </MenuItem>
      </MuiMenu>
    </div>
  </div>
</header>



      {/* About Section */}
      <main className="container mx-auto px-4 py-8">
        <motion.section
          id="about"
          className="py-20 bg-teal-100 rounded-lg shadow-lg"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col items-center lg:flex-row content-center  p-4 space-y-8 text-center">
            <Image
              src="/rahul.webp"
              alt="Rahul Soral"
              width={200}
              height={200}
              className="rounded-full content-center border-4 border-teal-400 shadow-lg"
            />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">
                Hi, I'm Rahul Soral
              </h1>
              <p className="text-xl text-teal-700 max-w-2xl mx-auto">
                A passionate developer creating amazing web experiences. I specialize in React, Next.js, and modern web technologies.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:rahulsoral15@gmail.com" className="inline-flex">
                <Button variant="contained" className="bg-teal-600  hover:bg-teal-700 ">
                  <Mail className="mr-2 h-5 w-5" /> Contact Me
                </Button>
              </a>
              <Button variant="outlined" className="text-teal-600 border-teal-600">
                <a href="https://drive.google.com/file/d/1rMXPGb4kMmMDDm7LfTCr7zuj4D1S1edq/view?usp=sharing" target='blank'>
                <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            <p className="text-lg text-teal-600">A selection of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="rounded-lg shadow-lg bg-teal-100 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  <Link
                    href={project.link}
                    className="text-teal-600 font-medium inline-flex items-center hover:underline"
                  >
                    Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-20 bg-teal-100 rounded-lg shadow-lg"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
            <p className="text-lg text-teal-600">Here are a few technologies I've been working with</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center space-y-2">
                <span className="text-xl font-bold text-gray-900">{skill.name}</span>
                <div className="w-full bg-gray-200 p-3 rounded-full h-4">
                  <div className="bg-teal-600 h-4  rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex flex-col items-center space-y-8 text-center">
  <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
  <p className="text-lg text-gray-700">I'd love to hear from you! Feel free to reach out through any of the platforms below.</p>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-xl">
    {/* Phone */}
    <a 
      href="tel:+918527119684" 
      className="flex flex-col items-center p-6 bg-teal-100 rounded-lg shadow-lg hover:bg-teal-200 transition-all"
    >
      <Phone className="h-8 w-8 text-teal-600 mb-4" />
      <span className="text-lg font-semibold text-gray-900">Call Me</span>
      <span className="text-sm text-teal-700">+91 8527119684</span>
    </a>
    
    {/* Email */}
    <a 
      href="mailto:rahulsoral15@example.com" 
      className="flex flex-col items-center p-10 bg-teal-100 rounded-lg shadow-lg hover:bg-teal-200 transition-all"
    >
      <Mail className="h-8 w-8 text-teal-600 mb-4" />
      <span className="text-lg font-semibold text-gray-900">Email Me</span>
      <span className="text-sm text-teal-700">rahulsoral15@example.com</span>
    </a>
    
    {/* Location */}
    <a 
      href="https://www.google.com/maps/search/?api=1&query=Kota%2C+Rajasthan" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex flex-col items-center p-6 bg-teal-100 rounded-lg shadow-lg hover:bg-teal-200 transition-all"
    >
      <MapPin className="h-8 w-8 text-teal-600 mb-4" />
      <span className="text-lg font-semibold text-gray-900">Location</span>
      <span className="text-sm text-teal-700">Kota, Rajasthan</span>
    </a>
  </div>
  
  <p className="text-black">
    You are currently <span className="font-bold text-gray-700">{getDistanceFromLots()}</span> away from Kota, Rajasthan.
  </p>
</div>

        </motion.section>
      </main>
    </div>
  )
}
