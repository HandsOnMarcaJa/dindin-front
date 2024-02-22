'use client'
import { Button } from '@/components/Button'
import { Input } from './Input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { twMerge } from 'tailwind-merge'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'

const registerFormSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
})

export type RegisterFormData = z.infer<typeof registerFormSchema>

export interface RegisterFormProps {
  formName: string
  buttonName: string
  onClose?: () => void
  isRegistering: boolean
  className?: string
}

export function RegisterForm({
  formName,
  buttonName,
  isRegistering,
  onClose,
  className,
}: RegisterFormProps) {
  const { isLoading, user, register: registerUser, getUser, update } = useUser()

  const navigator = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    setError,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: RegisterFormData) {
    if (data.password !== data.confirmPassword) {
      setError('confirmPassword', { message: 'As senhas devem ser iguais!' })
      setError('password', { message: 'As senhas devem ser iguais!' })

      return
    }

    if (isRegistering) {
      const success = await registerUser(data)

      if (success) navigator.push('/login')
    } else if (onClose) {
      const success = await update(data)

      if (success) {
        getUser()
        onClose()
      }
    }
  }

  if (isLoading) {
    return (
      <p className="absolute inset-0 flex items-center justify-center bg-gray-100">
        Loading...
      </p>
    )
  }

  if (user && isRegistering) {
    navigator.push('/login')

    return (
      <p className="absolute inset-0 flex items-center justify-center bg-gray-100">
        Redirecting...
      </p>
    )
  }

  return (
    <form
      className={twMerge(
        'flex flex-col gap-4 bg-gray-100 p-6 px-8 w-full max-w-sm mx-auto shadow-lg',
        className,
      )}
      onSubmit={handleSubmit(handleRegister)}
    >
      <span className="text-xl text-center text-violet-500 font-bold mt-6">
        {formName}
      </span>

      <Input label="Nome" error={errors.name?.message} {...register('name')} />

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

      <Input
        label="Confirmação de senha"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      <Button
        text={buttonName}
        type="submit"
        disabled={!isDirty || isSubmitting}
      />

      {isRegistering && (
        <Link
          className="text-center mb-6 text-xs text-violet-500 -mt-2"
          href="/login"
        >
          Já tem cadastro? Clique aqui!
        </Link>
      )}
    </form>
  )
}
