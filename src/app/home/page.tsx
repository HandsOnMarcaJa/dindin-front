import Navbar from '@/components/Navbar'

export default function HomePage() {
  return (
    <div className="w-full h-full max-h-full max-w-[1270px] bg-zinc-100 ">
      <Navbar />
      <h1 className="text-black">Aqui vão as transações</h1>
    </div>
  )
}
