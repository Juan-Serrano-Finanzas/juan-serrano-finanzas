import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { ArticlePage } from '@/components/pages/article/article-page'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadArticle } from '@/sanity/loader/loadQuery'
import { toPlainText } from 'next-sanity'

const ArticlePreview = dynamic(
  () => import('@/components/pages/article/article-page-preview')
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: article } = await loadArticle(params.slug)

  return {
    title: article?.title,
    description: article?.summary
      ? toPlainText(article.summary)
      : (await parent).description
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('article')
}

export default async function ArticleSlugRoute({ params }: Props) {
  const initial = await loadArticle(params.slug)

  if (draftMode().isEnabled) {
    return <ArticlePreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <ArticlePage data={initial.data} />
}
