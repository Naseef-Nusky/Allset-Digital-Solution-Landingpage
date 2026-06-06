import Header from './components/Header'
import HeroSection from './components/HeroSection'
import QuickQuoteForm from './components/QuickQuoteForm'
import WhatYouGetSection from './components/WhatYouGetSection'
import TestimonialsSection from './components/TestimonialsSection'
import SimpleStepsSection from './components/SimpleStepsSection'
import WhyChooseSection from './components/WhyChooseSection'
import LeadsServicesSection from './components/LeadsServicesSection'
import IndustriesSection from './components/IndustriesSection'
import FAQSection from './components/FAQSection'
import ConsultationForm from './components/ConsultationForm'
import StickyBottomBar from './components/StickyBottomBar'
import Logo from './components/Logo'
import { EMAIL, PHONE_DISPLAY, PHONE_NUMBER } from './data/content'
import { Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-8 pb-28 lg:pb-8">
      <div className="mx-auto max-w-lg sm:max-w-3xl lg:max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <Logo />

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-emerald-600"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-emerald-600"
            >
              <Mail className="h-4 w-4 text-emerald-600" />
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-400 sm:justify-between">
          <p>
            © {new Date().getFullYear()} All Set Digital Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <HeroSection />
        <QuickQuoteForm />
        <WhatYouGetSection />
        <TestimonialsSection />
        <SimpleStepsSection />
        <WhyChooseSection />
        <LeadsServicesSection />
        <IndustriesSection />
        <FAQSection />
        <ConsultationForm />
      </main>
      <Footer />
      <StickyBottomBar />
    </div>
  )
}

export default App
