import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white selection:bg-teal-300/40 selection:text-white">
      <div className="fixed -z-10 inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-32 h-96 w-96 rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(closest-side, #00f5ff, transparent 70%)'}} />
        <div className="absolute top-1/2 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, #3b82f6, transparent 70%)'}} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-slate-400 border-t border-white/10">
        © {new Date().getFullYear()} AI Fresher Portfolio — Crafted with curiosity.
      </footer>
    </div>
  )
}

export default App
