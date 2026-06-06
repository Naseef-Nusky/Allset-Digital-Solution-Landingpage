import { Check } from 'lucide-react'
import { whyChoose, whyChooseSubtext } from '../data/content'
import Card3D from './ui/Card3D'

export default function WhyChooseSection() {
  return (
    <section className="px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-lg sm:max-w-3xl lg:max-w-4xl">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-600">
          Why us
        </p>
        <h2 className="mt-2 text-center font-heading text-2xl font-bold text-[#002147] sm:text-3xl">
          Why Small Businesses Choose All Set
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[15px] leading-relaxed text-slate-600">
          {whyChooseSubtext}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <Card3D
              key={item}
              as="li"
              className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3.5"
            >
              <span className="icon-check">
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
              </span>
              <span className="text-[15px] font-medium text-slate-700 transition-colors duration-300 group-hover:text-[#002147]">
                {item}
              </span>
            </Card3D>
          ))}
        </ul>
      </div>
    </section>
  )
}
