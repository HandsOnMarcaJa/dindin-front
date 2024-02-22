'use client'
import { LoginFormData } from '@/components/LoginForm'
import { RegisterFormData } from '@/components/RegisterForm'
import { api } from '@/services/apiConfig'
import { create } from 'zustand'

export interface User {
  name: string
  email: string
  id: string
}

interface UseUserStore {
  user: User | null
  isLoading: boolean

  getUser: () => Promise<void>
  logout: () => void
  login: (data: LoginFormData) => Promise<string>
  register: (data: RegisterFormData) => Promise<boolean>
  update: (data: RegisterFormData) => Promise<boolean>
  delete: () => Promise<void>
}

export const useUserStore = create<UseUserStore>((set) => {
  return {
    user: null,
    isLoading: true,

    getUser: async () => {
      const response = await api.get('/user')

      if (response.data?.user) {
        set({
          user: response.data.user,
        })
      }

      set({
        isLoading: false,
      })
    },

    logout: () => {
      set({
        user: null,
      })
    },

    login: async (data: LoginFormData): Promise<string> => {
      const response = await api.post('/user/login', data)
      const access_token = response.data?.access_token

      if (access_token) {
        api.defaults.headers.Authorization = `Bearer ${access_token}`

        return access_token
      }

      alert(`Error ao fazer login: ${response.data?.message}`)
      return access_token
    },

    register: async (data: RegisterFormData): Promise<boolean> => {
      const response = await api.post('/user', data)

      if (response.status === 201) {
        return true
      }

      alert(`Error ao se registrar: ${response.data?.message}`)
      return false
    },

    update: async (data: RegisterFormData): Promise<boolean> => {
      const response = await api.patch('/user', data)

      if (response.status === 200) {
        return true
      }

      alert('Error ao atualizar perfil')
      return false
    },

    delete: async (): Promise<void> => {
      await api.delete('/user')
      set({
        user: null,
      })
    },
  }
})
