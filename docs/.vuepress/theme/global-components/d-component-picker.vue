<template>
  <div class="d-component-picker">
    <fd-input-group-search class="d-component-picker__search-input">
      <template #input>
        <input
          ref="searchInput"
          v-model="predicate"
          type="search"
          placeholder="Enter Component…"
        />
      </template>
      <template #clear>
        <fd-input-group-clear-button @click="clearSearch" />
      </template>
    </fd-input-group-search>

    <fd-virtualized-list
      @update:selectedItem="selectComponentApiPage"
      :size-dependencies="['item.componentName']"
      key-field="key"
      :items="$_matchingPages"
      style="height: 300px;"
      :min-item-size="20"
    >
      <template #item="{ item, index }">
        <fd-tile style="background-color: transparent;" is-button>
          <fd-tile-content>
            <fd-tile-title>
                {{ item.path }}
            </fd-tile-title>
          </fd-tile-content>
        </fd-tile>
      </template>
    </fd-virtualized-list>
  </div>
</template>

<script>
export default {
  computed: {
    $_apiPages() {
      return this.$site.pages.filter(page => page.path.startsWith("/api/"));
    },
    $_matchingPages() {
      const { predicate } = this;
      return this.$_apiPages.filter(({ path }) =>
        path.toLowerCase().includes(predicate.toLowerCase())
      );
    }
  },
  methods: {
    clearSearch() {
      this.predicate = "";
      this.$refs.searchInput.focus();
    },
    selectComponentApiPage(page) {
      const key = page == null ? null : page.key;
      this.selectedComponentPageKey = key;
      this.$emit("input", page);
    }
  },
  data() {
    return {
      selectedComponentPageKey: null,
      predicate: ""
    };
  }
};
</script>

<style scoped lang="scss">
.d-component-picker__search-input {
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
}
.d-component-picker {
  width: 320px;
}
</style>
