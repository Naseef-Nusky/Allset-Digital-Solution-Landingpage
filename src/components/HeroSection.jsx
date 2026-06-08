import { ArrowRight, Phone } from 'lucide-react'
import { heroFeatures, heroTrustBadges, PHONE_NUMBER } from '../data/content'
import Button from './ui/Button'
import CheckTick from './ui/CheckTick'

const HERO_HEADLINE = 'Websites for UK Small Businesses From £200'
const LETTER_DELAY = 0.04
const PRICE_START = HERO_HEADLINE.indexOf('£')

function AnimatedHeadline() {
  return HERO_HEADLINE.split('').map((char, index) => (
    <span
      key={index}
      className={`hero-letter ${index >= PRICE_START ? 'text-emerald-600' : ''}`}
      style={{ animationDelay: `${index * LETTER_DELAY}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

export default function HeroSection() {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:pb-16 sm:pt-12">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.png)' }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-blue-50/20" />

      <div className="relative mx-auto max-w-lg sm:max-w-2xl lg:max-w-6xl lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="text-center lg:text-left">
          <h1 className="font-heading text-[2rem] font-bold leading-[1.15] tracking-tight text-[#002147] sm:text-[2.75rem] lg:text-5xl">
            <AnimatedHeadline />
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600 sm:text-base lg:mx-0">
            Built in around 7 days with SEO included, copy written for you and
            zero hidden fees.
          </p>
        </div>

        <div className="group relative mt-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
          <div className="hero-3d-frame ring-1 ring-slate-200/80">
            <img
              src="/hero2.png"
              alt="Professional website design on laptop in a modern workspace"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 text-center lg:col-start-1 lg:row-start-2 lg:mt-0 lg:text-left">
          <ul className="mx-auto max-w-md space-y-3 text-left lg:mx-0">
            {heroFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckTick size="sm" className="mt-0.5" />
                <span className="text-[15px] leading-snug text-slate-700">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              type="button"
              onClick={scrollToQuote}
              icon={ArrowRight}
            >
              Get My Free Website Plan
            </Button>
            <Button
              as="a"
              href={`tel:${PHONE_NUMBER}`}
              variant="secondary"
              icon={Phone}
              iconPosition="left"
            >
              Call Now
            </Button>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center text-xs leading-relaxed text-slate-500 lg:mx-0 lg:text-left">
            {heroTrustBadges.join(' • ')}
          </p>
        </div>
      </div>
    </section>
  )
}
