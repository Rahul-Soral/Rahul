import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const experiences = [
  {
    title: "Software Engineer",
    company: "TechCorp Solutions",
    duration: "Jan 2021 - Present",
    description:
      "Developed scalable web applications using React, Node.js, and TypeScript. Improved application performance by 30% through optimized APIs.",
  },
  {
    title: "Frontend Developer",
    company: "DesignStudio",
    duration: "Jun 2019 - Dec 2020",
    description:
      "Implemented modern UI/UX designs using Tailwind CSS and React. Led the redesign of the company's primary e-commerce platform, increasing user engagement by 25%.",
  },
  {
    title: "Intern - Full Stack Developer",
    company: "StartUp Inc.",
    duration: "Jan 2019 - May 2019",
    description:
      "Built full-stack web applications using Next.js and Firebase. Contributed to the launch of a new product feature within a short development cycle.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative py-20 overflow-hidden mt-20 rounded-e-lg"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 rounded-full filter blur-3xl opacity-30"
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

      {/* Experience Content */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>
        <p className="mt-4 text-lg text-teal-600 drop-shadow">
          A timeline of my professional journey
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-col p-6 bg-white/40 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-teal-400">
              {experience.title}
            </h3>
            <p className="text-lg text-gray-600 font-semibold">
              {experience.company}
            </p>
            <p className="text-sm text-gray-400 italic">{experience.duration}</p>
            <p className="mt-4 text-gray-900">{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
