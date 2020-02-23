<template>
  <div>
    <fd-popover body-size-mode="equal-trigger" placement="bottom-start">
      <template #control="{ toggle }">
        <fd-input-group :compact="compact">
          <template #input>
            <FdInputGroupInput
              :value="formattedValue"
              :compact="compact"
              :placeholder="placeholder"
            />
          </template>
          <template #after>
            <fd-input-group-addon-button>
              <fd-input-group-button @click="toggle" styling="light" icon="fob-watch" />
            </fd-input-group-addon-button>
          </template>
        </fd-input-group>
      </template>
      <template #default>
        <FdTime v-model="timeValue" />
      </template>
    </fd-popover>
  </div>
</template>

<script>
import FdPopover from './../popover/popover.vue'
import FdInputGroup from './../input-group/input-group.vue'
import FdInputGroupInput from './../input-group/input.vue'
import FdTime from './../time/time.vue'

export default {
  name: 'FdTimePicker',
  components: {
    FdPopover,
    FdInputGroupInput,
    FdInputGroup,
    FdTime
  },
  props: {
    id: String, // FIXME
    placeholder: String,
    value: Object,
    ariaLabel: String,
    compact: { type: Boolean, default: false },
    showMeridian: { type: Boolean, default: false }
  },
  methods: {
    updateTimeItem(time) {
      this.timeValue = time
      this.$emit('timePickerUpdate', this.timeValue)
    }
  },
  computed: {
    formattedValue() {
      const { hour, minute, second } = this.timeValue
      return `${hour}:${minute}:${second}`
    }
  },
  data() {
    return {
      timeValue: this.value
    }
  }
}
</script>
