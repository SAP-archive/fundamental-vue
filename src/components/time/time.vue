<template>
  <div class="fd-time">
    <FdTimeItem
      :value="hour"
      @decrease="decrease('hour')"
      @increase="increase('hour')"
      placeholder="hh"
    />
    <FdTimeItem
      :value="minute"
      @decrease="decrease('minute')"
      @increase="increase('minute')"
      placeholder="mm"
    />
    <FdTimeItem
      :value="second"
      @decrease="decrease('second')"
      @increase="increase('second')"
      placeholder="ss"
    />
  </div>
</template>

<script>
import FdTimeItem from './item.vue'
import createTime from './time-components'

export default {
  name: 'FdTime',
  components: { FdTimeItem },
  props: {
    value: {
      type: Object,
      required: true
    },
    ariaLabel: { type: String, default: 'Time Item' },
    showMeridian: { type: Boolean, default: false }
  },
  computed: {
    hour() {
      return this.timeComponents.hour
    },
    minute() {
      return this.timeComponents.minute
    },
    second() {
      return this.timeComponents.second
    },
    shouldRenderSeconds() {
      return this.second != null
    }
  },
  watch: {
    value(value) {
      this.timeComponents = value
    }
  },
  methods: {
    decrease(unit) {
      this.timeComponents = createTime({ ...this.timeComponents }).decrease(unit)
      this.$emit('input', this.timeComponents)
    },
    increase(unit) {
      this.timeComponents = createTime({ ...this.timeComponents }).increase(unit)
      this.$emit('input', this.timeComponents)
    }
  },
  data() {
    return {
      timeComponents: {
        hour: this.value.hour,
        minute: this.value.minute,
        second: this.value.second
      }
    }
  }
}
</script>
