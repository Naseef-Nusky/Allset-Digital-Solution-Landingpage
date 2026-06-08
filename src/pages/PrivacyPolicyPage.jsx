import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { EMAIL, PHONE_DISPLAY, PHONE_NUMBER } from '../data/content'

export default function PrivacyPolicyPage() {
  return (
    <article className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition hover:text-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <h1 className="font-heading text-3xl font-bold text-[#002147] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 13 May 2026</p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-slate-700">
          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              1. Who we are
            </h2>
            <p className="mt-3">
              This website is operated by All Set Digital Solutions (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;), a web design and digital services
              provider based in the United Kingdom. We are the &quot;data
              controller&quot; of any personal information you share with us
              through this website, by phone, email or any of our forms.
            </p>
            <p className="mt-3">
              Contact:{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-emerald-600 hover:text-emerald-700"
              >
                {EMAIL}
              </a>{' '}
              · Phone:{' '}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="font-medium text-emerald-600 hover:text-emerald-700"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              2. The information we collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Contact details you give us via our forms, email or phone (name,
                business name, email address, phone number, project details).
              </li>
              <li>
                Technical data such as IP address, browser type, device
                information and pages visited, collected automatically.
              </li>
              <li>
                Cookies and similar technologies used for essential site
                functions and, where consented, basic analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              3. How we use your information
            </h2>
            <p className="mt-3">We use your information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to enquiries and provide quotes or consultations.</li>
              <li>
                Deliver the web design, SEO and related services you have
                requested.
              </li>
              <li>Send service updates, invoices and project communications.</li>
              <li>Improve our website, services and customer experience.</li>
              <li>Comply with our legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              4. Lawful basis for processing
            </h2>
            <p className="mt-3">
              Under the UK GDPR and the Data Protection Act 2018, we rely on the
              following lawful bases:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Consent, when you submit a contact form or opt in to
                communications.
              </li>
              <li>Contract, to deliver services you have engaged us for.</li>
              <li>
                Legitimate interests, to run, improve and protect our business.
              </li>
              <li>
                Legal obligation, to meet tax, accounting and regulatory duties.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              5. Sharing your information
            </h2>
            <p className="mt-3">
              We do not sell your personal information. We only share it with
              trusted service providers who help us run our business (for example
              email, hosting, analytics and accounting tools), and with
              authorities where required by law. Where data leaves the UK, we use
              providers that offer appropriate safeguards in line with UK GDPR.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              6. How long we keep it
            </h2>
            <p className="mt-3">
              We keep enquiry data for up to 24 months from your last contact,
              and client records for up to 7 years to meet UK accounting and tax
              requirements. After that, your data is securely deleted or
              anonymised.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              7. Your rights
            </h2>
            <p className="mt-3">Under UK GDPR you have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>
                Request erasure of your data (the &quot;right to be forgotten&quot;).
              </li>
              <li>Restrict or object to processing.</li>
              <li>Request data portability.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="font-medium text-emerald-600 hover:text-emerald-700"
              >
                {EMAIL}
              </a>
              . You also have the right to complain to the UK Information
              Commissioner&apos;s Office (ICO) at{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-600 hover:text-emerald-700"
              >
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              8. Cookies
            </h2>
            <p className="mt-3">
              We use a small number of cookies to make this site work and to
              understand how visitors use it. You can control cookies through your
              browser settings. Disabling cookies may affect how the site
              functions.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              9. Security
            </h2>
            <p className="mt-3">
              We use appropriate technical and organisational measures to protect
              your information. However, no online transmission is 100% secure and
              we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-[#002147]">
              10. Changes to this policy
            </h2>
            <p className="mt-3">
              We may update this policy from time to time. The latest version will
              always be available on this page with the &quot;last updated&quot;
              date.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
