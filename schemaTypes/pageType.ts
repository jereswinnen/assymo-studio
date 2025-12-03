import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
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
        {type: 'slideshow'},
        {type: 'pageHeader'},
        {type: 'splitSection'},
        {type: 'uspSection'},
        {type: 'solutionsScroller'},
      ],
    }),
  ],
})
