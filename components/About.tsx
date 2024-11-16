import Image from "next/image";
import { Button } from "@mui/material";
import { Mail, Download } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

export default function About() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

 const particlesOptions = {
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
    detectsOn: "canvas", // This is now corrected to a valid type
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
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, 200, -200, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-full filter blur-3xl opacity-40"
          animate={{
            x: [-100, 100, -100],
            y: [100, -100, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      {/* Main Section */}
      <motion.section
        id="about"
        className="py-20 px-8 lg:px-16 bg-gradient-to-r from-teal-500/30 via-white/30 to-teal-500/30 backdrop-blur-md rounded-3xl shadow-xl border border-teal-200"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.div
          className="flex flex-col items-center lg:flex-row content-center lg:p-4 space-y-12 gap-10 text-center"
          variants={fadeInUp}
        >
          <Image
            src="/rahul.webp"
            alt="Rahul Soral"
            width={200}
            height={200}
            className="rounded-full border-4 border-teal-400 shadow-xl hover:scale-110 transition-transform duration-500"
          />
          <div className="space-y-4 lg:text-left">
            <h1
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-black tracking-tight sm:text-6xl drop-shadow-lg"
            >
              Hi, I'm Rahul Soral
            </h1>

            <p className="text-xl text-teal-600 max-w-2xl mx-auto lg:mx-0 drop-shadow">
              A passionate developer creating amazing web experiences. I
              specialize in React, Next.js, and modern web technologies.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-8"
          variants={fadeInUp}
        >
          <a href="mailto:rahulsoral15@gmail.com" className="inline-flex">
            <Button
              variant="contained"
              className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Button>
          </a>
          <Button
            variant="outlined"
            className="text-teal-600 border-teal-600 shadow-lg hover:shadow-xl hover:bg-teal-50 transition-all duration-500"
          >
            <a
              href="https://drive.google.com/file/d/1rMXPGb4kMmMDDm7LfTCr7zuj4D1S1edq/view?usp=sharing"
              className="flex p-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="lg:mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}
