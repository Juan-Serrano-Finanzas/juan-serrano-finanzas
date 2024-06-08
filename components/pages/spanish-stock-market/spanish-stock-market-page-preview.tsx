'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { spanishStockMarketPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { SpanishStockMarketPagePayload } from '@/types'

import { SpanishStockMarketPage } from './spanish-stock-market-page'

type Props = {
  initial: QueryResponseInitial<SpanishStockMarketPagePayload | null>
}

export default function HomePagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } =
    useQuery<SpanishStockMarketPagePayload | null>(
      spanishStockMarketPageQuery,
      {},
      { initial }
    )

  if (!data) {
    return (
      <div className='text-center'>
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return (
    <SpanishStockMarketPage
      data={data}
      encodeDataAttribute={encodeDataAttribute}
    />
  )
}
