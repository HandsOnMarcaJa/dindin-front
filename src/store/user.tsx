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
  login: (data: LoginFormData) => Promise<boolean>
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

    login: async (data: LoginFormData): Promise<boolean> => {
      const response = await api.post('/user/login', data)
      const access_token = response.data?.access_token

      if (access_token) {
        localStorage.setItem('@DD:access_token', access_token)
        api.defaults.headers.Authorization = `Bearer ${access_token}`

        return true
      }

      console.log(response)

      alert(`Error ao fazer login: ${response.data?.message}`)
      return false
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
