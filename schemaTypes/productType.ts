import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'solution',
  title: 'Solutions',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
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
      name: 'headerImage',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Legacy Body Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Old content - migrate to sections when possible',
      hidden: true,
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {type: 'textLeftImageRight'},
        {type: 'textRightImageLeft'},
        {type: 'textCentered'},
        {type: 'kaart'},
        {type: 'slideshow'},
        {type: 'slideshowLeftTextRight'},
        {type: 'slideshowRightTextLeft'},
        {type: 'productGrid'},
      ],
    }),
  ],
})
