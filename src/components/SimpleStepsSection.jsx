import { simpleSteps } from '../data/content'
import Card3D from './ui/Card3D'

const STEPS_BG = encodeURI('/Live in 3 simple steps.png')

export default function SimpleStepsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:py-16">
      <img
        src={STEPS_BG}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/88 via-white/72 to-emerald-50/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />

      <div className="relative mx-auto max-w-lg sm:max-w-3xl lg:max-w-5xl">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-600">
          How it works
        </p>
        <h2 className="mt-2 text-center font-heading text-2xl font-bold text-[#002147] sm:text-3xl">
          Live in 3 simple steps
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {simpleSteps.map((item) => (
            <Card3D
              key={item.step}
              className="group relative rounded-2xl border border-white/70 bg-white/90 p-6 text-center backdrop-blur-sm"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">
                Step {item.step}
              </p>
              <div className="step-badge mx-auto mt-3 h-12 w-12 text-lg">
                {item.step}
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-[#002147] transition-colors duration-300 group-hover:text-emerald-700">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
