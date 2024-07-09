import { currentYear } from '@/lib/utils'

export const Footer = () => {
  return (
    <footer className='bottom-0 w-full py-5 text-center text-xs text-stone-500 md:py-10'>
      <span>{`© ${currentYear}, Juan B. Serrano García`}</span>
    </footer>
  )
}
