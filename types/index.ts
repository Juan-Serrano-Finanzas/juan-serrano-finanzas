import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface File {
  _type: string
  url: string
  title: string
}

// Page payloads

export interface BookPayload {
  id: string
  title: string
  slug: string
  summary: PortableTextBlock[]
  coverImage: Image
  year: number
  buyLink: string
  description: PortableTextBlock[]
  downloadables?: File[]
}

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  books?: BookPayload[]
  title?: string
  bio?: any
}

export interface FinancePagePayload {
  title?: string
  description?: PortableTextBlock[]
  downloadables?: File[]
}

export interface InternationalStockMarketPagePayload {
  title?: string
  description?: PortableTextBlock[]
  downloadables?: File[]
}

export interface SpanishStockMarketPagePayload {
  title?: string
  description?: PortableTextBlock[]
  downloadables?: File[]
}

export interface AboutPayload {
  name?: string
  description?: PortableTextBlock[]
  profilePicture?: Image
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
  books: BookPayload[]
}
