'use client'
import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function OtherInsurances() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-40% 0px',
  })

  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  }

  const features = [
    {
      name: 'Assicurazioni animali',
      description: 'Protezione completa per il tuo fedele compagno.',
      delay: 0.65,
    },
    {
      name: 'Assicurazioni viaggi',
      description: 'Viaggia senza preoccupazioni con la nostra copertura.',
      delay: 0.85,
    },
    {
      name: 'Noleggio a lungo termine',
      description: 'Affitta con fiducia.',
      delay: 1.05,
    },
    {
      name: 'Assistenza legale',
      description: "Affidati a noi per l'assistenza legale di cui hai bisogno.",
      delay: 1.25,
    },
    {
      name: 'TFM + D&O',
      description: 'Proteggi la tua azienda e i tuoi dirigenti.',
      delay: 1.45,
    },
    {
      name: 'Fidussioni e cauzioni',
      description: 'Garantiamo la tua sicurezza finanziaria.',
      delay: 1.65,
    },
    {
      name: 'Rischio agricoltura',
      description: 'Protezione per il tuo patrimonio agricolo.',
      delay: 1.85,
    },
  ]
  return (
    <div ref={ref} className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <motion.h2
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{
                duration: 1.5,
                type: 'spring',
                bounce: 0.25,
              }}
            >
              Altre assicurazioni
            </motion.h2>
            <motion.p
              className="mt-6 text-base leading-7 text-gray-600"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{
                duration: 1.5,
                type: 'spring',
                bounce: 0.25,
                delay: 0.25,
              }}
            >
              Scopri le nostre soluzioni per assicurare ogni aspetto della tua
              vita e attività.
            </motion.p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="relative pl-9"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{
                  duration: 1.5,
                  type: 'spring',
                  bounce: 0.25,
                  delay: feature.delay || 0,
                }}
              >
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute left-0 top-1 h-5 w-5 text-[#db0f27]"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
