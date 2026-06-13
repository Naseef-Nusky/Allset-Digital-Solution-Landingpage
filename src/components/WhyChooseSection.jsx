import { whyChoose, whyChooseSubtext } from '../data/content'
import Card3D from './ui/Card3D'
import CheckTick from './ui/CheckTick'

export default function WhyChooseSection() {
  return (
    <section className="px-4 py-14 sm:py-16">
      <div className="mx-auto max-w-lg sm:max-w-3xl lg:max-w-4xl">
        <p className="section-label text-center text-emerald-600">
          Why us
        </p>
        <h2 className="section-heading mt-2 text-center text-[#002147]">
          Why Small Businesses Choose All Set
        </h2>
        <p className="section-lead mx-auto mt-3 max-w-xl text-center">
          {whyChooseSubtext}
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <Card3D
              key={item}
              as="li"
              className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3.5"
            >
              <CheckTick />
              <span className="body-md font-medium text-slate-700">
                {item}
              </span>
            </Card3D>
          ))}
        </ul>
      </div>
    </section>
  )
}
