import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }

    try {
      // frontend only portfolio; simulate submission
      setStatus('Thanks! Your message has been noted.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-gray-900">
          Get In Touch
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="text-gray-700 leading-relaxed">
            <p>
              I'm actively seeking opportunities in AI/ML. If you have a role, project, or mentorship opportunity, I'd love to connect.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p><span className="font-medium">Email:</span> your.email@example.com</p>
              <p><span className="font-medium">Location:</span> Remote / Open to relocate</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-gray-700">Name</span>
                <input name="name" required className="h-10 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-gray-700">Email</span>
                <input type="email" name="email" required className="h-10 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-gray-700">Message</span>
                <textarea name="message" rows="4" required className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
              </label>
              <button type="submit" className="h-10 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">Send</button>
              {status && <p className="text-sm text-gray-700">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
