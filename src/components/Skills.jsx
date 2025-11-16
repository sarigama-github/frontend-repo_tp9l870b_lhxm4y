import { motion } from 'framer-motion'
import { Brain, Cpu, Database, LineChart } from 'lucide-react'

const skills = [
  { icon: Brain, title: 'Machine Learning', desc: 'Supervised/unsupervised learning, model evaluation, feature engineering' },
  { icon: Cpu, title: 'Deep Learning', desc: 'CNNs, RNNs, Transformers, fine-tuning and transfer learning' },
  { icon: Database, title: 'Data', desc: 'EDA, preprocessing, SQL/NoSQL basics, data pipelines' },
  { icon: LineChart, title: 'MLOps', desc: 'Experiment tracking, deployment basics, monitoring' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-gray-900">
          Skills Snapshot
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <s.icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
