import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'
import Link from 'next/link'
import { PortableTextBlock } from 'next-sanity'

import { DownloadableButton } from '@/components/global/downloadable-button'
import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import { ProjectListItem } from '@/components/pages/home/project-list-item'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { SpanishStockMarketPagePayload } from '@/types'

export interface SpanishStockMarketPageProps {
  data: SpanishStockMarketPagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

interface File {
  url: string
  title: string
}

export const SpanishStockMarketPage = ({
  data,
  encodeDataAttribute
}: SpanishStockMarketPageProps) => {
  const { title = '', description = '', downloadables = [] } = data ?? {}

  return (
    <MaxWidthWrapper>
      <PageHeading>{title}</PageHeading>

      <section className='mt-8'>
        <div className='prose-sm md:prose max-w-prose'>
          <CustomPortableText value={description as PortableTextBlock[]} />
        </div>
      </section>

      {downloadables && downloadables.length > 0 && (
        <section className='mt-16'>
          <Badge variant='outline'>{`Descargables`}</Badge>
          <ul
            role='list'
            className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4'
          >
            {downloadables?.map(file => (
              <DownloadableButton key={file.url} file={file} />
            ))}
          </ul>
        </section>
      )}
    </MaxWidthWrapper>
  )
}
