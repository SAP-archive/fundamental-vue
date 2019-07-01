<template>
  <div class="fdd-component-picker">
    <fd-input-group-search class="fdd-component-picker__search-input">
      <template #input>
        <input ref="searchInput" v-model="predicate" type="search" placeholder="Enter Component…" />
      </template>
      <template #clear>
        <fd-input-group-clear-button @click="clearSearch" />
      </template>
    </fd-input-group-search>

    <fd-virtualized-list
      @update:selectedItem="selectComponentItem"
      :size-dependencies="['item.displayableComponentName']"
      key-field="key"
      :items="matchingItems"
      style="height: 300px;"
      :min-item-size="20"
    >
      <template #item="{ item, index }">
        <d-component-api-link :component-name="item.componentName">
          <template #default="{to}">
            <router-link tag="div" :to="to" @click="selectComponentItem(item)">
              <fd-tile transparent is-button>
                <fd-tile-content>
                  <fd-tile-title>
                    {{ item.displayableComponentName }}
                  </fd-tile-title>
                </fd-tile-content>
              </fd-tile>
            </router-link>
          </template>
        </d-component-api-link>
      </template>
    </fd-virtualized-list>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      const documentedComponents = this.$documentedComponents;
      return documentedComponents.map(documentedComponent => ({
        componentName: documentedComponent.componentName,
        route: documentedComponent.route,
        key: documentedComponent.key,
        displayableComponentName: documentedComponent.componentName.displayable
      }));
    },
    matchingItems() {
      const { predicate } = this;
      return this.items.filter(({ displayableComponentName }) =>
        displayableComponentName.toLowerCase().includes(predicate.toLowerCase())
      );
    }
  },
  methods: {
    clearSearch() {
      this.predicate = "";
      this.$refs.searchInput.focus();
    },
    selectComponentItem(item) {
      // const key = item == null ? null : item.key;
      // this.selectedComponentKey = key;
      this.$emit("select", item);
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

<style lang="scss">
.fdd-component-picker__search-input {
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  margin-bottom: 10px;
}
.fdd-component-picker {
  width: 320px;
}
</style>
