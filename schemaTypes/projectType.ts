import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'solution',
  title: 'Realisaties',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Ondertitel',
      type: 'string',
      description: 'Korte beschrijving voor de scroller',
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
      name: 'filters',
      title: 'Filters',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'filterOption'}]}],
      description: 'Selecteer de filter opties die van toepassing zijn',
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
        {type: 'flexibleSection'},
      ],
    }),
  ],
})
