<title>Menu Highlight</title>
<docs>
`fd-menu` currently has a limited API to control the highlighting-state. At this moment only two methods are exposed:

1. `highlightNextItem()`: Highlights the next menu item.
2. `highlightPreviousItem()`: Highlights the previous menu item.

You should rarely need to manually call those methods. They are mainly used to support keyboard navigation.
</docs>
<tip>
By setting `highlights-selection` to `true` you tell `fd-menu` that selected items should be highlighted. A highlighted menu item is rendered with a background colored in light-blue.
</tip>
<template>
  <div>
    <div v-fd-margin:medium.bottom>
      Highlighted Menu Item Id:
      <span v-fd-font-weight:bold>{{ highlightedItem }}</span>
    </div>
    <fd-menu
      highlights-selection
      ref="menu"
      @highlight="highlightedItem = $event.uid"
    >
      <fd-menu-list separated>
        <fd-menu-item>Option 1</fd-menu-item>
        <fd-menu-item>Option 2</fd-menu-item>
        <fd-menu-item>Option 3</fd-menu-item>
        <fd-menu-item>Option 4</fd-menu-item>
      </fd-menu-list>
    </fd-menu>
    <div>
      <fd-button @click="highlightPrevious" styling="light"
        >← Highlight Previous</fd-button
      >
      <fd-button @click="highlightNext" styling="light"
        >Highlight Next →</fd-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highlightedItem: "none"
    };
  },
  methods: {
    highlightNext() {
      this.$refs.menu.highlightNextItem();
    },
    highlightPrevious() {
      this.$refs.menu.highlightPreviousItem();
    }
  }
};
</script>
