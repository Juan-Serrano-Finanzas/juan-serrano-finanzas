import '@/styles/index.css'

import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { ReactNode, Suspense } from 'react'

import { Navbar } from '@/components/global/navbar'
import { Footer } from '@/components/global/navbar/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const LiveVisualEditing = dynamic(
  () => import('@/sanity/loader/LiveVisualEditing')
)

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `%s | Juan Serrano Finanzas`,
      default: 'Juan Serrano Finanzas'
    },
    openGraph: {
      title: 'Juan Serrano Finanzas',
      description: 'Economía y finanzas.',
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
    description: 'Economía y Finanzas',
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
      description: 'Economía  y finanzas.',
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

export default async function IndexRoute({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <div className='flex min-h-screen flex-col bg-white text-black'>
        <Suspense>
          <Navbar />
        </Suspense>
        <div className='my-10 grow px-4 md:my-20 md:px-16 lg:px-32'>
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </div>
        <Suspense>
          <Footer />
        </Suspense>
      </div>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  )
}
