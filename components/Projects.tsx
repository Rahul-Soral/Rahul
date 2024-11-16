import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const projects = [
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

export default function Projects() {
  return (
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
                Visit Project <svg className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
