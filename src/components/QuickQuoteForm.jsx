import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { formPlaceholders } from '../data/content'
import Button from './ui/Button'

export default function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10'

  const labelClass = 'mb-1.5 block text-sm font-medium text-[#002147]'

  return (
    <section id="quote" className="scroll-mt-4 bg-slate-50 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-lg sm:max-w-xl">
        <div className="form-3d rounded-3xl border border-slate-100 bg-white p-6 sm:p-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-600">
            Free website plan
          </p>
          <h2 className="mt-2 text-center font-heading text-2xl font-bold text-[#002147]">
            Get your free website plan
          </h2>
          <p className="mt-3 text-center text-[15px] leading-relaxed text-slate-600">
            Tell us what you need and we will reply within 24 hours with honest
            advice and a clear plan.
          </p>

          {submitted ? (
            <p className="mt-6 text-center text-[15px] text-slate-600">
              Thank you! We will reply within 24 hours with your free website
              plan.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={formPlaceholders.name}
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={formPlaceholders.email}
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={formPlaceholders.phone}
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>
                  Tell us what you need
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={formPlaceholders.message}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <Button type="submit" block icon={ArrowRight}>
                Get My Free Quote
              </Button>
              <p className="text-center text-xs text-slate-500">
                We will never share your details. Reply within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
