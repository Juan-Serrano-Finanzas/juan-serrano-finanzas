import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { InternationalStockMarketPage } from '@/components/pages/international-stock-market/international-stock-market-page'
import { loadInternationalStockMarketPage } from '@/sanity/loader/loadQuery'

const InternationalStockMarketPreview = dynamic(
  () =>
    import(
      '@/components/pages/international-stock-market/international-stock-market-page-preview'
    )
)

export default async function InternationalStockMarketRoute() {
  const initial = await loadInternationalStockMarketPage()

  if (draftMode().isEnabled) {
    return <InternationalStockMarketPreview initial={initial} />
  }

  if (!initial.data) null

  return <InternationalStockMarketPage data={initial.data} />
}
