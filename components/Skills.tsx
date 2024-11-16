import { motion, Variants } from "framer-motion"

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 95 },
]

export default function Skills() {
  return (
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
              <div className="bg-teal-600 h-4 rounded-full" style={{ width: `${skill.level}%` }}></div>
            </div>
            <span className="text-sm text-gray-600">{skill.level}%</span>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
