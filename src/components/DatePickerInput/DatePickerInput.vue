<template>
  <fd-date-input :mode="mode" v-model="value" />
</template>

<script>
import FdDateInput from "./../DateInput/DateInput.vue";
import createNullDate from "./../../util/date/create-null-date";

export default {
  name: "FdDatePickerInput",
  components: { FdDateInput },
  inject: ["$_fdDatePicker"],
  computed: {
    datePicker() {
      return this.$_fdDatePicker;
    },
    datePickerValue() {
      return this.datePicker.value;
    },
    datePickerMode() {
      return this.datePicker.mode;
    }
  },
  watch: {
    value: {
      handler(value) {
        this.$_fdDatePicker.setValue(value);
      }
    },
    mode: {
      handler(mode) {
        this.$_fdDatePicker.mode = mode;
      }
    },
    datePickerValue: {
      deep: true,
      immediate: true,
      handler(value) {
        this.value = value;
      }
    },
    datePickerMode: {
      immediate: true,
      handler(mode) {
        this.mode = mode;
      }
    }
  },
  data() {
    return {
      value: createNullDate(),
      mode: "single"
    };
  }
};
</script>
