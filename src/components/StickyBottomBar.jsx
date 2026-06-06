import { MessageSquare, Phone } from 'lucide-react'
import { PHONE_NUMBER } from '../data/content'
import Button from './ui/Button'

export default function StickyBottomBar() {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-100 bg-white/95 px-4 py-3 backdrop-blur-sm lg:hidden">
      <div className="mx-auto flex max-w-lg gap-3 sm:max-w-2xl lg:max-w-4xl">
        <Button
          as="a"
          href={`tel:${PHONE_NUMBER}`}
          variant="outline"
          size="sm"
          icon={Phone}
          iconPosition="left"
          className="flex-1 rounded-2xl"
        >
          Call Now
        </Button>
        <Button
          type="button"
          size="sm"
          icon={MessageSquare}
          iconPosition="left"
          onClick={scrollToQuote}
          className="flex-1 rounded-2xl"
        >
          FREE Quote
        </Button>
      </div>
    </div>
  )
}
