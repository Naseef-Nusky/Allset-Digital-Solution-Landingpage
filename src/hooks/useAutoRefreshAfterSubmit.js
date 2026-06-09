import { useEffect } from 'react'

export default function useAutoRefreshAfterSubmit(submitted, delayMs = 4000) {
  useEffect(() => {
    if (!submitted) return undefined

    const timer = setTimeout(() => {
      window.location.reload()
    }, delayMs)

    return () => clearTimeout(timer)
  }, [submitted, delayMs])
}
