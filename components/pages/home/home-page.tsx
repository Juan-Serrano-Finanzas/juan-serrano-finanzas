import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import type { HomePagePayload } from '@/types'

import { Bio } from './bio'
import { SectionHeading } from '@/components/global/section-heading'
import { BookCard } from './book-card'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const HomePage = ({ data, encodeDataAttribute }: HomePageProps) => {
  // Default to an empty object to allow previews on non-existent documents
  const { books = [], bio = {} } = data ?? {}

  return (
    <div className='space-y-40'>
      {bio && <Bio bio={bio} />}
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
    </div>
  )
}
