'use client'

import { useUserStore } from '@/store/user'

export function useUser() {
  const {
    user,
    isLoading,
    logout,
    login,
    getUser,
    register,
    update,
    deleteUser,
  } = useUserStore((state) => ({
    user: state.user,
    isLoading: state.isLoading,
    logout: state.logout,
    login: state.login,
    getUser: state.getUser,
    register: state.register,
    update: state.update,
    deleteUser: state.delete,
  }))

  return {
    isLoading,
    user,
    logout,
    login,
    getUser,
    register,
    update,
    deleteUser,
  }
}
