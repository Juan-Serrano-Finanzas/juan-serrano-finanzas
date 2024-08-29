import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

// Page payloads

export interface File {
  url: string
  title: string
  summary?: string
}

interface BookSEO {
  metaTitle: string
  metaDescription: string
  publisher: string
  isbn: string
  language: string
  pages: number
  price: number
}
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
  seo: BookSEO
  pages: number
  isbn: string
  price: number
  publisher: string
  publishedAt: string
}

export interface ArticlePayload {
  id: string
  title: string
  slug: string
  summary: PortableTextBlock[]
  date: string | Date
  description: PortableTextBlock[]
  downloadables?: File[]
}

export interface ArticlesPagePayload {
  articles?: ArticlePayload[]
}

export interface HomePagePayload {
  books?: BookPayload[]
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
  books: BookPayload[]
}
