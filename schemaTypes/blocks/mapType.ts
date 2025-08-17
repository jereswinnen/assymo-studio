import {defineField, defineType} from 'sanity'

export const kaartType = defineType({
  name: 'kaart',
  title: 'Kaart',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'Kaart',
        subtitle: 'Google Maps met locatie Assymo',
      }
    },
  },
})
