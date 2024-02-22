'use client'
import { useMemo } from 'react'
import { parseCookies, setCookie } from 'nookies'

export function useLocalStorage() {
  const { get, set, remove } = useMemo(() => {
    function get(key: string) {
      const ck = parseCookies()
      return ck[key] ?? ''
    }

    function set(key: string, value: string) {
      return setCookie(null, key, value, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
    }

    function remove(key: string) {
      return setCookie(null, key, '', {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
    }

    return { get, set, remove }
  }, [])

  return { get, set, remove }
}
