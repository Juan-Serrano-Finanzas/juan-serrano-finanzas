import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'
import { PortableTextBlock, toPlainText } from 'next-sanity'
import { Book, WithContext } from 'schema-dts'

import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'
import type { BookPayload } from '@/types'
import Link from 'next/link'
import { JsonLd } from '@/components/seo/json-ld'
import { DownloadableList } from '@/components/global/downloadable-list'

export interface BookPageProps {
  data: BookPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const BookPage = ({ data, encodeDataAttribute }: BookPageProps) => {
  const {
    title,
    year,
    buyLink,
    summary,
    description,
    coverImage,
    downloadables,
    seo
  } = data ?? {}

  const book: WithContext<Book> = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: seo?.metaTitle ?? title,
    // // description: toPlainText(description as PortableTextBlock[]),
    description:
      seo?.metaDescription ?? toPlainText(description as PortableTextBlock[]),
    abstract:
      seo?.metaDescription ?? toPlainText(description as PortableTextBlock[]),
    publisher: seo?.publisher,
    isbn: seo?.isbn,
    copyrightYear: year,
    inLanguage: seo?.language,
    numberOfPages: seo?.pages,
    offers: {
      '@type': 'Offer',
      price: seo?.price,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: buyLink
    }
  }

  return (
    <>
      <JsonLd data={book} />
      <MaxWidthWrapper>
        <div className='grid grid-cols-5 gap-x-12'>
          <div className='col-span-2 h-fit bg-stone-100 p-8'>
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
        </div>

        {downloadables && downloadables.length > 0 && (
          <DownloadableList downloadables={downloadables} />
        )}
      </MaxWidthWrapper>
    </>
  )
}
