import Image from 'next/image'
import logoImage from '@/images/assicurazioni/QRWeChat.png'

export function Logo(props) {
  return (
    <div>
      <img
        src="https://tuttomeno.com/media/QRWeChat.9844a66c.png"
        alt="logo"
        className=" h-40 w-40 rounded-lg"
      />
    </div>
  )
}
