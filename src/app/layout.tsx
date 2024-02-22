import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { PreloadContext } from '@/components/Preload'

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700', '500'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <PreloadContext>{children}</PreloadContext>
      </body>
    </html>
  )
}
