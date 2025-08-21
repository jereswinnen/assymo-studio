import {defineField, defineType} from 'sanity'

export const slideshowRightTextLeftType = defineType({
  name: 'slideshowRightTextLeft',
  title: 'Slideshow rechts, tekst links',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Important for SEO and accessibility',
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption for the image',
            }),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1).error('At least one image is required'),
    }),
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
      images: 'images',
    },
    prepare({title, images}) {
      const count = Array.isArray(images) ? images.length : 0
      const firstImage = images && images[0]
      return {
        title: title || 'Slideshow rechts, tekst links',
        subtitle: `Slideshow (${count} images), tekst links`,
        media: firstImage,
      }
    },
  },
})