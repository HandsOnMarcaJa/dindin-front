'use client'

import { api } from '@/services/apiConfig'
import { useUserStore } from '@/store/user'
import { useEffect } from 'react'
import { useCookies } from './useCookies'

export function usePreload() {
  const { loadUser } = useUserStore((state) => ({
    loadUser: state.getUser,
  }))
  const cookies = useCookies()

  const token = cookies.get('@DD:access_token')

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  useEffect(() => {
    loadUser()
  }, [loadUser])
}
