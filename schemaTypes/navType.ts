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
          title: 'Nav Link',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titel',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'slug',
              title: 'URL (stukje achter domeinnaam)',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'submenuHeading',
              title: 'Submenu Koptekst',
              type: 'string',
              description: 'Bijv. "Ontdek"',
            }),
            defineField({
              name: 'subItems',
              title: 'Submenu Items',
              type: 'array',
              of: [{type: 'reference', to: [{type: 'solution'}]}],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              slug: 'slug',
            },
            prepare({title, slug}) {
              return {
                title: title || '(untitled)',
                subtitle: slug ? `/${slug}` : '',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      links: 'links',
    },
    prepare({links}) {
      const count = Array.isArray(links) ? links.length : 0
      return {
        title: 'Navigatie',
        subtitle: `${count} link${count === 1 ? '' : 's'}`,
      }
    },
  },
})
