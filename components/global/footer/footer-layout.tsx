import type { PortableTextBlock } from 'next-sanity'

import { CustomPortableText } from '@/components//shared/CustomPortableText'
import { currentYear } from '@/lib/utils'
import type { SettingsPayload } from '@/types'

interface FooterProps {
  data: SettingsPayload
}
export default function Footer(props: FooterProps) {
  const { data } = props
  const footer = data?.footer || ([] as PortableTextBlock[])
  return (
    <footer className='bottom-0 w-full py-12 text-center text-xs text-stone-500 md:py-20'>
      {/* {footer && (
        <CustomPortableText
          paragraphClasses="text-md md:text-xl"
          value={footer}
        />
      )} */}
      <span>{`© Juan B. Serrano García ${currentYear}. Todos los derechos reservados.`}</span>
    </footer>
  )
}
