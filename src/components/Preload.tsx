'use client'

import { usePreload } from '@/hooks/usePreload'

interface PreloadContextProps {
  children: React.ReactNode
}

export function PreloadContext({ children }: PreloadContextProps) {
  usePreload()
  return children
}
