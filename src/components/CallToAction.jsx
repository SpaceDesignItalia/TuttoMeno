'use client'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export function CallToAction() {
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
      id="cta"
      className="relative overflow-hidden  bg-gradient-to-tl from-[#c30d23] to-red-900 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <motion.h2
            className="font-display text-3xl tracking-tight text-white sm:text-4xl"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{
              duration: 1.5,
              type: 'spring',
              bounce: 0.25,
            }}
          >
            Proteggi il tuo futuro
          </motion.h2>
          <motion.p
            className="mt-4 text-lg tracking-tight text-white"
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
            Chiedi ora un preventivo gratuito!
          </motion.p>
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{
              duration: 1.5,
              type: 'spring',
              bounce: 0.25,
              delay: 0.45,
            }}
          >
            <Button href="/preventivo" color="white" className="mt-10">
              Richiedi ora un preventivo
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
