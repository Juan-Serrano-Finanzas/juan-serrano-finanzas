import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface PageHeadingProps {
  children: ReactNode
  className?: string
}

export const PageHeading = ({ children, className }: PageHeadingProps) => {
  return (
    <h1 className={cn('font-serif text-3xl md:text-3xl', className)}>
      {children}
    </h1>
  )
}
