<template>
  <div class="fd-calendar__months" aria-hidden="{false}">
    <ul class="fd-calendar__list">
      <CalendarItem
        v-for="(month, index) in monthNames"
        :key="month"
        tag="li"
        :text="month"
        :state="selectionContainsMonth(index) ? 'selected' : null"
        :modifier="presentMonth === index ? 'current' : null"
        @click="$emit('select', index)"
      />
    </ul>
  </div>
</template>

<script>
import CalendarItem from "./../CalendarItem.vue";

export default {
  components: { CalendarItem },
  props: {
    monthNames: Array,
    presentMonth: { type: Number, default: 0 },
    selectionContainsMonth: {
      type: Function,
      default: () => false
    }
  }
};
</script>
