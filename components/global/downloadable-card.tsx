import { FileTextIcon, PresentationIcon, SheetIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

interface DonwloadableCardProps {
  file: {
    url: string
    summary?: string
    title: string
  }
}

export const DownloadableCard = ({ file }: DonwloadableCardProps) => {
  return (
    <li className='group relative'>
      <a href={file.url} download className='flex rounded-md shadow-sm'>
        <div
          className={cn(
            'flex w-16 shrink-0 items-center justify-center rounded-l-md bg-stone-700 text-sm font-medium text-white',
            {
              'bg-green-700': file.url.endsWith('.xlsx'),
              'bg-red-700': file.url.endsWith('.pptx'),
              'bg-purple-700': file.url.endsWith('.pdf')
            }
          )}
        >
          {file.url.endsWith('.pdf') ? (
            <FileTextIcon className='size-5' aria-hidden='true' />
          ) : file.url.endsWith('.xlsx') ? (
            <SheetIcon className='size-5' aria-hidden='true' />
          ) : file.url.endsWith('.pptx') ? (
            <PresentationIcon className='size-5' aria-hidden='true' />
          ) : (
            'Doc'
          )}
        </div>

        <div className='w-full rounded-r-md border border-stone-200 bg-white px-4 py-2 transition duration-100 ease-linear group-hover:bg-stone-100'>
          <h4 className='text-base font-medium text-stone-900'>
            {file?.title ?? 'Archivo descargable'}
          </h4>
          <p className='text-sm text-stone-600'>{file.summary}</p>
        </div>
      </a>
    </li>
  )
}
