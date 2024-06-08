import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
    "books": *[_type == "book"] | order(year desc) {
      _type,
      "id": _id,
      title,
      "slug": slug.current,
      summary,
      year, 
      coverImage,
      buyLink
    },
    "bio": *[_type == "about"][0] {
      _type,
      "id": _id,
      "slug": slug.current,
      name,
      bio,
      profilePicture
    }
  }
`
export const financePageQuery = groq`
  *[_type == "finance"][0]{
    _id,
    title,
    description,
    "downloadables": downloadables[]{
      "title": title,
      "url": file.asset->url
    }
  }
`
export const spanishStockMarketPageQuery = groq`
  *[_type == "marketSpanish"][0]{
    _id,
    title,
    description,
    "downloadables": downloadables[]{
      "title": title,
      "url": file.asset->url
    }
  }
`
export const internationalStockMarketPageQuery = groq`
  *[_type == "marketInternational"][0]{
    _id,
    title,
    description,
    "downloadables": downloadables[]{
      "title": title,
      "url": file.asset->url
    }
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    "books": *[_type == "book"] | order(year desc) {
      _type,
      "id": _id,
      title,
      "slug": slug.current,
      summary,
      coverImage,
    },
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`

// -----------------------------

export const bookBySlugQuery = groq`
  *[_type == "book" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    coverImage,
    year,
    buyLink,
    description
  }
`
