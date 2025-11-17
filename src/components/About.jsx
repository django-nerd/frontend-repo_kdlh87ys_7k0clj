export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Meinzer Initiative</h2>
            <p className="mt-4 text-slate-700">
              Meinzer Initiative is a company limited by guarantee dedicated to workforce development in Africa’s built environment. We connect graduates from local technical colleges and universities with experienced American master trades for immersive, competency-based training.
            </p>
            <p className="mt-4 text-slate-700">
              Our model blends mentorship, modern safety practices, and industry-standard project delivery, helping young professionals launch meaningful careers while raising construction quality across the region.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-900">What makes us different</h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-6">
              <li>Apprenticeship-first: learn by building real projects</li>
              <li>Global expertise with local context</li>
              <li>Career pathways into reputable employers</li>
              <li>Commitment to safety, quality, and ethics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
