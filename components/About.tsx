import Image from "next/image"
import { Button } from "@mui/material"
import { Mail, Download } from "lucide-react"
import { motion, Variants } from "framer-motion"

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <motion.section id="about" className="py-20 bg-teal-100 rounded-lg shadow-lg" initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
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
              <Mail className="mr-2 h-5 w-5 " /> Contact Me
            </Button>
          </a>
          <Button variant="outlined" className="text-teal-600 border-teal-600">
            <a href="https://drive.google.com/file/d/1rMXPGb4kMmMDDm7LfTCr7zuj4D1S1edq/view?usp=sharing" className="flex p-2 items-center" target="blank">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
