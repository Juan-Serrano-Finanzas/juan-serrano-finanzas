import ImageBox from '@/components/shared/ImageBox'
import type { BookPayload } from '@/types'

interface BookProps {
  book: BookPayload
  odd: number
}

export function BookListItem(props: BookProps) {
  const { book, odd } = props

  return (
    <div
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-y xl:flex-row-reverse'
      }`}
    >
      <div className='w-full xl:w-9/12'>
        <ImageBox
          image={book.coverImage}
          alt={`Portada del libro ${book.title}`}
          classesWrapper='relative aspect-[16/9]'
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
        {/* Title */}
        <div className='mb-2 text-xl font-extrabold tracking-tight md:text-2xl'>
          {book.title}
        </div>
        {/* Overview  */}
        {/* <div className='font-serif text-gray-500'>
          <CustomPortableText value={book.overview as PortableTextBlock[]} />
        </div> */}
      </div>
      {/* Tags */}
      {/* <div className='mt-4 flex flex-row gap-x-2'>
        {book.tags?.map((tag, key) => (
          <div className='text-sm font-medium lowercase md:text-lg' key={key}>
            #{tag}
          </div>
        ))}
      </div> */}
    </div>
  )
}
