import { useRef } from 'react'

export default function Card3D({
  children,
  className = '',
  tilt = true,
  as: Component = 'div',
  ...props
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    if (!tilt || !ref.current) return
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) translateY(-6px)`
  }

  const handleLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = ''
  }

  return (
    <Component
      ref={ref}
      className={`card-3d ${className}`.trim()}
      onMouseMove={tilt ? handleMove : undefined}
      onMouseLeave={tilt ? handleLeave : undefined}
      {...props}
    >
      <div className="card-3d-shine" aria-hidden />
      {children}
    </Component>
  )
}
