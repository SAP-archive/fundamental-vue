<template>
  <div class="fd-calendar__months" aria-hidden="{false}">
    <CalendarGrid :numberOfColumns="4" :items="monthNames">
      <template #item="{item: month, index}">
        <CalendarItem
          :key="month"
          tag="li"
          :text="month"
          :state="selectionContainsMonth(index) ? 'selected' : null"
          :modifier="presentMonth === index ? 'current' : null"
          @click="$emit('select', index)"
        />
      </template>
    </CalendarGrid>
  </div>
</template>

<script>
import CalendarItem from './../calendar-item.vue'
import CalendarGrid from './../calendar-grid.vue'

export default {
  components: { CalendarGrid, CalendarItem },
  props: {
    monthNames: Array,
    presentMonth: { type: Number, default: 0 },
    selectionContainsMonth: {
      type: Function,
      default: () => false
    }
  }
}
</script>
