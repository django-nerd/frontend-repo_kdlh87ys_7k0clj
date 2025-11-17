import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("Submitting...")
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus("✅ Thanks! We received your message.")
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`❌ Could not send. ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Get involved</h2>
          <p className="mt-4 text-slate-700">Apprentices, masters, and partners—drop us a note and we’ll get back to you.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Full name</label>
              <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone / WhatsApp</label>
              <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">I am a</label>
              <select name="role" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900">
                <option value="apprentice">Apprentice</option>
                <option value="master">Master / Instructor</option>
                <option value="partner">Partner / Sponsor</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Area of interest</label>
              <input name="interest_area" placeholder="e.g., Electrical, Masonry" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Country</label>
              <input name="country" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
          </div>

          <div className="md:col-span-2 flex items-center gap-4">
            <button className="inline-flex items-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition" type="submit">Send inquiry</button>
            {status && <span className="text-sm text-slate-600">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
