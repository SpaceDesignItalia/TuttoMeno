import Image from 'next/image'

export function LogoNavbar(props) {
  return (
    <div>
      <Image
        src="https://tuttomeno.com/media/logo.4e3bc220.png"
        alt="logo"
        className=" h-16 w-16 rounded-lg"
      />
    </div>
  )
}
