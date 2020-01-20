<template>
  <div>
    <fd-popover
      :flips="false"
      body-style=""
      body-size-mode="at-least-trigger"
      placement="bottom-end"
      :ignoredElements="ignoredElements"
    >
      <template #control="{ toggle }">
        <fd-input-group>
          <template #input>
            <slot name="input">
              <fd-date-picker-input />
            </slot>
          </template>
          <template #after>
            <fd-input-group-addon-button>
              <fd-input-group-button @click="toggle" icon="calendar" />
            </fd-input-group-addon-button>
          </template>
        </fd-input-group>
      </template>
      <template #default>
        <slot name="calendar">
          <fd-date-picker-calendar ref="calendar" />
        </slot>
      </template>
    </fd-popover>
  </div>
</template>

<script>
import Vue from 'vue'
import FdDatePickerInput from './../date-picker-input/date-picker-input.vue'
import FdPopover from './../popover/popover.vue'
import FdDatePickerCalendar from './../date-picker-calendar/date-picker-calendar.vue'
import FdInputGroup from './../input-group/input-group.vue'
import FdInputGroupButton from './../input-group/button.vue'
import FdInputGroupAddonButton from './../input-group/addon-button.vue'
import createNormalizedDate from './../../util/date/normalized-date'
import createNullDate from './../../util/date/create-null-date'

export default {
  name: 'FdDatePicker',
  components: {
    FdDatePickerInput,
    FdDatePickerCalendar,
    FdInputGroup,
    FdInputGroupAddonButton,
    FdInputGroupButton,
    FdPopover
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(value) {
        this.state.value.from = value.from
        this.state.value.to = value.to
      }
    },
    mode: {
      immediate: true,
      deep: true,
      handler(mode) {
        this.state.mode = mode
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
    }
  },
  methods: {
    ignoredElements() {
      return [this.$refs.calendar.$el]
    },
    setValue(value) {
      this.state.value.from = value.from
      this.state.value.to = value.to
      this.$emit('input', {
        from: this.state.value.from,
        to: this.state.value.to
      })
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
    }
  },
  props: {
    // The date-value represented by this date picker
    value: {
      // `{ from?: Date, to?: Date }`
      type: Object,
      // `{ from: null, to: null }`
      default: createNullDate,
      validator(value) {
        if (value == null) {
          return false
        }
        if (typeof value !== 'object') {
          return false
        }
        const { from, to } = value
        if (from === undefined || to === undefined) {
          return false
        }
        return true
      }
    },
    // Selection mode
    mode: {
      // `single` / `range`
      type: String,
      // `single` – only a single date can be selected
      default: 'single'
    }
  }
}
</script>
