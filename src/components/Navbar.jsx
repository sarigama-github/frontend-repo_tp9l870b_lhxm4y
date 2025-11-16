import { useState } from 'react'
import { Menu, X, Sparkles, Github, Linkedin } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0b1220]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-300 via-teal-300 to-blue-400 flex items-center justify-center text-[#0b1220] shadow-md">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight text-white">AI Fresher Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-sm font-medium px-3 py-1.5 rounded-md bg-teal-400/90 text-[#0b1220] hover:bg-teal-300 transition-colors">Hire Me</a>
            <div className="flex items-center gap-3 ml-2 text-slate-300">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </nav>

          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-md border border-white/10 text-slate-200" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b1220]/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block py-2 text-slate-200" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Github className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center w-full py-2 rounded-md bg-teal-400 text-[#0b1220]" onClick={() => setOpen(false)}>
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
