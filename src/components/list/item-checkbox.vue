<template>
  <input
    @click.stop
    type="checkbox"
    :value="nativeValue"
    v-model="computedValue"
    class="fd-checkbox fd-list__input"
  />
</template>

<script>
import FdCheckbox from './../controls/checkbox.vue'

export default {
  name: 'FdListItemCheckbox',
  props: {
    nativeValue: {
      type: [String, Number, Boolean, Function, Object, Array]
    },
    value: {
      type: [String, Number, Boolean, Function, Object, Array]
    }
  },
  model: {
    prop: 'value',
    event: 'update'
  },
  watch: {
    value(value) {
      this.value_ = value
    }
  },
  methods: {},
  computed: {
    computedValue: {
      get() {
        return this.value_
      },
      set(value_) {
        this.value_ = value_
        this.$emit('update', this.value_)
      }
    }
  },
  data() {
    return {
      value_: this.value
    }
  },
  model: {
    prop: 'modelValue',
    event: 'update'
  }
}
</script>
