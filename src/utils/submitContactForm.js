const API_BASE = import.meta.env.VITE_CONTACT_API_URL || ''

export async function submitContactForm(payload) {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  let data = {}

  try {
    data = await response.json()
  } catch {
    data = {}
  }

  if (!response.ok) {
    const error = new Error(
      data.message || 'Failed to send your message. Please try again.',
    )
    error.errors = data.errors
    throw error
  }

  return data
}
