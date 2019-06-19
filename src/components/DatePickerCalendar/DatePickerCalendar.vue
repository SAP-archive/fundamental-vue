<template>
  <fd-calendar
    v-fd-margin:tiny
    :mode="mode"
    :value="value"
    @input="takeValueFromCalendar"
  ></fd-calendar>
</template>

<script>
import FdCalendar from "./../Calendar/Calendar.vue";
import createNullDate from "./../../util/date/create-null-date";

export default {
  name: "FdDatePickerCalendar",
  inject: ["$_fdDatePicker"],
  components: { FdCalendar },
  watch: {
    datePickerMode: {
      immediate: true,
      handler(mode) {
        this.mode = mode;
      }
    },
    datePickerValue: {
      immediate: true,
      deep: true,
      handler(value) {
        this.value = value;
      }
    }
  },
  methods: {
    takeValueFromCalendar(value) {
      this.value = value;
      this.$emit("input", this.value);
      this.datePicker.setValue(value);
    }
  },
  computed: {
    datePicker() {
      return this.$_fdDatePicker;
    },
    datePickerMode() {
      return this.datePicker.mode;
    },
    datePickerValue() {
      return this.datePicker.value;
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
