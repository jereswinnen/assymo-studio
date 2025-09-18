import {defineField, defineType} from 'sanity'

export const textLeftImageGridRightType = defineType({
  name: 'textLeftImageGridRight',
  title: 'Tekst links, grid rechts',
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
    defineField({
      name: 'images',
      title: 'Image Grid',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Important for SEO and accessibility',
            }),
          ],
        }),
      ],
      validation: (rule) => rule.max(4).error('Maximaal 4 afbeeldingen'),
      description: 'Toon maximaal 4 afbeeldingen in een grid',
    }),
  ],
  preview: {
    select: {
      title: 'content.heading',
      images: 'images',
    },
    prepare({title, images}) {
      const count = Array.isArray(images) ? images.length : 0
      return {
        title: title || 'Tekst links, grid rechts',
        subtitle: `${count}/4 afbeeldingen`,
      }
    },
  },
})
