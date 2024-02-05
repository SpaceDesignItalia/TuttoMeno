'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import barcaPhoto from '@/images/assicurazioni/barca.png'
import autoPhoto from '@/images/assicurazioni/auto.png'
import motoPhoto from '@/images/assicurazioni/moto.png'
import autocarroPhoto from '@/images/assicurazioni/autocarro.png'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Assicurazione auto',
    description:
      'Proteggi il tuo veicolo con la nostra polizza completa e conveniente, adatta alle tue esigenze di guida.',
    image: autoPhoto,
    delay: 0.45,
  },
  {
    title: 'Assicurazione moto',
    description:
      'Affidati alla nostra copertura su misura per goderti il piacere della guida senza preoccupazioni.',
    image: motoPhoto,
    delay: 0.65,
  },
  {
    title: 'Assicurazione autocarri',
    description:
      'Assicura il tuo business con la nostra polizza robusta, pensata per la tua flotta di autocarri.',
    image: autocarroPhoto,
    delay: 0.85,
  },
  {
    title: 'Assicurazione natanti e corpi',
    description:
      'Naviga tranquillo sapendo di essere protetto dal mare alla terraferma con la nostra copertura versatile.',
    image: barcaPhoto,
    delay: 1.05,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-40% 0px',
  })

  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      ref={ref}
      id="mezzi"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <motion.h2
            className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{
              duration: 1.5,
              type: 'spring',
              bounce: 0.25,
            }}
          >
            Proteggi ogni tuo mezzo con la nostra copertura completa
          </motion.h2>
          <motion.p
            className="mt-6 text-lg tracking-tight text-blue-100"
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
            Assicura tranquillità su tutti i tuoi mezzi con la nostra copertura
            affidabile e personalizzata
          </motion.p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:pb-0 lg:col-span-5 lg:overflow-visible">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
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
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <motion.div
                      className="mt-24 w-full overflow-hidden rounded-xl sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      variants={variants}
                      transition={{
                        duration: 1.5,
                        type: 'spring',
                        bounce: 0.25,
                        delay: 0.75,
                      }}
                    >
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </motion.div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
