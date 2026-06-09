export const contactFormFieldErrors = {
  name: 'Please enter your name.',
  email: 'Please enter your email address.',
  emailInvalid: 'Please enter a valid email address.',
  phone: 'Please enter your phone number.',
  message: 'Please tell us what you need.',
}

export function validateContactForm(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = contactFormFieldErrors.name
  }

  if (!form.email.trim()) {
    errors.email = contactFormFieldErrors.email
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = contactFormFieldErrors.emailInvalid
  }

  if (!form.phone.trim()) {
    errors.phone = contactFormFieldErrors.phone
  }

  if (!form.message.trim()) {
    errors.message = contactFormFieldErrors.message
  }

  return errors
}
