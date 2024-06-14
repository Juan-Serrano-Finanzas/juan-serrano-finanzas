import type { BookPayload } from '@/types'
import Image from 'next/image'

interface BookProps {
  book: BookPayload
  odd: number
}

export function BookListItem(props: BookProps) {
  const { book, odd } = props

  return (
    <div
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-stone-50/50 xl:flex-row ${
        odd && 'border-y xl:flex-row-reverse'
      }`}
    >
      <div className='relative aspect-[16/9]'>
        <Image
          alt={`Portada del libro ${book.title}`}
          src={
            book.coverImage
              ? // @ts-expect-error fix this
                urlForImage(book.coverImage)
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
      <div className='flex xl:w-1/4'>
        <TextBox book={book} />
      </div>
    </div>
  )
}

function TextBox({ book }: { book: BookPayload }) {
  return (
    <div className='relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0'>
      <div>
        <div className='mb-2 text-xl font-extrabold tracking-tight md:text-2xl'>
          {book.title}
        </div>
      </div>
    </div>
  )
}
