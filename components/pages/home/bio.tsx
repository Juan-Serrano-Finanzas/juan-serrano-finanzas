import Image from 'next/image'
import { PortableTextBlock } from 'next-sanity'

import { PageHeading } from '@/components/global/page-heading'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'

export const Bio = async ({ bio }) => {
  return (
    <section>
      <div className='grid gap-x-24 gap-y-8 md:grid-cols-2 md:gap-y-0'>
        <div className='md:col-span-1'>
          <PageHeading>{bio.name}</PageHeading>
          <div className='prose-sm md:prose mt-8'>
            <CustomPortableText value={bio.bio as PortableTextBlock[]} />
          </div>
        </div>
        <div className='md:col-span-1'>
          <div className='h-fit bg-stone-50 p-8'>
            <div className='relative aspect-[4/5]'>
              <Image
                alt={`El economista y autor ${bio.name}`}
                src={
                  bio.profilePicture
                    ? // @ts-expect-error fix this
                      urlForImage(bio.profilePicture)
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
          </div>
        </div>
      </div>
    </section>
  )
}
