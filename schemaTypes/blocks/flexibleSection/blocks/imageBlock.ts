import {defineField, defineType} from 'sanity'

export const flexImageBlockType = defineType({
  name: 'flexImageBlock',
  title: 'Afbeelding Blok',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Afbeelding',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Tekst',
          type: 'string',
          validation: (rule) => rule.required().error('Alt tekst is verplicht voor toegankelijkheid'),
        }),
      ],
    }),
    defineField({
      name: 'caption',
      title: 'Onderschrift',
      type: 'string',
    }),
    defineField({
      name: 'aspectRatio',
      title: 'Beeldverhouding',
      type: 'string',
      options: {
        list: [
          {title: 'Origineel', value: 'original'},
          {title: '16:9', value: '16/9'},
          {title: '4:3', value: '4/3'},
          {title: '1:1 (Vierkant)', value: '1/1'},
          {title: '3:4 (Staand)', value: '3/4'},
        ],
      },
      initialValue: 'original',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Afbeelding',
        subtitle: 'Afbeelding Blok',
        media,
      }
    },
  },
})
