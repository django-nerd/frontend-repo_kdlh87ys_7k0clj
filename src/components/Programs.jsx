const trades = [
  "Masonry",
  "Carpentry",
  "Roofing",
  "Interior Design",
  "Plumbing",
  "Electrical & Wiring",
  "Welding & Fabrication",
  "Aluminum & Glazing",
  "Landscaping",
  "Furniture Making",
  "Project Management",
]

export default function Programs() {
  return (
    <section id="trades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Construction trade apprenticeships</h2>
          <p className="mt-4 text-slate-700">Practical apprenticeship tracks led by visiting master craftspeople and industry partners.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trades.map((t) => (
            <div key={t} className="p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition bg-gradient-to-br from-white to-slate-50">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-600 to-emerald-500 mb-4" />
              <h3 className="font-semibold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600">Hands-on modules, safety standards, and real-world projects.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
