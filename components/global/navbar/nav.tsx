'use client'

import Link from 'next/link'
import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { BookPayload } from '@/types'

interface NavProps {
  books: BookPayload[]
}

export const Nav = ({ books }: NavProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{`Libros`}</NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'> */}
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2'>
              {books.map(book => (
                <li key={book.id} className='col-span-1'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex size-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                      href={`/libros/${book.slug}`}
                    >
                      <h4 className='mb-2 mt-4 font-serif text-lg'>
                        {book.title}
                      </h4>
                      {/* <p className='text-sm leading-tight text-muted-foreground'>
                        {book.summary}
                      </p> */}
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{`Mercados de Acciones`}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2'>
              <li className='col-span-1'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex size-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href={`/mercados-de-acciones/bolsa-espanola`}
                  >
                    <h4 className='mb-2 mt-4 font-serif text-lg'>
                      {`Bolsa Española`}
                    </h4>
                    {/* <p className='text-sm leading-tight text-muted-foreground'>
                        {market.summary}
                      </p> */}
                  </a>
                </NavigationMenuLink>
              </li>
              <li className='col-span-1'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex size-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href={`/mercados-de-acciones/bolsa-internacional`}
                  >
                    <h4 className='mb-2 mt-4 font-serif text-lg'>
                      {`Bolsa Internacional`}
                    </h4>
                    {/* <p className='text-sm leading-tight text-muted-foreground'>
                        {market.summary}
                      </p> */}
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/divulgacion-financiera' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {`Divulgación Financiera`}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/contacto' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {`Contacto`}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='font-serif text-sm font-medium leading-none'>
            {title}
          </div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
