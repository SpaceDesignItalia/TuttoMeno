import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { Header } from './Header'
import { Footer } from './Footer'

export const metadata = {
  title: 'Richiedi preventivo',
}

export default function Register() {
  return (
    <>
      <Header />

      <SlimLayout>
        <div className="flex">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
        <h2 className="mt-20 text-lg font-semibold text-gray-900">
          Richiedi un preventivo
        </h2>

        <form
          action="https://formsubmit.co/samuel@tuttomeno.it"
          method="POST"
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        >
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
                className="focus:ring-primary block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
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
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
                        className=" font-bold text-blue-600"
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
              color="blue"
              className="w-full"
            >
              <span>invia richiesta</span>
            </Button>
          </div>
        </form>
      </SlimLayout>
      <Footer />
    </>
  )
}
