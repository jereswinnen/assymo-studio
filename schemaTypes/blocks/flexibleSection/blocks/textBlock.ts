import {defineField, defineType} from 'sanity'
import {iconOptions} from '../../../shared/icons'

export const flexTextBlockType = defineType({
  name: 'flexTextBlock',
  title: 'Tekst Blok',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Koptekst',
      type: 'string',
    }),
    defineField({
      name: 'headingLevel',
      title: 'Koptekst Niveau',
      type: 'string',
      options: {
        list: [
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
        ],
      },
      initialValue: 'h2',
      hidden: ({parent}) => !parent?.heading,
    }),
    defineField({
      name: 'content',
      title: 'Inhoud',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'showButton',
      title: 'Toon Knop',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'button',
      title: 'Knop',
      type: 'object',
      hidden: ({parent}) => !parent?.showButton,
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (rule) => rule.required(),
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
        defineField({
          name: 'icon',
          title: 'Icoon',
          type: 'string',
          options: {
            list: iconOptions,
          },
        }),
        defineField({
          name: 'variant',
          title: 'Variant',
          type: 'string',
          options: {
            list: [
              {title: 'Primair', value: 'primary'},
              {title: 'Secundair', value: 'secondary'},
            ],
          },
          initialValue: 'primary',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      content: 'content',
    },
    prepare({title, content}) {
      const plainText = content?.[0]?.children?.[0]?.text || ''
      return {
        title: title || plainText?.substring(0, 50) || 'Tekst Blok',
        subtitle: 'Tekst',
      }
    },
  },
})
