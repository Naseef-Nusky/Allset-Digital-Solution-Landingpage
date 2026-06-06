import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/content'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-lg sm:max-w-2xl lg:max-w-4xl">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-emerald-600">
          FAQs
        </p>
        <h2 className="mt-2 text-center font-heading text-2xl font-bold leading-snug text-[#002147] sm:text-3xl">
          Questions? We have{' '}
          <span className="text-emerald-600">answers.</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-[15px] text-slate-600">
          Everything you need to know about working with us.
        </p>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="faq-3d overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="group flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 hover:bg-emerald-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold leading-snug text-[#002147]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-[#002147] transition-all duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-600' : 'group-hover:text-emerald-600'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pb-5 pt-3">
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
