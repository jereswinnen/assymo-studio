import {defineField, defineType} from 'sanity'

export const productGridType = defineType({
  name: 'productGrid',
  title: 'Oplossingen',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Titel',
      type: 'string',
      description: 'Titel voor de oplossingen sectie',
    }),
    defineField({
      name: 'products',
      title: 'Oplossingen',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'solution'}],
        },
      ],
      validation: (rule) => rule.required().min(1).error('At least one product is required'),
      description: 'Selecteer de oplossingen die je wilt tonen in de sectie',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      products: 'products',
    },
    prepare({heading, products}) {
      const productCount = Array.isArray(products) ? products.length : 0
      const title = heading || 'Oplossingen'
      const subtitle = `${productCount} oplossing${productCount !== 1 ? 'en' : ''}`

      return {
        title,
        subtitle,
      }
    },
  },
})
