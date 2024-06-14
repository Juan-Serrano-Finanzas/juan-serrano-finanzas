import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { SpanishStockMarketPage } from '@/components/pages/spanish-stock-market/spanish-stock-market-page'
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

  if (!initial.data) null

  return <SpanishStockMarketPage data={initial.data} />
}
