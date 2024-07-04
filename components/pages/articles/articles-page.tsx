import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import type { ArticlesPagePayload } from '@/types'
import { ArticleCard } from './article-card'

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
      <PageHeading>{`Artículos`}</PageHeading>

      <section className='mt-8'>
        <div className='prose-sm md:prose max-w-prose'>
          <p>{`Aquí presentaremos escritos sobre economía y finanzas`}</p>
        </div>
      </section>

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
