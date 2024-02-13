import Image from 'next/image'

import backgroundImage from '@/images/background-auth.jpg'

export function SlimLayout({ children }) {
  return (
    <>
      <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
        <main className="mx-auto w-full max-w-lg p-10">{children}</main>
      </div>
    </>
  )
}
