<template>
  <div class="fd-calendar__dates" aria-hidden="false">
    <table class="fd-calendar__table" role="grid">
      <thead class="fd-calendar__group">
        <tr class="fd-calendar__row">
          <th v-for="dayName in dayNames" :key="dayName" class="fd-calendar__column-header">
            <span class="fd-calendar__day-of-week">{{ dayName }}</span>
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
            :mode="mode"
            :state="state(date)"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import sameDay from "./../../../util/date/same-day";
import CalendarItem from "./../CalendarItem.vue";
import Mode from "./../../../util/date/mode";

export default {
  components: { CalendarItem },
  props: {
    ...Mode.prop,
    dayNames: {
      type: Array,
      required: true
    },
    month: {
      type: Array,
      default: () => []
    },
    isPresent: {
      type: Function,
      default: () => false
    },
    selectionEnd: { type: Date, default: null },
    selectionStart: { type: Date, default: null },
    displayedMonth: { type: Number, default: 1 },
    disabledDate: {
      type: Function,
      default: () => false
    },
    blockedDate: {
      type: Function,
      default: () => false
    },
    selectionContainsDate: {
      type: Function,
      default: () => false
    }
  },
  methods: {
    state(date) {
      if (this.disabledDate(date)) {
        return "disabled";
      }
      if (this.blockedDate(date)) {
        return "blocked";
      }
      const { selectionStart, selectionEnd } = this;
      const isFirst = selectionStart != null ? sameDay(date, selectionStart) : false;
      const isLast = selectionEnd != null ? sameDay(date, selectionEnd) : false;
      const isFirstAndLast = isFirst && (isLast || this.mode === Mode.single);
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
    modifier(date) {
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
};
</script>
