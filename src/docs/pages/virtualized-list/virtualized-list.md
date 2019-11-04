---
fdRelatedComponents:
  - fd-virtualized-list
---

# Virtualized List

You can use `fd-virtualized-list` when you need to display a lot of data in a scrollable list. `fd-virtualized-list` only renders what is currently on your screen. Offscreen data is not rendered. Thus scrolling through your list should be very efficient. `fd-virtualized-list` depends on a 3rd-party (open source) library called [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller). *Fundamental Vue* does not include a copy of [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller). It is up to you to properly setup [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller).

Your `items`-array must have some kind of unique identifier. Use the `key-field`-prop to specify the name of the property.

::: tip

You also have to install [vue-observe-visibility](https://github.com/Akryum/vue-observe-visibility) because `fd-virtualized-list` requires the `v-observe-visibility`-directive.

:::

## Simple Virtualized List

<d-example name="virtualized-list-default">
</d-example>

## Lazy Loading Virtualized List


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

::: tip

The example below loads new items for ever and ever. You will never reach the end. Sorry.

:::

<d-example name="virtualized-list-loading-more">
</d-example>

## Initial Load

<d-example name="virtualized-list-initial-load">
</d-example>

## Resetting a Virtualized List

<d-example name="virtualized-list-reset">
</d-example>

## Filtering a Virtualized List

<d-example name="virtualized-list-filter">
</d-example>

## Adding/Removing Items from a Virtualized List

You can modify the `items`-array directly in order to add/remove items. The rules as described in the [Vue Reactivity Guide](https://vuejs.org/v2/guide/reactivity.html) still apply.

If you click on `[Add Item]` a new item will be appened to the beginning of the `items`-array.
If an item is selected, clicking on `[Add Item]` will insert an item right below the current selection.
Clicking on `[Remove Item]` will remove the currently selected item from the list.

<d-example name="virtualized-list-mutate">
</d-example>