import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { InternationalStockMarketPage } from '@/components/pages/international-stock-market/international-stock-market-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadInternationalStockMarketPage } from '@/sanity/loader/loadQuery'

const InternationalStockMarketPreview = dynamic(
  () => import('@/components/pages/home/home-page-preview')
)

export default async function InternationalStockMarketRoute() {
  const initial = await loadInternationalStockMarketPage()

  if (draftMode().isEnabled) {
    return <InternationalStockMarketPreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          create one now
        </Link>
        !
      </div>
    )
  }

  return <InternationalStockMarketPage data={initial.data} />
}
