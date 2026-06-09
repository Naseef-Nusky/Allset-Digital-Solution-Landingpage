import { ArrowRight, Phone } from 'lucide-react'
import { heroFeatures, heroTrustBadges, PHONE_NUMBER } from '../data/content'
import Button from './ui/Button'
import CheckTick from './ui/CheckTick'

const MOBILE_LINE_1 = 'Websites for UK'
const MOBILE_LINE_2 = 'Small Businesses'
const MOBILE_LINE_3 = 'From £200'
const DESKTOP_LINE_1 = 'Websites for UK Small'
const DESKTOP_LINE_2 = 'Businesses From £200'
const LETTER_DELAY = 0.04
const PRICE_START_MOBILE = MOBILE_LINE_3.indexOf('£')
const PRICE_START_DESKTOP = DESKTOP_LINE_2.indexOf('£')

function AnimatedLine({ text, startIndex, priceStart = -1 }) {
  return text.split('').map((char, index) => (
    <span
      key={startIndex + index}
      className={`hero-letter ${index >= priceStart ? 'text-emerald-600' : ''}`}
      style={{ animationDelay: `${(startIndex + index) * LETTER_DELAY}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

function AnimatedHeadline() {
  return (
    <>
      <span className="lg:hidden">
        <span className="block">
          <AnimatedLine text={MOBILE_LINE_1} startIndex={0} />
        </span>
        <span className="block">
          <AnimatedLine
            text={MOBILE_LINE_2}
            startIndex={MOBILE_LINE_1.length}
          />
        </span>
        <span className="block">
          <AnimatedLine
            text={MOBILE_LINE_3}
            startIndex={MOBILE_LINE_1.length + MOBILE_LINE_2.length}
            priceStart={PRICE_START_MOBILE}
          />
        </span>
      </span>

      <span className="hidden lg:contents">
        <span className="block">
          <AnimatedLine text={DESKTOP_LINE_1} startIndex={0} />
        </span>
        <span className="block">
          <AnimatedLine
            text={DESKTOP_LINE_2}
            startIndex={DESKTOP_LINE_1.length}
            priceStart={PRICE_START_DESKTOP}
          />
        </span>
      </span>
    </>
  )
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

      <div className="relative mx-auto max-w-lg text-center sm:max-w-2xl lg:max-w-3xl">
        <div>
          <h1 className="font-heading text-[2.5rem] font-bold leading-[1.12] tracking-tight text-[#002147] sm:text-[2.75rem] lg:text-5xl">
            <AnimatedHeadline />
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600 sm:text-base">
            Built in around 7 days with SEO included, copy written for you and
            zero hidden fees.
          </p>
        </div>

        <div className="mt-6">
          <ul className="mx-auto w-fit space-y-4 lg:space-y-3">
            {heroFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3.5 lg:gap-3"
              >
                <CheckTick
                  size="sm"
                  className="!rounded-full max-lg:h-8 max-lg:w-8 max-lg:[&>svg]:h-4 max-lg:[&>svg]:w-4"
                />
                <span className="text-left text-[15px] leading-snug text-slate-700 sm:text-base lg:text-[15px]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              type="button"
              onClick={scrollToQuote}
              icon={ArrowRight}
              block
              className="btn-shimmer-auto sm:w-auto"
            >
              Get My Free Website Plan
            </Button>
            <Button
              as="a"
              href={`tel:${PHONE_NUMBER}`}
              variant="secondary"
              icon={Phone}
              iconPosition="left"
              block
              className="sm:w-auto"
            >
              Call Now
            </Button>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center text-xs leading-relaxed text-slate-500">
            {heroTrustBadges.join(' • ')}
          </p>
        </div>
      </div>
    </section>
  )
}
