import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Producten',
  type: 'document',
  fields: [
    defineField({
      name: 'Naam',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'Hoofdafbeelding',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'Tekst',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
