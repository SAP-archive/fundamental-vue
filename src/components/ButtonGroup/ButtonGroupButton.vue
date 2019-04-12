<template>
  <FdButton
    v-bind="$attrs"
    v-on="$listeners"
    :aria-pressed="String(pressed)"
    @click="toggle"
    :compact="compact"
    ><slot />
  </FdButton>
</template>

<script>
import FdButton from "./../Button/Button.vue";
import { Compactable } from "./../../mixins";
import { shortUuid } from "./../../lib";

export default {
  name: "FdButtonGroupButton",
  components: { FdButton },
  mixins: [Compactable],
  inject: ["group"],
  props: {
    value: { type: [String, Number, Boolean], default: shortUuid }
  },
  methods: {
    toggle() {
      return this.group.didClickButton(this.value);
    }
  },
  computed: {
    groupValue() {
      return this.group.value;
    },
    pressed() {
      return this.groupValue.indexOf(this.value) >= 0;
    }
  }
};
</script>
