import {defineType, defineField} from 'sanity'

export const filterCategoryType = defineType({
  name: 'filterCategory',
  title: 'Filter Categorieën',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Naam',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
      description: 'URL-vriendelijke naam (bijv. "type", "stijl")',
    }),
    defineField({
      name: 'order',
      title: 'Volgorde',
      type: 'number',
      initialValue: 0,
      description: 'Lagere nummers worden eerst getoond',
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
