<template>
  <select
    class="fd-form-select"
    :value="value"
    @change="$emit('update', $event.target.value)"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </select>
</template>

<script>
import { $valueWithDefault } from './helper/prop'

export default {
  name: 'FdSelect',
  model: {
    event: 'update'
  },
  props: {
    value: $valueWithDefault('')
  }
}
</script>
