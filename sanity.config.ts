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
            S.listItem()
              .title('Filters')
              .child(
                S.list()
                  .title('Filters')
                  .items([
                    orderableDocumentListDeskItem({
                      type: 'filterCategory',
                      title: 'Categorieën',
                      S,
                      context,
                    }),
                    S.listItem()
                      .title('Opties per categorie')
                      .child(
                        S.documentTypeList('filterCategory')
                          .title('Kies een categorie')
                          .defaultOrdering([{field: 'orderRank', direction: 'asc'}])
                          .child((categoryId) => {
                            const item = orderableDocumentListDeskItem({
                              type: 'filterOption',
                              title: 'Opties',
                              filter: 'category._ref == $categoryId',
                              params: {categoryId},
                              id: `filterOption-${categoryId}`,
                              S,
                              context,
                            })
                            // The function returns a serialized ListItem, extract its child
                            return (item as any).child
                          })
                      ),
                  ])
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) =>
                !['solution', 'filterCategory', 'filterOption'].includes(
                  item.getId() ?? ''
                )
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
