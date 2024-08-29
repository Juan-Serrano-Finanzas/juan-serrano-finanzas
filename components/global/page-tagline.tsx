import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface PageTaglineProps {
  children: ReactNode
  className?: string
}

export default function PageTagline({ children, className }: PageTaglineProps) {
  return (
    <p className={cn('mt-4 max-w-xl text-stone-700', className)}>{children}</p>
  )
}
