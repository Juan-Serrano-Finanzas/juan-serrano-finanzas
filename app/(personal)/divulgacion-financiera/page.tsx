import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { FinancePage } from '@/components/pages/finance/finance-page'
import { studioUrl } from '@/sanity/lib/api'
import { loadFinancePage } from '@/sanity/loader/loadQuery'

const FinancePreview = dynamic(
  () => import('@/components/pages/home/home-page-preview')
)

export default async function FinanceRoute() {
  const initial = await loadFinancePage()

  if (draftMode().isEnabled) {
    return <FinancePreview initial={initial} />
  }

  if (!initial.data) {
    return (
      <div className='text-center'>
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/desk/home`} className='underline'>
          create one now
        </Link>
        !
      </div>
    )
  }

  return <FinancePage data={initial.data} />
}
