import {defineField, defineType} from 'sanity'

export const kalenderType = defineType({
  name: 'kalender',
  title: 'Kalender',
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
        title: title || 'Kalender',
        subtitle: 'Salonized boeking widget sectie',
      }
    },
  },
})
