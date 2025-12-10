import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'assymo-studio',

  projectId: 'naj44gzh',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'solution',
              title: 'Realisaties',
              S,
              context,
            }),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'solution'
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
