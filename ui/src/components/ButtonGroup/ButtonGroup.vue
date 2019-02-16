<template>
  <div class="fd-button-group" role="group">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
import { Vue as VueInstance } from "vue/types/vue";
import { warn } from "@/core";

export default Vue.extend({
  name: "FdButtonGroup",
  provide() {
    return {
      buttonContainer: this,
      grouped: true
    };
  },
  props: {
    value: { type: Array, default: () => [] } as PropValidator<any[]>,
    compact: { type: Boolean, default: false }
  },
  data() {
    return {
      buttons: [] as VueInstance[],
      currentValue: this.value
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue: any[]) {
        this.currentValue = newValue;
      }
    }
  },
  methods: {
    // ButtonContainer Implementation
    // compact already implemented
    registerButton(button: VueInstance) {
      this.buttons.push(button);
    },
    unregisterButton(button: VueInstance) {
      this.buttons = [...this.buttons].splice(this.buttons.indexOf(button));
    },
    didClickButton(button: VueInstance) {
      const buttonValue = this.valueOfButton(button);
      const valueIndex = this.currentValue.indexOf(buttonValue);
      const newValue = [...this.currentValue];
      if (valueIndex > -1) {
        newValue.splice(valueIndex);
      } else {
        newValue.push(buttonValue);
      }
      this.$emit("input", newValue);
    },
    valueOfButton(button: VueInstance): number | string | boolean | null {
      // @ts-ignore
      const buttonValue: any = button.value;
      if (buttonValue == null) {
        return null;
      }
      return buttonValue;
    },

    isButtonPressed(button: VueInstance): boolean {
      const value = this.valueOfButton(button);
      if (value == null) {
        return false;
      }
      return this.currentValue.indexOf(value) > -1;
    }
  }
});
</script>
