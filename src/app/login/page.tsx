import { Background } from '@/components/Background'
import { Logo } from '@/components/Logo'
import { LoginForm } from '../../components/LoginForm'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <main className="flex relative h-screen w-full flex-row">
      <Background />

      <div className="w-full h-full flex flex-col ml-24 pt-10">
        <Logo />
        <div className="w-full h-full max-w-[1270px] mx-auto pt-10 flex flex-col justify-center items-start">
          <h1 className="font-bold text-5xl mb-8">
            Controle suas <span className="text-violet-500">finanças</span>, sem
            planilha chata.
          </h1>
          <p className="text-3xl font-normal mb-8">
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você
            tem tudo num único lugar e em um clique de distância.
          </p>
          <Link
            href="/register"
            className="bg-violet-500 text-white px-3 py-1.5 rounded"
          >
            Cadastre-se
          </Link>
        </div>
      </div>
      <div className="w-full h-full max-w-[1270px] mx-auto pt-10 flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </main>
  )
}
