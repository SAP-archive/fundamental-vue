<template>
  <div class="fd-date-picker">
    <fd-popover
      :flips="false"
      body-style=""
      body-size-mode="at-least-trigger"
      placement="bottom-end"
    >
      <template #control="{ toggle }">
        <fd-input-group>
          <template #input>
            <slot name="input">
              <fd-date-picker-input />
            </slot>
          </template>
          <template #after>
            <fd-input-group-addon>
              <fd-input-group-button @click="toggle" icon="calendar" />
            </fd-input-group-addon>
          </template>
        </fd-input-group>
      </template>
      <template #default>
        <slot name="calendar">
          <fd-date-picker-calendar v-fd-margin:tiny />
        </slot>
      </template>
    </fd-popover>
  </div>
</template>

<script>
import FdDatePickerInput from "./../DatePickerInput/DatePickerInput.vue";
import FdPopover from "./../Popover/Popover.vue";
import FdDatePickerCalendar from "./../DatePickerCalendar/DatePickerCalendar.vue";
import FdInputGroup from "./../InputGroup/InputGroup.vue";
import FdInputGroupAddon from "./../InputGroup/InputGroupAddon.vue";
import FdInputGroupButton from "./../InputGroup/InputGroupButton.vue";
import Vue from "vue";
import createNormalizedDate from "./../../util/date/normalized-date";
import createNullDate from "./../../util/date/create-null-date";

export default {
  name: "FdDatePicker",
  components: {
    FdDatePickerInput,
    FdDatePickerCalendar,
    FdInputGroup,
    FdInputGroupAddon,
    FdInputGroupButton,
    FdPopover
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(value) {
        this.state.value.from = value.from;
        this.state.value.to = value.to;
      }
    },
    mode: {
      immediate: true,
      deep: true,
      handler(mode) {
        this.state.mode = mode;
      }
    }
  },
  provide() {
    return {
      $_fdDatePicker: {
        mode: this.state.mode,
        value: this.state.value,
        setValue: this.setValue
      }
    };
  },
  methods: {
    setValue(value) {
      this.state.value.from = value.from;
      this.state.value.to = value.to;
      this.$emit("input", {
        from: this.state.value.from,
        to: this.state.value.to
      });
    }
  },
  data() {
    return {
      state: Vue.observable({
        value: {
          from: createNormalizedDate(this.value).asFromToValue().from,
          to: createNormalizedDate(this.value).asFromToValue().to
        },
        mode: this.mode
      })
    };
  },
  props: {
    // The date-value represented by this date picker
    value: {
      // `{ from?: Date, to?: Date }`
      type: Object,
      // `{ from: null, to: null }`
      default: createNullDate
    },
    // Selection mode
    mode: {
      // `single` / `range`
      type: String,
      // `single` – only a single date can be selected
      default: "single"
    }
  }
};
</script>
