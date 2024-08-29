import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'

import '@/app/globals.css'

import { cn } from '@/lib/utils'

const editorialOld = localFont({
  src: [
    {
      path: '../public/fonts/editorial-old/ultralight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../public/fonts/editorial-old/ultralight-italic.woff2',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../public/fonts/editorial-old/regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/editorial-old/italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/editorial-old/ultrabold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../public/fonts/editorial-old/ultrabold-italic.woff2',
      weight: '800',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-editorial-old'
})

const diatype = localFont({
  src: '../public/fonts/diatype/variable.woff2',
  display: 'swap',
  variable: '--font-diatype'
})

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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `%s | Juan Serrano Finanzas`,
      default: 'Juan Serrano Finanzas'
    },
    openGraph: {
      title: 'Juan Serrano Finanzas',
      description:
        'Web divulgativa del reconocido economista Juan Serrano B. García. En ella encontraras numerosos escritos y recursos informativos centrados alrededor del mundo de las finanzas y los mercados.',
      url: 'https://juanserranofinanzas.com',
      siteName: 'Juan Serrano Finanzas',
      images: [
        {
          url: 'https://juanserranofinanzas.com/images/og.png',
          width: 1200,
          height: 630
        }
      ],
      locale: 'es-ES',
      type: 'website'
    },
    description:
      'Web divulgativa del reconocido economista Juan Serrano B. García. En ella encontraras numerosos escritos y recursos informativos centrados alrededor del mundo de las finanzas y los mercados.',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    twitter: {
      title: 'Juan Serrano Finanzas',
      site: 'Juan Serrano Finanzas',
      card: 'summary_large_image',
      description:
        'Web divulgativa del reconocido economista Juan Serrano B. García. En ella encontraras numerosos escritos y recursos informativos centrados alrededor del mundo de las finanzas y los mercados.',
      images: [
        {
          url: 'https://juanserranofinanzas.com/images/og.png',
          alt: 'Juan Serrano Finanzas',
          width: 1200,
          height: 630
        }
      ]
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon/apple-icon.png'
    }
  }
}

export const viewport: Viewport = {
  themeColor: '#000'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='es'
      className={cn(
        'font-sans',
        neueWorld.variable,
        untitledSans.variable,
        diatype.variable,
        editorialOld.variable
      )}
    >
      <body className='overflow-hidden'>{children}</body>
    </html>
  )
}
