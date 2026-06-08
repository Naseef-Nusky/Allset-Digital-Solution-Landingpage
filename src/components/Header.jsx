import { Link } from 'react-router-dom'
import Logo from './Logo'
import Button from './ui/Button'
import { PHONE_NUMBER } from '../data/content'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3 sm:max-w-2xl lg:max-w-6xl">
        <Link to="/" aria-label="All Set Digital Solutions home">
          <Logo className="!h-14 sm:!h-16" />
        </Link>
        <Button as="a" href={`tel:${PHONE_NUMBER}`} size="sm">
          Call us
        </Button>
      </div>
    </header>
  )
}
