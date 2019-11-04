<template>
  <div class="page">
    <button data-cy-highlight-next @click="highlightNext">
      Highlight Next
    </button>
    <button data-cy-highlight-previous @click="highlightPrevious">
      Highlight Previous
    </button>
    <fd-menu
      highlights-selection
      ref="menu"
      :highlightedUid.sync="highlightedUid"
      :selectedUid.sync="selectedUid"
    >
      <fd-menu-list>
        <fd-menu-item data-cy-item-a-0 uid="a-id-0" value="a-value-0">a-title-0</fd-menu-item>
        <fd-menu-item data-cy-item-a-1 uid="a-id-1" value="a-value-1">a-title-1</fd-menu-item>
        <fd-menu-item data-cy-item-a-2 uid="a-id-2" value="a-value-2">a-title-2</fd-menu-item>
      </fd-menu-list>
    </fd-menu>
    <p>
      highlightedUid:
      <span data-highlighted-uid>{{ highlightedUid }}</span>
    </p>
    <p>
      selectedUid:
      <span data-selected-uid>{{ selectedUid }}</span>
    </p>
    <label>
      Highlight Uid:
      <input data-cy-uid-to-highlight type="text" v-model="uidToBeHighlighted" />
    </label>
    <button data-cy-perform-highlight @click="highlightedUid = uidToBeHighlighted">
      Highlight
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    highlightNext() {
      this.$refs.menu.highlightNextItem()
    },
    highlightPrevious() {
      this.$refs.menu.highlightPreviousItem()
    }
  },
  data() {
    return {
      uidToBeHighlighted: null,
      highlightedUid: null,
      selectedUid: null
    }
  }
}
</script>
