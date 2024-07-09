import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'
import Link from 'next/link'
import { PortableTextBlock } from 'next-sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { resolveHref, urlForImage } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import { Bio } from './bio'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const HomePage = ({ data, encodeDataAttribute }: HomePageProps) => {
  // Default to an empty object to allow previews on non-existent documents
  const { books = [], bio = {} } = data ?? {}

  return (
    <div className='space-y-20'>
      {bio && <Bio bio={bio} />}
      {books && books.length > 0 && (
        <section>
          <Badge variant='outline'>{`Mis libros`}</Badge>
          <div className='rmd:gap-y-0 mt-8 grid gap-x-16 gap-y-8 md:grid-cols-2'>
            {books.map(book => {
              // const href = resolveHref(book?._type, book?.slug)
              // if (!href) {
              //   return null
              // }

              return (
                <div
                  key={book.id}
                  className='grid gap-4 rounded bg-stone-100 p-8 md:grid-cols-2'
                >
                  <div className='relative aspect-[3/4] w-full'>
                    <Image
                      alt={`Portada del libro ${book?.title}`}
                      src={
                        book?.coverImage
                          ? // @ts-expect-error fix this
                            urlForImage(book?.coverImage)
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
                  <div className='flex flex-col justify-between gap-y-4 md:gap-y-0'>
                    <div>
                      <h3 className='text-xs font-medium text-stone-500'>
                        {book.year}
                      </h3>
                      <h2 className='mt-2 font-serif text-xl font-medium leading-tight'>
                        {book.title}
                      </h2>
                      <div className='prose md:prose-lg mt-4'>
                        <CustomPortableText
                          value={book.summary as PortableTextBlock[]}
                        />
                      </div>
                    </div>
                    <div className='flex gap-x-4'>
                      <a
                        href={book.buyLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={cn(buttonVariants({ variant: 'default' }))}
                      >
                        {`Comprar`}
                      </a>
                      <Link
                        href={`/libros/${book.slug}`}
                        className={cn(
                          buttonVariants({
                            variant: 'outline',
                            className: 'bg-white hover:bg-stone-50'
                          })
                        )}
                      >{`Ver`}</Link>
                    </div>
                  </div>
                </div>
                // // <Link
                // //   key={key}
                // //   href={href}
                // //   data-sanity={encodeDataAttribute?.(['book', key, 'slug'])}
                // // >
                // //   <BookListItem book={book} odd={key % 2} />
                // // </Link>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}
