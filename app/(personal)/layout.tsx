import '@/styles/index.css'

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
        <div className='grow py-4 md:py-8'>
          <Suspense>
            <main className='px-4 md:px-16'>{children}</main>
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
