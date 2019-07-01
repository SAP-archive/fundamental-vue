<template>
  <FdSideNav class="side-nav" mode="router">
    <fd-side-nav-list :items="staticPages">
      <template #item="item">
        <fd-side-nav-item>
          <fd-side-nav-link
            data-side-nav-link
            class="side-nav-item__link"
            as-router-link
            :to="item.to"
          >
            {{ item.name }}
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
            :to="item.to"
          >
            {{ item.name }}
          </fd-side-nav-link>
        </fd-side-nav-item>
      </template>
    </fd-side-nav-list>
  </FdSideNav>
</template>

<script>
import { getExamplePages } from "./../../content/en_us";

export default {
  computed: {
    examplePages() {
      const pages = getExamplePages();
      return pages.map(page => {
        return {
          id: page.key,
          name: page.title,
          to: {
            name: "examples",
            params: { slug: page.slug }
          }
        };
      });
    },
    staticPages() {
      return [
        { id: "start", name: "Start", icon: "home", to: "/" },
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
.side-nav-item__link {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin: 1px;
}

.side-nav-item__link[data-side-nav-link]:hover {
  background-color: rgba(168, 168, 168, 0.1);
}

.side-nav {
  max-width: 250px;
  min-width: 250px;
  padding-top: 30px;
  padding-bottom: 100px; /* so that users can scroll beyond the last item */
  border-right: 1px solid #ebebeb;
}
</style>
