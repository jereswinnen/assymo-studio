import {defineField, defineType} from 'sanity'
import {layoutOptions} from './layouts'
import {flexibleBlockTypeNames} from './blocks'

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
      type: 'string',
      options: {
        list: [
          {title: 'Geen', value: 'none'},
          {title: 'Lichtgrijs', value: 'light'},
          {title: 'Donker', value: 'dark'},
        ],
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'verticalPadding',
      title: 'Verticale Ruimte',
      type: 'string',
      options: {
        list: [
          {title: 'Geen', value: 'none'},
          {title: 'Klein', value: 'sm'},
          {title: 'Medium', value: 'md'},
          {title: 'Groot', value: 'lg'},
        ],
      },
      initialValue: 'md',
    }),
    defineField({
      name: 'columnMain',
      title: 'Inhoud',
      type: 'array',
      of: flexibleBlockTypeNames,
      hidden: ({parent}) => parent?.layout !== '1-col',
    }),
    defineField({
      name: 'columnLeft',
      title: 'Linker Kolom',
      type: 'array',
      of: flexibleBlockTypeNames,
      hidden: ({parent}) => parent?.layout === '1-col',
    }),
    defineField({
      name: 'columnRight',
      title: 'Rechter Kolom',
      type: 'array',
      of: flexibleBlockTypeNames,
      hidden: ({parent}) => parent?.layout === '1-col',
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
