import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] pt-24 flex items-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/80 via-[#0b1220]/70 to-[#0b1220]/90 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400">an AI Enthusiast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            className="mt-4 text-lg text-slate-300 max-w-xl"
          >
            I build intelligent solutions with machine learning, LLMs, and data-driven insights. I'm seeking an entry-level role to learn, contribute, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-teal-400 text-[#0b1220] hover:bg-teal-300 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors text-white">Contact Me</a>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.45 } }}
            className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 shadow-xl"
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
    <div className="p-4 rounded-lg border border-white/10 bg-white/5">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-slate-300">{label}</div>
    </div>
  )
}
