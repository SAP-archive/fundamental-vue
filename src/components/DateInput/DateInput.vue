<template>
  <fd-input :value="displayedValue" @change="dateInputChanged" />
</template>

<script>
import FdInput from "./../Form/Controls/Input.vue";
import DefaultDateFormatter from "./formatter/date-formatter";
import DefaultDateRangeFormatter from "./formatter/date-range-formatter";
import DefaultDateParser from "./parser/date-parser";
import DefaultDateRangeParser from "./parser/date-range-parser";
import { NormalizedDate } from "./../../util/date/normalized-date";

// Allows the user to enter a single date or a date range in text form.
export default {
  name: "FdDateInput",
  components: { FdInput },
  data() {
    return {
      normalizedDate: this.value,
      displayedInputValue: ""
    };
  },
  computed: {
    displayedValue: {
      get() {
        const { mode, normalizedDate, dateFormatter, dateRangeFormatter } = this;
        if (mode === "single") {
          return dateFormatter(NormalizedDate.from(normalizedDate).start);
        }
        return dateRangeFormatter(NormalizedDate.from(normalizedDate).asStartEndValue());
      },
      set(newDateString) {
        const { mode, dateParser, dateRangeParser, normalizedDate } = this;
        if (mode === "single") {
          normalizedDate.to = null;
          normalizedDate.from = dateParser(newDateString);
        }
        if (mode === "range") {
          const range = dateRangeParser(newDateString);
          normalizedDate.from = range.from;
          normalizedDate.to = range.to;
        }
        this.emitCurrentValue();
      }
    },
    dateValue() {
      return this.dateParser(this.displayedInputValue);
    }
  },
  watch: {
    value: {
      deep: true,
      handler(value) {
        this.normalizedDate.from = value.from;
        this.normalizedDate.to = value.to;
      }
    }
  },
  methods: {
    emitCurrentValue() {
      // Emitted whenever the date or range has been confirmed by the user.
      // @arg An object with two keys: `from` and `to` – both can be either `null` or `Date`. In `single`-mode only `from` will be a `Date`.
      this.$emit("input", NormalizedDate.from(this.normalizedDate).asFromToValue());
    },
    dateInputChanged(inputString) {
      this.displayedValue = inputString;
    }
  },
  props: {
    // Input mode – 'single' allows the user to input a single date, 'range' allows the user to enter a date range.
    mode: {
      // `'range'` / `'single'`
      type: String,
      validator: value => ["range", "single"].indexOf(value) >= 0,
      default: "single"
    },
    // The value – can be a range or a single date – however in both cases an object with `from`- and `to`-properties is expected.
    value: {
      // The value-object should have the following shape:
      // ```typescript
      // { from?: Date, to?: Date }
      // ```
      type: Object,
      // Defaults to the 'null-date': `{ from?: Date, to?: Date }`
      default: () => ({ from: null, to: null })
    },
    // Custom date formatter – should return a string for a given `Date`.
    dateFormatter: {
      // `date => string`
      type: Function,
      // A default date formatter provided by the framework.
      default: DefaultDateFormatter
    },
    // Custom date range formatter.
    // Should return a string for a given date range:
    // ```typescript
    // { from?: Date, to?: Date }
    // ```
    dateRangeFormatter: {
      // `({from?: Date, to?: Date}) => string`
      type: Function,
      // A default date range formatter provided by the framework.
      default: DefaultDateRangeFormatter
    },
    // Custom date parser – should return a `Date` for a given `String`.
    dateParser: {
      // `String => Date`
      type: Function,
      // A default date parser provided by the framework.
      default: DefaultDateParser
    },
    // Custom date range parser – should return a date range for a given `String`.
    dateRangeParser: {
      // `String => ({from?: Date, to?: Date})`
      type: Function,
      // A default date range parser provided by the framework.
      default: DefaultDateRangeParser
    }
  }
};
</script>
