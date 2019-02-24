<template>
  <FdButton
    v-bind="$attrs"
    v-on="$listeners"
    :aria-pressed="pressed ? 'true' : 'false'"
    @click="toggleStateForValue(value)"
    ><slot />
  </FdButton>
</template>

<script>
import FdButton from "@/components/Button/Button.vue";
import { Compactable, mixins } from "@/mixins";
import { shortUuid } from "@/lib";

export default {
  name: "FdButtonGroupButton",
  components: { FdButton },
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
