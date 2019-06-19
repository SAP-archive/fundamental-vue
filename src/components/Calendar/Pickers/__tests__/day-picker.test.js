import { mount } from "@vue/test-utils";
import FdDayPicker from "./../DayPicker.vue";
import { monthFromDate } from "./../../util";
import sameDay from "./../../../../util/date/same-day";
import createNormalizedDate from "./../../../../util/date/normalized-date";

/**
 * @typedef {Object} CreateOptions
 * @prop {"single" | "range"} mode
 * @prop {Date} today
 * @prop {Date} from
 * @prop {Date?} to
 */

/** @param {CreateOptions} options */
const createDayPicker = options => {
  const { mode, today, from, to = null } = options;

  return mount({
    components: { FdDayPicker },
    template: `
      <fd-day-picker
        :month="month"
        :day-names="dayNames"
        :mode="mode"
        :displayedMonth="displayedMonth"
        :selectionStart="selectionStart"
        :selectionEnd="selectionEnd"
        :selectionContainsDate="selectionContainsDate"
        :isPresent="isPresent"
      />
    `,
    methods: {
      isPresent(date) {
        return sameDay(this.today, date);
      },
      selectionContainsDate(date) {
        const selection = {
          from: this.selectionStart,
          to: this.selectionEnd
        };
        return createNormalizedDate(selection).contains(date);
      }
    },
    computed: {
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
    },
    data() {
      const selectionStart = from;
      const month = monthFromDate(today);
      const dayNames = ["Su", "M", "Tu", "W", "Th", "F", "S"];
      return {
        displayedDate: today,
        today,
        month,
        dayNames,
        mode,
        selectionStart,
        selectionEnd: to
      };
    }
  });
};

describe("fd-day-picker", () => {
  it("renders single selection correctly", () => {
    const wrapper = createDayPicker({
      mode: "single",
      today: new Date("2019-06-20"),
      from: new Date("2019-06-21")
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders multiple selection correctly", () => {
    const wrapper = createDayPicker({
      mode: "range",
      today: new Date("2019-06-20"),
      from: new Date("2019-06-21"),
      to: new Date("2019-06-24")
    });
    expect(wrapper.element).toMatchSnapshot("range selection");
  });
});
