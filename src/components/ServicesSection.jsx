import {
  ArrowRight,
  Globe,
  Megaphone,
  Search,
  Share2,
  Target,
} from 'lucide-react'
import { services } from '../data/content'

const iconMap = {
  globe: Globe,
  target: Target,
  search: Search,
  megaphone: Megaphone,
  share: Share2,
}

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon]
  const scrollToForm = () => {
    document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_12px_40px_rgb(0,33,71,0.07)] ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgb(0,33,71,0.12)] ${
        service.featured
          ? 'ring-emerald-200'
          : 'ring-slate-100'
      }`}
    >
      {service.featured && (
        <div className="h-1 bg-gradient-to-r from-[#002147] via-emerald-600 to-emerald-400" />
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#002147] to-emerald-500 shadow-lg shadow-emerald-500/20">
            <Icon className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          {service.badge && (
            <span className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="font-heading text-xl font-bold leading-snug text-[#002147] sm:text-[1.35rem]">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">
          {service.description}
        </p>

        <button
          type="button"
          onClick={scrollToForm}
          className="group/btn relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgb(16,185,129,0.3)] transition hover:shadow-[0_12px_28px_rgb(16,185,129,0.4)] active:scale-[0.99]"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 opacity-0 transition group-hover/btn:opacity-100" />
          <span className="relative">
            Get My <strong>FREE</strong> Quote
          </span>
          <ArrowRight className="relative h-4 w-4 transition group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </article>
  )
}

export default function ServicesSection() {
  return (
    <section className="relative px-4 py-14 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50/80 to-white" />

      <div className="relative mx-auto max-w-lg sm:max-w-3xl lg:max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            What we do
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-snug text-[#002147] sm:text-3xl">
            Affordable web design UK and growth{' '}
            <span className="text-emerald-600">services</span> for small
            businesses
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            Cheap web design for small businesses, labourers and tradesmen,
            plus everything you need to grow online.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}

          <div className="col-span-1 flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:justify-center xl:col-span-3">
            {services.slice(3).map((service) => (
              <div
                key={service.title}
                className="w-full sm:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
