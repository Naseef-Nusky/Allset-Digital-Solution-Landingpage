import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { formPlaceholders, formSubmitError, formSuccessMessage, formSuccessTitle } from '../data/content'
import useAutoRefreshAfterSubmit from '../hooks/useAutoRefreshAfterSubmit'
import { validateContactForm } from '../utils/contactFormValidation'
import { submitContactForm } from '../utils/submitContactForm'
import Button from './ui/Button'
import FormFieldError from './ui/FormFieldError'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  useAutoRefreshAfterSubmit(submitted)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateContactForm(form)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setSubmitError('')
    setIsSubmitting(true)

    try {
      await submitContactForm({
        ...form,
        source: 'Landing Page - Quick Quote',
      })
      setSubmitted(true)
    } catch (error) {
      if (error.errors) {
        setErrors(error.errors)
      } else {
        setSubmitError(error.message || formSubmitError)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = (field) =>
    `form-input w-full rounded-xl border bg-slate-50 px-4 py-3 outline-none transition focus:bg-white focus:ring-4 ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10'
        : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/10'
    }`

  const labelClass = 'form-label'

  return (
    <section id="quote" className="scroll-mt-4 bg-slate-50 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-lg sm:max-w-xl">
        <div className="form-3d rounded-3xl border border-slate-100 bg-white p-6 sm:p-8">
          {!submitted && (
            <>
              <p className="section-label text-center text-emerald-600">
                Free website plan
              </p>
              <h2 className="section-heading mt-2 text-center text-[#002147]">
                Get your free website plan
              </h2>
              <p className="section-lead mt-3 text-center">
                Tell us what you need and we will reply within 24 hours with honest
                advice and a clear plan.
              </p>
            </>
          )}

          {submitted ? (
            <div className="py-4 text-center sm:py-6">
              <p className="font-heading text-xl font-bold text-[#002147] sm:text-2xl">
                {formSuccessTitle}
              </p>
              <p className="section-lead mx-auto mt-3 max-w-md">
                {formSuccessMessage}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-6 space-y-4"
            >
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder={formPlaceholders.name}
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass('name')}
                />
                <FormFieldError id="name-error" message={errors.name} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder={formPlaceholders.email}
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                />
                <FormFieldError id="email-error" message={errors.email} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  aria-required="true"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  placeholder={formPlaceholders.phone}
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass('phone')}
                />
                <FormFieldError id="phone-error" message={errors.phone} />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>
                  Tell us what you need
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  placeholder={formPlaceholders.message}
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass('message')} resize-none`}
                />
                <FormFieldError id="message-error" message={errors.message} />
              </div>
              <Button type="submit" block icon={ArrowRight} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Get My Free Quote'}
              </Button>
              {submitError && (
                <p className="caption text-center text-red-600" role="alert">
                  {submitError}
                </p>
              )}
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
