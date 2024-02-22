import { Background } from '@/components/Background'
import { Logo } from '@/components/Logo'
import { RegisterForm } from '@/components/RegisterForm'

export default function RegisterPage() {
  return (
    <main className="flex relative h-screen w-full flex-col">
      <Background />

      <div className="w-full h-full max-w-[1270px] mx-auto pt-10 flex flex-col">
        <Logo />
        <RegisterForm
          formName="Cadastro"
          buttonName="Cadastre-se"
          isRegistering={true}
        />
      </div>
    </main>
  )
}
