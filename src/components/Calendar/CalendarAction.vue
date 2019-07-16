<template>
  <div class="fd-calendar__action">
    <FdButton
      compact
      styling="light"
      :type="type"
      :state="state"
      :icon="icon"
      @click="$emit('click')"
    >
      {{ title }}
    </FdButton>
  </div>
</template>

<script>
import FdButton from "./../Button/Button.vue";
import ButtonTypes from "./../Button/ButtonTypes";

export default {
  name: "FdCalendarAction",
  components: { FdButton },
  props: {
    title: String,
    icon: String,
    disabled: { type: Boolean, default: false },
    type: {
      type: String,
      default: null,
      validator: value => ButtonTypes.indexOf(value) >= 0
    }
  },
  computed: {
    state() {
      return this.disabled ? "disabled" : "normal";
    }
  }
};
</script>
