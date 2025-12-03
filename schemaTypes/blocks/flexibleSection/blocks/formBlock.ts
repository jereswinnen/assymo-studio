import {defineType, defineField} from 'sanity'

export const flexFormBlockType = defineType({
  name: 'flexFormBlock',
  title: 'Formulier Blok',
  type: 'object',
  fields: [
    defineField({
      name: 'enabled',
      type: 'boolean',
      hidden: true,
      initialValue: true,
    }),
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Ondertitel',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Contact Formulier',
        subtitle: 'Formulier Blok',
      }
    },
  },
})
