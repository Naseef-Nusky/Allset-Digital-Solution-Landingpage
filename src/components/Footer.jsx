import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import Logo from './Logo'
import ContactIcon from './ui/ContactIcon'
import { EMAIL, PHONE_DISPLAY, PHONE_NUMBER } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white px-4 py-10 pb-28 lg:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <Link
            to="/"
            aria-label="All Set Digital Solutions home"
            className="shrink-0"
          >
            <Logo className="!h-14" />
          </Link>

          <div className="w-full text-left lg:w-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Contact
            </p>
            <div className="mt-3 space-y-2.5">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-start gap-3 text-slate-600 transition hover:text-emerald-600"
              >
                <ContactIcon>
                  <Phone className="h-4 w-4 text-emerald-600" strokeWidth={2} />
                </ContactIcon>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center justify-start gap-3 text-slate-600 transition hover:text-emerald-600"
              >
                <ContactIcon>
                  <Mail className="h-4 w-4 text-emerald-600" strokeWidth={2} />
                </ContactIcon>
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="flex w-full flex-col items-start text-sm text-slate-400 lg:w-auto lg:items-end lg:text-right">
            <Link
              to="/privacy-policy"
              className="transition hover:text-emerald-600"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} All Set Digital Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
