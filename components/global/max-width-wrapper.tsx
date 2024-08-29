import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export const MaxWidthWrapper = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <section
      className={cn(
        'mx-auto w-full max-w-screen-2xl px-2 py-4 md:px-16 md:py-8',
        className
      )}
    >
      {children}
    </section>
  )
}
