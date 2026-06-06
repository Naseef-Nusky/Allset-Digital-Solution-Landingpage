export default function Logo({ className = '' }) {
  return (
    <img
      src="/logo-removebg.png"
      alt="All Set Digital Solutions"
      className={`h-12 w-auto object-contain sm:h-14 ${className}`}
    />
  )
}
