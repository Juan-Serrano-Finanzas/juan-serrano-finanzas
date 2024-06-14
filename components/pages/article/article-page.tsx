import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { PortableTextBlock } from 'next-sanity'
import { es } from 'date-fns/locale'

import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Badge } from '@/components/ui/badge'
import type { ArticlePayload } from '@/types'
import { DownloadableCard } from '@/components/global/downloadable-card'
import { PageHeading } from '@/components/global/page-heading'
import { format } from 'date-fns'

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

  return (
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
        <section className='mt-16'>
          <Badge variant='outline'>{`Descargables`}</Badge>
          <ul role='list' className='mt-8 flex max-w-2xl flex-col gap-8'>
            {downloadables?.map(file => (
              <DownloadableCard key={file.url} file={file} />
            ))}
          </ul>
        </section>
      )}
    </MaxWidthWrapper>
  )
}
