import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  children: ReactNode
  className?: string
}

export const SectionHeading = ({
  children,
  className
}: SectionHeadingProps) => {
  return (
    <h2 className={cn('font-serif text-3xl md:text-3xl', className)}>
      {children}
    </h2>
  )
}
