import { currentYear } from '@/lib/utils'

export const Footer = () => {
  return (
    <footer className='bottom-0 w-full py-12 text-center text-xs text-stone-500 md:py-20'>
      <span>{`© Juan B. Serrano García ${currentYear}. Todos los derechos reservados.`}</span>
    </footer>
  )
}
