<template>
  <div>
    <p class="fd-has-text-align-center" v-fd-font-weight:bold>selected id: {{ selectedId }}</p>
    <br />
    <fd-side-nav :selectedId.sync="selectedId">
      <fd-side-nav-list :items="items">
        <template #item="item">
          <fd-side-nav-item>
            <fd-side-nav-link>
              {{ item.name }}
            </fd-side-nav-link>
            <template #subItem="subItem">
              <fd-side-nav-sub-item>
                <fd-side-nav-sub-link>
                  {{ subItem.name }}
                </fd-side-nav-sub-link>
              </fd-side-nav-sub-item>
            </template>
          </fd-side-nav-item>
        </template>
      </fd-side-nav-list>
    </fd-side-nav>
  </div>
</template>

<script>
export default {
  methods: {
    to(subItem) {
      return {
        path: this.$route.path,
        query: {
          subItemId: subItem.id
        }
      };
    }
  },
  data() {
    return {
      selectedId: "A-3",
      items: [
        { name: "Item A-1" },
        {
          name: "Item A-2",
          children: [{ name: "Item A-2-1" }, { name: "Item A-2-2" }, { name: "Item A-2-3" }]
        },
        {
          id: "A-3",
          name: "Item A-3",
          children: [{ name: "Item A-3-1" }, { name: "Item A-3-2" }, { name: "Item A-3-3" }]
        },
        {
          name: "Item A-4",
          children: [{ name: "Item A-4-1" }, { name: "Item A-4-2" }, { name: "Item A-4-3" }]
        },
        { name: "Item A-5" }
      ]
    };
  }
};
</script>
