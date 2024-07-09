import './globals.css'

import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

const neueWorld = localFont({
  src: [
    {
      path: '../public/fonts/neue-world/neue_world-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/neue-world/neue_world-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/neue-world/neue_world-bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-neue-world'
})

const untitledSans = localFont({
  src: [
    {
      path: '../public/fonts/untitled-sans/untitled_sans-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/untitled-sans/untitled_sans-regular_italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/untitled-sans/untitled_sans-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/untitled-sans/untitled_sans-medium_italic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../public/fonts/untitled-sans/untitled_sans-bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-untitled-sans'
})

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='es'
      className={cn('font-sans', neueWorld.variable, untitledSans.variable)}
    >
      <body className='overflow-hidden'>{children}</body>
    </html>
  )
}
