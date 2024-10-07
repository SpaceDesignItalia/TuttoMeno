import Link from 'next/link'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { WeChatIcon } from '@/components/WeChatIcon'

export function Footer() {
  const date = new Date().getFullYear()
  const navigation = {
    solutions: [
      { name: 'Home', href: '/' },
      { name: 'Assicurazioni Mezzi', href: './#mezzi' },
      { name: 'Assicurazioni personali', href: './#personali' },
      { name: 'Richiedi preventivo', href: './#cta' },
    ],
    privacy: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ],
  }
  return (
    <footer className="bg-[#111]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex flex-col gap-5">
              <WeChatIcon />
              <Logo />
            </div>
            <div>
              <ul className="flex flex-col gap-5">
                <li className="flex flex-row gap-2 text-white">
                  <EnvelopeIcon className="h-5 w-5" />
                  info@tuttomeno.it
                </li>
                <li className="flex flex-row items-center gap-2 text-white">
                  <PhoneIcon className="h-5 w-5" />
                  +39 3513387008
                </li>
                <li className="flex flex-row items-center gap-2 text-white">
                  <MapPinIcon className="h-5 w-5" />
                  Via XX Settembre, 126 | 50129 Firenze
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Sito
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Privacy Policy
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.privacy.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            N. Iscrizione RUI: E000743697 - Sezione E - Intermediario
            assicurativo
            <br />
            Nominativo: Malluzzo Samuel - Data iscrizione: 18/01/2024
            <br />
            AUTORITÀ COMPETENTE ALLA VIGILANZA SULL&apos;ATTIVITA :
            <br />
            IVASS VIA DEL QUIRINALE 21 00187 ROMA.
            <br />
            <br />
            <a
              href="https://servizi.ivass.it/RuirPubblica/Search.faces"
              className="text-xs leading-5 text-gray-400 underline"
            >
              <span>Verifica iscrizione IVASS</span>
            </a>
            <br />
            <br />
            &copy; {date} TuttoMeno di Malluzzo Samuel, P.Iva: 073326404865,
            PEC: tuttomeno@pec.it
          </p>
        </div>
      </div>
    </footer>
  )
}
