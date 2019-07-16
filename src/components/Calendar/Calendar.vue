<template>
  <div class="fd-calendar">
    <CalendarHeader
      v-if="headerVisible"
      :month="displayedMonthName || ''"
      :year="displayedYear"
      :hasNext="nextButtonEnabled"
      :hasPrevious="previousButtonEnabled"
      @previous="previous"
      @next="next"
      @month="toggleMonthPicker"
      @year="toggleYearPicker"
    />

    <div class="fd-calendar__content">
      <MonthPicker
        v-if="currentPicker == 'month'"
        :monthNames="monthNames"
        :presentMonth="presentMonth"
        :selectionContainsMonth="selectionContainsMonth"
        @select="didClickOnMonth"
      />
      <DayPicker
        v-if="currentPicker == null"
        :dayNames="adjustedDayNames"
        :month="month"
        :selectionEnd="selectionEnd"
        :selectionStart="selectionStart"
        :displayedMonth="displayedMonth"
        :disabledDate="disabledDate"
        :blockedDate="blockedDate"
        :isPresent="isPresent"
        :selectionContainsDate="selectionContains"
        :mode="mode"
        @select="didClickDate"
      />
      <YearPicker
        v-if="currentPicker === 'year'"
        :minDate="minDate"
        :maxDate="maxDate"
        :years="yearPickerYears"
        :presentYear="presentYear"
        :selectionContainsYear="selectionContainsYear"
        @select="didClickOnYear"
      />
    </div>
  </div>
</template>

<script>
import { NormalizedDate } from "./../../util/date/normalized-date";
import sameDay from "./../../util/date/same-day";
import { DisplayedDateMixin } from "./mixins";
import CalendarHeader from "./CalendarHeader.vue";
import { DayPicker, MonthPicker, YearPicker } from "./Pickers";
import Mode from "./../../util/date/mode";

const PickerType = {
  year: "year",
  month: "month"
};

const dateWithYearsFromNow = numberOfYears => {
  const date = new Date(Date.now());
  date.setFullYear(date.getFullYear() + numberOfYears);
  return date;
};

const createToday = () => new Date(Date.now());

