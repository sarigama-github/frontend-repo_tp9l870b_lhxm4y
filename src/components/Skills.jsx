import { motion } from 'framer-motion'
import { Brain, Cpu, Database, LineChart } from 'lucide-react'

const skills = [
  { icon: Brain, title: 'Python', desc: 'Writing clean, production-ready code; data analysis and scripting' },
  { icon: Cpu, title: 'TensorFlow', desc: 'Model building, training loops, Keras API, TF data pipelines' },
  { icon: Database, title: 'Data', desc: 'EDA, preprocessing, SQL/NoSQL basics, data pipelines' },
  { icon: LineChart, title: 'MLOps', desc: 'Experiment tracking, deployment basics, monitoring' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0b1220] to-[#0f1a33]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white">
          Skills Snapshot
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl p-6 bg-white/5 border border-white/10 shadow-sm hover:shadow-teal-400/10 hover:border-teal-400/30 transition">
              <s.icon className="h-6 w-6 text-teal-300" />
              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
