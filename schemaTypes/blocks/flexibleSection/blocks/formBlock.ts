import {defineType, defineField} from 'sanity'

export const flexFormBlockType = defineType({
  name: 'flexFormBlock',
  title: 'Formulier Blok',
  type: 'object',
  fields: [
    defineField({
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
      hidden: true,
      initialValue: 'form',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Formulier',
        subtitle: 'Formulier',
      }
    },
  },
})
