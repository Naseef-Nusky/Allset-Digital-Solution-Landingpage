import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react'
import { testimonials } from '../data/content'

function StarRating() {
  return (
    <div className="flex justify-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  )
}

function TestimonialSlide({ item, className = '' }) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border border-slate-100 bg-white px-6 py-8 text-center sm:px-8 sm:py-10 ${className}`}
      style={{
        boxShadow:
          '0 1px 1px rgba(0,33,71,0.04), 0 4px 0 rgba(0,33,71,0.06), 0 12px 32px rgba(0,33,71,0.1)',
      }}
    >
      <span className="text-5xl leading-none text-emerald-200">&ldquo;</span>
      <div className="mt-2">
        <StarRating />
      </div>
      <blockquote className="body-md mt-4 flex-1 text-slate-700">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <div className="mx-auto mt-5 w-full max-w-xs border-t border-slate-100 pt-4">
        <p className="text-sm font-semibold text-[#002147]">{item.author}</p>
        <p className="caption text-slate-500">{item.business}</p>
      </div>
    </article>
  )
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const total = testimonials.length

  const goTo = useCallback(
    (index) => {
      setActive((index + total) % total)
    },
    [total],
  )

  const goNext = useCallback(() => goTo(active + 1), [active, goTo])
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (isPaused) return undefined

    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [goNext, isPaused])

  const handleTouchStart = (e) => {
    e.currentTarget.dataset.touchX = String(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    const startX = Number(e.currentTarget.dataset.touchX)
    const diff = startX - e.changedTouches[0].clientX

    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext()
      else goPrev()
    }
  }

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-white" />

      <div className="relative mx-auto max-w-lg sm:max-w-2xl lg:max-w-6xl">
        <div className="flex justify-center">
          <span className="section-label inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-emerald-700">
            <Sparkles className="h-3 w-3" />
            Loved by UK businesses
          </span>
        </div>

        <h2 className="section-heading mt-5 text-center leading-snug text-[#002147]">
          Real results for real{' '}
          <span className="bg-gradient-to-r from-[#002147] to-emerald-500 bg-clip-text text-transparent">
            small businesses
          </span>
        </h2>

        <div className="mt-4">
          <StarRating />
          <p className="caption mt-2 text-center text-slate-500">
            5.0 average from happy customers across the UK
          </p>
        </div>

        {/* Mobile / tablet slider */}
        <div
          className="relative mt-8 lg:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((item) => (
                <TestimonialSlide
                  key={item.author}
                  item={item}
                  className="w-full shrink-0"
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="nav-btn absolute -left-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 sm:-left-5 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="nav-btn absolute -right-1 top-1/2 z-10 h-10 w-10 -translate-y-1/2 sm:-right-5 sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.author}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={active === index}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  active === index
                    ? 'w-8 bg-emerald-500'
                    : 'w-2.5 bg-slate-300 hover:bg-emerald-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop — 3 slides side by side */}
        <div className="mt-8 hidden grid-cols-3 gap-6 lg:grid">
          {testimonials.map((item) => (
            <TestimonialSlide key={item.author} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
