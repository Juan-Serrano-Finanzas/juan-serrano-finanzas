import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { PortableTextBlock } from 'next-sanity'

import { DownloadableCard } from '@/components/global/downloadable-card'
import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Badge } from '@/components/ui/badge'
import type { FinancePagePayload } from '@/types'
import { DownloadableList } from '@/components/global/downloadable-list'

export interface FinancePageProps {
  data: FinancePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const InternationalStockMarketPage = ({
  data,
  encodeDataAttribute
}: FinancePageProps) => {
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
        <DownloadableList downloadables={downloadables} />
      )}
    </MaxWidthWrapper>
  )
}
