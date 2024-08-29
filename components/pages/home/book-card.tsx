import Image from 'next/image'
import Link from 'next/link'
import { PortableTextBlock } from 'next-sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { buttonVariants } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'

export const BookCard = ({ book }) => {
  return (
    <div key={book.id} className='grid gap-16 md:grid-cols-4'>
      <div className='relative col-span-1 aspect-[3/4] w-full bg-stone-50'>
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
      <div className='col-span-1 flex flex-col justify-between'>
        <div>
          <h2 className='mt-2 font-serif text-xl font-medium leading-tight'>
            {book.title}
          </h2>
          <div className='mt-4 flex flex-col divide-y'>
            <h3 className='py-1 text-sm text-stone-500'>{`Published ${book.year}`}</h3>
            <h3 className='py-1 text-sm text-stone-500'>{`Published ${book.year}`}</h3>
            <h3 className='py-1 text-sm text-stone-500'>{`Published ${book.year}`}</h3>
            <h3 className='py-1 text-sm text-stone-500'>{`Published ${book.year}`}</h3>
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
      <div className='col-span-2 flex flex-col justify-between gap-y-4 md:gap-y-0'>
        <div className='prose md:prose-lg mt-4'>
          <CustomPortableText value={book.summary as PortableTextBlock[]} />
        </div>
      </div>
    </div>
  )
}
