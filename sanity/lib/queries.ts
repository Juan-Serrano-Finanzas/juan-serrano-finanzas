import { groq } from 'next-sanity'

export const homePageQuery = groq`
{
    _id,
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
export const articlesPageQuery = groq`
{
     "articles": *[_type == "article"] | order(year desc) {
      _type,
      "id": _id,
      title,
      "slug": slug.current,
      summary,
      date 
    },
}
`

export const financePageQuery = groq`
  *[_type == "finance"][0]{
    _id,
    title,
    description,
    "downloadables": downloadables[]{
      "title": title,
      "url": file.asset->url,
      summary,
      date
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
      "url": file.asset->url,
      summary,
      date
    }
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
    description,
    "downloadables": downloadables[]{
      "title": title,
      "url": file.asset->url,
      summary,
      date
    }
  }
`
export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    date,
    description,
    "downloadables": downloadables[]{
      "title": title,
      "url": file.asset->url,
      summary,
      date
    }
  }
`

export const settingsQuery = groq`
{
  "books": *[_type == "book"] | order(year desc) {
    _type,
    "id": _id,
    title,
    "slug": slug.current,
    summary,
    coverImage,
  },
}
`
