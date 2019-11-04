<template>
  <input
    type="radio"
    class="fd-radio"
    :class="classes"
    :checked="checked ? true : false"
    :value="value"
    @change="$emit('update', $event.target.value, $event)"
    v-on="$listeners"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: 'FdRadio',
  model: {
    prop: 'modelValue',
    event: 'update'
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    modelValue: {
      type: [Array, String, Number, Boolean],
      default: false
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'fd-radio--compact': this.compact
      }
    },
    checked() {
      return this.modelValue === this.value
    }
  }
}
</script>
