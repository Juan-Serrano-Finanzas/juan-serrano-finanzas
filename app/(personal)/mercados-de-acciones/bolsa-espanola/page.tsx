import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { SpanishStockMarketPage } from '@/components/pages/spanish-stock-market/spanish-stock-market-page'
import { loadSpanishStockMarketPage } from '@/sanity/loader/loadQuery'
import { Metadata } from 'next'

const SpanishStockMarketPagePreview = dynamic(
  () =>
    import(
      '@/components/pages/spanish-stock-market/spanish-stock-market-page-preview'
    )
)

export const metadata: Metadata = {
  title: 'Bolsa Española',
  description:
    'Mantente informado con las últimas noticias, análisis y tendencias de la bolsa española. Información actualizada sobre el IBEX 35 y otros índices, consejos de inversión y estrategias para optimizar tus rendimientos.'
}

export default async function SpanishStockMarketRoute() {
  const initial = await loadSpanishStockMarketPage()

  if (draftMode().isEnabled) {
    return <SpanishStockMarketPagePreview initial={initial} />
  }

  if (!initial.data) null

  return <SpanishStockMarketPage data={initial.data} />
}
