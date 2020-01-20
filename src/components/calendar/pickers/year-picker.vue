<template>
  <div class="fd-calendar__years" aria-hidden="{false}">
    <CalendarGrid :numberOfColumns="4" :items="years">
      <template #item="{ item: year }">
        <CalendarItem
          :key="String(year)"
          tag="li"
          :text="String(year)"
          :state="stateForYear(year)"
          :modifier="presentYear === year ? 'current' : null"
          @click="$emit('select', year)"
        />
      </template>
    </CalendarGrid>
  </div>
</template>

<script>
import CalendarItem from './../calendar-item.vue'
import CalendarGrid from './../calendar-grid.vue'

export default {
  components: {
    CalendarGrid,
    CalendarItem
  },
  props: {
    maxDate: Date,
    minDate: Date,
    years: { type: Array, default: () => [] },
    presentYear: { type: Number, default: 0 },
    selectionContainsYear: {
      type: Function,
      default: () => false
    }
  },
  methods: {
    isValidYear(year) {
      const maxYear = this.maxDate.getFullYear()
      const minYear = this.minDate.getFullYear()
      return year <= maxYear && year >= minYear
    },
    stateForYear(year) {
      if (this.isValidYear(year) === false) {
        return 'disabled'
      }
      return this.selectionContainsYear(year) ? 'selected' : null
    }
  }
}
</script>
