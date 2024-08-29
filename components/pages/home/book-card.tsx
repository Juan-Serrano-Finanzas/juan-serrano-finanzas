import Image from 'next/image'
import Link from 'next/link'
import { PortableTextBlock } from 'next-sanity'
import { format, parseISO } from 'date-fns'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'

export const BookCard = ({ book }) => {
  return (
    <div
      key={book.id}
      className='flex flex-col gap-16 gap-y-4 md:grid md:grid-cols-4'
    >
      <div className='relative aspect-[3/4] w-full bg-stone-50 md:col-span-1'>
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
          className='bg-stone-100 object-cover object-center p-8'
        />
      </div>
      <div className='flex flex-col justify-between md:col-span-1'>
        <div>
          <h2 className='mt-2 font-serif text-xl font-medium leading-tight'>
            {book.title}
          </h2>
          <div className='mb-4 mt-4 flex flex-col divide-y md:mb-0'>
            <h3 className='py-1 text-sm text-stone-500'>{`${book.pages} páginas`}</h3>
            <h3 className='py-1 text-sm text-stone-500'>{`Publicado ${format(parseISO(book.publishedAt), 'd/MM/yyyy')}`}</h3>
            <h3 className='py-1 text-sm text-stone-500'>{`Precio ${book.price.toFixed(2)} €`}</h3>
            <h3 className='py-1 text-sm text-stone-500'>{`Editado por ${book.publisher}`}</h3>
            <h3 className='py-1 text-sm text-stone-500'>{`ISBN ${book.isbn}`}</h3>
          </div>
        </div>
        <Link
          href={`/libros/${book.slug}`}
          className={cn(
            buttonVariants({
              variant: 'default',
              className: 'w-fit md:mt-0'
            })
          )}
        >
          {`Ver Libro`}
        </Link>
      </div>
      <div className='flex flex-col justify-between gap-y-4 md:col-span-2 md:gap-y-0'>
        <div className='prose md:prose-lg mt-4'>
          <CustomPortableText value={book.summary as PortableTextBlock[]} />
        </div>
      </div>
    </div>
  )
}
