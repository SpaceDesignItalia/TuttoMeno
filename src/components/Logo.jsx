'use client'

import Image from 'next/image'
import logoImage from '@/images/assicurazioni/qrwechat.png'

export function Logo() {
  return (
    <div>
      <Image src={logoImage} alt="logo" className=" h-40 w-40 rounded-lg" />
    </div>
  )
}
