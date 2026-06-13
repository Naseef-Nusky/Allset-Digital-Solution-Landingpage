import {
  Clock,
  Headphones,
  Layout,
  Mail,
  PenLine,
  Search,
} from 'lucide-react'
import { whatYouGet } from '../data/content'
import Card3D from './ui/Card3D'
import IconBox from './ui/IconBox'

const WHAT_YOU_GET_BG = encodeURI('/bg-What You Get.png')

const iconMap = {
  layout: Layout,
  search: Search,
  pen: PenLine,
  mail: Mail,
  clock: Clock,
  headphones: Headphones,
}

export default function WhatYouGetSection() {
  return (
    <section
      id="what-you-get"
      className="relative scroll-mt-4 overflow-hidden px-4 py-14 sm:py-16"
    >
      <img
        src={WHAT_YOU_GET_BG}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/88 via-white/72 to-emerald-50/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />

      <div className="relative mx-auto max-w-lg sm:max-w-3xl lg:max-w-6xl">
        <p className="section-label text-center text-emerald-600">
          Included
        </p>
        <h2 className="section-heading mt-2 text-center text-[#002147]">
          What You Get
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whatYouGet.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <Card3D
                key={item.title}
                className="group flex flex-col items-center rounded-2xl border border-white/70 bg-white/90 p-6 text-center backdrop-blur-sm"
              >
                <IconBox icon={Icon} size="sm" />
                <h3 className="card-heading-md mt-4 text-[#002147] transition-colors duration-300 group-hover:text-emerald-700">
                  {item.title}
                </h3>
                <p className="card-body mt-2">
                  {item.description}
                </p>
              </Card3D>
            )
          })}
        </div>
      </div>
    </section>
  )
}
