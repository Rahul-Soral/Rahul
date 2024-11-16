import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and contact information, built with Next.js and Tailwind CSS.",
    image: "/project.jpg",
    link: "https://myportfolio.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "An e-commerce website featuring product listings, shopping cart functionality, and payment integration using Stripe.",
    image: "/project.jpg",
    link: "https://myecommerceplatform.com",
  },
  {
    title: "Voting dApp",
    description:
      "A decentralized voting application built on the Ethereum blockchain using smart contracts for secure and transparent voting.",
    image: "/project.jpg",
    link: "https://myvotingdapp.com",
  },
  {
    title: "Library Management System",
    description:
      "A web-based application for managing library books, users, and fine systems, developed with React and Firebase.",
    image: "/project.jpg",
    link: "https://mylibrarysystem.com",
  },
  {
    title: "Air Pollution Analyzer",
    description:
      "A web app to analyze and visualize air pollution data using public APIs, built with Next.js and Chart.js.",
    image: "/project.jpg",
    link: "https://mypollutionanalyzer.com",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative py-20 overflow-hidden mt-20 rounded-e-lg"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Dynamic Moving Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-72 h-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, 300, -300, 0],
            y: [0, -150, 150, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 via-teal-500 to-green-400 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [-100, 200, -200],
            y: [-50, 100, -100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-yellow-300 via-red-400 to-purple-500 rounded-full filter blur-2xl opacity-40"
          animate={{
            x: [50, -200, 200, 50],
            y: [50, 100, -100, 50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      {/* Projects Content */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-yellow-500 to-orange-500 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <p className="mt-4 text-lg text-gray-300 drop-shadow">
          A selection of my recent work
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="rounded-lg shadow-lg bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 backdrop-blur-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6 rounded-b-lg backdrop-blur-lg">
              <h3 className="text-xl font-bold text-teal-400 drop-shadow-sm">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
              <Link
                href={project.link}
                className="mt-4 inline-flex items-center text-teal-400 font-medium hover:underline"
              >
                Visit Project{" "}
                <svg
                  className="ml-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
