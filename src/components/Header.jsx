import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import Button from './ui/Button'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToQuote = () => {
    if (location.pathname !== '/') {
      navigate('/#quote')
      return
    }
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3 sm:max-w-2xl lg:max-w-6xl">
        <Link to="/" aria-label="All Set Digital Solutions home">
          <Logo />
        </Link>
        <Button type="button" size="sm" onClick={scrollToQuote}>
          FREE QUOTE
        </Button>
      </div>
    </header>
  )
}
