<template>
  <FdSideNav class="side-nav" mode="router">
    <FdSideNavList :items="staticPages" />
    <FdSideNavGroup>
      <FdSideNavGroupTitle>Examples</FdSideNavGroupTitle>
      <FdSideNavList :items="examplePages" />
    </FdSideNavGroup>
  </FdSideNav>
</template>

<script>
export default {
  computed: {
    examplePages() {
      const pages = this.$docLoader.pages;
      return pages.map(page => {
        return {
          id: page.slug,
          name: page.title,
          icon: page.icon,
          to: {
            name: "example",
            params: { slug: page.slug }
          }
        };
      });
    },
    staticPages() {
      return [
        { id: "start", name: "Start", icon: "home", to: "/start" },
        {
          id: "new-component",
          name: "New Component Guide",
          icon: "write-new",
          to: "/guide/new-component"
        }
      ];
    }
  }
};
</script>

<style>
.side-nav {
  max-width: 250px;
  min-width: 250px;
}
</style>
