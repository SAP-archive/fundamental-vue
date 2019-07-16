<script>
import Mode from "./../../util/date/mode";

// Map modifier to CSS class name
const calendarItemModifierMapping = {
  // Apply to dates outside the current month
  otherMonth: "fd-calendar__item--other-month",
  // Apply to the current today, this month, this year'
  current: "fd-calendar__item--current",
  // Cannot be selected, usually applied to a large range of past or future dates
  disabled: "fd-calendar__item--disabled"
  // Cannot be selected, usually applied to blackout or booked dates mixed in with available dates
  // blocked: 'fd-calendar__item--blocked',
};
const CalendarItemModifiers = Object.keys(calendarItemModifierMapping);
const CalendarItemModifierValidator = value =>
  value === null || CalendarItemModifiers.indexOf(value) >= 0;

// Map modifier to CSS class name
const calendarItemStateMapping = {
  disabled: "is-disabled",
  blocked: "is-blocked",
  // Currently selected date AND the first and last dates in a range
  selected: "is-selected",
  // A date in the range between the first and last selected dates
  selectedRange: "is-selected-range",
  // The first date in a selected range
  selectedRangeFirst: "is-selected-range-first",
  // The last date in a selected range
  selectedRangeLast: "is-selected-range-last"
};
const CalendarItemStates = Object.keys(calendarItemStateMapping);
const CalendarItemStatesValidator = value =>
  value === null || CalendarItemStates.indexOf(value) >= 0;

export default {
  name: "FdCalendarItem",
  props: {
    ...Mode.prop,
    tag: { type: String, default: "td" },
    text: { type: String, default: "" },
    modifier: {
      type: String,
      validator: CalendarItemModifierValidator,
      default: null
    },
    state: {
      type: String,
      validator: CalendarItemStatesValidator,
      default: null
    }
  },
  computed: {
    classes() {
      const state = this.state;
      const isFirstOrLast = state === "selectedRangeFirst" || state === "selectedRangeLast";
      const stateClasses = [
        ...(isFirstOrLast ? [calendarItemStateMapping.selected] : []),
        ...(state != null ? [calendarItemStateMapping[state]] : [])
      ];
      const modifier = this.modifier;
      return stateClasses.concat(modifier == null ? [] : calendarItemModifierMapping[modifier]);
    }
  },
  render(h) {
    const vm = this;
    return h(
      this.tag,
      {
        on: {
          click(event) {
            // We don't want to emit a click if the item is disabled or blocked.
            const state = vm.state || "";
            if (["disabled", "blocked"].indexOf(state) >= 0) {
              event.stopImmediatePropagation();
              return;
            }
            vm.$emit("click");
          }
        },
        staticClass: "fd-calendar__item",
        class: vm.classes
      },
      [
        h("span", { staticClass: "fd-calendar__text" }, this.text) // render item text
      ]
    );
  }
};
</script>
