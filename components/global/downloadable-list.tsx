import { Badge } from '@/components/ui/badge'
import { DownloadableCard } from '@/components/global/downloadable-card'

interface DownloadableListProps {
  downloadables: any[]
}

export const DownloadableList = ({ downloadables }: DownloadableListProps) => {
  return (
    <section className='mt-16'>
      <Badge variant='outline'>{`Descargables`}</Badge>
      <ul role='list' className='mt-8 flex max-w-2xl flex-col gap-8'>
        {downloadables?.map(file => (
          <DownloadableCard key={file.url} file={file} />
        ))}
      </ul>
    </section>
  )
}
