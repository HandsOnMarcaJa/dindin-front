import Image from "next/image";
import LogoImage from '../assets/logo.svg'

export function Logo() {
  return (
    <div className="flex gap-2 text-white font-bold text-3xl items-center">
      <Image src={LogoImage} alt="" width={45} height={45} />
      Dindin
    </div>
  )
}
