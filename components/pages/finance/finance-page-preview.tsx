'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { financePageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { FinancePagePayload } from '@/types'

import { FinancePage } from './finance-page'

type Props = {
  initial: QueryResponseInitial<FinancePagePayload | null>
}

export default function HomePagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<FinancePagePayload | null>(
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

  return <FinancePage data={data} encodeDataAttribute={encodeDataAttribute} />
}
