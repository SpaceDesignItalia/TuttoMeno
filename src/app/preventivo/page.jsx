import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { Header } from './Header'
import { Footer } from './Footer'
import CookieConsent from '../CookieConsent'

export const metadata = {
  title: 'Richiedi preventivo',
}

export default function Register() {
  return (
    <>
      <Header />

      <SlimLayout>
        <h2 className="mt-20 text-xl font-semibold text-gray-900">
          Richiedi un preventivo
        </h2>

        <form
          action="https://formsubmit.co/samuel@tuttomeno.it"
          method="POST"
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        >
          <input type="hidden" name="_subject" value="Nuova richiesta!" />
          <TextField
            label="Nome"
            name="nome"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Cognome"
            name="cognome"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          <TextField
            className="col-span-full"
            label="Oggetto"
            name="oggetto"
            type="text"
            autoComplete="object"
            required
          />
          <div className="col-span-full">
            <label
              htmlFor="comment"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Messaggio
            </label>
            <div className="mt-2">
              <textarea
                rows={4}
                name="messaggio"
                id="comment"
                className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#c30d23] focus:bg-white focus:outline-none focus:ring-[#c30d23] sm:text-sm"
                defaultValue={''}
              />
            </div>
            <fieldset>
              <div className="mt-10 space-y-5">
                <div className="relative flex items-start">
                  <div className="flex h-6 items-center">
                    <input
                      id="privacy-policy"
                      aria-describedby="candidates-description"
                      name="privacy-policy"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-[#c30d23] focus:ring-[#c30d23]"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label
                      htmlFor="privacy-policy"
                      className="font-medium text-gray-900"
                    >
                      Dichiaro di aver preso visione della
                    </label>{' '}
                    <span id="privacy-policy-desc" className="text-gray-500">
                      <a
                        className=" font-bold text-[#c30d23]"
                        href="/privacy-policy"
                      >
                        Privacy Policy{' '}
                      </a>
                      *
                    </span>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="slate"
              className="w-full"
            >
              <span>invia richiesta</span>
            </Button>
          </div>
        </form>
      </SlimLayout>
      <Footer />
      <CookieConsent />
    </>
  )
}
