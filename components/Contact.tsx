import { motion, Variants } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Contact({ distance }: { distance: string }) {
  return (
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
          <a href="tel:+918527119684" className="flex flex-col items-center p-6 bg-teal-100 rounded-lg shadow-lg hover:bg-teal-200 transition-all">
            <Phone className="h-8 w-8 text-teal-600 mb-4" />
            <span className="text-lg font-semibold text-gray-900">Call Me</span>
            <span className="text-sm text-teal-700">+91 8527119684</span>
          </a>
          <a href="mailto:rahulsoral15@example.com" className="flex flex-col items-center p-10 bg-teal-100 rounded-lg shadow-lg hover:bg-teal-200 transition-all justify-center">
            <Mail className="h-8 w-8 text-teal-600 mb-4" />
            <span className="text-lg font-semibold text-gray-900">Email Me</span>
            <span className="text-sm text-teal-700">rahulsoral15@example.com</span>
          </a>
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
          You are currently <span className="font-bold text-gray-700">{distance}</span> away from Kota, Rajasthan.
        </p>
      </div>
    </motion.section>
  )
}
