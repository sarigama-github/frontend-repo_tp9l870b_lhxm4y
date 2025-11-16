import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500">an AI Enthusiast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            className="mt-4 text-lg text-gray-700 max-w-xl"
          >
            I build intelligent solutions with machine learning, LLMs, and data-driven insights. I'm seeking an entry-level role to learn, contribute, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-gray-300 bg-white/70 backdrop-blur hover:border-gray-400 transition-colors">Contact Me</a>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.45 } }}
            className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/50 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              <Stat label="ML Projects" value="6+" />
              <Stat label="Hackathons" value="3" />
              <Stat label="Certifications" value="4" />
              <Stat label="Coffee" value="∞" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 bg-white/80">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}
