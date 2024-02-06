import Image from 'next/image'
import logoImage from '@/images/logos/logo.png'

export function Logo(props) {
  return (
    <div>
      <Image src={logoImage} alt="logo" className="h-14 w-14" />
    </div>
  )
}
