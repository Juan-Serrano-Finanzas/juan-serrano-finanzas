import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { PortableTextBlock } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

export const ArticleCard = ({ slug, date, title, summary }) => {
  return (
    <Link
      href={`/articulos/${slug}`}
      className='group rounded-2xl bg-white px-6 py-4 transition duration-300 ease-linear hover:bg-stone-100'
    >
      <div className='flex flex-col'>
        <div className='col-span-1 border-l-2 border-stone-500 pl-4 text-sm text-stone-700'>
          {format(new Date(date), `dd MMMM, yyyy`, {
            locale: es
          })}
        </div>
        <div className='col-span-4 mt-2'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <div className='prose-sm md:prose mt-4'>
            <CustomPortableText value={summary as PortableTextBlock[]} />
          </div>
        </div>
      </div>
    </Link>
  )
}