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
    // // defineField({
    // //   name: 'overview',
    // //   description:
    // //     'Used both for the <meta> description tag for SEO, and the personal website subheader.',
    // //   title: 'Description',
    // //   type: 'array',
    // //   of: [
    // //     // Paragraphs
    // //     defineArrayMember({
    // //       lists: [],
    // //       marks: {
    // //         annotations: [
    // //           {
    // //             name: 'link',
    // //             type: 'object',
    // //             title: 'Link',
    // //             fields: [
    // //               {
    // //                 name: 'href',
    // //                 type: 'url',
    // //                 title: 'Url'
    // //               }
    // //             ]
    // //           }
    // //         ],
    // //         decorators: [
    // //           {
    // //             title: 'Italic',
    // //             value: 'em'
    // //           },
    // //           {
    // //             title: 'Strong',
    // //             value: 'strong'
    // //           }
    // //         ]
    // //       },
    // //       styles: [],
    // //       type: 'block'
    // //     })
    // //   ],
    // //   validation: rule => rule.max(155).required()
    // // }),
    // // defineField({
    // //   name: 'showcaseProjects',
    // //   title: 'Showcase projects',
    // //   description:
    // //     'These are the projects that will appear first on your landing page.',
    // //   type: 'array',
    // //   of: [
    // //     defineArrayMember({
    // //       type: 'reference',
    // //       to: [{ type: 'project' }]
    // //     })
    // //   ]
    // // })
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title
      }
    }
  }
})
