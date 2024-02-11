import Image from 'next/image'
import logoImage from '@/images/logos/logo.png'

export function LogoNavbar(props) {
  return (
    <div>
      <Image src={logoImage} alt="logo" className=" h-16 w-16 rounded-lg" />
    </div>
  )
}
