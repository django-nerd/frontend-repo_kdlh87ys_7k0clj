import { Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "#about", label: "About" },
    { href: "#trades", label: "Programs" },
    { href: "#how", label: "How it works" },
    { href: "#uganda", label: "Uganda Hub" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-blue-600 to-emerald-500 shadow-inner" />
            <span className="text-slate-900 font-bold text-lg">Meinzer Initiative</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-700 hover:text-slate-900 transition">{l.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Get involved</a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu className="w-6 h-6 text-slate-900" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="px-2 py-2 rounded hover:bg-slate-100" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="px-2 py-2 rounded bg-slate-900 text-white text-center" onClick={() => setOpen(false)}>Get involved</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
