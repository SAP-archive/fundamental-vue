<template>
  <fd-side-nav class="side-nav" mode="router">
    <fd-side-nav-list :items="[{ title: 'start' }]">
      <template #item="item">
        <fd-side-nav-item>
          <fd-side-nav-link
            data-side-nav-link
            class="side-nav-item__link"
            as-router-link
            to="/"
          >
            {{ item.title }}
          </fd-side-nav-link>
        </fd-side-nav-item>
      </template>
    </fd-side-nav-list>
    <fd-side-nav-list :items="examplePages">
      <template #item="item">
        <fd-side-nav-item>
          <fd-side-nav-link
            data-side-nav-link
            class="side-nav-item__link"
            as-router-link
            :to="item.regularPath"
          >
            {{ sideNavTitleForExamplePage(item) }}
          </fd-side-nav-link>
        </fd-side-nav-item>
      </template>
    </fd-side-nav-list>
  </fd-side-nav>
</template>

<script>
export default {
  props: {
    examplePages: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    sideNavTitleForExamplePage({ relativePath }) {
      const components = relativePath.split("/");
      const exampleMdFile = components[1]; // button.md
      return exampleMdFile.substring(0, exampleMdFile.length - 3);
    }
  }
};
</script>

<style lang="scss">
.side-nav {
  max-width: 250px;
  min-width: 250px;
  padding-top: 30px;
  padding-bottom: 100px; /* so that users can scroll beyond the last item */
  box-shadow: inset 0 -20px 10px #cccccc;
  .side-nav-item__link {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 3px;
    padding-bottom: 3px;
    margin: 1px;
  }
}

.side-nav-item__link[data-side-nav-link]:hover {
  background-color: rgba(168, 168, 168, 0.1);
}
</style>
