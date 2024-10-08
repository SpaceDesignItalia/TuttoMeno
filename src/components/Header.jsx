'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { PhoneIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LogoNavbar } from '@/components/LogoNavbar'
import { NavLink } from '@/components/NavLink'
import Image from 'next/image'
import logoImage from '@/images/assicurazioni/logo.png'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#">Home</MobileNavLink>
            <MobileNavLink href="#mezzi">Assicurazione mezzi</MobileNavLink>
            <MobileNavLink href="#personali">
              Assicurazioni personali
            </MobileNavLink>
            <MobileNavLink href="#cta">Richiedi preventivo</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" className="hidden md:block">
              <LogoNavbar />
            </Link>
            <div className="hidden lg:flex lg:gap-x-6">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#mezzi">Assicurazione mezzi</NavLink>
              <NavLink href="#personali">Assicurazione personali</NavLink>
              <NavLink href="#cta">Richiedi preventivo</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button
              href="tel:+393513387008"
              className="hidden bg-[#c30d23] hover:bg-[#db0f27] md:flex"
            >
              <span>Chiamaci: 351 338 7008</span>
            </Button>

            <Button
              href="tel:3513387008"
              className="flex bg-[#c30d23] hover:bg-[#db0f27] md:hidden"
            >
              <span className="flex flex-row items-center justify-center gap-2">
                <PhoneIcon className=" h-4 w-4" />
                Chiamaci
              </span>
            </Button>
            <div className="-mr-1 lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
