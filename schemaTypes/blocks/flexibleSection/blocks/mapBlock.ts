import {defineType, defineField} from 'sanity'

export const flexMapBlockType = defineType({
  name: 'flexMapBlock',
  title: 'Kaart Blok',
  type: 'object',
  fields: [
    defineField({
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
      hidden: true,
      initialValue: 'map',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Kaart',
        subtitle: 'Google Maps',
      }
    },
  },
})
