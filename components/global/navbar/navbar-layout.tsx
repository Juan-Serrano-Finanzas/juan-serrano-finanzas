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
    // <div className='sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-white/80 p-4 backdrop-blur md:px-16 md:py-5 lg:px-32'>
    <div className='flex h-24 items-center justify-between px-8 md:px-24'>
      <Link href='/'>
        <Wordmark className='w-12' />
      </Link>
      <Nav books={data.books} />
    </div>
  )
}
