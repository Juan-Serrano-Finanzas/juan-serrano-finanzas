import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { NavbarLayout } from '@/components/global/navbar/navbar-layout'

import { loadSettings } from '@/sanity/loader/loadQuery'

const NavbarPreview = dynamic(() => import('./navbar-preview'))

export async function Navbar() {
  const initial = await loadSettings()

  if (draftMode().isEnabled) {
    return <NavbarPreview initial={initial} />
  }

  return <NavbarLayout data={initial.data} />
}
