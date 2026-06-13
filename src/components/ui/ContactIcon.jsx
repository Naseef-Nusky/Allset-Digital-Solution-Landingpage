export default function ContactIcon({ children, className = '' }) {
  return (
    <span
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 ${className}`}
    >
      {children}
    </span>
  )
}
