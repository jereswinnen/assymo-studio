import {defineField, defineType} from 'sanity'

export const textCenteredType = defineType({
  name: 'textCentered',
  title: 'Gecentreerde tekst',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Body Text',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'cta',
          title: 'Call to Action',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) =>
                rule.uri({
                  allowRelative: true,
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'content.heading',
    },
    prepare({title}) {
      return {
        title: title || 'Gecentreerde tekst',
        subtitle: 'Gecentreerde tekst',
      }
    },
  },
})