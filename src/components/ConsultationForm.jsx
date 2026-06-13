import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import {
  EMAIL,
  formPlaceholders,
  formSuccessMessage,
  formSuccessTitle,
  ADDRESS,
  PHONE_DISPLAY,
  PHONE_NUMBER,
} from '../data/content'
import useAutoRefreshAfterSubmit from '../hooks/useAutoRefreshAfterSubmit'
import { validateContactForm } from '../utils/contactFormValidation'
import Button from './ui/Button'
import FormFieldError from './ui/FormFieldError'

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  useAutoRefreshAfterSubmit(submitted)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateContactForm(form)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  const inputClass = (field) =>
    `form-input w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:ring-4 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10'
        : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10'
    }`

  const labelClass = 'form-label'

  return (
    <section
      id="consultation"
      className="scroll-mt-4 bg-gradient-to-br from-[#002147] to-emerald-800 px-4 py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-lg items-start gap-10 sm:max-w-3xl lg:max-w-6xl lg:grid-cols-2 lg:gap-12">
        <div className="text-center text-white lg:text-left">
          <p className="section-label text-emerald-300">
            Free website plan
          </p>
          <h2 className="section-heading mt-2">
            Let us get your business all set.
          </h2>
          <p className="body-md mt-4 text-emerald-50/90">
            Tell us a bit about what you need. We will reply within 24 hours
            with honest advice and a clear plan, with zero pressure to commit.
          </p>

          <div className="mx-auto mt-8 max-w-sm space-y-4 lg:mx-0">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="body-md group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/10 lg:justify-start"
            >
              <Phone className="h-4 w-4 shrink-0 text-emerald-300 transition-transform duration-300 group-hover:scale-110" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="body-md group flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/10 lg:justify-start"
            >
              <Mail className="h-4 w-4 shrink-0 text-emerald-300 transition-transform duration-300 group-hover:scale-110" />
              {EMAIL}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="body-md group flex items-start justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/10 lg:justify-start"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300 transition-transform duration-300 group-hover:scale-110" />
              {ADDRESS}
            </a>
          </div>
        </div>

        <div className="form-3d rounded-3xl bg-white p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center">
              <p className="font-heading text-xl font-bold text-[#002147] sm:text-2xl">
                {formSuccessTitle}
              </p>
              <p className="section-lead mx-auto mt-3 max-w-md">
                {formSuccessMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="consultation-name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="consultation-name"
                  name="name"
                  type="text"
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'consultation-name-error' : undefined}
                  placeholder={formPlaceholders.name}
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass('name')}
                />
                <FormFieldError
                  id="consultation-name-error"
                  message={errors.name}
                />
              </div>
              <div>
                <label htmlFor="consultation-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="consultation-email"
                  name="email"
                  type="email"
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'consultation-email-error' : undefined}
                  placeholder={formPlaceholders.email}
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                />
                <FormFieldError
                  id="consultation-email-error"
                  message={errors.email}
                />
              </div>
              <div>
                <label htmlFor="consultation-phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="consultation-phone"
                  name="phone"
                  type="tel"
                  aria-required="true"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'consultation-phone-error' : undefined}
                  placeholder={formPlaceholders.phone}
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass('phone')}
                />
                <FormFieldError
                  id="consultation-phone-error"
                  message={errors.phone}
                />
              </div>
              <div>
                <label htmlFor="consultation-message" className={labelClass}>
                  Tell us what you need
                </label>
                <textarea
                  id="consultation-message"
                  name="message"
                  rows={4}
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'consultation-message-error' : undefined
                  }
                  placeholder={formPlaceholders.message}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass('message')} resize-none`}
                />
                <FormFieldError
                  id="consultation-message-error"
                  message={errors.message}
                />
              </div>
              <Button type="submit" block icon={ArrowRight}>
                Get My Free Quote
              </Button>
              <p className="caption text-center text-slate-500">
                We will never share your details. Reply within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
