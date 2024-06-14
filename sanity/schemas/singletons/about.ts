import { User2Icon } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'Biografía',
  type: 'document',
  icon: User2Icon,
  fields: [
    defineField({
      name: 'name',
      description: 'Nombre completo del dueño de la página.',
      title: 'Nombre',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Biografía',
      description: 'Detalles biográficos del dueño de la página.',
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
      name: 'profilePicture',
      title: 'Foto de perfil',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: rule => rule.required()
    })
  ]
})
