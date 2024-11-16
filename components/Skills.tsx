import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 95 },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative py-20 overflow-hidden rounded-e-lg"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, -200, 200, 0],
            y: [0, 150, -150, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      {/* Skills Content */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <p className="mt-4 text-lg text-teal-600 drop-shadow">
          Here are a few technologies I've been working with
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center space-y-4 bg-white/30 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl font-bold text-yellow-600 drop-shadow">
              {skill.name}
            </span>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-400 to-blue-500 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-700">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
