import { Check } from 'lucide-react'

const sizes = {
  sm: { box: 'icon-check-sm', icon: 'h-3 w-3' },
  md: { box: 'icon-check-md', icon: 'h-3.5 w-3.5' },
}

export default function CheckTick({ size = 'md', className = '' }) {
  const s = sizes[size]

  return (
    <span className={`icon-check ${s.box} ${className}`.trim()}>
      <Check className={s.icon} strokeWidth={3} />
    </span>
  )
}
