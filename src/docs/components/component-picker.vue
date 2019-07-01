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
      @update:selectedItem="selectComponentItem"
      :size-dependencies="['item.componentName']"
      key-field="key"
      :items="matchingComponents"
      style="height: 300px;"
      :min-item-size="20"
    >
      <template #item="{ item, index }">
        <fd-tile
          style="background-color: transparent;"
          is-button
          :title="item.displayableComponentName"
        ></fd-tile>
      </template>
    </fd-virtualized-list>
  </div>
</template>

<script>
export default {
  computed: {
    componentItems() {
      const keys = this.$componentApiRepository.keys;
      return keys.map(this.itemFromKey);
    },
    matchingComponents() {
      const { predicate } = this;
      return this.componentItems.filter(({ displayableComponentName }) =>
        displayableComponentName.toLowerCase().includes(predicate.toLowerCase())
      );
    }
  },
  methods: {
    itemFromKey(key) {
      const displayableComponentName = this.$componentApiRepository.displayableComponentName(
        key
      );
      return {
        key,
        displayableComponentName
      };
    },
    clearSearch() {
      this.predicate = "";
      this.$refs.searchInput.focus();
    },
    selectComponentItem(item) {
      const key = item == null ? null : item.key;
      this.selectedComponentKey = key;
      this.$emit("input", this.selectedComponentKey);
    }
  },
  data() {
    return {
      selectedComponentKey: null,
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
