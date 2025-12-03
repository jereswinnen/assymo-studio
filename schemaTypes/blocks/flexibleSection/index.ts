import {defineField, defineType, defineArrayMember} from 'sanity'
import {layoutOptions} from './layouts'

// Inline block definitions for single-select fields
const blockOptions = [
  defineArrayMember({type: 'flexTextBlock'}),
  defineArrayMember({type: 'flexImageBlock'}),
  defineArrayMember({type: 'flexMapBlock'}),
  defineArrayMember({type: 'flexFormBlock'}),
]

export const flexibleSectionType = defineType({
  name: 'flexibleSection',
  title: 'Flexibele Sectie',
  type: 'object',
  fields: [
    defineField({
      name: 'internalName',
      title: 'Interne Naam',
      type: 'string',
      description: 'Alleen zichtbaar in de Studio, niet op de website',
    }),
    defineField({
      name: 'layout',
      title: 'Indeling',
      type: 'string',
      options: {
        list: layoutOptions,
        layout: 'radio',
      },
      initialValue: '1-col',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'background',
      title: 'Achtergrond',
      type: 'boolean',
      description: 'Toon een grijze achtergrond met extra padding',
      initialValue: false,
    }),
    defineField({
      name: 'blockMain',
      title: 'Inhoud',
      type: 'array',
      of: blockOptions,
      hidden: ({parent}) => parent?.layout !== '1-col',
      validation: (rule) => rule.max(1),
    }),
    defineField({
      name: 'blockLeft',
      title: 'Linker Kolom',
      type: 'array',
      of: blockOptions,
      hidden: ({parent}) => parent?.layout === '1-col',
      validation: (rule) => rule.max(1),
    }),
    defineField({
      name: 'blockRight',
      title: 'Rechter Kolom',
      type: 'array',
      of: blockOptions,
      hidden: ({parent}) => parent?.layout === '1-col',
      validation: (rule) => rule.max(1),
    }),
    defineField({
      name: 'verticalAlign',
      title: 'Verticale Uitlijning',
      type: 'string',
      description: 'Uitlijning van de kolommen ten opzichte van elkaar',
      options: {
        list: [
          {title: 'Boven', value: 'start'},
          {title: 'Midden', value: 'center'},
          {title: 'Onder', value: 'end'},
        ],
      },
      initialValue: 'start',
      hidden: ({parent}) => parent?.layout === '1-col',
    }),
  ],
  preview: {
    select: {
      internalName: 'internalName',
      layout: 'layout',
    },
    prepare({internalName, layout}) {
      const layoutLabels: Record<string, string> = {
        '1-col': '1 Kolom',
        '2-col-equal': '2 Kolommen (gelijk)',
        '2-col-left-wide': '2 Kolommen (links breed)',
        '2-col-right-wide': '2 Kolommen (rechts breed)',
      }
      return {
        title: internalName || 'Flexibele Sectie',
        subtitle: layoutLabels[layout] || layout,
      }
    },
  },
})
