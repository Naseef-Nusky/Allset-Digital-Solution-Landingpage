import { ArrowRight } from 'lucide-react'
import { leadServices, leadServicesSubtext } from '../data/content'
import Button from './ui/Button'
import Card3D from './ui/Card3D'

export default function LeadsServicesSection() {
  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-slate-50 px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-lg sm:max-w-3xl lg:max-w-6xl">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-600">
          More services
        </p>
        <h2 className="mt-2 text-center font-heading text-2xl font-bold text-[#002147] sm:text-3xl">
          Get More Leads Online
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600">
          {leadServicesSubtext}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leadServices.map((service) => (
            <Card3D
              key={service.title}
              tilt={false}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={encodeURI(service.image)}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#002147]/20 via-transparent to-transparent" />
                {service.badge && (
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700 shadow-sm backdrop-blur-sm">
                    {service.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-heading text-lg font-bold leading-snug text-[#002147] transition-colors duration-300 group-hover:text-emerald-700">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <Button
                  type="button"
                  size="sm"
                  icon={ArrowRight}
                  onClick={scrollToQuote}
                  block
                  className="mt-5"
                >
                  Get My Free Quote
                </Button>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
