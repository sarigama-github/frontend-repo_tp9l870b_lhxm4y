import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Voice Assistant with LLM',
    desc: 'Built a conversational assistant that uses speech-to-text, LLM reasoning, and text-to-speech to help with tasks.',
    tags: ['OpenAI/LLM', 'Whisper/STT', 'TTS'],
    link: '#'
  },
  {
    title: 'Image Classifier',
    desc: 'CNN-based image classification project with data augmentation and Grad-CAM explainability.',
    tags: ['TensorFlow', 'Keras', 'Vision'],
    link: '#'
  },
  {
    title: 'Customer Churn Predictor',
    desc: 'End-to-end pipeline: preprocessing, model training, evaluation, and simple FastAPI deployment.',
    tags: ['Scikit-learn', 'FastAPI', 'MLOps'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-gray-900">
          Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="block rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
