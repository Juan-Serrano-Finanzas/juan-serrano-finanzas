import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { SpanishStockMarketPage } from '@/components/pages/spanish-stock-market/spanish-stock-market-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadSpanishStockMarketPage } from '@/sanity/loader/loadQuery'

const SpanishStockMarketPagePreview = dynamic(
  () =>
    import(
      '@/components/pages/spanish-stock-market/spanish-stock-market-page-preview'
    )
)

export default async function SpanishStockMarketRoute() {
  const initial = await loadSpanishStockMarketPage()

  if (draftMode().isEnabled) {
    return <SpanishStockMarketPagePreview initial={initial} />
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

  return <SpanishStockMarketPage data={initial.data} />
}
