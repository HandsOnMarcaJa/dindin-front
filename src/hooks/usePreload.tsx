'use client'

import { api } from '@/services/apiConfig'
import { useUserStore } from '@/store/user'
import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function usePreload() {
  const { loadUser } = useUserStore((state) => ({
    loadUser: state.getUser,
  }))
  const localStorage = useLocalStorage()

  const token = localStorage.get('@DD:access_token')

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  useEffect(() => {
    loadUser()
  }, [loadUser])
}
