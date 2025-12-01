import {defineField, defineType} from 'sanity'
import {iconOptions} from '../shared/icons'

export const pageHeaderType = defineType({
  name: 'pageHeader',
  title: 'Page Header',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'background',
      title: 'Achtergrond',
      type: 'boolean',
      description: 'Toon een grijze achtergrond met de header afbeelding van de pagina',
      initialValue: false,
    }),
    defineField({
      name: 'showButtons',
      title: 'Show Buttons',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      hidden: ({parent}) => !parent?.showButtons,
      validation: (rule) => rule.max(2),
      of: [
        {
          type: 'object',
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
              title: 'Icon',
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
                  {title: 'Primary', value: 'primary'},
                  {title: 'Secondary', value: 'secondary'},
                ],
              },
              initialValue: 'primary',
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'variant',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Page Header',
        subtitle: 'Page Header',
      }
    },
  },
})
