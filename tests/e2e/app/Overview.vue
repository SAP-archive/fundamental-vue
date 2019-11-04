<template>
  <div>
    <ul>
      <li v-for="page in pages" :key="page.to">
        <router-link :to="page.to">{{ page.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.pageNames.map(pageName => ({
        to: `/pages/${pageName}`,
        title: pageName
      }))
    }
  },
  props: {
    pageNames: {
      type: Array
    }
  }
}
</script>
