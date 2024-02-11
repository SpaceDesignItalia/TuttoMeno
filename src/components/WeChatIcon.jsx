import Image from 'next/image'
import logoImage from '@/images/assicurazioni/WeChaticon.png'

export function WeChatIcon(props) {
  return (
    <div className="flex flex-row items-center gap-2 text-white">
      <Image
        src="https://tuttomeno.com/media/WeChaticon.7345e847.png"
        alt="logo"
        className=" h-8 w-8"
      />
      WeChat
    </div>
  )
}
