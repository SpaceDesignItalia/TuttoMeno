'use client'

import Image from 'next/image'
import logoImage from '@/images/assicurazioni/QRWeChat.png'

export function Logo(props) {
  return (
    <div>
      <Image src={logoImage} alt="logo" className=" h-40 w-40 rounded-lg" />
    </div>
  )
}
