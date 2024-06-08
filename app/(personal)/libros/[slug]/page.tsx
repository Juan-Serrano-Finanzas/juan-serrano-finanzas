import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { BookPage } from '@/components/pages/book/book-page'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadBook } from '@/sanity/loader/loadQuery'

const BookPreview = dynamic(
  () => import('@/components/pages/book/book-page-preview')
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: book } = await loadBook(params.slug)

  return {
    title: book?.title
    // // description: page?.overview
    // //   ? toPlainText(page.overview)
    // //   : (await parent).description
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('book')
}

export default async function BookSlugRoute({ params }: Props) {
  const initial = await loadBook(params.slug)

  if (draftMode().isEnabled) {
    return <BookPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <BookPage data={initial.data} />
}
