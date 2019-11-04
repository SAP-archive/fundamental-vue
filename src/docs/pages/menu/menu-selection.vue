<template>
  <div>
    <div v-fd-margin:medium.bottom>
      Highlighted Menu Item Id:
      <span v-fd-font-weight:bold>{{ highlightedItem }}</span>
    </div>
    <fd-menu highlights-selection ref="menu" @highlight="highlightedItem = $event.uid">
      <fd-menu-list separated>
        <FdMenuItem>Option 1</FdMenuItem>
        <FdMenuItem>Option 2</FdMenuItem>
        <FdMenuItem>Option 3</FdMenuItem>
        <FdMenuItem>Option 4</FdMenuItem>
      </fd-menu-list>
    </fd-menu>
    <div>
      <fd-button @click="highlightPrevious" styling="light">← Highlight Previous</fd-button>
      <fd-button @click="highlightNext" styling="light">Highlight Next →</fd-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highlightedItem: 'none'
    }
  },
  methods: {
    highlightNext() {
      this.$refs.menu.highlightNextItem()
    },
    highlightPrevious() {
      this.$refs.menu.highlightPreviousItem()
    }
  }
}
</script>
