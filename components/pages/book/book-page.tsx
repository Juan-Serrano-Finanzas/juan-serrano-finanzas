import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'
import Link from 'next/link'
import { PortableTextBlock } from 'next-sanity'

import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'
import type { BookPayload } from '@/types'
import { DownloadableButton } from '@/components/global/downloadable-button'

export interface BookPageProps {
  data: BookPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const BookPage = ({ data, encodeDataAttribute }: BookPageProps) => {
  // Default to an empty object to allow previews on non-existent documents
  const { title, year, buyLink, description, coverImage, downloadables } =
    data ?? {}

  return (
    <MaxWidthWrapper className='py-16'>
      <div className='grid grid-cols-5 gap-x-12'>
        <div className='col-span-2 h-fit bg-stone-50 p-8'>
          <div className='relative aspect-[3/4] w-full'>
            <Image
              alt={`Portada del libro ${title}`}
              src={
                coverImage
                  ? // @ts-expect-error fix this
                    urlForImage(coverImage)
                      .width(900)
                      .height(1200)
                      .fit('crop')
                      .url()
                  : ''
              }
              fill
              className='rounded bg-stone-200 object-cover object-center shadow'
            />
          </div>
        </div>
        <div className='col-span-3'>
          <Badge variant='outline'>{year}</Badge>
          <PageHeading className='mt-4'>{title}</PageHeading>
          <Link
            href={buyLink ?? '/'}
            target='_blank'
            rel='noopener noreferrer'
            className={cn(buttonVariants({ variant: 'default' }), 'mt-4')}
          >
            {`Comprar`}
          </Link>
          <div className='prose-sm md:prose mt-8'>
            <CustomPortableText value={description as PortableTextBlock[]} />
          </div>
        </div>

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
      </div>
    </MaxWidthWrapper>
  )
}
