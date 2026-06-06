import Logo from './Logo'
import Button from './ui/Button'

export default function Header() {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3 sm:max-w-2xl lg:max-w-6xl">
        <Logo />
        <Button type="button" size="sm" onClick={scrollToQuote}>
          FREE QUOTE
        </Button>
      </div>
    </header>
  )
}
