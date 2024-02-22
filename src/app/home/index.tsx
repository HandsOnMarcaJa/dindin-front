'use client'
import Navbar from '@/components/Navbar'
import { useUser } from '@/hooks/useUser'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const navigator = useRouter()
  const { isLoading, user } = useUser()

  if (isLoading) return <p>Loading...</p>

  if (!user) {
    navigator.push('/login')
    return <p>Redirecting...</p>
  }

  return (
    <section className="flex flex-col min-h-screen gap-4 bg-zinc-100">
      <Navbar user={user} />
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
