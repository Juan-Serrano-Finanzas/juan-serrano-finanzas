import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { InternationalStockMarketPage } from '@/components/pages/international-stock-market/international-stock-market-page'
import { loadInternationalStockMarketPage } from '@/sanity/loader/loadQuery'
import { Metadata } from 'next'

const InternationalStockMarketPreview = dynamic(
  () =>
    import(
      '@/components/pages/international-stock-market/international-stock-market-page-preview'
    )
)

export const metadata: Metadata = {
  title: 'Bolsa Internacional',
  description:
    'Descubre las últimas noticias, análisis y tendencias del mercado de valores internacional. Mantente informado sobre las principales bolsas del mundo, consejos de inversión y estrategias para maximizar tus rendimientos.'
}

export default async function InternationalStockMarketRoute() {
  const initial = await loadInternationalStockMarketPage()

  if (draftMode().isEnabled) {
    return <InternationalStockMarketPreview initial={initial} />
  }

  if (!initial.data) null

  return <InternationalStockMarketPage data={initial.data} />
}
