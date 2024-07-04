import { PencilIcon } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Artículo',
  type: 'document',
  icon: PencilIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'Título del artículo.',
      title: 'Título',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description:
        'Slug para la URL del artículo. Presiona generate para autogenerar basado en el título del artículo. De ser posible, no cambiar (afecta el SEO). Si se cambia, no añadir acentos u otros símbolos.',
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
        'Pequeño sumario del artículo (dos o tres líneas). Usado para la tag <meta> description de SEO, y como subheader card del libro en la página de inicio.',
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
      name: 'date',
      title: 'Fecha',
      description: 'Feacha de publicación del artículo.',
      type: 'date'
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
