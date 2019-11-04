<template>
  <div class="fd-time__item">
    <FdTimeControl icon="navigation-up-arrow" type="standard" @click="increaseValue" />
    <FdTimeInput v-model="value_" :placeholder="placeholder" />
    <FdTimeControl icon="navigation-down-arrow" type="standard" @click="decreaseValue" />
  </div>
</template>

<script>
import FdTimeControl from './control.vue'
import FdTimeInput from './input.vue'

export default {
  name: 'FdTimeItem',
  components: { FdTimeControl, FdTimeInput },
  props: {
    value: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  watch: {
    value(value) {
      this.value_ = value
    }
  },
  methods: {
    decreaseValue() {
      this.$emit('decrease', this.value_)
      return
    },
    increaseValue() {
      this.$emit('increase', this.value_)
      return
    }
  },
  data() {
    return {
      value_: this.value
    }
  }
}
</script>
