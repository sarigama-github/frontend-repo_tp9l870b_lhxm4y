import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Predictive Model Case Study',
    desc: 'Designed and evaluated a machine learning model end-to-end: feature engineering, cross-validation, and model interpretability.',
    tags: ['Python', 'scikit-learn', 'Explainability'],
    link: '#'
  },
  {
    title: 'Data Visualization Dashboard',
    desc: 'Built a rich dashboard to explore datasets, highlighting trends and correlations with interactive charts.',
    tags: ['Python', 'Plotly', 'EDA'],
    link: '#'
  },
  {
    title: 'AI API Web Integration',
    desc: 'Developed a web experience powered by an AI API for intelligent search and summarization.',
    tags: ['React', 'FastAPI', 'AI API'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white">
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className="block rounded-xl border border-white/10 bg-white/5 p-6 hover:shadow-xl hover:shadow-teal-400/10 hover:border-teal-400/30 transition"
            >
              <h3 className="font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-[#0b1220] text-teal-300 border border-teal-400/30">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
