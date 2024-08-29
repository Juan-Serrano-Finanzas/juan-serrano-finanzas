import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.juanserranofinanzas.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://www.juanserranofinanzas.com/contacto',
      lastModified: new Date()
    },
    {
      url: 'https://www.juanserranofinanzas.com/contacto',
      lastModified: new Date()
    },
    {
      url: 'https://www.juanserranofinanzas.com/mercados-de-acciones/bolsa-espanola',
      lastModified: new Date()
    },
    {
      url: 'https://www.juanserranofinanzas.com/articulos',
      lastModified: new Date()
    },
    {
      url: 'https://www.juanserranofinanzas.com/mercados-de-acciones/bolsa-internacional',
      lastModified: new Date()
    }
  ]
}
