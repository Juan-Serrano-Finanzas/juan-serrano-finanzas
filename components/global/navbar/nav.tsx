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
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { PortableTextBlock } from 'next-sanity'
import { BadgeDollarSignIcon, BadgeEuroIcon } from 'lucide-react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/utils'

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
                      className='flex size-full select-none flex-col justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 text-center no-underline outline-none focus:shadow-md'
                      href={`/libros/${book.slug}`}
                    >
                      <h4 className='mb-2 mt-4 font-serif text-lg'>
                        {book.title}
                      </h4>
                      <Image
                        alt={`Portada del libro ${book?.title}`}
                        src={
                          book?.coverImage
                            ? // @ts-expect-error fix this
                              urlForImage(book?.coverImage)
                                .width(1200)
                                .height(1600)
                                .fit('crop')
                                .url()
                            : ''
                        }
                        width={1200}
                        height={1600}
                        className='rounded bg-stone-200 object-cover shadow'
                      />
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
                    className='flex size-full select-none flex-col items-center justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href={`/mercados-de-acciones/bolsa-espanola`}
                  >
                    <BadgeEuroIcon className='size-6 stroke-stone-700' />
                    <h4 className='mb-2 mt-4 text-center font-serif text-lg'>
                      {`Bolsa Española`}
                    </h4>
                  </a>
                </NavigationMenuLink>
              </li>
              <li className='col-span-1'>
                <NavigationMenuLink asChild>
                  <a
                    className='flex size-full select-none flex-col items-center justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href={`/mercados-de-acciones/bolsa-internacional`}
                  >
                    <BadgeDollarSignIcon className='size-6 stroke-stone-700' />
                    <h4 className='mb-2 mt-4 text-center font-serif text-lg'>
                      {`Bolsa Internacional`}
                    </h4>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/articulos' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {`Artículos`}
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
