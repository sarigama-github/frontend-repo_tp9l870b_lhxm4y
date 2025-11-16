import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

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
      await new Promise((r) => setTimeout(r, 600))
      setStatus('Thanks! Your message has been noted.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-[#0f1a33] to-[#0b1220]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-white">
          Get In Touch
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="text-slate-300 leading-relaxed">
            <p>
              I'm actively seeking opportunities in AI/ML. If you have a role, project, or mentorship opportunity, I'd love to connect.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p><span className="font-medium text-white">Email:</span> your.email@example.com</p>
              <p><span className="font-medium text-white">Location:</span> Remote / Open to relocate</p>
            </div>
            <div className="mt-6 flex items-center gap-4 text-slate-300">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><Github className="h-5 w-5" /> GitHub</a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><Linkedin className="h-5 w-5" /> LinkedIn</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <div className="grid gap-4">
              <label className="grid gap-1">
                <span className="text-sm text-slate-300">Name</span>
                <input name="name" required className="h-10 rounded-md bg-[#0b1220] border border-white/10 px-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30" placeholder="Your name" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-300">Email</span>
                <input type="email" name="email" required className="h-10 rounded-md bg-[#0b1220] border border-white/10 px-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30" placeholder="you@example.com" />
              </label>
              <label className="grid gap-1">
                <span className="text-sm text-slate-300">Message</span>
                <textarea name="message" rows="4" required className="rounded-md bg-[#0b1220] border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400/30" placeholder="Say hello..." />
              </label>
              <button type="submit" className="h-10 rounded-md bg-teal-400 text-[#0b1220] hover:bg-teal-300 transition-colors">Send</button>
              {status && <p className="text-sm text-slate-300">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
