<template>
  <div class="fd-time__control">
    <FdButton styling="light" :state="buttonState" :icon="icon" @click="$emit('click')" />
  </div>
</template>

<script>
import ButtonTypes from './../button/button-types'
import FdButton from './../button/button.vue'

const isButtonType = value => ButtonTypes.indexOf(value) >= 0
export default {
  name: 'FdTimeControl',
  components: { FdButton },
  computed: {
    buttonState() {
      return this.disabled ? 'disabled' : 'normal'
    }
  },
  props: {
    icon: String,
    disabled: Boolean
  }
}
</script>
