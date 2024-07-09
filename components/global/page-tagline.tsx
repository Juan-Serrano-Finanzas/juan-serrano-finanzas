import { ReactNode } from 'react'

interface PageTaglineProps {
  children: ReactNode
}

export default function PageTagline({ children }: PageTaglineProps) {
  return <p className='max-w-xl text-xl text-stone-700'>{children}</p>
}
