import {defineField, defineType} from 'sanity'
import {iconOptions} from '../shared/icons'

export const splitSectionType = defineType({
  name: 'splitSection',
  title: 'Split Section',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      validation: (rule) => rule.required().min(2).max(2),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              validation: (rule) => rule.required(),
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link URL',
              type: 'url',
              validation: (rule) =>
                rule.required().uri({
                  allowRelative: true,
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            }),
            defineField({
              name: 'action',
              title: 'Action Button',
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (rule) =>
                    rule.custom((value, context) => {
                      const parent = context.parent as {label?: string} | undefined
                      if (parent && !value) {
                        return 'Label is required when action is defined'
                      }
                      return true
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
                  initialValue: 'secondary',
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      item0Title: 'items.0.title',
      item1Title: 'items.1.title',
    },
    prepare({item0Title, item1Title}) {
      const title = [item0Title, item1Title].filter(Boolean).join(' | ') || 'Split Section'
      return {
        title,
        subtitle: 'Split Section',
      }
    },
  },
})
