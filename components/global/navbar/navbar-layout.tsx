'use client'

import Link from 'next/link'

import { Nav } from '@/components/global/navbar/nav'
import { Wordmark } from '@/components/logos/wordmark'
import type { SettingsPayload } from '@/types'
import { MobileNav } from './mobile-nav'
import { List } from '@phosphor-icons/react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

interface NavbarProps {
  data: SettingsPayload
}

export const NavbarLayout = (props: NavbarProps) => {
  const { data } = props

  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div className='sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm md:px-16'>
      <Link href='/'>
        <Wordmark className='w-10 md:w-12' />
      </Link>

      <Nav books={data.books} className='hidden md:block' />

      <List onClick={() => toggleModal()} className='block size-7 md:hidden' />

      <AnimatePresence>
        {showModal && (
          <MobileNav
            books={data.books}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
