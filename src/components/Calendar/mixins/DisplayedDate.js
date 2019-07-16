import { monthFromDate } from "./../util";

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

export default {
  props: {
    defaultValue: {
      type: [Date, String, Number],
      default: Date.now()
    },
    firstDayOfWeek: { type: Number, default: 0 },
    dayNames: { type: Array, default: () => defaultDayNames },
    monthNames: {
      type: Array,
      default: () => defaultMonthNames
    }
  },
  data() {
    return {
      displayedDate:
        typeof this.defaultValue === "string" || typeof this.defaultValue === "number"
          ? new Date(this.defaultValue)
          : this.defaultValue
    };
  },
  computed: {
    month() {
      const date = this.displayedDate;
      return monthFromDate(date, { firstDayOfWeek: this.firstDayOfWeek });
    },
    adjustedDayNames() {
      return this.dayNames
        .concat(this.dayNames)
        .slice(this.firstDayOfWeek, this.firstDayOfWeek + 7);
    },
    displayedYear: {
      get() {
        return this.displayedDate.getFullYear();
      },
      set(year) {
        const copy = new Date(this.displayedDate);
        copy.setFullYear(year);
        this.displayedDate = copy;
      }
    },
    displayedMonth: {
      set(month) {
        const copy = new Date(this.displayedDate);
        copy.setMonth(month);
        this.displayedDate = copy;
      },
      get() {
        const date = this.displayedDate;
        return date.getMonth();
      }
    }
  }
};
