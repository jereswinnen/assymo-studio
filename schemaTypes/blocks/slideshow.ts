import {defineField, defineType} from 'sanity'

export const slideshowType = defineType({
  name: 'slideshow',
  title: 'Slideshow',
  type: 'object',
  fields: [
    defineField({
      name: 'background',
      title: 'Achtergrond',
      type: 'boolean',
      description: 'Toon een grijze achtergrond met extra padding',
      initialValue: false,
    }),
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
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare({images}) {
      const count = Array.isArray(images) ? images.length : 0
      const firstImage = images && images[0]
      return {
        title: 'Slideshow',
        subtitle: `${count} image${count !== 1 ? 's' : ''}`,
        media: firstImage,
      }
    },
  },
})