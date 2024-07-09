import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import type { ArticlesPagePayload } from '@/types'
import { ArticleCard } from './article-card'
import PageTagline from '@/components/global/page-tagline'

export interface ArticlesPageProps {
  data: ArticlesPagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const ArticlesPage = ({
  data,
  encodeDataAttribute
}: ArticlesPageProps) => {
  const { articles = [] } = data ?? {}
  return (
    <MaxWidthWrapper>
      <div>
        <PageHeading>{`Artículos`}</PageHeading>
        <PageTagline>{`Descubre análisis profundos, consejos expertos y las últimas tendencias en economía, inversiones y mercados. Mantente informado y toma decisiones inteligentes para tu futuro financiero.`}</PageTagline>
      </div>

      {articles && articles.length > 0 && (
        <section className='mt-16 max-w-2xl'>
          <ul role='list' className='mt-8 flex flex-col gap-y-8'>
            {articles?.map(article => (
              <ArticleCard
                key={article.id}
                title={article.title}
                slug={article.slug}
                date={article.date}
                summary={article.summary}
              />
            ))}
          </ul>
        </section>
      )}
    </MaxWidthWrapper>
  )
}
