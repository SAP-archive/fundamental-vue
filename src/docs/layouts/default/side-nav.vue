<template>
  <div class="side-nav">
    <FdNestedList compact>
      <FdNestedListGroupHeader>Installation & Guide</FdNestedListGroupHeader>
      <FdNestedListItem v-for="page in staticPages" :key="page.id">
        <FdNestedListLink exact :to="page.to">
          <FdNestedListTitle>
            {{ page.name }}
          </FdNestedListTitle>
        </FdNestedListLink>
      </FdNestedListItem>
      <FdNestedListGroupHeader>Examples & API</FdNestedListGroupHeader>
      <FdNestedListItem
        v-for="collectionRoute in $root.$options.fdExampleRoutes"
        :key="collectionRoute.meta.id"
      >
        <FdNestedListLink exact :to="toCollection(collectionRoute)">
          <FdNestedListTitle>
            {{ deslugify(collectionRoute.path) }}
          </FdNestedListTitle>
        </FdNestedListLink>

        <FdNestedList
          v-if="collectionRoute.children != null && collectionRoute.children.length > 0"
        >
          <FdNestedListItem v-for="childPage in collectionRoute.children" :key="childPage.meta.id">
            <FdNestedListLink exact :to="toExample(collectionRoute, childPage)">
              <FdNestedListTitle>
                {{ deslugify(childPage.path) }}
              </FdNestedListTitle>
            </FdNestedListLink>
          </FdNestedListItem>
        </FdNestedList>
      </FdNestedListItem>
    </FdNestedList>
  </div>
</template>

<script>
import { getExamplePages, pageKeys } from './../../pages/pages'
import deslugify from './../../util/deslugify'
/**
 * @param {import('./../../pages/types').LoadablePage} page
 */
function examplePageFromLoadablePage(page) {
  const pages = page.pages.map(examplePageFromLoadablePage)
  return {
    id: page.key,
    name: page.title,
    to: {
      path: `/examples/${page.path}`
    },
    pages
  }
}

export default {
  data() {
    return {
      pageKeys: pageKeys
    }
  },
  methods: {
    deslugify(value) {
      return deslugify(value)
    },
    hasChildren(route) {
      return route.children != null
    },
    toCollection(collection) {
      return {
        path: `/examples/${collection.path}`
      }
    },
    toExample(collection, page) {
      return {
        path: `${this.toCollection(collection).path}/${page.path}`
      }
    }
  },
  computed: {
    staticPages() {
      return [
        { id: 'start', name: 'Start', to: '/' },
        {
          id: 'new-component',
          name: 'New Component Guide',
          to: '/guide/new-component'
        },
        {
          id: 'plugin',
          name: 'Plugin',
          to: '/guide/plugin'
        }
      ]
    }
  }
}
</script>

<style>
.side-nav {
  background-color: white;
  padding-bottom: 200px; /* make room so that the user can scroll past the last item in the master nav */
  border-right: 1px solid #d8d8d8;
}
</style>
