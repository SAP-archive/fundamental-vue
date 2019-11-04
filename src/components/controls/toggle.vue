<template>
  <span class="fd-toggle" :class="classes">
    <FdCheckbox
      class="fd-toggle__input"
      v-on="$listeners"
      v-bind="$attrs"
      :modelValue="on"
      :value="value"
      :disabled="disabled"
      @update="$emit('update', $event)"
    />
    <span class="fd-toggle__switch" role="presentation" />
  </span>
</template>

<script>
// <span class="fd-toggle">
// //             <input class="fd-toggle__input" type="checkbox" name="" value="" id="y21YO3911">
// //             <span class="fd-toggle__switch" role="presentation"></span>
// //         </span>
import InputMixin from './input-mixin'
import FdCheckbox from './checkbox.vue'
import { $enum, $valueWithDefault } from './helper/prop'

export default {
  name: 'FdToggle',
  mixins: [InputMixin],
  inheritAttrs: false,
  components: { FdCheckbox },
  model: {
    event: 'update',
    prop: 'on'
  },
  props: {
    size: $enum('xs', 's', 'l'),
    trueValue: $valueWithDefault(true),
    falseValue: $valueWithDefault(false),
    value: $valueWithDefault(true),
    on: { type: Boolean }
  },
  mounted() {
    const formItem = this.formItem
    if (formItem) {
      formItem.setCheck(true)
    }
  },
  computed: {
    classes() {
      return {
        [`fd-toggle--${this.size}`]: this.size != null,
        'fd-form__control': true
      }
    }
  }
}
</script>
