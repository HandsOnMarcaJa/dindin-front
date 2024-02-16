'use client'
import { Button } from '@/components/Button'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './Input'

const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleLogin(data: RegisterFormData) {
    // checar senha

    console.log(data)
  }

  return (
    <form
      className="flex flex-col gap-4 bg-gray-100 p-6 px-8 w-full max-w-sm mx-auto shadow-lg"
      onSubmit={handleSubmit(handleLogin)}
    >
      <span className="text-xl text-center text-violet-500 font-medium mt-6">
        Login
      </span>

      <Input
        label="Email"
        error={errors.email?.message}
        {...register('email')}
      />

      <Input
        label="Senha"
        error={errors.password?.message}
        {...register('password')}
      />

      <Button text="Login" type="submit" disabled={!isDirty || isSubmitting} />

      <Link
        href="/register"
        className="text-center mb-6 text-xs text-violet-500 -mt-2"
      >
        Não tem cadastro? Clique aqui!
      </Link>
    </form>
  )
}
