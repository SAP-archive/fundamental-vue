<title>Adding/Removing Items from a Virtualized List</title>
<docs>
You can modify the `items`-array directly in order to add/remove items. The rules as described in the [Vue Reactivity Guide](https://vuejs.org/v2/guide/reactivity.html) still apply.

If you click on `[Add Item]` a new item will be appened to the beginning of the `items`-array.
If an item is selected, clicking on `[Add Item]` will insert an item right below the current selection.
Clicking on `[Remove Item]` will remove the currently selected item from the list.
</docs>
<template>
  <div>
    <fd-button @click="add">Add Item</fd-button>
    <fd-button @click="remove" :state="canRemove ? 'normal' : 'disabled'">Remove Item</fd-button>

    <fd-virtualized-list
      @update:selectedItem="selectedItem = $event"
      @update:items="items = $event"
      :min-item-size="30"
      :items="items"
      :load-more-items="loadMoreItems"
      :total-item-count="40000"
      :size-dependencies="['item.title']"
      key-field="id"
      style="height: 400px;"
    >
      <template #item="{ item, index }">
        <fd-tile transparent is-button>
          <fd-tile-content>
            <fd-tile-title>#{{ index }} {{ item.title }}</fd-tile-title>
          </fd-tile-content>
        </fd-tile>
      </template>
    </fd-virtualized-list>
  </div>
</template>

<script>
const createItem = maxIndex => ({
  title: `Item at Index ${maxIndex}`,
  id: `${maxIndex}`
});

const createItems = (maxIndex, count) => {
  const indices = Array.from({ length: count }).map((_, index) => index + maxIndex);
  return indices.map(index => createItem(index));
};

export default {
  computed: {
    canRemove() {
      return this.selectedItem != null;
    }
  },
  methods: {
    // Trying to add an item below the selected one. If there is no selection we add the item to the beginning
    add() {
      const { selectedItem, items } = this;
      if (selectedItem == null) {
        items.unshift(createItem(items.length));
      } else {
        const insertionIndex = items.findIndex(({ id }) => id === selectedItem.id);
        items.splice(insertionIndex, 0, createItem(items.length));
      }
    },
    remove() {
      const { selectedItem, items } = this;
      if (selectedItem == null) {
        return;
      }
      const deletionIndex = items.findIndex(({ id }) => id === selectedItem.id);
      items.splice(deletionIndex, 1);
    },
    loadMoreItems(done) {
      setTimeout(() => {
        const { items } = this;
        const maxIndex = items.length;
        const newItems = createItems(maxIndex, 10);
        items.push(...newItems);
        done();
      }, 2000);
    }
  },
  data() {
    return {
      selectedItem: { id: null, title: null },
      items: createItems(0, 10)
    };
  }
};
</script>
