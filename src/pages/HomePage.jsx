import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import QuickQuoteForm from '../components/QuickQuoteForm'
import WhatYouGetSection from '../components/WhatYouGetSection'
import TestimonialsSection from '../components/TestimonialsSection'
import SimpleStepsSection from '../components/SimpleStepsSection'
import WhyChooseSection from '../components/WhyChooseSection'
import LeadsServicesSection from '../components/LeadsServicesSection'
import IndustriesSection from '../components/IndustriesSection'
import FAQSection from '../components/FAQSection'
import ConsultationForm from '../components/ConsultationForm'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#quote') {
      const timer = setTimeout(() => {
        document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [location.hash])

  return (
    <>
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
    </>
  )
}
