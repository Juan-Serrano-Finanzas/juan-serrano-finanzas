import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { PageHeading } from '@/components/global/page-heading'
import { CustomPortableText } from '@/components//shared/CustomPortableText'
import type { ArticlesPagePayload } from '@/types'
import Link from 'next/link'
import { PortableTextBlock } from 'next-sanity'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export interface ArticlesPageProps {
  data: ArticlesPagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export const ArticlesPage = ({
  data,
  encodeDataAttribute
}: ArticlesPageProps) => {
  const { articles = [] } = data ?? {}

  return (
    <MaxWidthWrapper>
      <PageHeading>{`Artículos`}</PageHeading>

      <section className='mt-8'>
        <div className='prose-sm md:prose max-w-prose'>
          <p>{`Aquí presentaremos escritos sobre economía y finanzas`}</p>
        </div>
      </section>

      {articles && articles.length > 0 && (
        <section className='mt-16 max-w-2xl'>
          <ul role='list' className='mt-8 flex flex-col gap-y-8'>
            {articles?.map(article => (
              <Link
                href={`/articulos/${article.slug}`}
                className='group rounded-2xl bg-white px-6 py-4 transition duration-300 ease-linear hover:bg-stone-100'
              >
                <div className='grid grid-cols-5 gap-x-8'>
                  <div className='col-span-1 text-sm font-medium text-stone-600'>
                    {format(new Date(article.date), `dd MMMM, yyyy`, {
                      locale: es
                    })}
                  </div>
                  <div className='col-span-4'>
                    <h3 className='text-xl font-bold'>{article.title}</h3>
                    <div className='prose-sm md:prose mt-4'>
                      <CustomPortableText
                        value={article.summary as PortableTextBlock[]}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </section>
      )}
    </MaxWidthWrapper>
  )
}
