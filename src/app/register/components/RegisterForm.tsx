"use client"
import { Button } from "@/components/Button";
import { Input } from "../../../components/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerFormSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setError
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema)
  })

  async function handleRegister(data: RegisterFormData) {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { message: "As senhas devem ser iguais!" })
      setError('password', { message: "As senhas devem ser iguais!" })
      return
    }

    console.log(data)
  }

  return (
    <form
      className="flex flex-col gap-4 bg-gray-100 p-6 px-8 w-full max-w-sm mx-auto shadow-lg"
      onSubmit={handleSubmit(handleRegister)}
    >
      <span className="text-xl text-center text-violet-500 font-bold mt-6">Cadastre-se</span>

      <Input
        label="Nome"
        error={errors.name?.message}
        {...register("name")}
      />

      <Input
        label="Email"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Senha"
        error={errors.password?.message}
        {...register("password")}
      />

      <Input
        label="Confirmação de senha"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />

      <Button text="Cadastrar" type="submit" disabled={!isDirty || isSubmitting} />

      <Link className="text-center mb-6 text-xs text-violet-500 -mt-2" href="/login">
        Já tem cadastro? Clique aqui!
      </Link>
    </form>
  )
}
