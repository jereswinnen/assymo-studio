import {defineField, defineType} from 'sanity'

export const siteParametersType = defineType({
  name: 'siteParameters',
  title: 'Site Parameters',
  type: 'document',
  fields: [
    defineField({name: 'address', title: 'Adres', type: 'text'}),
    defineField({name: 'vatNumber', title: 'BTW-nummer', type: 'string'}),
    defineField({name: 'phone', title: 'Telefoonnummer', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'email'}),
    defineField({name: 'instagram', title: 'Instagram URL', type: 'url'}),
    defineField({name: 'facebook', title: 'Facebook URL', type: 'url'}),
  ],
  preview: {
    prepare() {
      return {
        title: 'Parameters',
      }
    },
  },
})
