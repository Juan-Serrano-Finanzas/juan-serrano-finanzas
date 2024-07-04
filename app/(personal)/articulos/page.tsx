import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { ArticlesPage } from '@/components/pages/articles/articles-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadArticlesPage } from '@/sanity/loader/loadQuery'
import { Metadata } from 'next'

const ArticlesPreview = dynamic(
  () => import('@/components/pages/articles/articles-page-preview')
)

export const metadata: Metadata = {
  title: 'Artículos',
  description:
    'Explora los artículos de Juan Serrano, experto en economía y finanzas. Lee análisis detallados, consejos de inversión y las últimas tendencias económicas para mejorar tu conocimiento financiero.'
}

export default async function ArticlesRoute() {
  const initial = await loadArticlesPage()

  if (draftMode().isEnabled) {
    return <ArticlesPreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        No has creado artículos todavía,{' '}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          crea uno ahora
        </Link>
        !
      </div>
    )
  }

  return <ArticlesPage data={initial.data} />
}
