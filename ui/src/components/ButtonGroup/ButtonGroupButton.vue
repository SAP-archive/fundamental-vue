<template>
  <FdButton
    v-bind="$attrs"
    v-on="$listeners"
    :aria-pressed="String(pressed)"
    @click="toggleStateForValue(value)"
    :compact="compact"
    ><slot />
  </FdButton>
</template>

<script>
import FdButton from "@/components/Button/Button.vue";
import { Compactable } from "@/mixins";
import { shortUuid } from "@/lib";

export default {
  name: "FdButtonGroupButton",
  components: { FdButton },
  mixins: [Compactable],
  inject: ["group"],
  props: {
    value: { type: [String, Number, Boolean], default: shortUuid }
  },
  methods: {
    didClickButton() {
      this.toggleStateForValue(this.value);
    }
  },
  computed: {
    groupValue() {
      return this.group.value;
    },
    toggleStateForValue() {
      return this.group.toggleStateForValue;
    },
    pressed() {
      return this.groupValue.indexOf(this.value) >= 0;
    }
  }
};
</script>
