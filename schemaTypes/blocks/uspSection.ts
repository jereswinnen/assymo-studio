import {defineField, defineType} from 'sanity'
import {iconOptions} from '../shared/icons'

export const uspSectionType = defineType({
  name: 'uspSection',
  title: 'USP Sectie',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Sectie Titel',
      type: 'string',
    }),
    defineField({
      name: 'usps',
      title: 'USPs',
      type: 'array',
      validation: (rule) => rule.max(5),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icoon',
              type: 'string',
              options: {
                list: iconOptions,
              },
            }),
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Tekst',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'showLink',
              title: 'Toon Link',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'link',
              title: 'Link URL',
              type: 'url',
              description: 'Als dit de laatste USP is, wordt deze als link weergegeven',
              hidden: ({parent}) => !parent?.showLink,
              validation: (rule) =>
                rule.uri({
                  allowRelative: true,
                  scheme: ['http', 'https'],
                }),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'icon',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: title || 'USP Sectie',
        subtitle: 'USP Sectie',
      }
    },
  },
})
