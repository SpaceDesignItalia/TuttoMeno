import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

export default function OtherInsurances() {
  const features = [
    {
      name: 'Assicurazioni animali',
      description: 'Protezione completa per il tuo fedele compagno.',
    },
    {
      name: 'Assicurazioni viaggi',
      description: 'Viaggia senza preoccupazioni con la nostra copertura.',
    },
    {
      name: 'Noleggio a lungo termine',
      description: 'Affitta con fiducia.',
    },
    {
      name: 'Assistenza legale',
      description: "Affidati a noi per l'assistenza legale di cui hai bisogno.",
    },
    {
      name: 'TFM + D&O',
      description: 'Proteggi la tua azienda e i tuoi dirigenti.',
    },
    {
      name: 'Fidussioni e cauzioni',
      description: 'Garantiamo la tua sicurezza finanziaria.',
    },
    {
      name: 'Rischio agricoltura',
      description: 'Protezione per il tuo patrimonio agricolo.',
    },
  ]
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Altre assicurazioni
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Scopri le nostre soluzioni per assicurare ogni aspetto della tua
              vita e attività.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
