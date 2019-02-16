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

<script lang="ts">
import Vue from "vue";
import { Prop, PropValidator } from "vue/types/options";
import CalendarItem, { CalendarItemState } from "./../CalendarItem.vue";

export default Vue.extend({
  components: { CalendarItem },
  props: {
    maxDate: Date as Prop<Date>,
    minDate: Date as Prop<Date>,
    years: { type: Array as any, default: () => [] } as PropValidator<any>,
    presentYear: { type: Number, default: 0 } as PropValidator<any>,
    selectionContainsYear: {
      type: Function as any,
      default: () => false
    } as PropValidator<(year: number) => boolean>
  },
  methods: {
    isValidYear(year: number): boolean {
      const maxYear = this.maxDate.getFullYear();
      const minYear = this.minDate.getFullYear();
      return year <= maxYear && year >= minYear;
    },
    stateForYear(year: number): CalendarItemState | null {
      if (this.isValidYear(year) === false) {
        return "disabled";
      }
      return this.selectionContainsYear(year) ? "selected" : null;
    }
  }
});
</script>
