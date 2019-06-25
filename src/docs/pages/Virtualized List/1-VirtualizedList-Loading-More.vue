<title>Lazy Loading Virtualized List</title>

<docs>
You don't have to tell `fd-virtualized-list` all of your items in advance. You can simply give `fd-virtualized-list` only a few items, just enough to fill it up completely. Once the user has scrolled to the bottom of the list you are asked to provide more items.

This works by passing an item loader by using the `load-more-items`-prop. Typically this prop is simply a method in your component.

This method will automatically be alled by `fd-virtualized-list` once more items are required in order to let the user continue to scroll.

Your method that loads more items is invoked with a callback that has to be called. A typical method that loads more items and can be used in conjunction with `load-more-items` may look like this:

```js
{
  data() {
    return { items: [/* your items */]}
  },
  methods: {
    loadMoreItems(done) {
      // Load more items…
      const newItems = this.fetchItemsFromBackend();
      // Add the new items to your items-array:
      this.items.push(...newItems);
      // Call done.
      done()
    }
  }
}
```

Between `loadMoreItems` is invoked and you calling `done` `fd-virtualized-list` is in a loading state and displays a spinner (`fd-spinner`) at the very bottom. This can be customized by specifying a custom `loading`-slot.
</docs>

<tip>
The example below loads new items for ever and ever. You will never reach the end. Sorry.
</tip>

<template>
  <fd-virtualized-list
    :min-item-size="30"
    :items="items"
    :load-more-items="loadMoreItems"
    style="height: 400px;"
    key-field="id"
  >
    <template #item="{ item, index }">
      <div style="padding: 20px;">{{ item.title }}[{{ index }}]</div>
    </template>
  </fd-virtualized-list>
</template>

<script>
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

const createItem = maxIndex => ({
  title: `Item at Index ${maxIndex}`,
  id: `${maxIndex}`
});

const createItems = (maxIndex, count) => {
  const indices = Array.from({ length: count }).map(
    (_, index) => index + maxIndex
  );
  return indices.map(index => createItem(index));
};

export default {
  methods: {
    loadMoreItems(done) {
      setTimeout(() => {
        this.items.push(...createItems(this.items.length, 20));
        done();
      }, 2000);
    }
  },
  data() {
    return {
      items: createItems(0, 20)
    };
  }
};
</script>
