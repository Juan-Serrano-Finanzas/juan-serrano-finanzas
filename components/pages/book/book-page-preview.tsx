'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { bookBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { BookPayload } from '@/types'

import { BookPage } from './book-page'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<BookPayload | null>
}

export default function BookPagePreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<BookPayload | null>(
    bookBySlugQuery,
    params,
    { initial }
  )

  return <BookPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
