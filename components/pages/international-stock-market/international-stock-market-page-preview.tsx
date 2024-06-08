'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { financePageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { InternationalStockMarketPagePayload } from '@/types'

import { InternationalStockMarketPage } from './international-stock-market-page'

type Props = {
  initial: QueryResponseInitial<InternationalStockMarketPagePayload | null>
}

export default function InternationalStockMarketPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } =
    useQuery<InternationalStockMarketPagePayload | null>(
      financePageQuery,
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
    <InternationalStockMarketPage
      data={data}
      encodeDataAttribute={encodeDataAttribute}
    />
  )
}
