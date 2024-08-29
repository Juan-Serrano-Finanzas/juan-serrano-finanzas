import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'
import Link from 'next/link'
import { PortableTextBlock, toPlainText } from 'next-sanity'
import { Book, WithContext } from 'schema-dts'
import { format, parseISO } from 'date-fns'

import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { buttonVariants } from '@/components/ui/button'
import { JsonLd } from '@/components/seo/json-ld'
import { DownloadableList } from '@/components/global/downloadable-list'

import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'
import type { BookPayload } from '@/types'

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
    seo,
    price,
    publisher,
    publishedAt,
    pages,
    isbn
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
        <div className='grid grid-cols-5 gap-x-16'>
          <div className='col-span-2'>
            <div className='h-fit bg-stone-100 p-8 md:p-16'>
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
                  className='bg-stone-200 object-cover object-center'
                />
              </div>
            </div>
            <div className='mt-4 flex flex-col divide-y'>
              <h3 className='py-1 text-sm text-stone-500'>{`${pages} páginas`}</h3>
              <h3 className='py-1 text-sm text-stone-500'>{`Publicado ${format(parseISO(publishedAt!), 'd/MM/yyyy')}`}</h3>
              <h3 className='py-1 text-sm text-stone-500'>{`Precio ${price?.toFixed(2)} €`}</h3>
              <h3 className='py-1 text-sm text-stone-500'>{`Editado por ${publisher}`}</h3>
              <h3 className='py-1 text-sm text-stone-500'>{`ISBN ${isbn}`}</h3>
            </div>
          </div>
          <div className='col-span-3'>
            <PageHeading>{title}</PageHeading>
            <Link
              href={buyLink ?? '/'}
              target='_blank'
              rel='noopener noreferrer'
              className={cn(buttonVariants({ variant: 'default' }), 'mt-4')}
            >
              {`Comprar por ${price?.toFixed(2)}€`}
            </Link>
            <div className='prose-sm md:prose mt-8'>
              <CustomPortableText value={description as PortableTextBlock[]} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {downloadables && downloadables.length > 0 && (
        <DownloadableList downloadables={downloadables} />
      )}
    </>
  )
}
