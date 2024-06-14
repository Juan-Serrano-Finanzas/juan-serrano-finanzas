'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { articlesPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { ArticlesPagePayload } from '@/types'

import { ArticlesPage } from './articles-page'

type Props = {
  initial: QueryResponseInitial<ArticlesPagePayload | null>
}

export default function ArticlesPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<ArticlesPagePayload | null>(
    articlesPageQuery,
    {},
    { initial }
  )

  if (!data) {
    return (
      <div className='text-center'>
        Por favor, empieza a editar tus artículos para ver un preview!
      </div>
    )
  }

  return <ArticlesPage data={data} encodeDataAttribute={encodeDataAttribute} />
}
