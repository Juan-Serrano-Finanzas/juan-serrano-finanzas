import { BookIcon } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'book',
  title: 'Libro',
  type: 'document',
  icon: BookIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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
    })
  ]
})
