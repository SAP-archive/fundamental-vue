<template>
  <CalendarTable>
    <CalendarRow v-for="rowIndex in rowIndices" :key="keyForRow(rowIndex)">
      <template v-for="item in itemsForRow(rowIndex)">
        <slot name="item" :item="item" :index="indexOfItem(item)" />
      </template>
    </CalendarRow>
  </CalendarTable>
</template>

<script>
import CalendarTable from './calendar-table.vue'
import CalendarRow from './calendar-row.vue'

export default {
  name: 'FdCalendarGrid',
  components: {
    CalendarTable,
    CalendarRow
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    numberOfColumns: {
      type: Number,
      default: 4,
      validator(value) {
        return value != null && value !== 0
      }
    }
  },
  computed: {
    rowIndices() {
      const { items, numberOfColumns } = this
      const numberOfItems = items.length
      if (numberOfItems === 0) {
        return []
      }
      const numberOfRows = Math.ceil(numberOfItems / numberOfColumns)
      return Array.from({ length: numberOfRows }).map((_, index) => index)
    }
  },
  methods: {
    columnIndicesForRow(rowIndex) {
      const { numberOfColumns, items } = this
      const numberOfItems = items.length
      const numberOfConsumedItems = rowIndex * numberOfColumns
      const numberOfRemainingItems = Math.max(0, numberOfItems - numberOfConsumedItems)
      const numberOfItemsPerRow = Math.min(numberOfColumns, numberOfRemainingItems)
      return Array.from({ length: numberOfItemsPerRow }).map((_, index) => index)
    },
    indexOfItem(item) {
      return this.items.indexOf(item)
    },
    keyForRow(index) {
      return `row-${index}`
    },
    itemsForRow(rowIndex) {
      const { numberOfColumns, items } = this
      const numberOfItems = items.length
      const numberOfConsumedItems = rowIndex * numberOfColumns
      const numberOfRemainingItems = Math.max(0, numberOfItems - numberOfConsumedItems)
      const numberOfItemsPerRow = Math.min(numberOfColumns, numberOfRemainingItems)
      const startIndex = numberOfConsumedItems
      const endIndex = startIndex + numberOfItemsPerRow
      return items.slice(startIndex, endIndex)
    }
  }
}
</script>
