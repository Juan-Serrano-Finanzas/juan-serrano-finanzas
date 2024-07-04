import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { PortableTextBlock } from 'next-sanity'
import { es } from 'date-fns/locale'
import { Article, WithContext } from 'schema-dts'

import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Badge } from '@/components/ui/badge'
import type { ArticlePayload } from '@/types'
import { DownloadableCard } from '@/components/global/downloadable-card'
import { PageHeading } from '@/components/global/page-heading'
import { format } from 'date-fns'
import { JsonLd } from '@/components/seo/json-ld'
import { DownloadableList } from '@/components/global/downloadable-list'

export interface ArticlePageProps {
  data: ArticlePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const ArticlePage = ({
  data,
  encodeDataAttribute
}: ArticlePageProps) => {
  // Default to an empty object to allow previews on non-existent documents
  const { title, date, description, downloadables } = data ?? {}

  const article: WithContext<Article> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: [
      {
        '@type': 'Person',
        name: 'Juan B. Serrano García',
        url: 'https://www.linkedin.com/in/juan-bautista-serrano-garcia-989b11167/?originalSubdomain=es'
      }
    ]
  }

  return (
    <>
      <JsonLd data={article} />

      <MaxWidthWrapper>
        <Badge>
          {format(new Date(date ?? ''), `dd MMMM, yyyy`, {
            locale: es
          })}
        </Badge>
        <PageHeading className='mt-8'>{title}</PageHeading>
        <div className='prose-sm md:prose mt-4 max-w-prose'>
          <CustomPortableText value={description as PortableTextBlock[]} />
        </div>

        {downloadables && downloadables.length > 0 && (
          <DownloadableList downloadables={downloadables} />
        )}
      </MaxWidthWrapper>
    </>
  )
}
