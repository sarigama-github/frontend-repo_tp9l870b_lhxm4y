import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white">
          About Me
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 text-slate-300 text-lg leading-relaxed max-w-3xl">
          I'm a recent graduate passionate about AI, machine learning, and building humane, useful products. I love exploring LLMs, prompt engineering, and tools that bring intelligence to everyday experiences.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Tag>Python</Tag>
          <Tag>TensorFlow</Tag>
          <Tag>PyTorch</Tag>
          <Tag>Scikit-learn</Tag>
          <Tag>LangChain</Tag>
          <Tag>LLM Apps</Tag>
          <Tag>Data Viz</Tag>
          <Tag>MLOps Basics</Tag>
          <Tag>Git & Cloud</Tag>
        </motion.div>
      </div>
    </section>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-slate-200 shadow-sm">
      {children}
    </span>
  )
}
