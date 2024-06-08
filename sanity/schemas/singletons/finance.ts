import { CoinsIcon } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'finance',
  title: 'Divulgación Financiera',
  type: 'document',
  icon: CoinsIcon,
  fields: [
    defineField({
      name: 'title',
      description: 'Título de la página.',
      title: 'Título',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Descripción de la página',
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
