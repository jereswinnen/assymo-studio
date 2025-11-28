import {defineType, defineField} from 'sanity'

export const filterOptionType = defineType({
  name: 'filterOption',
  title: 'Filter Opties',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Categorie',
      type: 'reference',
      to: [{type: 'filterCategory'}],
      validation: (rule) => rule.required(),
    }),
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
    }),
    defineField({
      name: 'order',
      title: 'Volgorde',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      category: 'category.name',
    },
    prepare({title, category}) {
      return {
        title,
        subtitle: category,
      }
    },
  },
})
