import {defineField, defineType} from 'sanity'

export const solutionsScrollerType = defineType({
  name: 'solutionsScroller',
  title: 'Oplossingen Scroller',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Titel',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Ondertitel',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: heading || 'Oplossingen Scroller',
        subtitle: 'Toont alle oplossingen',
      }
    },
  },
})
