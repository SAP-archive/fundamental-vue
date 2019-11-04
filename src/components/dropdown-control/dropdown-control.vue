<template>
  <fd-button class="fd-dropdown__control" v-on="$listeners" v-bind="$attrs"><slot /></fd-button>
</template>

<script>
import FdButton from './../button/button.vue'
export default {
  name: 'FdDropdownControl',
  components: { FdButton }
}
</script>
