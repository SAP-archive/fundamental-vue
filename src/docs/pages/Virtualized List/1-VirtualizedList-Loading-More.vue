<title>Lazy Loading Virtualized List</title>

<docs>
You don't have to tell `fd-virtualized-list` all of your items in advance. You can simply give `fd-virtualized-list` only a few items, just enough to fill it up completely. Once the user has scrolled to the bottom of the list you can lazily load more items.

This works by passing an item loader by using the `load-more-items`-prop. Typically this prop is simply a method in your component.

This method will automatically be alled by `fd-virtualized-list` once more items are required in order to let the user continue scrolling.

Your method that loads more items is invoked with a callback that has to be called. A typical method that loads more items and can be used in conjunction with `load-more-items` may look like this:

```js
{
  methods: {
    loadMoreItems(done) {
      // Load more items and once you are a finished
      // call done and pass it the new items.
      done(additionalItems)
    }
  }
}
```

Between `loadMoreItems` is invoked and you calling `done` `fd-virtualized-list` is in a loading state and displays a spinner (`fd-spinner`) at the bottom of the list. This can be customized by specifying a custom `loading`-slot.
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
  >
    <template #item="{ item, index }">
      <div style="padding: 20px;">{{ item.title }}[{{ index }}]</div>
    </template>
  </fd-virtualized-list>
</template>

<script>
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

export default {
  methods: {
    loadMoreItems(done) {
      setTimeout(() => {
        done([
          { title: "Item A" },
          { title: "Item B" },
          { title: "Item C" },
          { title: "Item D" },
          { title: "Item E" },
          { title: "Item F" },
          { title: "Item G" },
          { title: "Item H" },
          { title: "Item I" },
          { title: "Item J" },
          { title: "Item K" },
          { title: "Item L" }
        ]);
      }, 2000);
    }
  },
  data() {
    return {
      items: [
        { title: "Item A" },
        { title: "Item B" },
        { title: "Item C" },
        { title: "Item D" },
        { title: "Item E" },
        { title: "Item F" },
        { title: "Item G" },
        { title: "Item H" },
        { title: "Item I" },
        { title: "Item J" },
        { title: "Item K" },
        { title: "Item L" }
      ]
    };
  }
};
</script>
