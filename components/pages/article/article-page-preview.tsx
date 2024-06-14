'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { articleBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ArticlePayload } from '@/types'

import { ArticlePage } from './article-page'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<ArticlePayload | null>
}

export default function ArticlePagePreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<ArticlePayload | null>(
    articleBySlugQuery,
    params,
    { initial }
  )

  return <ArticlePage data={data!} encodeDataAttribute={encodeDataAttribute} />
}
