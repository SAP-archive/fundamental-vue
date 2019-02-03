<template>
  <div class="fd-calendar__dates" aria-hidden="false">
    <table class="fd-calendar__table" role="grid">
      <thead class="fd-calendar__group">
        <tr class="fd-calendar__row">
          <th v-for="dayName in dayNames" :key="dayName" class="fd-calendar__column-header">
            <span class="fd-calendar__day-of-week">{{dayName}}</span>
          </th>
        </tr>
      </thead>
      <tbody class="fd-calendar__group">
        <tr class="fd-calendar__row" v-for="(week, index) in month" :key="String('week-' + index)">
          <CalendarItem
            v-for="date in week"
            :key="date.toString()"
            @click="$emit('select', date)"
            :text="String(date.getDate())"
            :modifier="modifier(date)"
            :state="state(date)"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Month, sameDay } from "./../util";
import { PropValidator } from "vue/types/options";
import { Prop } from "vue/types/options";
import CalendarItem from './../CalendarItem.vue';

type DateFn = (date: Date) => boolean;

export default Vue.extend({
  components: { CalendarItem },
  props: {
    dayNames: Array as Prop<string[]>,
    month: { type: Array, default: () => [] } as PropValidator<Month>,
    isPresent: {
      // if we use type: Function typescript complains and I don't know why
      validator: (value: any) => value != null && typeof value === "function",
      default: () => false
    } as PropValidator<DateFn>,
    selectionEnd: { type: Date, default: null } as PropValidator<Date | null>,
    selectionStart: { type: Date, default: null } as PropValidator<Date | null>,
    displayedMonth: { type: Number, default: 1 } as PropValidator<number>,
    disabledDate: {
      validator: (value: any) => value != null && typeof value === "function",
      default: () => false
    },
    blockedDate: {
      validator: (value: any) => value != null && typeof value === "function",
      default: () => false
    },
    selectionContainsDate: {
      validator: (value: any) => value != null && typeof value === "function",
      default: () => false
    }
  },
  methods: {
    state(date: Date): string | null {
      if (this.disabledDate(date)) {
        return "disabled";
      }
      if (this.blockedDate(date)) {
        return "blocked";
      }
      const { selectionStart, selectionEnd } = this;
      const isFirst =
        selectionStart != null ? sameDay(date, selectionStart) : false;
      const isLast = selectionEnd != null ? sameDay(date, selectionEnd) : false;
      const isFirstAndLast = isFirst && isLast;
      if (isFirstAndLast) {
        return "selected";
      }
      if (isFirst) {
        return "selectedRangeFirst";
      }
      if (isLast) {
        return "selectedRangeLast";
      }
      if (this.selectionContainsDate(date)) {
        return "selectedRange";
      }
      return null;
    },
    modifier(date: Date): string | null {
      const isOtherMonth = this.displayedMonth !== date.getMonth();
      const isPresent = this.isPresent(date);
      if (isOtherMonth) {
        return "otherMonth";
      }
      if (isPresent) {
        return "current";
      }
      return null;
    }
  }
});
</script>
