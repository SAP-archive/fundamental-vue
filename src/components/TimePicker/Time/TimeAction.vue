<template>
  <div class="fd-time__control">
    <Button
      :state="buttonState"
      :icon="icon"
      compact
      styling="light"
      :type="type"
      :aria-label="ariaLabel"
      :aria-controls="ariaControls"
      @click="$emit('click')"
    >
      {{ title }}
    </Button>
  </div>
</template>

<script>
import ButtonTypes from "./../../Button/ButtonTypes";
import { Button } from "./../../Button";

const isButtonType = value => ButtonTypes.indexOf(value) >= 0;
export default {
  name: "FdTimeAction",
  components: { Button },
  computed: {
    buttonState() {
      return this.disabled ? "disabled" : "normal";
    }
  },
  props: {
    title: String,
    icon: String,
    type: { type: String, validator: isButtonType },
    disabled: Boolean,
    ariaLabel: String,
    ariaControls: String
  }
};
</script>
