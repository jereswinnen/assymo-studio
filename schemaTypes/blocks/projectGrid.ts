import {defineField, defineType} from 'sanity'

export const projectGridType = defineType({
  name: 'projectGrid',
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
      name: 'projects',
      title: 'Oplossingen',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'solution'}],
        },
      ],
      validation: (rule) => rule.required().min(1).error('At least one project is required'),
      description: 'Selecteer de oplossingen die je wilt tonen in de sectie',
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      projects: 'projects',
    },
    prepare({heading, projects}) {
      const projectCount = Array.isArray(projects) ? projects.length : 0
      const title = heading || 'Oplossingen'
      const subtitle = `${projectCount} oplossing${projectCount !== 1 ? 'en' : ''}`

      return {
        title,
        subtitle,
      }
    },
  },
})
