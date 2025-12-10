import {defineType, defineField} from 'sanity'
import {orderRankField} from '@sanity/orderable-document-list'

export const filterCategoryType = defineType({
  name: 'filterCategory',
  title: 'Filter Categorieën',
  type: 'document',
  fields: [
    orderRankField({type: 'filterCategory', newItemPosition: 'after'}),
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
  ],
  preview: {
    select: {title: 'name'},
  },
})
