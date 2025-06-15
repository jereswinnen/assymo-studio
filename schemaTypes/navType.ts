import {defineField, defineType} from 'sanity'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navigatie',
  type: 'document',
  fields: [
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          name: 'navLink',
          title: 'Navighatielink',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Naam',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'string',
              description: 'Slug of the page (e.g. "about", "contact", "home")',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
