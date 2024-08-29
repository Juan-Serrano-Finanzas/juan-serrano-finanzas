import { cn } from '@/lib/utils'
import {
  FilePdf,
  MicrosoftExcelLogo,
  MicrosoftPowerpointLogo
} from '@phosphor-icons/react/dist/ssr'

interface DonwloadableCardProps {
  file: {
    url: string
    summary?: string
    title: string
  }
}

export const DownloadableCard = ({ file }: DonwloadableCardProps) => {
  return (
    <li className='group relative w-full'>
      <a
        href={file.url}
        download
        className='flex flex-col rounded-md shadow-sm md:flex-row'
      >
        <div
          className={cn(
            'flex w-full shrink-0 items-center justify-center rounded-l-md bg-stone-700 py-2 text-sm font-medium text-white md:w-16 md:py-0',
            {
              'bg-green-700': file.url.endsWith('.xlsx'),
              'bg-red-700': file.url.endsWith('.pptx'),
              'bg-purple-700': file.url.endsWith('.pdf')
            }
          )}
        >
          {file.url.endsWith('.pdf') ? (
            <FilePdf className='size-5' aria-hidden='true' />
          ) : file.url.endsWith('.xlsx') ? (
            <MicrosoftExcelLogo className='size-5' aria-hidden='true' />
          ) : file.url.endsWith('.pptx') ? (
            <MicrosoftPowerpointLogo className='size-5' aria-hidden='true' />
          ) : (
            'Doc'
          )}
        </div>

        <div className='w-full rounded-r-md border border-stone-200 bg-white px-4 py-2 transition duration-100 ease-linear group-hover:bg-stone-100'>
          <h4 className='text-base font-medium text-stone-900'>
            {file?.title ?? 'Archivo descargable'}
          </h4>
          <p className='mt-2 text-sm text-stone-600'>{file.summary}</p>
        </div>
      </a>
    </li>
  )
}
