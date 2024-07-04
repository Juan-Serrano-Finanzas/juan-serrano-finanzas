import Link from 'next/link'

import { Nav } from '@/components/global/navbar/nav'
import { Wordmark } from '@/components/logos/wordmark'
import type { SettingsPayload } from '@/types'

interface NavbarProps {
  data: SettingsPayload
}

export const NavbarLayout = (props: NavbarProps) => {
  const { data } = props
  return (
    <div className='sticky top-0 z-50 flex h-16 items-center justify-between border-b border-foreground bg-white px-8 md:px-24'>
      <Link href='/'>
        <Wordmark className='w-12' />
      </Link>
      <Nav books={data.books} />
    </div>
  )
}
