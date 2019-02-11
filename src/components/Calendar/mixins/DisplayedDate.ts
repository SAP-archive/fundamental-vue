import { monthFromDate, Month } from "./../util";
import Vue from "vue";
import { PropValidator } from "vue/types/options";

const defaultDayNames = ["Su", "M", "Tu", "W", "Th", "F", "S"];
const defaultMonthNames = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "Jun.",
  "Jul",
  "Aug.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec."
];

export default Vue.extend({
  props: {
    defaultValue: {
      type: [Date, String, Number] as any,
      default: Date.now()
    } as PropValidator<Date | string | number>,
    firstDayOfWeek: { type: Number, default: 0 } as PropValidator<number>,
    dayNames: { type: Array, default: () => defaultDayNames } as PropValidator<
      string[]
    >,
    monthNames: {
      type: Array,
      default: () => defaultMonthNames
    } as PropValidator<string[]>
  },
  data() {
    return {
      displayedDate:
        typeof this.defaultValue === "string" ||
        typeof this.defaultValue === "number"
          ? new Date(this.defaultValue)
          : this.defaultValue
    };
  },
  computed: {
    month(): Month {
      const date = this.displayedDate;
      return monthFromDate(date, { firstDayOfWeek: this.firstDayOfWeek });
    },
    adjustedDayNames(): string[] {
      return this.dayNames
        .concat(this.dayNames)
        .slice(this.firstDayOfWeek, this.firstDayOfWeek + 7);
    },
    displayedYear: {
      get(): number {
        return this.displayedDate.getFullYear();
      },
      set(year: number) {
        const copy = new Date(this.displayedDate);
        copy.setFullYear(year);
        this.displayedDate = copy;
      }
    },
    displayedMonth: {
      set(month: number) {
        const copy = new Date(this.displayedDate);
        copy.setMonth(month);
        this.displayedDate = copy;
      },
      get(): number {
        const date = this.displayedDate;
        return date.getMonth();
      }
    }
  }
});
