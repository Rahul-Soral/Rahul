import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact({ distance }: { distance: string }) {
  return (
    <motion.section
      id="contact"
      className="relative py-20 overflow-hidden rounded-e-lg"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -150, 150, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full filter blur-3xl opacity-30"
          animate={{
            x: [-100, 300, -300],
            y: [-50, 100, -100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      {/* Contact Content */}
      <div className="flex flex-col items-center space-y-8 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-lg text-teal-600 drop-shadow">
          I'd love to hear from you! Feel free to reach out through any of the
          platforms below.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          {/* Phone */}
          <motion.a
            href="tel:+918527119684"
            className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="h-8 w-8 text-teal-500 mb-4" />
            <span className="text-lg font-semibold text-gray-900">Call Me</span>
            <span className="text-sm text-teal-500">+91 8527119684</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:rahulsoral15@example.com"
            className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="h-8 w-8 text-teal-500 mb-4" />
            <span className="text-lg font-semibold text-gray-900">Email Me</span>
            <span className="text-sm text-teal-500">
              rahulsoral15@example.com
            </span>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Kota%2C+Rajasthan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-md rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin className="h-8 w-8 text-teal-500 mb-4" />
            <span className="text-lg font-semibold text-gray-900">Location</span>
            <span className="text-sm text-teal-500">Kota, Rajasthan</span>
          </motion.a>
        </div>

        {/* Distance */}
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 tracking-tight">
          You are currently{" "}
          <span className="font-bold text-yellow-700">{distance}</span> away from
          Kota, Rajasthan.
        </p>
      </div>
    </motion.section>
  );
}
