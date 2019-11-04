<template>
  <div>
    <fd-button data-cy-reset @click="reset">reset</fd-button>
    <fd-virtualized-list
      data-cy-list
      ref="list"
      :min-item-size="30"
      :items="items"
      :total-item-count="1000"
      :load-more-items="loadMoreItems"
      style="height: 400px;"
      key-field="id"
    >
      <template #loading>
        <div data-cy-loading-indicator>Loading Indicator</div>
      </template>
      <template #item="{ item, index }">
        <div data-cy-item style="height: 30px;">{{ item.title }}[{{ index }}]</div>
      </template>
    </fd-virtualized-list>
  </div>
</template>

<script>
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const createItem = index => ({
  index,
  id: `${index}`,
  title: `item ${index}`
})

const createItems = (startIndex, count) => {
  return Array.from({ length: count }).map((_, index) => {
    return createItem(index + startIndex)
  })
}

export default {
  methods: {
    startToLoadMoreItems() {
      this.$refs.list.startToLoadMoreItems()
    },
    reset() {
      this.items = []
    },
    loadMoreItems(done) {
      const that = this
      setTimeout(() => {
        const { items } = that
        items.push(...createItems(items.length, 5))
        done()
      }, 2000)
    }
  },
  data() {
    return {
      items: createItems(0, 30)
    }
  }
}
</script>
