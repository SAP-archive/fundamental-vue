<template>
  <div class="fd-calendar__years" aria-hidden="{false}">
    <ul class="fd-calendar__list">
      <CalendarItem
        v-for="year in years"
        :key="String(year)"
        tag="li"
        :text="String(year)"
        :state="stateForYear(year)"
        :modifier="presentYear === year ? 'current' : null"
        @click="$emit('select', year)"
      />
    </ul>
  </div>
</template>

<script>
import CalendarItem from "./../CalendarItem.vue";

export default {
  components: { CalendarItem },
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
      const maxYear = this.maxDate.getFullYear();
      const minYear = this.minDate.getFullYear();
      return year <= maxYear && year >= minYear;
    },
    stateForYear(year) {
      if (this.isValidYear(year) === false) {
        return "disabled";
      }
      return this.selectionContainsYear(year) ? "selected" : null;
    }
  }
};
</script>
