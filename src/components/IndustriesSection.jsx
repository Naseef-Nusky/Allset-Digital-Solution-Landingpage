import { industries } from '../data/content'
import Card3D from './ui/Card3D'

export default function IndustriesSection() {
  const scrollToContact = () => {
    document
      .getElementById('consultation')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-lg sm:max-w-3xl lg:max-w-6xl">
        <p className="section-label text-center text-emerald-600">
          Who we help
        </p>
        <h2 className="section-heading mt-2 text-center text-[#002147]">
          Built for UK Small Businesses
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((industry) => (
            <Card3D
              key={industry.name}
              as="button"
              type="button"
              tilt={false}
              onClick={scrollToContact}
              aria-label={`Get in touch about websites for ${industry.name}`}
              className="group w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white text-left"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={encodeURI(industry.image)}
                  alt={industry.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#002147]/70 via-[#002147]/10 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 px-3 py-3 text-center text-xs font-semibold text-white sm:text-sm">
                  {industry.name}
                </p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
