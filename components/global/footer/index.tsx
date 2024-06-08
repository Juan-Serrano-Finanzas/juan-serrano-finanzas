import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { loadSettings } from '@/sanity/loader/loadQuery'

import FooterLayout from './footer-layout'
const FooterPreview = dynamic(() => import('./footer-preview'))

export async function Footer() {
  const initial = await loadSettings()

  if (draftMode().isEnabled) {
    return <FooterPreview initial={initial} />
  }

  return <FooterLayout data={initial.data} />
}
