import { FileTextIcon, PresentationIcon, SheetIcon } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface DonwloadableButtonProps {
  file: {
    url: string
    title: string
  }
}

export const DownloadableButton = ({ file }: DonwloadableButtonProps) => {
  return (
    <li>
      <a href={`${file}?dl=`} className='col-span-1 flex rounded-md shadow-sm'>
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
            <FileTextIcon className='size-4' aria-hidden='true' />
          ) : file.url.endsWith('.xlsx') ? (
            <SheetIcon className='size-' aria-hidden='true' />
          ) : file.url.endsWith('.pptx') ? (
            <PresentationIcon className='size-4' aria-hidden='true' />
          ) : (
            'Doc'
          )}
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='w-full rounded-r-md border-y border-r border-stone-200 bg-white'>
              <p className='truncate px-4 py-2 text-sm font-medium text-stone-900 hover:text-stone-600'>
                {file?.title ?? 'Archivo descargable'}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{file?.title ?? 'Archivo descargable'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </a>
    </li>
  )
}
