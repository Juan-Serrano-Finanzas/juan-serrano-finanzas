import { BookIcon } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'book',
  title: 'Libro',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'Título del libro.',
      title: 'Título',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Slug para la URL del libro. Presiona generate para autogenerar basado en el título del libro. De ser posible, no cambiar (afecta el SEO).',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context)
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'abstract',
      title: 'Extracto',
      description:
        'Extracto del libro. Usado en la página de inicio como descripción del libro.',
      type: 'text'
    }),
    defineField({
      name: 'summary',
      title: 'Resumen',
      description:
        'Pequeño sumario del libro (dos o tres líneas). Usado para la tag <meta> description de SEO, y como subheader card del libro en la página de inicio.',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: 'Italic',
                value: 'em'
              },
              {
                title: 'Strong',
                value: 'strong'
              }
            ]
          },
          styles: [],
          type: 'block'
        })
      ],
      validation: rule => rule.max(155).required()
    }),
    defineField({
      name: 'coverImage',
      title: 'Foto portada',
      description:
        'Foto de portada del libro. Preferiblemente en formato 3:4 (1200x1600) y archivo WebP.',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: rule => rule.required()
    }),

    defineField({
      name: 'year',
      title: 'Año',
      description: 'Año de publicación del libro.',
      type: 'number'
    }),
    defineField({
      name: 'buyLink',
      title: 'Link de Compra',
      description: 'Link en formato url donde se puede comprar el libro.',
      type: 'url'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      description:
        'Descripción completa del libro. Usado en la página de detalle del libro.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url'
                  }
                ]
              }
            ]
          },
          styles: []
        })
        // // // Custom blocks
        // // defineArrayMember({
        // //   name: 'timeline',
        // //   type: 'timeline',
        // // }),
        // // defineField({
        // //   type: 'image',
        // //   icon: ImageIcon,
        // //   name: 'image',
        // //   title: 'Image',
        // //   options: {
        // //     hotspot: true,
        // //   },
        // //   preview: {
        // //     select: {
        // //       imageUrl: 'asset.url',
        // //       title: 'caption',
        // //     },
        // //   },
        // //   fields: [
        // //     defineField({
        // //       title: 'Caption',
        // //       name: 'caption',
        // //       type: 'string',
        // //     }),
        // //     defineField({
        // //       name: 'alt',
        // //       type: 'string',
        // //       title: 'Alt text',
        // //       description:
        // //         'Alternative text for screenreaders. Falls back on caption if not set',
        // //     }),
        // //   ],
        // // }),
      ]
    }),
    defineField({
      name: 'downloadables',
      title: 'Archivos descargables',
      type: 'array',
      of: [
        {
          type: 'downloadable'
        }
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      description: 'SEO metadata del libro.',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Título',
          description: 'Título para SEO del libro.',
          type: 'string'
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          description: 'Descripción para SEO del libro.',
          type: 'string'
        },
        {
          name: 'publisher',
          title: 'Editorial',
          description: 'Nombre de la editorial del libro.',
          type: 'string'
        },
        {
          name: 'isbn',
          title: 'ISBN',
          description: 'Númer ISBN del libro.',
          type: 'string'
        },
        {
          name: 'language',
          title: 'Lenguaje',
          description: 'Lenguaje del libro.',
          type: 'string'
        },
        {
          name: 'pages',
          title: 'Páginas',
          description: 'Número de páginas del libro.',
          type: 'number'
        },
        {
          name: 'price',
          title: 'Precio',
          description: 'Precio de venta del libro.',
          type: 'number'
        }
      ],
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      }
    })
  ]
  // // initialValue: document => ({
  // //   seo: {
  // //     metaTitle: document.title
  // //   }
  // // })
})
