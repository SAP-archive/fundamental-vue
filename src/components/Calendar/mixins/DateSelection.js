import { earlierDate, laterDate } from "./../util";

const selectionModeMapping = { single: "single", range: "range" };
const SelectionModes = Object.keys(selectionModeMapping);

export default {
  model: {
    prop: "selection",
    event: "change"
  },
  props: {
    selectionMode: {
      type: String,
      validator: mode => SelectionModes.indexOf(mode) >= 0,
      default: "single"
    },
    selection: { type: Array, default: () => [] }
  },
  data() {
    return {
      currentDateSelection: this.selection
    };
  },
  watch: {
    selection: {
      immediate: true,
      handler(newSelection) {
        this.currentDateSelection = newSelection;
      }
    }
  },
  computed: {
    dateSelectionNeedsReset() {
      return this.currentDateSelection.length === 2;
    },
    selectionStart() {
      if (this.currentDateSelection.length === 0) {
        return null;
      }
      if (this.currentDateSelection.length === 1) {
        return this.currentDateSelection[0];
      }
      const [from, to] = this.currentDateSelection;
      return earlierDate(from, to);
    },

    selectionEnd() {
      if (this.currentDateSelection.length === 0) {
        return null;
      }
      if (this.currentDateSelection.length === 1) {
        return this.currentDateSelection[0];
      }
      const [from, to] = this.currentDateSelection;
      return laterDate(from, to);
    }
  },
  methods: {
    selectionContains(date) {
      const { selectionStart: start, selectionEnd: end } = this;
      if (start == null || end == null) {
        return false;
      }
      const startDate = start.getTime();
      const endDate = end.getTime();
      const time = date.getTime();
      return time >= startDate && time <= endDate;
    },

    selectionContainsYear(year) {
      const { selectionStart: start, selectionEnd: end } = this;
      if (start == null && end == null) {
        return false;
      }
      if (start != null && end != null) {
        return year >= start.getFullYear() && year <= end.getFullYear();
      }
      if (start != null) {
        return start.getFullYear() === year;
      }
      if (end != null) {
        return end.getFullYear() === year;
      }
      return false;
    },

    selectionContainsMonth(month) {
      const { selectionStart: start, selectionEnd: end } = this;
      if (start == null && end == null) {
        return false;
      }
      if (start != null && end != null) {
        return month >= start.getMonth() && month <= end.getMonth();
      }
      if (start != null) {
        return start.getMonth() === month;
      }
      if (end != null) {
        return end.getMonth() === month;
      }
      return false;
    },
    resetSelection() {
      this.currentDateSelection = [];
      this.$emit("change", this.currentDateSelection);
    },
    emitCurrentSelection() {
      this.$emit("change", this.currentDateSelection);
    },

    selectDate(date) {
      if (this.selectionMode === "single") {
        this.currentDateSelection = [date];
        this.emitCurrentSelection();
        return;
      }

      if (this.dateSelectionNeedsReset) {
        this.resetSelection();
      }

      const [selectionFrom] = this.currentDateSelection;
      if (selectionFrom == null) {
        this.currentDateSelection = [date];
        this.emitCurrentSelection();
        return;
      }
      this.currentDateSelection = [...this.currentDateSelection, date];
      this.emitCurrentSelection();
    }
  }
};
