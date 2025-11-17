import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Programs from "./components/Programs"
import UgandaHub from "./components/UgandaHub"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <UgandaHub />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Meinzer Initiative. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#trades" className="hover:text-slate-900">Programs</a>
              <a href="#uganda" className="hover:text-slate-900">Uganda Hub</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
