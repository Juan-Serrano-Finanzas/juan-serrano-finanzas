import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import type { HomePagePayload } from '@/types'

import { Bio } from '@/components/pages/home/bio'
import { SectionHeading } from '@/components/global/section-heading'
import { BookCard } from '@/components/pages/home/book-card'
import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const HomePage = ({ data, encodeDataAttribute }: HomePageProps) => {
  // Default to an empty object to allow previews on non-existent documents
  const { books = [], bio = {} } = data ?? {}

  return (
    <>
      <MaxWidthWrapper>{bio && <Bio bio={bio} />}</MaxWidthWrapper>
      <MaxWidthWrapper>
        {books && books.length > 0 && (
          <section>
            <SectionHeading>{`Mis libros`}</SectionHeading>
            <div className='mt-8 flex flex-col gap-y-16'>
              {books.map(book => {
                // // const href = resolveHref(book?._type, book?.slug)
                // // if (!href) {
                // //   return null
                // // }
                return <BookCard key={book.id} book={book} />
              })}
            </div>
          </section>
        )}
      </MaxWidthWrapper>
    </>
  )
}
