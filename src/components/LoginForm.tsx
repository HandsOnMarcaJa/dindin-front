'use client'
import { Button } from '@/components/Button'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './Input'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'

const loginFormSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(8),
})

export type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const { isLoading, user, login, getUser } = useUser()
  const navigator = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(data: LoginFormData) {
    const success = await login(data)

    if (success) {
      await getUser()
      navigator.push('/')
    }
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (user) {
    navigator.push('/')
    return (
      <p className="absolute inset-0 flex items-center justify-center bg-gray-100">
        Redirecting...
      </p>
    )
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
