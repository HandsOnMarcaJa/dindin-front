import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="flex flex-col min-h-screen gap-4 bg-zinc-100">
      <Navbar />
      <div className="w-full mx-auto mt-3 max-w-[1270px] ">
        <Image
          className="w-full object-contain"
          src="/mock.png"
          alt=""
          width={1200}
          height={800}
          quality={100}
          priority
        />
      </div>
    </section>
  )
}
