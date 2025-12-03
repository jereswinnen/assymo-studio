import {defineField, defineType} from 'sanity'

export const flexImageBlockType = defineType({
  name: 'flexImageBlock',
  title: 'Afbeelding Blok',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Tekst',
          type: 'string',
          validation: (rule) => rule.required().error('Alt tekst is verplicht voor toegankelijkheid'),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      media: 'image',
      alt: 'image.alt',
    },
    prepare({media, alt}) {
      return {
        title: alt || 'Afbeelding',
        subtitle: 'Afbeelding Blok',
        media,
      }
    },
  },
})
