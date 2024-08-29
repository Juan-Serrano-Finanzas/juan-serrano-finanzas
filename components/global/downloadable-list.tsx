import { DownloadableCard } from '@/components/global/downloadable-card'
import { MaxWidthWrapper } from '@/components/global/max-width-wrapper'
import { SectionHeading } from '@/components/global/section-heading'

interface DownloadableListProps {
  downloadables: any[]
}

export const DownloadableList = ({ downloadables }: DownloadableListProps) => {
  return (
    <MaxWidthWrapper>
      <SectionHeading>{`Descargables`}</SectionHeading>
      <ul role='list' className='mt-8 flex max-w-2xl flex-col gap-8'>
        {downloadables?.map(file => (
          <DownloadableCard key={file.url} file={file} />
        ))}
      </ul>
    </MaxWidthWrapper>
  )
}