// Calendar component – usualy not used on it's own but in combination with `fd-date-picker`.
export default {
  name: "FdCalendar",
  mixins: [DisplayedDateMixin],
  components: {
    DayPicker,
    MonthPicker,
    YearPicker,
    CalendarHeader
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(value) {
        this.normalizedDate.from = value.from;
        this.normalizedDate.to = value.to;
      }
    }
  },
  props: {
    ...Mode.prop,
    // Date value that represents today.
    today: {
      type: Date,
      // `new Date(Date.now())` – today
      default: createToday
    },
    // Normalized value that is currently selected.
    value: {
      // `{ from: null, to: null }`
      type: Object,
      // `{ from: null, to: null }` – the `null`-date.
      default: () => ({ from: null, to: null })
    },
    // Whether or not the header is visible
    headerVisible: {
      type: Boolean,
      default: true
    },
    // Maximum date handled by the calendar.
    maxDate: {
      type: Date,
      // 10 years from today
      default: () => dateWithYearsFromNow(10)
    },
    // Minimum date handled by the calendar.
    minDate: {
      type: Date,
      // -10 years from today
      default: () => dateWithYearsFromNow(-10)
    },
    // Allows you to disable specific dates
    disabledDate: {
      // `disabledDate(date: Date): boolean` – return `true` for the corresponding date to disable it.
      type: Function,
      // `() => false` – by default no date is disabled.
      default: () => false
    },
    // Allows you to block specific dates
    blockedDate: {
      // `blockedDate(date: Date): boolean` – return `true` for the corresponding date to block it.
      type: Function,
      // `() => false` – by default no date is blocked.
      default: () => false
    },
    hasPrevious: {
      type: Function,
      default: () => true
    },
    hasNext: {
      type: Function,
      default: () => true
    }
  },
  computed: {
    normalizedDate_() {
      return NormalizedDate.from(this.normalizedDate);
    },
    dateSelectionNeedsReset() {
      return this.normalizedDate_.isComplete;
    },
    selectionStart() {
      return this.normalizedDate_.start;
    },
    selectionEnd() {
      return this.normalizedDate_.end;
    },
    yearPickerYears() {
      return Array.from({ length: 12 }).map((_, index) => this.displayedYear + (index - 6));
    },
    currentRange() {
      const month = this.month;
      const lastWeek = month[month.length - 1];
      const min = month[0][0];
      const max = lastWeek[lastWeek.length - 1];
      return {
        min,
        max
      };
    },
    displayedMonthName() {
      const month = this.displayedMonth;
      if (month == null) {
        return null;
      }
      return this.monthNames[month];
    }
  },
  data() {
    return {
      normalizedDate: NormalizedDate.from(this.value).asFromToValue(),
      currentPicker: null
    };
  },
  methods: {
    isPresent(date) {
      return sameDay(this.today, date);
    },
    selectionContains(date) {
      return this.normalizedDate_.contains(date);
    },
    selectionContainsYear(year) {
      return this.normalizedDate_.containsYear(year);
    },
    selectionContainsMonth(month) {
      return this.normalizedDate_.containsMonth(month);
    },
    resetSelection() {
      this.normalizedDate.from = null;
      this.normalizedDate.to = null;
      this.$emit("input", this.normalizedDate_.asFromToValue());
    },
    emitCurrentSelection() {
      this.$emit("input", this.normalizedDate_.asFromToValue());
    },
    selectDate(date) {
      if (this.mode === Mode.single) {
        this.normalizedDate.from = date;
        this.normalizedDate.to = null;
        this.emitCurrentSelection();
        return;
      }

      // From here on we are only handling range-selections
      if (this.dateSelectionNeedsReset) {
        this.resetSelection();
      }

      const from = this.normalizedDate.from;
      if (from == null) {
        this.normalizedDate.from = date;
        this.emitCurrentSelection();
        return;
      }
      this.normalizedDate.to = date;
      this.emitCurrentSelection();
    },
    previousButtonEnabled() {
      const range = this.currentRange;
      return this.hasPrevious(range) && this.minDateValidator(range);
    },
    nextButtonEnabled() {
      const range = this.currentRange;
      return this.hasNext(range) && this.maxDateValidator(range);
    },
    nextYear() {
      const delta = this.currentPicker === PickerType.month ? 1 : 12;
      const copy = new Date(this.displayedDate);
      copy.setFullYear(this.displayedDate.getFullYear() + delta);
      this.displayedDate = copy;
    },
    displayPreviousYear() {
      const delta = this.currentPicker === PickerType.month ? 1 : 12;
      const copy = new Date(this.displayedDate);
      copy.setFullYear(this.displayedDate.getFullYear() - delta);
      this.displayedDate = copy;
    },
    displayNextMonth() {
      const copy = new Date(this.displayedDate);
      // fixes: https://github.com/SAP/fundamental-vue/issues/324
      copy.setDate(1);
      copy.setMonth(this.displayedDate.getMonth() + 1);
      this.displayedDate = copy;
    },
    displayPreviousMonth() {
      const copy = new Date(this.displayedDate);
      // fixes: https://github.com/SAP/fundamental-vue/issues/324
      copy.setDate(1);
      copy.setMonth(this.displayedDate.getMonth() - 1);
      this.displayedDate = copy;
    },
    didClickDate(date) {
      this.selectDate(date);
    },
    next() {
      if (this.currentPicker == null) {
        this.displayNextMonth();
        return;
      }
      this.nextYear();
    },
    previous() {
      if (this.currentPicker == null) {
        this.displayPreviousMonth();
        return;
      }
      this.displayPreviousYear();
    },
    didClickOnMonth(month) {
      this.displayedMonth = month;
      this.currentPicker = null;
    },
    didClickOnYear(year) {
      this.displayedYear = year;
      this.currentPicker = null;
    },
    maxDateValidator({ max }) {
      return max.getFullYear() <= this.maxDate.getFullYear();
    },
    minDateValidator({ min }) {
      return min.getFullYear() >= this.minDate.getFullYear();
    },
    togglePicker(pickerType) {
      if (this.currentPicker === pickerType) {
        this.currentPicker = null;
        return;
      }
      this.currentPicker = pickerType;
    },
    toggleMonthPicker() {
      this.togglePicker(PickerType.month);
    },
    toggleYearPicker() {
      this.togglePicker(PickerType.year);
    }
  }
};
</script>
