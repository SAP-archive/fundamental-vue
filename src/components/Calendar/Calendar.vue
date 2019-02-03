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

<script lang="ts">
import { PropValidator } from "vue/types/options";
import {
  PresentDateMixin,
  DisplayedDateMixin,
  DateSelectionMixin
} from "./mixins";
import { mixins } from "@/mixins2";
import CalendarHeader from "./CalendarHeader.vue";
import { DayPicker, MonthPicker, YearPicker } from "./Pickers";

type CheckDateFn = (date: Date) => boolean;
type CheckRangeFn = (range: { min: Date; max: Date }) => boolean;
type ValidationRequest = { min: Date; max: Date };

enum PickerType {
  year = "year",
  month = "month"
}

const dateWithYearsFromNow = (numberOfYears: number) => {
  const date = new Date(Date.now());
  date.setFullYear(date.getFullYear() + numberOfYears);
  return date;
};

export default mixins(
  PresentDateMixin,
  DisplayedDateMixin,
  DateSelectionMixin
).extend({
  name: "FdCalendar",
  components: { DayPicker, MonthPicker, YearPicker, CalendarHeader },
  props: {
    // Ugly type castings... :(
    headerVisible: { type: Boolean, default: true } as PropValidator<boolean>,
    maxDate: {
      type: Date,
      default: () => dateWithYearsFromNow(10)
    } as PropValidator<Date>,
    minDate: {
      type: Date,
      default: () => dateWithYearsFromNow(-10)
    } as PropValidator<Date>,
    disabledDate: {
      type: Function as any,
      default: () => false
    } as PropValidator<CheckDateFn>,
    blockedDate: {
      type: Function as any,
      default: () => false
    } as PropValidator<CheckDateFn>,
    hasPrevious: {
      type: Function as any,
      default: () => true
    } as PropValidator<CheckRangeFn>,
    hasNext: {
      type: Function as any,
      default: () => true
    } as PropValidator<CheckRangeFn>
  },
  computed: {
    yearPickerYears(): number[] {
      return Array.from({ length: 12}).map((_, index) => (this.displayedYear + (index - 6)));
    },
    currentRange(): { min: Date; max: Date } {
      const month = this.month;
      const lastWeek = month[month.length - 1];
      const min = month[0][0];
      const max = lastWeek[lastWeek.length - 1];
      return {
        min,
        max
      };
    },
    displayedMonthName(): string | null {
      const month = this.displayedMonth;
      if (month == null) {
        return null;
      }
      return this.monthNames[month];
    }
  },
  data() {
    return {
      currentPicker: null as PickerType | null
    };
  },
  methods: {
    previousButtonEnabled(): boolean {
      const range = this.currentRange;
      return this.hasPrevious(range) && this.minDateValidator(range);
    },
    nextButtonEnabled(): boolean {
      const range = this.currentRange;
      return this.hasNext(range) && this.maxDateValidator(range);
    },
    nextYear(): void {
      const delta = this.currentPicker === PickerType.month ? 1 : 12;
      const copy = new Date(this.displayedDate);
      copy.setFullYear(this.displayedDate.getFullYear() + delta);
      this.displayedDate = copy;
    },
    displayPreviousYear(): void {
      const delta = this.currentPicker === PickerType.month ? 1 : 12;
      const copy = new Date(this.displayedDate);
      copy.setFullYear(this.displayedDate.getFullYear() - delta);
      this.displayedDate = copy;
    },
    displayNextMonth(): void {
      const copy = new Date(this.displayedDate);
      copy.setMonth(this.displayedDate.getMonth() + 1);
      this.displayedDate = copy;
    },
    displayPreviousMonth(): void {
      const copy = new Date(this.displayedDate);
      copy.setMonth(this.displayedDate.getMonth() - 1);
      this.displayedDate = copy;
    },
    didClickDate(date: Date): void {
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
    didClickOnMonth(month: number) {
      this.displayedMonth = month;
      this.currentPicker = null;
    },
    didClickOnYear(year: number) {
      this.displayedYear = year;
      this.currentPicker = null;
    },
    maxDateValidator({ max }: ValidationRequest): boolean {
      return max.getFullYear() <= this.maxDate.getFullYear();
    },
    minDateValidator({ min }: ValidationRequest): boolean {
      return min.getFullYear() >= this.minDate.getFullYear();
    },
    togglePicker(pickerType: PickerType): void {
      if (this.currentPicker === pickerType) {
        this.currentPicker = null;
        return;
      }
      this.currentPicker = pickerType;
    },
    toggleMonthPicker(): void {
      this.togglePicker(PickerType.month);
    },
    toggleYearPicker(): void {
      this.togglePicker(PickerType.year);
    }
  }
});
</script>
