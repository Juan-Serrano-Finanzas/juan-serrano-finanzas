import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'downloadable',
  title: 'Descargable',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Título',
      validation: rule => rule.required()
    }),
    defineField({
      type: 'text',
      name: 'summary',
      title: 'Sumario'
    }),
    defineField({
      type: 'file',
      name: 'file',
      title: 'Archivo',
      validation: rule => rule.required()
    })
  ]
})
