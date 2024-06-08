import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import { PortableTextBlock } from 'next-sanity'

import { DownloadableButton } from '@/components/global/downloadable-button'
import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Badge } from '@/components/ui/badge'
import type { FinancePagePayload } from '@/types'

export interface FinancePageProps {
  data: FinancePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}
interface File {}

export const FinancePage = ({
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
