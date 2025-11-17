export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-emerald-50 to-white" />
      <div className="absolute -top-1/2 right-[-10%] w-[60rem] h-[60rem] rounded-full bg-gradient-to-br from-blue-200/40 to-emerald-200/40 blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Building Africa’s Future, One Craft at a Time
            </h1>
            <p className="mt-6 text-lg text-slate-700 max-w-xl">
              Meinzer Initiative connects American master tradespeople with African construction graduates for hands-on apprenticeships in masonry, carpentry, roofing, electrical, plumbing, welding, glazing, interiors, landscaping, project management and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Apply as an apprentice</a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition">Volunteer as a master</a>
            </div>
            <p className="mt-3 text-sm text-slate-600">Uganda Training Hub – coming soon</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1489514354504-1653aa90e34e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYW5kcy1vbiUyMGNvbnN0cnVjdGlvbiUyMHRyYWluaW5nfGVufDB8MHx8fDE3NjM0MTQ5NDB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hands-on construction training" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-800">Real site experience</p>
              <p className="text-xs text-slate-600">Learn-by-doing under master trades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
